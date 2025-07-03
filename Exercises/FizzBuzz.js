let numbers = 0;

for(let count = 1; count <= 100; count++){
if (numbers % 3 == 0) console.log("FIZZ");
if (numbers % 5 == 0) console.log("BUZZ");
if (numbers % 3 == 0 && numbers % 5 == 0) console.log("FIZZBUZZ");
}