const {getEvenNumbers, createCounter}= require('./functionTest');

test("that the function returns even numbers", () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8]; // Arrange
    const expectedResult = getEvenNumbers(arrayOfNumbers); // Act
    expect(expectedResult).toEqual([2, 4, 6, 8]); // Assert
})

describe("createCounter", () => {
    test("that the counter starts at 0", () => {
        const counter = createCounter(); // Arrange
        expect(counter.getCount()).toBe(0); // Act & Assert
    });
    test("that the counter increase by 1", () => {
        const counter = createCounter(); // Arrange
        counter.increase(); // Act
        expect(counter.getCount()).toBe(1); //Assert
    });
    test("that the counter can increase by 2", () => {
        const counter = createCounter(); // Arrange
        counter.increaseByTwo(); // Act
        expect(counter.getCount()).toBe(2); // Assert
    });
    test("that the counter can be reset", () => {
        const counter = createCounter(); // Arrange
        counter.increase(); // Act
        counter.increaseByTwo(); // Act
        counter.reset(); // Act
        expect(counter.getCount()).toBe(0); // Assert
    });
    test("that the counter decreases by 1", () => {
        const counter = createCounter(); // Arrange
        counter.increase(); // Act
        counter.increaseByTwo(); // Act
        counter.decrease(); // Act
        expect(counter.getCount()).toBe(2); // Assert
    });
})
