const Employee = require('./employee.js')

class Engineer extends Employee {
    constructor(name, id, title, github) {
        super(name, id, title)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return this.role
    }
}


module.exports = Engineer