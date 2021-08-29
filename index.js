

const Manager = require("./lib/manager.js");

const inquirer = require("inquirer");
const fs = require("fs");
const generator = require("./generator");

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
        name: "officeNumber",
        message: "What is the team manager's officenumber?"
    },
   
    ])
.then((data) => {
    const markdown = generator(data); 
    fs.writeFile("generator.js", markdown, (err) => {
            err ? console.log(err) : console.log("File was written!!");

})
});












