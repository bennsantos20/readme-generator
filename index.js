// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const documentGenerator = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "Title",
      message: "Enter a title for your ReadMe:",
    },
    {
      type: "input",
      name: "Description",
      message: "Enter a description for your ReadMe:",
    },
    {
      type: "input",
      name: "Installation",
      message: "Enter installation instructions:",
    },
    {
      type: "input",
      name: "Usage",
      message: "Enter usage instructions:",
    },
    {
      type: "list",
      name: "License",
      message: "Choose a license for your ReadMe:",
      choices: [
        "Mozilla Public License",
        "Apache",
        "MIT",
        "Boost Software License",
      ],
    },
    {
      type: "input",
      name: "Contributing",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "Tests",
      message: "Enter testing information for your application:",
    },
    {
      type: "input",
      name: "Questions",
      message: "Enter email address where you can be reached with questions:",
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
      },
  ];
  

  function init() {
    inquirer
        .prompt(questions)
        .then((userInput) => {
            const readMeContent = generateMarkdown(userInput);
            console.log('Generating ReadMe...');
            fs.writeFile('ReadMe.md', readMeContent, (err) =>
                err ? console.error(err) : console.log("success"))
        });

}


init();