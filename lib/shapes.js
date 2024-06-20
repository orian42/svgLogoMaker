//create a new shape based on user input
class Circle {
    constructor (setColor) {
        this.setColor = setColor;
    }
    render = function() {
        return `<circle cx="150" cy="100" r="90" fill="${setColor}" />`
    }
}

class Triangle {
    constructor (setColor) {
        this.setColor = setColor;
    }
    render = function() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${setColor}" />`
    }
}

class Square {
    constructor (setColor) {
        this.setColor = setColor;
    }
    render = function() {
        return `<rect x="10" y="10" width="180" height="180" fill="${setColor}" />`
    }
}

//create new text based on user input


module.exports = Circle;
module.exports = Triangle;
module.exports = Square;