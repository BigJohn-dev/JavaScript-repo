const student = require('./studentObjectTwo')

test("test that user bala", ()=> {
    const studentDetails = "John Doe is 23 years old and has a GPA of 3.8";
    expect(student.getDetails()).toEqual(studentDetails);
})