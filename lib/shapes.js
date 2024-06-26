//Classes for the different shapes with functions defining the individual svg scripts 
class Circle { }
Circle.prototype.render = function (setColor) {
    return `<circle cx="150" cy="100" r="90" fill="${setColor}" />`;
};

class Triangle { }
Triangle.prototype.render = function (setColor) {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${setColor}" />`;
};

class Square { }
Square.prototype.render = function (setColor) {
    return `<rect x="60" y="10" width="180" height="180" fill="${setColor}" />`;
};

//render logo script based on user input regarding the shape and color of the shape
function renderLogo(data) {
    let shape;
    switch (data.logoShape) {
        case "circle":
            shape = new Circle;
            break;
        case "triangle":
            shape = new Triangle;
            break;
        case "square":
            shape = new Square;
            break;
    }

//renders the entire svp script adding the text with user-defined color to the shape rendered above
    let textY;
    if (data.logoShape === 'triangle') {textY = 160} else {textY = 120}; //aligns text closer to the base of triangles
    return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        ${shape.render(data.shapeColor)}
        <text x="153" y="${textY}" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>
        </svg>
    `;
};

//Objects and function exported from this file
module.exports = {
    Circle,
    Triangle,
    Square,
    renderLogo
};
