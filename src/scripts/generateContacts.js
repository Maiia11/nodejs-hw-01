import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from "../utils/createFakeContact.js";

import * as fs from 'node:fs/promises';

const generateContacts = async (number) => {
    try {
        const fileContentDB = await fs.readFile(PATH_DB, 'utf8');
        const existingContacts = JSON.parse(fileContentDB);
        const newContacts = Array.from({ length: number }, createFakeContact);
        const updatedContacts = [...existingContacts, ...newContacts];
        const data = JSON.stringify(updatedContacts, null, 2);
        await fs.writeFile(PATH_DB, data, 'utf8');
        console.log(`Successfully wrote ${number} contacts to ${PATH_DB}`);
    } catch (err) {
        console.error("Error:", err);
    }


};

generateContacts(3);
