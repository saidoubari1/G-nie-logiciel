import { Account } from "./account.mjs";
import { accountDAO } from "./accountDAO.mjs";

export const accountService = {
  addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName);

    accountDAO.insertAccount(account);
  },
  getAccountList() {
    return accountDAO.retrieveAccountList(); // retourner la liste des comptes depuis la DAO
  },
  saveAccount(id, lastName, firstName) {
    const account = accountDAO.retrieveAccountList.find(acc => acc.id == id); // récupérer le compte depuis la DAO

    if(!account){
        console.error("Compte non existant")
        return;
    }

    account.lastName = lastName;
    account.firstName = firstName;

    accountDAO.updateAccount(account); // appeler la fonction updateAccount de la DAO
  },
  getAccount(id) {},
};