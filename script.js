const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

let results = ""
const prevDisplayNumber = document.querySelector(".prevNumber")
const currDisplayNumber = document.querySelector(".currNumber")
const numbers = document.body.querySelectorAll("[data-type='number']")
const operators = document.body.querySelectorAll("[data-type='operator']")
const equal = document.body.querySelector(".equal")
const resetAll = document.body.querySelector(".reset-all")

let prevNumber = ""
let currNumber = ""
let operator = ""

resetAll.addEventListener('click', function() {
    prevNumber = ""
    currNumber = ""
    prevDisplayNumber.textContent = prevNumber
    currDisplayNumber.textContent = currNumber
})

for (let number of numbers) {
    number.addEventListener('click', function(e) {
        handleNumber(e.target.textContent)
    })
}

function handleNumber(number) {
    if (currNumber.length <= 10 || currNumber == "" ) {
        currNumber += number
        currDisplayNumber.textContent = currNumber
    } else if (currNumber == ""){
        currNumber = number
    } else {
        currNumber = currNumber
    }
}

for (let operator of operators) {
    operator.addEventListener('click', function(e) {
        handleOperator(e.target.textContent)
    })
}

function handleOperator(op) {
    if (!results == "") {
        operator = op.toString()
        prevNumber = results
        results = ""
        prevDisplayNumber.textContent = prevNumber + " " + operator
        currNumber = ""
        currDisplayNumber.textContent = currNumber
    } else {
        operator = op.toString()
        prevNumber = currNumber
        prevDisplayNumber.textContent = currNumber + " " + operator
        currNumber = ""
        currDisplayNumber.textContent = currNumber
    }
}


equal.addEventListener('click', operate)

// For this operate function, have to make sure operator input is a string!
function operate() {
    prevNumber = Number(prevNumber)
    currNumber = Number(currNumber)
    operator = operator.toString()
    console.log("working here")
    if (!prevNumber == "" || !currNumber == "") {
        console.log("workin")
        switch(operator) {
            case 'add':
            case '+':
                results = add(prevNumber, currNumber)
                console.log(prevNumber)
                console.log(currNumber)
                console.log(results)
                break
            case 'subtract':
            case '-':
                results = subtract(prevNumber, currNumber) 
                break
            case 'multiply':
            case '*':
                results = multiply(prevNumber, currNumber)  
                break
            case 'divide':
            case '/':
                results = divide(prevNumber, currNumber) 
                break
        }
    }
    displayResults()
}

function displayResults() {
    prevDisplayNumber.textContent += " " + currNumber
    currDisplayNumber.textContent = results 
}