
function smallProduct(number) {
    let num = "";
    
    for (let i = 1; i < 9; i++) {
    if (i * (i + 1) == number) {
    num = i + " " + (i + 1);
    }
    }
    return num;
}

console.log(smallProduct(72));