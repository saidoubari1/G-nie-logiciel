const bankDAO = {
  retrieveBalance: function(accountId) {
    console.log(`Retrieve balance for account ${accountId}`);
    return 10000;
  },

  debitAccount: function(accountId, amount) {
    console.log(`Debiting ${amount}€ from account ${accountId}`);
    return { accountId, newBalance: 10000 - amount };
  }
}

module.exports = bankDAO;