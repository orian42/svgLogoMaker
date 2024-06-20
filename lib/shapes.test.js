const Shapes = require('./shapes.js');


    describe('Circle', () => {
        it('should generate the script to create an svp circle', () => {
            const shape = new Circle;
            shape.setColor = "orange";
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="90" fill="orange" />');
        });
    });
    describe('Triangle', () => {
        it('should generate the script to create an svp triangle', () => {
            const shape = new Triangle;
            shape.setColor = "blue";
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
    describe('Square', () => {
        it('should generate the script to create an svp square', () => {
            const shape = new Square;
            shape.setColor = "green";
            expect(shape.render()).toEqual('<rect x="10" y="10" width="180" height="180" fill="green" />');
        });
    });
