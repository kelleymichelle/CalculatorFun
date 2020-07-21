document.addEventListener("DOMContentLoaded", function() {
        
})


let buttons = document.querySelectorAll(".button")
let total = 0 
let storedNumber = 0
let currentNumber = ""

buttons.forEach(button => {
    return button.addEventListener("click", (e) => {
        let buttonPressed = e.target.innerText
        displayNumber(buttonPressed)
    })
})

function displayNumber(buttonPressed) {
    currentNumber += buttonPressed
    console.log(currentNumber)

    let numberWindow = document.getElementById("display-content")
    numberWindow.innerText = currentNumber

}

function storeTheDisplayedNumber() {

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




