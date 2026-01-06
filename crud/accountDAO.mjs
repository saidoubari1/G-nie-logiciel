import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);

    console.log("Base de donnée: ", ACCOUNT_LIST);
  },
  retrieveAccountList() {},
  updateAccount(account) {},
  retrieveAccount(id) {},
};