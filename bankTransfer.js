const bankTransfer = {
    transfer: function(accountId, amount){
        console.log(`transferring ${amount} from account ${accountId}`);
        return Promise.resolve({ success : true, accountId, amount});
    }
};

module.exports = bankTransfer;
