const Shapes = require("./shapes.js");
const Circle = require('./Circle');

describe("Shapes", () => {
    describe("Circle", () => {
        it("should generate the script to create an svp circle", () => {
            const shape = new Circle();
            setColor = "orange";
            expect(shape.render(setColor)).toEqual(
                '<circle cx="150" cy="100" r="90" fill="orange" />'
            );
        });
    });
    describe("Triangle", () => {
        it("should generate the script to create an svp triangle", () => {
            const shape = new Triangle();
            setColor = "blue";
            expect(shape.render(setColor)).toEqual(
                '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
            );
        });
    });
    describe("Square", () => {
        it("should generate the script to create an svp square", () => {
            const shape = new Square();
            setColor = "green";
            expect(shape.render(setColor)).toEqual(
                '<rect x="10" y="10" width="180" height="180" fill="green" />'
            );
        });
    });
});
