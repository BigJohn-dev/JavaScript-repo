const bankAccount = require('./studentObjectThree')

test("test that user balance after deposite and withdraw is accurate", ()=> {
    bankAccount.deposite(500);
    bankAccount.withdraw(300);
    const userBalance = 700;
    expect(bankAccount.balance).toEqual(userBalance);
})