// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require ('util');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'username',
    message: 'What is your Github User name?',
    default: 'MacaroniKetchup',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log('Did you forget what your username was?');
        }
        return true;
    }
},
{
    type: 'input',
    name: 'repo-name',
    message: 'What is the name of your repository?',
    default: 'They forgot to name there project lol',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log('Do you not know what to name your repo??');
        }
        return true;
    }
},
{
    type: 'input',
    name: 'title',
    message: 'What do you want to name your project?',
    default: 'Opsies woopsies, no project name',
    validate: function (answer) {
        if (answer.length <1) {
            return console.log('Remember to name your project like its your first born child!');
        }
        return true;
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Tell me about your project!',
    default: 'They didnt want to share their secrets...  ( TAT)',
    validate: function (answer) {
        if (answer.length <1) {
            return console.log('Some of us would like to know about your project pwease... ( u_u)');
        }
        return true;
    }
},
{
    type: 'input',
    name: 'installations',
    message: 'Is there any installs that will be needed for this project?',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please explain steps on how to use your project!',
},
{
    type:'input',
    name:'contibutions',
    message:'Please list any instructions on how contributions can be made to this project!',
},
{
    type:'input',
    name:'tests',
    message:'If possible, please give any test written for this project and how access/use them!',
},
{
    type:'list',
    name:'license',
    choices:['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    message:'Please choose a license for this project',
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
           return console.log(err);
        } 
        console.log('Your README file has been successfully generated!! (-^ U ^-);')
    })
 }

// TODO: Create a function to initialize app
function init() {
    
 }

// Function call to initialize app
init();
