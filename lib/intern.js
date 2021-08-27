const Employee = require("./employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school
        this.role = "intern"
    }
    
    getSchool() {
        return this.school
    }

  
}

module.exports = Intern