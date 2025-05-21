let person = {
	name : "John",
	age : 17,
	gender : "Male",
	password : "23742"
};

person.colour = "green"
person.password = "new password meowmeownigga"


delete person.password;


console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

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
	case 5: console.log("C")
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