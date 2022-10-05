const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operate = function(operator, x, y) {
    x = Number(x)
    y = Number(y)
    switch (operator) {
        case 'add':
            return add(a, b)    
        case 'subtract':
            return subtract(a, b)
        case 'multiply':
            return multiply(a, b)
        case 'divide':
            return divide(a, b)
    }
}

