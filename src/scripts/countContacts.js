import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
    const fileContentDB = await fs.readFile(PATH_DB, 'utf8');
    const allContacts = JSON.parse(fileContentDB);
    return allContacts.length;

    } catch (err) {
        console.error("Error:", err);

    }

};

console.log(await countContacts());
