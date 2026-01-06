import { ACCOUNT_LIST } from "./database.mjs";

export const accountQueryDAO = {
  retrieveAccountList() {
    return ACCOUNT_LIST;
  },

  retrieveAccount(id) {
    return ACCOUNT_LIST.find(acc => acc.id === id) || null;
  },
};
