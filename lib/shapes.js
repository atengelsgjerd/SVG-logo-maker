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
    }
}

class Square extends Shape {
    constructor(shapeColor, characterColor, characters) {
        super(shapeColor, characterColor, characters);
    }
}

class Triangle extends Shape {
    constructor(shapeColor, characterColor, characters) {
        super(shapeColor, characterColor, characters);
    }
}
module.exports = Shape;