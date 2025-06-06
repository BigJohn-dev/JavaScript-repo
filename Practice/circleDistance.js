// great circle distance

const prompt = require("prompt-sync")();

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

let numx1 = prompt("Enter point 1 latitude: ");
let numy1 = prompt("Enter point 1 longitude: ");
let numx2 = prompt("Enter point 2 latitude: ");
let numy2 = prompt("Enter point 2 longitude: ");

let x1 = toRadians(numx1);
let y1 = toRadians(numy1);
let x2 = toRadians(numx2);
let y2 = toRadians(numy2);

let radius = 6371.01;
let PI = 3.1412;


let distance = radius * Math.acos(Math.sin(x1) * Math.sin(x2) + Math.cos(x1) * Math.cos(x2) * Math.cos(y1- y2));
console.log("The distance between the two points is ", distance, "km");