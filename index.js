// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // Asks for title name
    {
        type: 'input',
        name: 'title',
        message: 'What do you want to name your project?',
        default: 'Opsies woopsies, no project name',
        // Validates to check if user has a valid input
        validate: (value) => { if (value) {return true} else {return 'Guess you already forgot the name of your project? > ->'}},
    },
    // Asks for your given name
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        // Validates to check if user has a valid input
        validate: (value) => { if (value) {return true} else {return 'Must be getting old when you start forgetting your name? > ->'}},
    },
    // Asks for your username
    {
    type: 'input',
    name: 'username',
    message: 'What is your Github User name?',
    default: 'MacaroniKetchup',
    // Validates to check if user has a valid input
    validate: (value) => { if (value) {return true} else {return 'Must be getting old when you start forgetting your username? > ->'}},
},
// Asks for a breif description of the project
{
    type: 'input',
    name: 'description',
    message: 'Tell me about your project!',
    default: 'They didnt want to share their secrets...  ( TAT)',
     // Validates to check if user has a valid input
    validate: (value) => { if (value) {return true} else {return 'Did you not have anything to say about your project? > ->'}},
},
// Asks if there are installs required for the project
{
    type: 'input',
    name: 'installations',
    message: 'Is there any installs that will be needed for this project?',
},
// Asks for any steps to follow in running your applications
{
    type: 'input',
    name: 'usage',
    message: 'Please explain steps on how to use your project!',
},
// Asks for a list of any contributors in the project
{
    type:'input',
    name:'contibutions',
    message:'Please list any instructions on how contributions can be made to this project!',
},
// Asks for any tests written for this project and how to access them
{
    type:'input',
    name:'tests',
    message:'If possible, please give any tests written for this project and how access/use them!',
},
// A list of licesne options to select from
{
    type:'list',
    name:'license',
    choices:['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    message:'Please choose a license for this project',
},
// Asks for an email for further contact
{
    type: 'input',
    name: 'email',
    message: 'Input your email so viewers may contact you for questions!',
}
];

// TODO: Create a function to write README file
// Function to write the README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data, (err) => {
        if(err){
            console.log(err)
        }
        console.log('Your README file has been successfully generated!! (-^ U ^-);')
    });
}



// TODO: Create a function to initialize app
// Function that initializes the up
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating a super awesome and totally professional README.md file for you! (-^ U ^-); ');
        writeToFile('./dist/README.md', generateMarkdown({...responses}));
    });
 }

// Function call to initialize app
init();
