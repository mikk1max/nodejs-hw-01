import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  //   const buffer = await fs.readFile(PATH_DB);
  // console.log(buffer.toString());
  const data = await fs.readFile(PATH_DB, 'utf-8');

  return JSON.parse(data);
};

readContacts();
