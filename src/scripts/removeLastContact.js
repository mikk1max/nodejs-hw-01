import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contactList = await readContacts();
  const newContactList = contactList.slice(0, contactList.length - 1);
  //   console.log([...newContactList]);

  writeContacts([...newContactList]);
};

removeLastContact();
