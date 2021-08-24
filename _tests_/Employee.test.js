const Employee = require("../lib/employee");
console.log(Employee);
const employeeOne = new Employee(5, "Bob", "bob@yahoo.com");

test("Testing if employee class returns an object", () => {
    expect(typeof(employeeOne)).toEqual("object");
}) 