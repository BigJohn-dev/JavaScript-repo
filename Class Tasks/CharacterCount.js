function keysAndValues(word) {
    let result = {};
    for (let char of word) {
        if (result[char]) {
            result[char] += 1;
        } else {
            result[char] = 1;
        }
    }
    return result;
}

console.log(keysAndValues('Femi go to school'));
