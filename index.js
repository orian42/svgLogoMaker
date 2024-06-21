//add required processes
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

//create series of prompts for user to enter options for the logo
const questions = [
    inquirer
        .prompt([
            {
                type: "input",
                message: "What text of up to three letters will be on your logo?",
                name: "logoText",
                validate: function (logoText) {
                    if (logoText.length < 4) {
                        return true;} else {console.log(`\nPlease enter no more than three characters\n`)
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
            //create new logo object based on user input
            writeToFile("./examples/logo.svg", shapes.renderLogo(res));
        }
        )
]

//write svp information to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error("An error has occurred.", err) : console.log(`Generated logo.svg`)
    );
}