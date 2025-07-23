function getEvenNumbers(arrayOfNumbers) {
    return arrayOfNumbers.filter(number => number % 2 === 0);
}

function createCounter() {
    let count = 0;
    return {
        getCount: ()=> {
            return count;
        },
        increase: ()=> {
            count += 1;
        },
        increaseByTwo: ()=> {
            count += 2;
        },
        decrease: ()=> {
            count -= 1;
        },
        reset: ()=> {
            count = 0;
        }
    }
}

module.exports = {getEvenNumbers, createCounter};