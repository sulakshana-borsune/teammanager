const Employee = require('./employee.js')

class Manager extends Employee {
    constructor(name, id, title, officeNumber) {
        super(name, id, title)
        this.officeNumber = officeNumber
    }

    getRole() {
        return this.role
    }
}

module.exports = Manager