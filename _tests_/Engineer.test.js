const Engineer = require("../lib/engineer");
const engineerOne = new Engineer (9, "Bill", "bill@yahoo.com", "billbill")
//test to ensure that new Employee creation creates an object
test("Testing if Engineer class returns an object", () => {
    expect(typeof(engineerOne)).toEqual("object");
}) 

test("Testing to ensure getGithub returns github name", () => {
    expect(engineerOne.getGitHub()).toEqual("billbill");
})

