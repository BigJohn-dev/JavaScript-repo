function isValidLuhn(number) {
    let sum = 0;
    let alternate = false;

    for (let i = number.length - 1; i >= 0; i--) {
        let digit = number.charAt(i);

        if (isNaN(digit)) return false;

        let n = parseInt(digit);

        if (alternate) {
            n *= 2;
            if (n > 9) {
                n -= 9;
            }
        }

        sum += n;
        alternate = !alternate;
    }
    return (sum % 10 === 0);
}

const num = prompt("Enter the number to validate:");
if (isValidLuhn(num)) {
    alert(`${num} is valid.`);
} else {
    alert(`${num} is invalid.`);
}


IMEOBONGJOHN38822819 PROMOTION CODE