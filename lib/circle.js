const Shape = require("./shapes.js");

class Circle extends Shape {
    constructor(shapeColor, characterColor, characters) {
        super(shapeColor, characterColor, characters);
    }
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="Green"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="White">SVG</text>
        </svg>`
    }
}

