// Employee payroll
const prompt = require("prompt-sync")();

	function grossPay(amount, time) {
	return amount * time;
}
	function federalTax(amount) {
	return amount * 0.20;
}
	function stateTax(amount) {
	return amount * 0.09;
}

	console.log("WELCOME TO PAYROLL");
	
	let name = prompt("Enter employee's name: ");

	let time = Number(prompt("Enter number of hours worked in a week: "));
	
	let rate = Number(prompt("Enter hourly pay rate: "));

	console.log("\nEmployee Name: " + name);
	console.log("Hours worked: " + time);
	console.log("Pay Rate: $" + rate);
	console.log("Gross Pay: $" + grossPay(time, rate));

	console.log("\nDeductions:");
	console.log("Federal Withholding (20.0%): $" + federalTax(grossPay(time, rate)));
	console.log("Federal Withholding (9%): $" + stateTax(grossPay(time, rate)));
	console.log("Total deductions: $" + (stateTax(grossPay(time, rate)) + federalTax(grossPay(time, rate))));

	console.log("\nNet Pay: $" + (grossPay(time, rate) - (stateTax(grossPay(time, rate)) + federalTax(grossPay(time, rate)))) );
