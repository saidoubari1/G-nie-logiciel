import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountQueryDAO = {
  retrieveAccountList() {
    return accountSummaryList;
  },

  // Retourner depuis le cache au lieu de accountSummaryList
  retrieveAccount(id) {
    return accountCache[id] || null;
  },
};
