const Intern = require("../lib/intern");

const internOne = new Intern (8, "Mary", "mary@yahoo.com", "University of Colorado");
//test to ensure that new Employee creation creates an object
test("Testing if Intern class returns an object", () => {
    expect(typeof(internOne)).toEqual("object");
}) 

test("Testing to make sure that getSchool provides a school name", () => {
    expect(internOne.getSchool()).toEqual("University of Colorado");
})