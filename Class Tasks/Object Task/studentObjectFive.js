
const company = {
    name: "TechCorp",
    location: "San Francisco",
    employees: [
        {
            id: 1,
            name: "John Doe",
            department: "HR"
        },
        {
            id: 2,
            name: "Doe John",
            department: "Engineering"
        },
        {
            id: 3,
            name: "John John",
            department: "Marketing"
        },
        {
            id: 4,
            name: "Big John",
            department: "HR"
        },
        {
            id: 5,
            name: "Baller John",
            department: "Marketing"
        }
    ]
};


console.log("Second employee's name:", company.employees[1].name);

const { name, location } = company;
console.log(`Company Name: ${name}, Location: ${location}`);

console.log("\nEmployee List:");
for (let i = 0; i < company.employees.length; i++) {
    const employee = company.employees[i];
    console.log(`${employee.name} works in ${employee.department}`);
}

module.exports = company;