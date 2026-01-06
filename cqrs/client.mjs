import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

// Ajouter un compte
console.log('=== 1. Ajout d\'un compte ===');
accountCommand.addAccount('Dupont', 'Jean');

const accounts = accountQuery.getAccountList();
const accountId = accounts[0].id;
console.log(`\n✓ Compte ajouté avec ID: ${accountId}\n`);

// Lister les comptes (depuis queryDatabase)
console.log('=== 2. Liste des comptes (queryDatabase) ===');
console.log(accountQuery.getAccountList());
console.log('→ Pas de creationDate\n');

// Récupérer un compte
console.log('=== 3. Récupération d\'un compte ===');
console.log(accountQuery.getAccount(accountId));
console.log();

// Modifier le compte
console.log('=== 4. Modification du compte ===');
accountCommand.saveAccount(accountId, 'Martin', 'Pierre');
console.log();

// Vérifier les modifications
console.log('=== 5. Vérification des modifications ===');
console.log('Liste:', accountQuery.getAccountList());
console.log('Compte:', accountQuery.getAccount(accountId));
