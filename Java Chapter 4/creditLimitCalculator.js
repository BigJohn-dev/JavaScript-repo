// Credit limit calculator
const prompt = require("prompt-sync")();

console.log("CREDIT LIMIT CALCULATOR");
let choice;
do {
	let accountNumber = prompt("Enter your account number: ");
	let beginningBalance = Number(prompt("Emter balance at the beginning of the month: "));
	let itemsCharged = Number(prompt("Enter total for all items charged this month: "));
	let totalCredit = Number(prompt("Enter total for all credits applied this month: "));
	let creditLimit = Number(prompt("Enter your allowed credit limit: "));

	let newBalance = beginningBalance + itemsCharged - totalCredit;
	console.log("\nYour new balance is N" + newBalance);

	if(newBalance > creditLimit) {
	console.log("Credit limit exceeded");

	choice = prompt("Press any number to continue or 0 to qiuit: ");
}while(choice != 0);
	
	if (choice == 0) {
	console.log("Thank you for your patronage");
}