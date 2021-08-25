const testEl = require("jest");
const Employee = require("../lib/employee");

//variable to use for testing
const employeeOne = new Employee(5, "Bob", "bob@yahoo.com");

//test to ensure that new Employee creation creates an object
test("Testing if employee class returns an object", () => {
    expect(typeof(employeeOne)).toEqual("object");
}) 

//variable without all arguments to be used for testing
const employeeTwo = new Employee("Bob", "bob@yahoo.com");

//test to make sure that an error is thrown when not all arguments are passed
test("Should throw an error if all arguments are not defined", () => {
    expect(() => typeof(employeeTwo).toThrowError("You must provide an id"));
})

//testing of the getName function of the Employee Class
test("The 'getName' function should should pull the correct string for name", () => {
    expect(employeeOne.name).toEqual("Bob");
})

//testing of the getId function of the Employee Class
test("The 'getId' function should should pull the correct value for id", () => {
    expect(employeeOne.id).toEqual(5);

})

//testing of the getEmail function of the Employee Class
test("The 'getEmail' function should should pull the correct value for id", () => {
    expect(employeeOne.email).toEqual("bob@yahoo.com");

})