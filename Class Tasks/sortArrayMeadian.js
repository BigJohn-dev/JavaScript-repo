function getMedian(value) {
    value.sort((a, b) => a - b)
    let mid = Math.floor(value.length / 2)
    if (value.length % 2 === 0) return (value[mid - 1] + value[mid]) / 2
    return value[mid];
    }

let num1 = [10, 15, 27, 6]
let num2= [25, 13, 39]
console.log(getMedian(num1.concat(num2)))
