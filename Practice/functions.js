/*
function higherFunction() {
    console.log("higher function")
}

function lowerFunction(callBack){
    console.log("lower function")
    callBack()
}

lowerFunction(higherFunction);
*/

function add(x,y){
    return x + y
}

function multiply(x,y){
    return x * y
}
function operation(callBack,x, y) {
    return callBack(x,y)
}

console.log(operation(multiply,3,4))
console.log(operation(add,2,3))