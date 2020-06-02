const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL."
    }
  ]);
}

function generateREADME(answers) 
{
  return `**Henry Miles README generator**  
The goal of this assignment is to ask the user questions when this file is called in the terminal, in order to generator a README page containing all of this information, including the answers given by the user.  
-Hi! My name is ${answers.name}  
-I am from ${answers.location}  
-My GitHub username is ${answers.github}  
-LinkedIn: ${answers.linkedin}  `
}

promptUser()
  .then(function(answers) {
    const html = generateREADME(answers);

    return writeFileAsync("README.md", html);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });
