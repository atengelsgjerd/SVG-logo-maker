class Shape {
    constructor(shapeColor, characterColor, characters) {
        this.shapeColor = shapeColor;
        this.characterColor = characterColor;
        this.characters = characters;
    }
}
class Circle extends Shape {
    constructor(shapeColor, characterColor, characters) {
        super(shapeColor, characterColor, characters);
    };
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.characterColor}">${this.characters}</text>
      
      </svg>`
    }
}

class Square extends Shape {
    constructor(shapeColor, characterColor, characters) {
        super(shapeColor, characterColor, characters);
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="200" height="200" fill="${this.shapeColor}" />
      
        <text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.characterColor}">${this.characters}</text>
      
      </svg>`
    }
}

class Triangle extends Shape {
    constructor(shapeColor, characterColor, characters) {
        super(shapeColor, characterColor, characters);
    };
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points = "100, 15 200, 200 0, 200" fill="${this.shapeColor}" />
      
        <text x="100" y="165" font-size="60" text-anchor="middle" fill="${this.characterColor}">${this.characters}</text>
      
      </svg>`
    }
}

function generateSVG(data) {
    let shape;
    switch (data.shape) {
        case "circle":
            shape = new Circle(data.shapeColor, data.characterColor, data.characters);
            break;
        case "square":
            shape = new Square(data.shapeColor, data.characterColor, data.characters);
            break;
        case "triangle":
            shape = new Triangle(data.shapeColor, data.characterColor, data.characters);
            break;
    }
    return shape.render();
}
module.exports = Circle;
module.exports = generateSVG;