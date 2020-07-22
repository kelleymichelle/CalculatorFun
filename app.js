document.addEventListener("DOMContentLoaded", function() {
    clear()
})


let buttons = document.querySelectorAll(".button")
let numberWindow = document.getElementById("display-content")
let total = 0 
//when currentNumber gets an operator
let storedNumber = 0
let operator = ""
let prevOperator = ""
let currentNumber = ""
let isOperator = false
//to skip over evaluating numbers to 0 first time around
let firstShow = true
let totaling = false

buttons.forEach(button => {
    return button.addEventListener("click", (e) => {
        let buttonPressed = e.target.innerText

        if(buttonPressed === "+" || buttonPressed === "-" || buttonPressed === "/" || buttonPressed === "x") {
            storeTheDisplayedNumberAndOperator(buttonPressed)
        } else if (buttonPressed === "=") {
            totaling = true
            equals()
        } else if (buttonPressed === "CE") {
            clear()
        } else if (buttonPressed === "+/-") {
            negOrPosToggle()
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
        prevOperator = operator
        operator = buttonPressed
        storedNumber = parseInt(currentNumber)
        // total = parseInt(currentNumber)
        isOperator = true
        console.log(storedNumber, operator, total)
        equals()
    }
}

function clear() {
    total = 0 
    storedNumber = 0
    operator = ""
    currentNumber = ""
    isOperator = false
    numberWindow.innerText = "0"
    firstShow = true
    prevOperator = ""
    totaling = false
}

function equals() {
    // storedNumber = parseInt(currentNumber)
    let currentInt = parseInt(currentNumber)

    if (totaling) {
        prevOperator = operator
        totaling = false
    }

    if (firstShow) {
        numberWindow.innerText = currentInt
        storedNumber = currentInt
        total = currentInt
        firstShow = false
    } else {

        console.log(storedNumber, total, currentNumber)
        if(prevOperator === "+") {
            let sum = total + parseInt(currentNumber)
            numberWindow.innerText = sum
            storedNumber = sum
            total = sum
        } else if (prevOperator === "-") {
            
            let difference = total - parseInt(currentNumber)
            // console.log(difference)
            numberWindow.innerText = difference
            storedNumber = difference
            total = difference
        } else if (prevOperator === "/") {
            if (total === 0) {
                numberWindow.innerText = currentInt
                storedNumber = currentInt
                total = currentInt
            } else {

                let result = total / parseInt(currentNumber)
                console.log(result)
                numberWindow.innerText = result
                storedNumber = result
                total = result
            }
        } else if (prevOperator === "x") {
            let product = total * parseInt(currentNumber)
            numberWindow.innerText = product
            storedNumber = product
            total = product
        } 
    currentNumber = total
    // isOperator = false
    console.log(storedNumber, total, currentNumber)
    }
}

function negOrPosToggle() {
    let num = currentNumber
    currentNumber = parseInt(num) * (-1)
    console.log(currentNumber)
    numberWindow.innerText = currentNumber
}







