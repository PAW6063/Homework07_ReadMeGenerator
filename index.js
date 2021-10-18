// TODO: Include packages needed for this application
const generate = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Title your Project:',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Enter your project description:',
    },
    {
        name: 'install',
        type: 'input',
        message: 'Enter installation instructions: ',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How do you use this project: ',
    },
    {
        name: 'features',
        type: 'input',
        message: 'Enter features in your project: ',
    },
    {
        name: 'test',
        type: 'input',
        message: 'How did you test your project: ',
    },
    {
        name: 'license',
        type: 'checkbox',
        message: 'Pick a license: ',
        choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
        name: 'credits',
        type: 'input',
        message: 'Who was involved with this project(ex: Name, GitHub): ',
    },
    {
        name: 'contributions',
        type: 'input',
        message: 'How to make contributions: ',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generate(data), (err) => 
    err ? console.error(err) : console.log('\n\nFile created!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => writeToFile('README.md', response));
}

// Function call to initialize app
init();
