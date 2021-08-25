const Employee = require("./index");

class Manager extends Employee {
    constructor(officeNumber, role) {
        super(id, number, email);
        this.officeNumber = officeNumber
        this.role = role
    }
    
    getofficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return this.role
    }
}

module.exports = Manager 
