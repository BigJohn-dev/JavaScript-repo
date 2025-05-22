//You are given three variables named var1, var2 and ae3. Write code such that the following is satisfied: 
//var1 contains the value of var2
//var2 contains the value of var3
//var3 contains the value of var1 


let var1 = 2;
let var2 = 3;
let var3 = 5;

let var4 = var1;

var1 = var2;
var2 = var3;
var3 = var4;



console.log(var1);
console.log(var2);
console.log(var3);