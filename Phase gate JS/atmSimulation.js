// ATM Simulation

function account = {
	balance = 0.0;
};

function deposit_money (amount) {
	if (amount > 0) {
	balance += amount;
	return balance;
} else {
	return "Invalid deposit amount";
}
};

function withdraw_money(amount) {
	if (amount > 20000) {
	return "Exceeded transaction limit";
} else if (amount > 0 && amount <= 20000) {
	return balance -= amount + 100;
}
};

function checkBalance() {
	return account.balance();
};

