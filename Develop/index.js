// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js')



// TODO: Create an array of questions for user input

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your full name',
        name: 'full Name',
        default: 'Edward Ramirez',
        
    

    }, 
    {
        type: 'input',
        message: 'What is your email address',
        name: 'email',
        default: 'edward.ramirezj@gmail.com',
    

    }, 
    {
        type: 'input',
        message: 'What is the name  of your Github Repo?',
        name: 'Repo',
        default: 'ReadMe-Generator',
    

    }, 
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        default: 'Project Titlte',
    

    }, 
    {
        type: 'input',
        message: 'Write a Description of your project?',
        name: 'Description',
        default:  'Description'
    

    }, 
    {
        type: 'input',
        message: 'Describe the steps required to install your project for the Installation section',
        name: 'Installation',
        default: 'installation '
    

    }, 
    {
        type: 'input',
        message: 'Write instructions and examples of your project in use for the usage section',
        name: 'Usage',

    

    }, 
    {
        type: 'input',
        message: 'List of technology utilized(side-server, api, ect)',
        name: 'Technology',
       
    

    }, 
    {
        type: 'input',
        message: 'Provide guidelines on how other developers can contribute to your project',
        name: 'contributing',
      
    

    }, 
    {
        type: 'list',
        message: 'Choose a license for your application.(use up & down arrow keys to navigate list)',
        name: 'License',
        choices: 
        ['GNU AGPLv3', 
        'GNU GPLv3', 
        'GNU LGPLv3', 
        'Mozilla Public License 2.0', 
        'Apache License 2.0', 
        'MIT License', 
        'Boost Software License 1.0', 
        'The Unlicense'],
    

    },

]).then(response => {
    fsReadme(response);
});

const promptUser = () => {
    return inquirer.prompt
};




// TODO: Create a function to write README file
function fsReadme(fileName, data) {
    const markdownFile = generateMarkdown(data)
    fs.writeFile(fileName, markdownFile, err =>{
        if (err){
            return console.log(err);
        }
        console.log('Success! Your README file has be created.')
    });
}

// TODO: Create a function to initialize app
function init(){
    promptUser()
    .then((answers) => fsReadme(`${answers.title}.md`, answers))
};

// Function call to initialize app
init();
