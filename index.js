// TODO: Include packages needed for this application
  const inquirer = require("/inquirer")
const fs = require("fs")
const generateMarkdown = require("./generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: "title",
        message: "What is the title of Your Project ?"
    },
    {
        type: 'input',
        name: "name",
        message: "What is your Github Username ?"
    },
    {
        type: 'input',
        name: "email",
        message: "What is your E-mail Address?"
    },
    
    {
        type: 'input',
        name: "description",
        message: "Please write a short description of your Project"
    },
    {  
        type: 'list',
        name: "license",
        message: "What Kind of license should Your Project Have ?",
        choices: ["MIT" , "Apache", "None"]
    },
    {
        type: 'input',
        name: "dependancies",
        message: "What Command should be run to install dependancies ?"
    },
    {
        type: 'input',
        name: "command",
        message: "What command should be run to run tests ?"
    },
    {
        type: 'input',
        name: "user",
        message: "What  does the user need to know about using the repo ?"
    },
    {
        type: 'input',
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    },
    {
        type: 'input',
        name: "link",
        message: "What is the link to your GitHub "
    },

];

// TODO: Create a function to write README file
function writeToFile (data) {
   return fs.writeFile('README.md', data, (err) => err ? console.log(err): console.log ('successfully created README.md'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers=> {
        console.log(answers)
        const readMePageContent = generateMarkdown(answers)
        writeToFile(readMePageContent)
    })
        
    }


// Function call to initialize app
init();
