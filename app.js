document.addEventListener("DOMContentLoaded", function() {
        
})


let buttons = document.querySelectorAll(".button")
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
                displayNumber(buttonPressed)
            }
        }        
    })
})

function displayNumber(buttonPressed) {
    currentNumber += buttonPressed
    console.log(currentNumber)

    let numberWindow = document.getElementById("display-content")
    numberWindow.innerText = currentNumber

}

function storeTheDisplayedNumberAndOperator(buttonPressed) {
    if(buttonPressed === "+" || buttonPressed === "-" || buttonPressed === "/" || buttonPressed === "x") {
        operator = buttonPressed
        storedNumber = parseInt(currentNumber)
        isOperator = true
        console.log(storedNumber, operator)
    }
}

function clear() {

}

function equals() {

}

// function operatorPressed(operator, storedNumber) {
//     if(operator === "+") {
//         //sumthin with the total
//     } else if (operator === "-") {
//         //sumthin with the total
//     } else if (operator === "/") {
//         // sonmething with the total
//     } else if (operator === "x") {
//         // somethin with the total
//     } else if (operator === "=") {
//         // sometin with the total
//     } else if (operator === "CE") {
//         // clear out the total
//     }
// }




