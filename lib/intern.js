const Employee = require("./index");

class Intern extends Employee {
    constructor(school, role) {
        super(id, number, email);
        this.school = school
        this.role = role
    }
    
    getSchool() {
        return this.school
    }

    getRole() {
        return this.role
    }
}

module.exports = Intern