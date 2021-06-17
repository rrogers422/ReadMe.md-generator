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
        name: 'email',
        message: 'What is your email address?',
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
        name: 'installation',
        message: 'What command should be run to install dependencies?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
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
        type: 'input',
        name: 'gitHub',
        message: 'What is your github?',
      },
      {
        type: 'list',
        name: 'liscense',
        message: "What kind of license should your project have?"
        choices: ['MIT', 'GLP', 'no liscense']
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data)  {
  fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

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
