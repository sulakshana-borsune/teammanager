const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile)

class Employee{
    constructor(name,id,title){
        this.name = name
        this.id = id
        this.title = title
    }

getName(){
    console.log(`Name: ${this.name}`)
}
getId(){
    console.log(`Id: ${this.id}`)
}
getTitle(){
    console.log(`title: ${this.title}`)
}
}
//let manager = new Employee('sulu',12,'manager')
//manager.getName()
//manager.getId()
//manager.getTitle()

class Manager extends Employee{
constructor(name,id,title,officeNumber){
super(name,id,title)
this.officeNumber = officeNumber
}

getRole(){
    console.log(`Role:${this.title}`)
}
}

class Engineer extends Employee{
    constructor(name,id,title,github){
        super(name,id,title)
        this.github = github
    }
    getGithub(){
        console.log(`Github id:${github}`)
    }
    getRole(){(`Role: ${title}`)
}
}

class Intern extends Employee{
    constructor(name,id,title,school){
        super(name,id,title)
        this.school = school
    }
    getSchool(){
        console.log(`School:${this.school}`)
    }
    getRole(){
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
            message: 'Enter your id:'
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
            choices: ['Yes', 'No']
            },
        {
            type: 'list',
            name: 'choice2',
            message: 'Select the role of your team member',
            choices: ['Engineer','Intern']
        }
    ])
}   
        //choice:['manager','engineer','intern']
        function generateHTML(answers) {
            return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                <style>
                    .div{
                        background-color: rgb(245, 120, 131);
                        text-align: center;
                    }
                    .shape{
                        text-align: center;
                        
                    }

                </style>
            </head>
            <body>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

            <div class="div"> <h1>My Team</h1></div>
                <div class="row card small">
                    <div class="col s12 m6">
                      <div class="card blue darken-1">
                        <div class="card-content white-text">
                          <h3 class="card-title shape">${answers.title}</h3>
                          <div class="shape">${answers.name}</div>
                          <div class"shape">${answers.id}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                
            </body>
            </html>
            `
                }        

        promptCreator()
        
    .then(function (answers) {
       switch(choice2){
           case 'Engineer':
             inquirer.prompt( [{
                   type: 'text',
                   name: 'github',
                   message:'Enter your github id:'
                }
            ])
            break
            case 'Intern':
                inquirer.prompt( [{
                      type: 'text',
                      name: 'github',
                      message:'Enter your school:'
                   }
               ])
               break
            }
        //}
        const html = generateHTML(answers)
        return writeFileAsync('employee.html', html)
    })
    .then(function () {
        console.log('Successfully wrote to html file')
    })
    .catch(function (err) {
        console.log(err)
    })




