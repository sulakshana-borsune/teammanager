const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
var path = require('path')
const writeFileAsync = util.promisify(fs.writeFile)
const Employees = require('./employee.js')
const Manager = require('./manager.js')
const Engineer = require('./engineer.js')
const Intern = require('./intern.js')


const employees = []

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
                employees.push(new Manager(answer.name, answer.id, answer.title, answer.officeNumber)) 

                path.join('/', '/team.html')
                fs.writeFile('team.html', JSON.stringify(Manager1), function(error) {
                    if (error) { console.log(error) }
                })
                    
            }

        })


        .catch(function (err) {
            console.log(err)
        })
}
promptCreator()



function engCreator() {
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
        type: 'text',
        name: 'github',
        message: 'Enter your github id:'
    }])

        .then(function (answer) {
            employees.push(new Engineer(answer.name, answer.id, answer.title, answer.github))
            path.join('/', '/team.html','/engineer.html')
            fs.writeFile('engineer.html',(employees), function (error) {
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
        type: 'text',
        name: 'github',
        message: 'Enter your school:'

    }])
        .then(function (answer) {
            employees.push(new Intern(answer.name, answer.id, answer.title, answer.school))
            path.join('/', '/intern.html')
            fs.writeFile('./intern.html', answer, function(error) {
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



