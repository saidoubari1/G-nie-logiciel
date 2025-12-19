const bank = require('./bank')

const balance = bank.getBalance('Alpha-001');
console.log(`Balance : ${balance}€`)