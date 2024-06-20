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
    return `<rect x="10" y="10" width="180" height="180" fill="${setColor}" />`;
};


//render logo script based on user input
const renderLogo = function (logoShape, shapeColor, logoText, textColor) {
    let shapeScript;
    switch (logoShape) {
        case circle:
            shapeScript = new Circle.render(shapeColor);
            break;
        case triangle:
            shapeScript = new Triangle.render(shapeColor);
            break;
        case square:
            shapeScript = new Square.render(shapeColor);
            break;
    }
    const textScript = `<text x="10" y="10" fill="$textColor">${logoText}</text>`;
    return `
     <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     ${shapeScript}
     ${textScript}
    `
}


module.exports = {
    Circle,
    Triangle,
    Square
};

