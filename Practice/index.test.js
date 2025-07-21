const getEvenNumbers= require('./functionTest');

test("that the function returns even numbers", () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8]; // Arrange
    const expectedResult = getEvenNumbers(arrayOfNumbers); // Act
    expect(result).toEqual([2, 4, 6, 8]); // Assert
})