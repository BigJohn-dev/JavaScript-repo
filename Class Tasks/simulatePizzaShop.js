
function getPizzaPrice({PizzaOrder}) {
    let price = 0;
    let message = "";

    const pizzas = [
        { name: "Pepperoni", price: 7000 },
        { name: "Veggie", price: 10000},
        { name: "Chicken Suya", price: 15000 },
    ];
    if (PizzaOrder.name !== pizzas[i].name) {
            message = "Sorry, we do not have " + PizzaOrder.name + " pizza";
            return message;
        } else{
            for(let i = 0; i < pizzas.length; i++) {
                if (PizzaOrder.name === pizzas[i].name) {
                 return pizzas[i].price *PizzaOrder.quantity;
                }
            }
            return 0;
        }
}

module.exports = getPizzaPrice;