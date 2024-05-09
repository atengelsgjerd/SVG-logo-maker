// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require("fs");
const generateSVG = require("./lib/shapes.js");
const Circle = require("./lib/shapes.js");


// const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter up to 3 characters",
        name: "characters",
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Please enter only up to 3 characters");
            }
            return true;
        }
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


