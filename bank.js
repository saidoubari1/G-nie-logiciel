const bankDAO = require('./bankDAO');
const bankTransfer = require('./bankTransfer');


const bank = {
    getBalance: function(accountId) {
        return bankDAO.retrieveBalance(accountId);
    },

    transferMoney: async function(accountId, amount){
        try {
            await bankTransfer.transfer(accountId, amount); // Attender le transfer
            return bankDAO.debitAccount(accountId, amount); // Puis débiter
        } catch {
        }

    }
}


module.exports = bank;