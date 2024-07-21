import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const getAllContacts = async () => {
    const fileContentDB = await fs.readFile(PATH_DB, 'utf8');
    const allContacts = JSON.parse(fileContentDB);
    return allContacts;

};

console.log(await getAllContacts());
