
function getPizzaPrice({ PizzaOrder }) {
    const pizzas = [
        { name: "Pepperoni", price: 7000 },
        { name: "Veggie", price: 10000 },
        { name: "Chicken Suya", price: 15000 },
    ];

    let found = false;
    let price = 0;

    for (let i = 0; i < pizzas.length; i++) {
        if (PizzaOrder.name === pizzas[i].name) {
            price = pizzas[i].price * PizzaOrder.quantity;
            found = true;
            break;
        }
    }

    if (!found) {
        return "Sorry, we do not have " + PizzaOrder.name + " pizza";
    }

    return PizzaOrder.quantity + " " + PizzaOrder.name + " pizza(s) is: " + price + " Naira";
}

module.exports = getPizzaPrice;
/*
function getPizzaPrice({ PizzaOrder }) {
    const pizzas = [
        { name: "Pepperoni", price: 7000 },
        { name: "Veggie", price: 10000 },
        { name: "Chicken Suya", price: 15000 },
    ];

    const pizza = pizzas.find(p => p.name === PizzaOrder.name);
    if (!pizza) {
        return "Sorry, we do not have " + PizzaOrder.name + " pizza";
    }

    const price = pizza.price * PizzaOrder.quantity;
    return PizzaOrder.quantity + " " + PizzaOrder.name + " pizza(s) is: " + price + " Naira";
}

module.exports = getPizzaPrice;
*/