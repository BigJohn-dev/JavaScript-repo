// Generate random subtraction problem

const prompt = require("prompt-sync")();

let correctCounter = 0;
let wrongCounter = 0;
let attemptCount = 0;
let counter = 1;

for (let count = 1; count <= 10; count++) {
	let number1 = Math.floor(Math.random() * 100);
	let number2 = Math.floor(Math.random() * (1, 50));
	
for(let i = 1; i <= 2; i++) {

	console.log("\nWhat is " + number1 + " - " + number2 + "?");
	let userInput = prompt("Enter answer: ");

	let answer = number1 - number2;
	attemptCount += 1;

	if (userInput == answer) {
	console.log("You are correct.");
	correctCounter += 1;
	break;

}	else {
	console.log("You are wrong");
	wrongCounter += 1;
}
	counter += 1;
}
}

console.log("\nYou got " + correctCounter + " correct answers");
console.log("You got " + wrongCounter + " wrong answers");