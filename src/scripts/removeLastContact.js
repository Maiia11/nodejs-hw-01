import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
       const fileContentDB = await fs.readFile(PATH_DB, 'utf8');
      const allContacts = JSON.parse(fileContentDB);
        if (allContacts.length === 0) {
            console.log("The contact list is already empty.");
            return;
        }
        allContacts.splice(allContacts.length - 1, 1);
        const updatedContacts = JSON.stringify(allContacts, null, 2);
        await fs.writeFile(PATH_DB, updatedContacts, 'utf8');


    } catch (err) {
        console.error(err);
    }

};

removeLastContact();
