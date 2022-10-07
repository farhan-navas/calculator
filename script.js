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
const decimal = document.body.querySelector(".decimal")

let prevNumber = ""
let currNumber = ""
let operator = ""
currDisplayNumber.textContent = 0

//this function will add a decimal place to the number
decimal.addEventListener('click', function() {
    currNumber += "."
    currDisplayNumber.textContent = currNumber
})

// add a function that will reset the whole screen as well as all the variables
resetAll.addEventListener('click', function() {
    prevNumber = ""
    currNumber = ""
    results = ""
    prevDisplayNumber.textContent = prevNumber
    currDisplayNumber.textContent = 0
})

// loop that calls handleNumber() whenever a number button is pressed on the keypad
for (let number of numbers) {
    number.addEventListener('click', function(e) {
        handleNumber(e.target.textContent)
    })
}

// function that will add number to variable and display onto the screen
function handleNumber(number) {
    if (currNumber.length <= 10 || currNumber == "" ) {
        currNumber += number
        currDisplayNumber.textContent = currNumber
    } else if (currNumber == ""){
        currNumber = number
    }
}

for (let operator of operators) {
    operator.addEventListener('click', function(e) {
        handleOperator(e.target.textContent)
    })
}

//function that will use the given operator and continue to form the entire equation
function handleOperator(op) {
    if (prevNumber == "") {
        prevNumber = 0
    }
    if (!results == "") {
        operator = op.toString()
        prevNumber = results
        results = ""
        prevDisplayNumber.textContent = prevNumber + " " + operator
        currNumber = ""
        currDisplayNumber.textContent = currNumber
        console.log(`results: ${results}`)
        console.log(`prevnumber: ${prevNumber}`)
        console.log(`currnumber: ${currNumber}`)
    } else if (!prevNumber == "" && !currNumber == 0) {
        operate()
        handleOperator(op)
    } else {
        operator = op.toString()
        prevNumber = currNumber
        prevDisplayNumber.textContent = currNumber + " " + operator
        currNumber = ""
        currDisplayNumber.textContent = currNumber
        console.log(`results: ${results}`)
        console.log(`prevnumber: ${prevNumber}`)
        console.log(`currnumber: ${currNumber}`)
    }
}

equal.addEventListener('click', operate)

// For this operate function, have to make sure operator input is a string!
function operate() {
    results = ""
    prevNumber = Number(prevNumber)
    currNumber = Number(currNumber)
    operator = operator.toString()
    if (!prevNumber == "" || !currNumber == "") {
        switch(operator) {
            case 'add':
            case '+':
                results = add(prevNumber, currNumber)
                break
            case 'subtract':
            case '-':
                results = subtract(prevNumber, currNumber) 
                break
            case 'multiply':
            case 'x':
                results = multiply(prevNumber, currNumber)  
                break
            case 'divide':
            case '/':
                if (currNumber == 0) {
                    results = ""
                    alert("Number cannot be divided by 0!")
                } else {
                    results = divide(prevNumber, currNumber) 
                }
                break
        }
    }
    console.log(`results: ${results}`)
    console.log(`prevnumber: ${prevNumber}`)
    console.log(`currnumber: ${currNumber}`)
    displayResults()
}

//this function carries on from operate() and will display final results on the screen
function displayResults() {
    // this line prevents spamming of equal button! it is necessary!
    if (!currNumber == "") {
        prevDisplayNumber.textContent += " " + currNumber + " ="
        currDisplayNumber.textContent = results
        currNumber = ""
    }
}
