function countBs (word) {
    let count = 0;
    for (let i = 0; i < word.length; i ++) {
        if(word == "B") count += 1;
    }
    return `The number of Uppercase B is ${count}`
}

console.log(countBs("DragonBalls"));