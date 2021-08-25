const Employee = require("./index");

class Engineer extends Employee {
    constructor(gitHub, role) {
        super(id, name, email);
        this.gitHub = gitHub
        this.role = role
    }
     getGitHub() {
        return this.gitHub
    }

    getRole() {
        return this.role
    }
}
module.exports = Engineer