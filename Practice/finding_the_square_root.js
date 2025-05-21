// finding the square root
import promptSync from 'prompt-sync';
const prompt = promptSync();

let theNumber = prompt("Pick a number: ");
console.log("Your number is the square root of " + theNumber * theNumber);