function get_score(scores) {
    let arr = [];
    for(let index = 0; index < scores.length; index++) {
        if (scores[index] >= 1 && scores[index] <= 5){
            arr.push(scores[index]);
        }
    }
    return arr;
}

let figures = [1, 2, 4, 5, 6, 0, 0, 3, 2];
console.log(get_score(figures));

