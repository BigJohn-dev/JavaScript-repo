let person = {
	name : "John",
	age : 17,
	gender : "Male",
	password : "23742"
};

person.colour = "green"
person.password = "new password meowmeownigga"


//delete person.password;


console.log(Object.keys(person));
//console.log(Object.values(person));
//console.log(Object.entries(person));
/**
//collecting input from the user
const prompt = require("prompt-sync")();
let score = prompt("What is your test score? ");
let div = Math.floor(score / 10);
switch(div){
	case 1:
	case 2:
	case 3: console.log("F")
		break;
	case 4: console.log("P")
		break;
	case 5: console.log("C")ea
		break;
	case 6: console.log("B")
		break;
	case 7: console.log("A")
		break;
	case 8: console.log("A")
		break;
	case 9: console.log("A")
		break;
	case 10:console.log("A")
		break;

}

console.log(score);

//1. function declearation
//2. function expression

function greet() {
	console.log("Hello")
};

greet();


let userName = "John";
let number = 12;

const greet = function(numberOne, name) {
	let concat = numberOne + " " + name
	return concat
}
console.log(greet(number, userName));

// Nested functions
let numberOne = 3;
function getProduct(number) {
	let numberTwo = 2;

	function multiply(value) {
	  let product = value * number
	return product	
};
   return multiply(numberTwo)
};

console.log(getProduct(numberOne))


let numberOne = 3;
let numberTwo = 3;

function getAnswer(number, secondNumber) {
	let numberThree = 4;
		function multiply() {
	  	   let result = secondNumber * number * numberThree

		function squareRoot() {
			let root = Math.sqrt(result);
			  return root
	  };
		return squareRoot();
      };
	return multiply();
};
	console.log(getAnswer(numberOne, numberTwo));

//ARROW FUNCTIONS

const signUp =(numberOne, numberTwo)=> {
	console.log(numberOne + " " + numberTwo);
}
signUp(2, 3);



let arrayOfNumbers = [2, 3, 4, 5, 6, 7];

const print =(array)=> {
	for (let number of array){
	   console.log(number)
};
};

print(arrayOfNumbers)
**/















