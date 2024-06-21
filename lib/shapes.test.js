const Shapes = require("./shapes.js");

describe("Shapes", () => {
    //tests the circle object's render function produces the correct script
    describe("Circle", () => {
        it("should generate the script to create an svg circle", () => {
            const shape = new Shapes.Circle();
            setColor = "orange";
            expect(shape.render(setColor)).toEqual(
                '<circle cx="150" cy="100" r="90" fill="orange" />'
            );
        });
    });
    describe("Triangle", () => {
        //tests the triangle object's render function produces the correct script
        it("should generate the script to create an svg triangle", () => {
            const shape = new Shapes.Triangle();
            setColor = "blue";
            expect(shape.render(setColor)).toEqual(
                '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
            );
        });
    });
    describe("Square", () => {
        //tests the square object's render function produces the correct script
        it("should generate the script to create an svg square", () => {
            const shape = new Shapes.Square();
            setColor = "green";
            expect(shape.render(setColor)).toEqual(
                '<rect x="60" y="10" width="180" height="180" fill="green" />'
            );
        });
    });
});
