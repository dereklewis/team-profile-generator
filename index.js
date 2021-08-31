

const Manager = require("./lib/manager.js");

const inquirer = require("inquirer");
const fs = require("fs");
const generator = require("./generator");

const newEmployees = []

function managerQuestions() {
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the team manager's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email address"
    },

    {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's officenumber?"
    },
   
    ])
.then((data) => {
    console.log(data);

    const managerOne = new Manager(data.id, data.name, data.email, data.officeNumber);
    newEmployees.push(managerOne); 

    teamQuestions();
});
    
}
managerQuestions();

function teamQuestions() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamMember",
            message: "Would you like to add a new team member?",
            choices: ["Intern", "Engineer", "Finish Building Team"],
        }
        
    ])
    .then((teamAnswer) => {
        console.log(teamAnswer);
    })
    
}








