function highCustomer(value) {
    let arr = [];

    for (let i = 0; i < value.length; i++) {
        if (value[i].score >= 80 && value[i].score <= 100) {
            arr.push(value[i].name);
        }
    }
    return arr;
}

let customers = [{name: "Ade", score: 50},
    {name: "Chioma", score: 70},
    {name: "John", score: 850},
    {name: "Jack", score: 90}];

console.log(highCustomer(customers));




