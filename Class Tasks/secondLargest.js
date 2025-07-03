//Printing the second largest number

let input = [9, 6, 8, 11, 12];

let largest = input[0];
let secondLargest = input[0];

for (let i = 0; i < input.length; i++) {
	if (input[i] > largest){
	secondLargest = largest;
	largest = input[i]};

	if(input[i] != largest) {
	largest = secondLargest;
	secondLargest = input[i];
}

}

console.log("Second largest number is " + secondLargest);
