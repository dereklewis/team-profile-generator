
// const Employee = require("./lib/employee.js");
// const Manager = require("./lib/manager.js");
// const Intern = require("./lib/intern.js");
// const Engineer = require("./lib/engineer.js");
const inquirer = require("inquirer");


function managerName() {
inquirer.prompt(["What is your manager's name?"])
.then((manager) => {
    console.log(manager);
})
.catch((error) => {
    if (error)
    
})
};
managerName();













const qustions = [

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
        name: "officeNumber",
        message: "What is the team manager's officenumber?"
    },
    {
        type: "input",
        name: "officenumber",
        message: "What is the team manager's officenumber?"
    },
    {
        type: "list",
        name: "teamMember",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add anymore team members"],
    },

];

//     function init() {
//         inquirer.prompt(questions).then((data) => {
//           console.log(data);
//         })
//     }
//     init();