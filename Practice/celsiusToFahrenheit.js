const prompt = require("prompt-sync")();

function fahrenheit(celsius) {
let fahrenheit = (9.0 / 5.0) * celsius + 32;
return celsius + " Celsius is " + fahrenheit + " Fahrenheit";
};


let degree = Number(prompt("Enter a degree in celsius: "));
console.log(fahrenheit(degree));