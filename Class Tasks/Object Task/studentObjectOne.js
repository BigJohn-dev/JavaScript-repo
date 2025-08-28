
const student = {
    name: "John Doe",
    age: 22,
    course : ["Math", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: 10001
    }
}

console.log(`Student's name: ${student.name}`)
console.log(`The second course: ${student.course[1]}`)
console.log(`The zip code from the address: ${student.address.zip}`)

module.exports = student;