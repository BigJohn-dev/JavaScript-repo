function get_score(scores) {
    for(let index = 0; index < scores.length; index++) {
        if (scores[index] >= 1 && scores[index] <= 5) {
        scores.pop(scores[index]);
        }
    }
    return scores;
}

let figures = [1, 2, 4, 5, 6, 0, 0, 3, 2];
console.log(get_score(figures));