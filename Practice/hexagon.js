// area of a hexagon

const prompt = require("prompt-sync")();

console.log("COMPUTING THE AREA OF AN HEXAGON");

let side = prompt("Enter the side: ");

let PI = 3.1412;
let area = (6 * (side * side)) / (4 * (Math.tan(PI / 6)));

console.log("The area of the hexagon is " + area);
