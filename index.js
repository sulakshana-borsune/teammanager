const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
var path = require('path')
const writeFileAsync = util.promisify(fs.writeFile)

class Employee {
    constructor(name, id, title) {
        this.name = name
        this.id = id
        this.title = title
    }

    getName() {
        console.log(`Name: ${this.name}`)
    }
    getId() {
        console.log(`Id: ${this.id}`)
    }
    getTitle() {
        console.log(`title: ${this.title}`)
    }
}
//let manager = new Employee('sulu',12,'manager')
//manager.getName()
//manager.getId()
//manager.getTitle()

class Manager extends Employee {
    constructor(name, id, title, officeNumber) {
        super(name, id, title)
        this.officeNumber = officeNumber
    }

    getRole() {
        console.log(`Role:${this.title}`)
    }
}

class Engineer extends Employee {
    constructor(name, id, title, github) {
        super(name, id, title)
        this.github = github
    }
    getGithub() {
        console.log(`Github id:${github}`)
    }
    getRole() {
        (`Role: ${title}`)
    }
}

class Intern extends Employee {
    constructor(name, id, title, school) {
        super(name, id, title)
        this.school = school
    }
    getSchool() {
        console.log(`School:${this.school}`)
    }
    getRole() {
        console.log(`Role:${this.title}`)
    }
}

function promptCreator() {
    return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'Enter your name:'
        },
        {
            type: 'text',
            name: 'id',
            message: 'Enter your id:',
           // validate(input,answer){if(input === answer)
            //{
              //  return "Id is already taken enter new number "
            //}}

        },
        {
            type: 'text',
            name: 'title',
            message: 'What is your role?'
        },
        {
            type: 'list',
            name: 'choice1',
            message: 'Do you want to add your team member?',
            choices: ['Yes', 'No', 'Exit']
        },
        {
            type: 'list',
            name: 'choice2',
            message: 'Select the role of your team member',
            choices: ['Engineer', 'Intern']
        }
    ])

        .then(function (answer) {
            if (answer.choice2 === 'Engineer') {
                engCreator()
            }
            else if (answer.choice2 === 'Intern') {
                internCreator()
            }
            else {
                const Manager1 = new Manager(`${answer.name}`, `${answer.id}`, `${answer.title}`, `${answer.officeNumber}`)  

                path.join('/', '/team.html')
                fs.writeFile('team.html', JSON.stringify(Manager1), function(error) {
                    if (error) { console.log(error) }
                })
                    ()
            }

        })


        .catch(function (err) {
            console.log(err)
        })
}
promptCreator()



function engCreator() {
    return inquirer.prompt([{
        type: 'text',
        name: 'github',
        message: 'Enter your github id:'
    }])

        .then(function (answer) {
            const Engineer1 = new Engineer(`${answer.name}`, `${answer.id}`, `${answer.title}`, `${answer.github}`)
            path.join('/', '/team.html','/engineer.html')
            fs.writeFile('engineer.html', JSON.stringify(Engineer1), function (error) {
                if (error) { console.log(error) }
                else { console.log('Successfully wrote to html') }


                
            })
        },
            function (err) {
                if (err) throw err;
                console.log("Your Team was created successfully!");
                // re-prompt the user for if they want to add more team members
                promptCreator();
            }

        )
}

function internCreator() {
    return inquirer.prompt([{
        type: 'text',
        name: 'github',
        message: 'Enter your school:'

    }])
        .then(function (answer) {
           // const Intern1 = new Intern(`${answer.name}`, `${answer.id}`, `${answer.title}`, `${answer.school}`)
           const intern = answer
            path.join('/', '/intern.html')
            fs.writeFile('intern.html', (intern), function(error) {
                if (error) { console.log(error) }
            })

        },
            function (error) {
                if (error) { console.log(err) };
                console.log("Team created successfully!");
                promptCreator();
            }

        )
}



