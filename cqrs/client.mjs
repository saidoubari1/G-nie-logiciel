import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

// Ajouter un compte
console.log('=== 1. Ajout d\'un compte ===');
const accountId = accountCommand.addAccount('Dupont', 'Jean');
console.log(`Compte ajouté avec ID: ${accountId}\n`);

// Lister les comptes
console.log('=== 2. Liste des comptes ===');
console.log(accountQuery.getAccountList());
console.log();

// Récupérer un compte
console.log('=== 3. Récupération d\'un compte ===');
console.log(accountQuery.getAccount(accountId));
console.log();

// Modifier le compte
console.log('=== 4. Modification du compte ===');
accountCommand.saveAccount(accountId, 'Martin', 'Pierre');
console.log();

// Vérifier les modifications
console.log('=== 5. Vérification ===');
console.log('Liste:', accountQuery.getAccountList());
console.log('Compte:', accountQuery.getAccount(accountId));
