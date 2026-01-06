import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountCache } from "./cache.mjs";

export const accountCommand = {
    addAccount(lastName, firstName) {
    const account = new Account(null, lastName, firstName);

    // Appeler la fonction insertAccount de la DAO
    accountCommandDAO.insertAccount(account);

    // Ajouter le compte dans le cache
    accountCache[account.id] = {
      id: account.id,
      lastName: account.lastName,
      firstName: account.firstName,
      name: `${account.firstName} ${account.lastName}`
    };

    return account.id;
  },

  saveAccount(id, lastName, firstName) {
    // Récupérer le compte depuis la DAO
    const account = accountCommandDAO.retrieveAccountById(id);

    if (!account) {
      console.error('Compte non trouvé');
      return;
    }

    // Modifier le compte
    account.lastName = lastName;
    account.firstName = firstName;

    // Appeler la fonction updateAccount de la DAO
    accountCommandDAO.updateAccount(account);

    // Mettre à jour le cache
    accountCache[id] = {
      id: account.id,
      lastName: account.lastName,
      firstName: account.firstName,
      name: `${account.firstName} ${account.lastName}`
    };
  }
};
