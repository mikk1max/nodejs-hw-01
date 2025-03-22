import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const contactList = await readContacts();
    return contactList.length;
};

console.log(await countContacts());
