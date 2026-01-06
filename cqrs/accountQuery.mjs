import { accountQueryDAO } from "./accountQueryDAO.mjs";

export const accountQuery = {
  // récupérer la liste des comptes
  getAccountList() {
    return accountQueryDAO.retrieveAccountList();
  },
  
  // récupérer un compte par ID
  getAccount(id) {
    return accountQueryDAO.retrieveAccount(id);
  },
};