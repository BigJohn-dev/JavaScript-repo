// printing array in reverse order

function reverseArray(arr) {
	let n = arr.length;
	
	let temp = new Array(n);

	for(let i = 0; i < n; i++)
	   arr[i] = temp[i];
}

const arr = [1, 4, 3, 2, 6, 5];

reverseArray(arr);

console.log(arr.join(" "));


let todoList = [];
 function remember(task) {
 todoList.push(task);
 }
 function getTask() {
 return todoList.shift();
 }
 function rememberUrgently(task) {
 todoList.unshift(task);
 }