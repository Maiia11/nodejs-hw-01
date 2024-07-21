
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from "../utils/createFakeContact.js";

import * as fs from 'node:fs/promises';

export const addOneContact = async () => {
    try {
        const fileContentDB = await fs.readFile(PATH_DB, 'utf8');
        const existingContacts = JSON.parse(fileContentDB);
        const dataOneContact = createFakeContact();
        existingContacts.push(dataOneContact);
        const updatedContacts = JSON.stringify(existingContacts, null, 2);
        await fs.writeFile(PATH_DB, updatedContacts, 'utf8');
        console.log('Contact added:', dataOneContact);
    } catch (err) {
        console.error("Error:", err);

    }
};

addOneContact();
