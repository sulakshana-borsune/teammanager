const Employee = require('./employee.js')

class Intern extends Employee {
    constructor(name, id, title, school) {
        super(name, id, title)
        this.school = school
    }
    getSchool() {
        return this.school

    }
    getRole() {
        return this.role
    }
}


module.exports = Intern