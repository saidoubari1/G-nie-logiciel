import { ACCOUNT_LIST } from "./database.mjs";

export const accountCommandDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log('Base de données après insertion:', ACCOUNT_LIST);
  },

  retrieveAccountById(id) {
    return ACCOUNT_LIST.find(acc => acc.id === id);
  },

  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex(acc => acc.id === account.id);

    if (index !== -1) {
      ACCOUNT_LIST[index] = account;
      console.log('Base de données après modification:', ACCOUNT_LIST);
    }
  },
};
