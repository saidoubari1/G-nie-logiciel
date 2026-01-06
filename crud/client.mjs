import { accountService } from "./accountService.mjs";

accountService.addAccount("Oubari", "Said"); // Ajouter un compte

console.log("Liste des comptes: ", accountService.getAccountList()); // Lister les comptes