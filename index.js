//Required processes defined here
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

//Creates a series of prompts for user to enter options for the logo then calls a function to render the logo
const questions = [
    inquirer
        .prompt([
            {
                type: "input",
                message: "Using no more than three (3) characters, what text will be on your logo?",
                name: "logoText",
                //Validation added to ensure only three characters are used
                validate: function (logoText) {
                    if (logoText.length < 4) {
                        return true;} else {console.log(`\n\nPlease enter no more than three characters\n`)
                    }
                }
            },
            {
                type: "input",
                message: "What color will the text be?",
                name: "textColor"
            },
            {
                type: "list",
                message: "What shape will be behind your text?",
                name: "logoShape",
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: "input",
                message: "What will the color of this shape be?",
                name: "shapeColor"
            }
        ])
        .then((res) => {
            //The below function called to create new logo object based on user input
            writeToFile("./examples/logo.svg", shapes.renderLogo(res));
        }
        )
]

//This function writes the svp information to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error("An error has occurred.", err) : console.log(`Generated logo.svg`)
    );
}