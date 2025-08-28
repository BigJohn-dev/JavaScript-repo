const company = require('./studentObjectFive');

test("test that second employee is in company", ()=> {
    const secondEmployee = "Doe John";
    expect(company.employees[1].name).toEqual(secondEmployee);
})

test("test company name and locaton is accurate", ()=> {
    const companyName = "TechCorp";
    const companyLocation = "San Francisco";
    expect(company.name).toEqual(companyName);
    expect(company.location).toEqual(companyLocation);
})