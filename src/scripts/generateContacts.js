import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactsList = await readContacts();
  const contacts = Array(number)
    .fill(0)
    .map(() => createFakeContact());
  await writeContacts([...contactsList, ...contacts]);
};

generateContacts(5);
