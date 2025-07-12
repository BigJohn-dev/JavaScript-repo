function evenNumbers(positive, wholeNumber) {
    function isEven() {
        if (positive % 2 == 0 || wholeNumber -2 == 0) return true
    }
    return isEven();
}

console.log(evenNumbers(50, 75));