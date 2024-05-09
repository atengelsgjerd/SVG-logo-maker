const {Circle, Square, Triangle, generateSVG} = require("./shapes.js");

const normalizeSVG = (svg) => svg.replace(/\s/g, '');

describe("Circle", () => {
    it("should return a shape with the correct colors and characters", () => {
        const circle = new Circle("red", "blue", "abc");
        const expectedSVG =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="red" />
  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">abc</text>
  
        </svg>`
        expect(normalizeSVG(circle.render())).toEqual(normalizeSVG(expectedSVG));
    });
});

describe("Square", () => {
    it("should return a shape with the correct colors and characters", () => {
        const square = new Square("red", "blue", "abc");
        const expectedSVG =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="200" height="200" fill="red" />
      
        <text x="100" y="115" font-size="60" text-anchor="middle" fill="blue">abc</text>
      
      </svg>`
        expect(normalizeSVG(square.render())).toEqual(normalizeSVG(expectedSVG));
    });
});

describe("Triangle", () => {
    it("should return a shape with the correct colors and characters", () => {
        const triangle = new Triangle("red", "blue", "abc");
        const expectedSVG =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points = "100, 15 200, 200 0, 200" fill="red" />
      
        <text x="100" y="165" font-size="60" text-anchor="middle" fill="blue">abc</text>
      
      </svg>`
        expect(normalizeSVG(triangle.render())).toEqual(normalizeSVG(expectedSVG));
    });
});