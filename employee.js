class Employee {
    constructor(name, id, title) {
        this.name = name
        this.id = id
        this.title = title
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getTitle() {
        return this.title
    }
}

module.exports = Employee