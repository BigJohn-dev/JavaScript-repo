
const student = {
    name: "John Doe",
    age: 23,
    GPA: 3.8,
    course : ["Math", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: 10001
    },
    getDetails() {
        return `${student.name} is ${student.age} years old and has a GPA of ${student.GPA}`
    }
}

    student.getDetails()
    module.exports = student;
