import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account); // stocker un compte dans la BDD

    console.log("Base de donnée: ", ACCOUNT_LIST); // afficher le contenu de la BDD
  },
  retrieveAccountList() {
    // retourner la liste des comptes sans la date de création
    return ACCOUNT_LIST.map(account =>({
        id: account.id,
        lastName: account.lastName,
        firstName: account.firstName
    }));
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex(acc => acc.id == account.id);

    if(index !== -1){
        ACCOUNT_LIST[index] = account; // mettre à jour le compte dans la BDD
        console.log("base de donnée modifiée: ", ACCOUNT_LIST);
    }
  },
  retrieveAccount(id) {
    const account = ACCOUNT_LIST.find(acc => acc.id === id);

    if(!account) return null;

    return {
      id: account.id,
      name: `${account.firstName} ${account.lastName}`, // concaténation du nom et du prénom
    };
  },
};