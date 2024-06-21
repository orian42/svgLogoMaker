//create a new shape based on user input
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

//render logo script based on user input
function renderLogo(data) {
    let shapeScript;
    switch (data.logoShape) {
        case "circle":
            let circle = new Circle
            shapeScript = circle.render(data.shapeColor);
            break;
        case "triangle":
            let triangle = new Triangle
            shapeScript = triangle.render(data.shapeColor);
            break;
        case "square":
            let square = new Square;
            shapeScript = square.render(data.shapeColor);
            break;
    }

    let textY;
    if (data.logoShape === 'triangle') {textY = 160} else {textY = 120};
    const textScript = `<text x="153" y="${textY}" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>`;
    return `
     <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     ${shapeScript}
     ${textScript}
     </svg>
    `;
};

module.exports = {
    Circle,
    Triangle,
    Square,
    renderLogo
};
