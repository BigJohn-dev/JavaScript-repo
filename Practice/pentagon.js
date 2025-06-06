// Area of a pentagon
const prompt = require("prompt-sync")();

let PI = 3.1412;
let length = prompt("Enter the length from the center to a vertex: ");
let sides = 2 * length * (Math.sin(PI / 5));
let area = (5 * (sides * sides)) / (4 * (Math.tan(PI / 5)));

console.log("The area of the pentagon is " + area);
