import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

export const accountCommandDAO = {
  insertAccount(account) {
    // Insertion dans la base command
    ACCOUNT_LIST.push(account);
    console.log('Base de données (command) après insertion:', ACCOUNT_LIST);

    // Insertion dans queryDatabase SANS creationDate
    accountSummaryList.push({
      id: account.id,
      lastName: account.lastName,
      firstName: account.firstName
    });
    console.log('Base de données (query) après insertion:', accountSummaryList);
  },

  retrieveAccountById(id) {
    return ACCOUNT_LIST.find(acc => acc.id === id);
  },

  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex(acc => acc.id === account.id);

    if (index !== -1) {
      ACCOUNT_LIST[index] = account;
      console.log('Base de données (command) après modification:', ACCOUNT_LIST);
    }

    const queryIndex = accountSummaryList.findIndex(acc => acc.id === account.id);

    if (queryIndex !== -1) {
      accountSummaryList[queryIndex] = {
        id: account.id,
        lastName: account.lastName,
        firstName: account.firstName
      };
      console.log('Base de données (query) après modification:', accountSummaryList);
    }
  },
};
