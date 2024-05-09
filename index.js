// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Square, Triangle, generateSVG} = require("./lib/shapes.js");

const colors = ['aliceblue', 'antiquewhite', 'aqua', 'aquaMarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];

function colorValidation(answer) {
    if (colors.includes(answer)) {
        return true;
    }
    return "Please enter a valid color";
}

// console.log(colorKeywords.length);

// const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter up to 3 characters",
        name: "characters",
        validate: (answer) => {
            if (answer.length === 0 | answer.length > 3) {
                return console.log("\n Please enter 1 to 3 characters");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please enter a color for the characters",
        name: "characterColor",
        validate: (answer) => {
            return colorValidation(answer);
        }
    },
    {
        type: "input",
        message: "Please enter a color for the shape",
        name: "shapeColor",
        validate: (answer) => {
            return colorValidation(answer);
        }
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



