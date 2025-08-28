
const bankAccount = {
    owner: "Alice",
    balance: 500,
    deposite(amount) {
        this.balance += amount
        return `Your balance after deposite ${bankAccount.balance}`
    },
    withdraw(amount){
        if (amount > 0) this.balance -= amount
        return `Your balance after withdrawal ${bankAccount.balance}`
    }
}

module.exports = bankAccount;