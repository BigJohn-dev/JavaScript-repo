function highCustomer(value) {
    for (let i = 0; i < value.length; i++) { 
        if (value[i].score <= 80) {
            value.shift(value[i].score);
        }
    }
    return value;
}

let customers = [{name: "Ade", score: 50},
    {name: "Chioma", score: 70},
    {name: "John", score: 85},
    {name: "Jack", score: 90}];

console.log(highCustomer(customers));