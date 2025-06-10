// Gas Mileage

const prompt = require("prompt-sync")();

let totalMilesPerGallon = 0;
let choice;

console.log("GAS MILAGE CALCULATOR");
do {
let miles = prompt("Enter miles driven: ");
let gallons = prompt("Enter gallons used: ");

let milespergallon = miles / gallons;
console.log("Mile-per-gallon is " + milespergallon + "mpg");
totalMilesPerGallon += milespergallon;

choice = prompt("Enter any number to continue or 0 to quit: ");
} while (choice != 0);

if (choice == 0) {
console.log("Total gas milage up till date is " + totalMilesPerGallon + "mpg");
}