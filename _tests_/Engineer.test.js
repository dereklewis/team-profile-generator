const testEl = require("jest");
const Employee = require("../lib/employee");

//test to ensure that new Employee creation creates an object
test("Testing if employee class returns an object", () => {
    expect(typeof(employeeOne)).toEqual("object");
}) 