
function armstrongNumbers(num) {
    
    let sum = 0;
    let strNum = num.toString();
    for (let i = 0; i < strNum.length; i++) {
    sum += parseInt(strNum[i]) ** strNum.length;
    }
    return sum === num;
}

console.log(armstrongNumbers(153));