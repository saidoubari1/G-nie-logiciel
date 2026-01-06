import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account); // stocker un compte dans la BDD

    console.log("Base de donnée: ", ACCOUNT_LIST); // afficher le contenu de la BDD
  },
  retrieveAccountList() {
    //retourner la liste des comptes sans la date de création
    return ACCOUNT_LIST.map(account =>({
        id: account.id,
        lastName: account.lastName,
        firstName: account.firstName
    }));
  },
  updateAccount(account) {},
  retrieveAccount(id) {},
};