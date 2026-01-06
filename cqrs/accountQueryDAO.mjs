import { accountSummaryList } from "./queryDatabase.mjs";

export const accountQueryDAO = {
  retrieveAccountList() {
    return accountSummaryList;
  },

  retrieveAccount(id) {
    return accountSummaryList.find(acc => acc.id === id) || null;
  },
};
