const Manager = require("../lib/manager");
const managerOne = new Manager (2, "Jane", "jane@yahoo.com", 14);

//test to ensure that new Employee creation creates an object
test("Testing if Manager class returns an object", () => {
    expect(typeof(managerOne)).toEqual("object");
}) 

test("Testing to ensure getofficeNumber returns the office number", () => {
    expect(managerOne.getofficeNumber()).toEqual(14);
})