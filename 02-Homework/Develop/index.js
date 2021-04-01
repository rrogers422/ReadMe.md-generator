// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repository?',
      },
      {
        type: 'input',
        name: 'descript',
        message: 'What is the desrciption of your repository?',
      },
      {
        type: 'input',
        name: 'contents',
        message: 'table of contents?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'usage?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'contributors?',
      },
      {
        type: 'list',
        name: 'liscense',
        choices: ['MIT', 'Apache', 'no liscense']
      },
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app

function init() {
  inquirer.prompt(questions)
  .then(answers => {
    const markUp = generateMarkdown(answers);
writeToFile('README.md', markUp)
  })
}
// Function call to initialize apple.log(answers)
init();
