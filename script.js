const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// For this operate function, have to make sure operator input is a string!
function operate( x, operator, y) {
    x = Number(x)
    y = Number(y)
    operator = operator.toString()
    switch(operator) {
        case 'add':
        case '+':
            return add(x, y) 
            break
        case 'subtract':
        case '-':
            return subtract(x, y)
            break
        case 'multiply':
        case '*':
            return multiply(x, y)
            break
        case 'divide':
        case '/':
            return divide(x, y)
            break
    }
}

let results = 0
const screen = document.body.querySelector(".screen")
const numbers = document.body.querySelectorAll("[data-type='number']")
const operators = document.body.querySelectorAll("[data-type='operator']")
const resetAll = document.body.querySelector(".reset-all")

let firstNumber = ""
let secondNumber = ""
let operator = ""

resetAll.addEventListener('click', function() {
    screen.textContent = ''
})

for (let number of numbers) {
    number.addEventListener('click', function() {
        screen.textContent += number.textContent
    })
}

for (let operator of operators) {
    operator.addEventListener('click', function() {
        screen.textContent += operator.textContent
    })
}

