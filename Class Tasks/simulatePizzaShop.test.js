const getPizzaPrice = require('./simulatePizzaShop');

test("that function returns correct pizza order", () => {
    const order = { PizzaOrder: { name: "Pepperoni", quantity: 2 } };
    const expectedResult = getPizzaPrice(order);
    expect(expectedResult).toEqual("2 Pepperoni pizza(s) is: 14000 Naira");
})

test("that function returns correct pizza order for Veggie", () => {
    const order = { PizzaOrder: { name: "Veggie", quantity: 1 } };
    const expectedResult = getPizzaPrice(order);
    expect(expectedResult).toEqual("1 Veggie pizza(s) is: 10000 Naira");
})

test("that function returns correct pizza order for Chicken Suya", () => {
    const order = { PizzaOrder: { name: "Chicken Suya", quantity: 1 } };
    const expectedResult = getPizzaPrice(order);
    expect(expectedResult).toEqual("1 Chicken Suya pizza(s) is: 15000 Naira");
})

test("that function returns correct pizza order for multiple pizzas", () => {
    const order = { PizzaOrder: { name: "Pepperoni", quantity: 3 } };
    const expectedResult = getPizzaPrice(order);
    expect(expectedResult).toEqual("3 Pepperoni pizza(s) is: 21000 Naira");
})

test("that function returns message for unknown pizza", () => {
    const order = { PizzaOrder: { name: "Dominos", quantity: 1 } };
    const expectedResult = getPizzaPrice(order);
    expect(expectedResult).toEqual("Sorry, we do not have Dominos pizza");
})pp\