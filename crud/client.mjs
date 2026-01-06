import { accountService } from "./accountService.mjs";

accountService.addAccount("Oubari", "Said"); // Ajouter un compte

console.log("Liste des comptes: ", accountService.getAccountList()); // Lister les comptes

console.log("Modification du compte: ", accountService.saveAccount(accountId, 'Abozid', 'Nizar')); // Modifier un compte