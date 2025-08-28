const student = require('./studentObjectOne');


test("test that student object returns student name", ()=> {
    const studentName = "John Doe";
    expect(student.name).toEqual(studentName);
})

test("test that student object returns student second course", ()=> {
    const studentCourse = "Physics";
    expect(student.course[1]).toEqual(studentCourse);
})

test("test that student object returns student zip code from address", ()=> {
    const studentZip = 10001;
    expect(student.address.zip).toEqual(studentZip);
})