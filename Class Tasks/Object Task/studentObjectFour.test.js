const {inventory, fruitCalculator} = require('./studentObjectFour')

test("test that fruit calculator is accurate", ()=> {
    const fruits = fruitCalculator(inventory)
    expect(fruits).toEqual(35);
})