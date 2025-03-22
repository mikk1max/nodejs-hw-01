import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  //   const data = await readContacts();
  return await readContacts();
};

console.log(await getAllContacts());
