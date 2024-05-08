// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");
const generateSVG = require("./generateSVG-logo.js");


// const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter up to 3 characters",
        name: "characters"
    },
    {
        type: "input",
        message: "Please enter a color for the characters",
        name: "characterColor"
    },
    {
        type: "input",
        message: "Please enter a color for the shape",
        name: "shapeColor"
    },
    {
        type: "list",
        message: "Please select a shape",
        name: "shape",
        choices: ["circle", "square", "triangle"],
    },
    
];
function init() {
inquirer.prompt(questions).then(function(answers){
 fs.writeFileSync("Assets/logo.svg", generateSVG(answers), function(err){
        console.log(err ? err : "Created logo.svg!");
    });
});
}

init();


