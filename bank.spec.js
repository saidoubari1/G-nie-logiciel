const bank = require('./bank');
const bankDAO = require('./bankDAO');
const bankTransfer = require('./bankTransfer');

describe('Bank', () => {

    test('Invalid : the call of retrieveBalance should be from bankDAO', () => {
        const spy = jest.spyOn(bankDAO, 'retrieveBalance').mockReturnValue();
        bank.getBalance();
        expect(spy).toHaveBeenCalled();

        spy.mockRestore();
    })

    test('Invalid : should pass accountId parameter to retrieveBalance', () => {
        const spy = jest.spyOn(bankDAO, 'retrieveBalance').mockReturnValue();
        bank.getBalance('Alpha-001');
        expect(spy).toHaveBeenCalledWith('Alpha-001');

        spy.mockRestore();
    });

    test('Invalid : should return balance from retrieveBalance', () => {
        const spy = jest.spyOn(bankDAO, 'retrieveBalance').mockReturnValue();
        spy.mockReturnValue(12000);
        const result = bank.getBalance('Alpha-001');
        expect(result).toBe(12000);

        spy.mockRestore();
    });

    test('Invalid : should call transfer with correct parameters', async () =>{
        const spy = jest.spyOn(bankTransfer, 'transfer').mockResolvedValue({success : true});
        const debitSpy = jest.spyOn(bankDAO, 'debitAccount').mockReturnValue();
        await bank.transferMoney('Alpha-001', 100);
        expect(spy).toHaveBeenCalledWith('Alpha-001', 100);

        spy.mockRestore();
        debitSpy.mockRestore();
    })

    test('Invalid : should NOT call debitAccount if transfer fails', async () => {
        const transferSpy = jest.spyOn(bankTransfer, 'transfer').mockRejectedValue(new Error('Insufficient funds'));
        const debitAccountSpy = jest.spyOn(bankDAO, 'debitAccount');
    
        await bank.transferMoney('Alpha', 1000);

        expect(transferSpy).toHaveBeenCalledWith('Alpha', 1000);
        expect(debitAccountSpy).not.toHaveBeenCalled();
    
        transferSpy.mockRestore();
        debitAccountSpy.mockRestore();
    });
})