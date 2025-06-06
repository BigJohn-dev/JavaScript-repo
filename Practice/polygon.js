// area of a regular polygon

	console.log("AREA OF A REGULAR POLYGON");

	const prompt = require("prompt-sync")();

	let n = prompt("Enter the number of sides: ");

	let sides = prompt("Enter the sides: ");

	let PI = 3.1412;

	let area = (n * (sides * sides)) / (4 * Math.tan(PI / n));

	console.log("The area of the polygon is " + area);
