
const inventory = {
    apple: 10,
    banana: 5,
    orange: 8,
    mango: 12
};

function fruitCalculator(inventory) {
    let totalFruits = 0;
    for (let fruit in inventory) {
        console.log(`${fruit}: ${inventory[fruit]}`);
        totalFruits += inventory[fruit];
    }
    return totalFruits;
}

console.log(`Total fruits in inventory is ${fruitCalculator(inventory)}`);

module.exports = { inventory, fruitCalculator };