document.addEventListener("DOMContentLoaded", function() {
        
})


let buttons = document.querySelectorAll(".button")
let numberWindow = document.getElementById("display-content")
let total = 0 
let storedNumber = 0
let operator = ""
let currentNumber = ""
let isOperator = false

buttons.forEach(button => {
    return button.addEventListener("click", (e) => {
        let buttonPressed = e.target.innerText

        if(buttonPressed === "+" || buttonPressed === "-" || buttonPressed === "/" || buttonPressed === "x") {
            storeTheDisplayedNumberAndOperator(buttonPressed)
        } else if (buttonPressed === "=") {
            equals()
        } else if (buttonPressed === "CE") {
            clear()
        } else {
            if(isOperator === false) {
                displayNumber(buttonPressed)
            } else {
                currentNumber = ""
                isOperator = false
                total = storedNumber
                storedNumber = 0
                displayNumber(buttonPressed)
            }
        }        
    })
})

function displayNumber(buttonPressed) {
    currentNumber += buttonPressed

    numberWindow.innerText = currentNumber

}

function storeTheDisplayedNumberAndOperator(buttonPressed) {
    if(buttonPressed === "+" || buttonPressed === "-" || buttonPressed === "/" || buttonPressed === "x") {
        operator = buttonPressed
        storedNumber = parseInt(currentNumber)
        isOperator = true
        console.log(storedNumber, operator, total)
    }
}

function clear() {
    total = 0 
    storedNumber = 0
    operator = ""
    currentNumber = ""
    isOperator = false
    numberWindow.innerText = "0"
}

function equals() {

    if(operator === "+") {
        let sum = total + storedNumber
        numberWindow.innerText = sum
    } else if (operator === "-") {
        let difference = total - storedNumber
        numberWindow.innerText = difference
    } else if (operator === "/") {
        let result = total / storedNumber
        numberWindow.innerText = result
    } else if (operator === "x") {
        let product = total * storedNumber
        numberWindow.innerText = product
    } 

}







