const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");

const inquirer = require("inquirer");
const fs = require("fs");
const generator = require("./generator");

const newEmployees = [];

function managerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the team manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the team manager's email address",
      },

      {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's officenumber?",
      },
    ])
    .then((data) => {
      console.log(data);

      const managerOne = new Manager(
        data.id,
        data.name,
        data.email,
        data.officeNumber
      );
      newEmployees.push(managerOne);

      teamQuestions();
    });
}
managerQuestions();

function teamQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMember",
        message: "Would you like to add a new team member?",
        choices: ["Intern", "Engineer", "Finish Building Team"],
      },
    ])
    .then((teamAnswer) => {
      console.log(teamAnswer);
      if (teamAnswer.teamMember === "Intern") {
          console.log("you selected intern");
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is your Intern's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is the Interns's id?",
            },
            {
              type: "input",
              name: "email",
              message: "What is the Intern's email address",
            },
            {
              type: "input",
              name: "school",
              message: "What school did the intern go to?",
            },
          ])
          .then((internData) => {
            console.log(internData);

            const internOne = new Intern(
              internData.id,
              internData.name,
              internData.email,
              internData.school
            );
            newEmployees.push(internOne);
            console.log(newEmployees);

            teamQuestions();

          });

        
        
      } else if (teamAnswer.teamMember === "Engineer") {
          console.log("you selected engineer");
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is your Engineer's name?",
            },
            {
              type: "input",
              name: "id",
              message: "What is the Engineer's id?",
            },
            {
              type: "input",
              name: "email",
              message: "What is the Engineer's email address",
            },
            {
              type: "input",
              name: "github",
              message: "What is your Engineer's GitHub username?",
            },
          ])
          .then((engineerData) => {
            console.log(engineerData);

            const engineerOne = new Engineer(
              engineerData.id,
              engineerData.name,
              engineerData.email,
              engineerData.github,
            );
            newEmployees.push(engineerOne);
            console.log(newEmployees);


            teamQuestions();
          });
      } else {
        console.log(newEmployees);
      }
    });
}

