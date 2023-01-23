let firstNumber = "";
let secondNumber = "";
let operator = "";

const buttons = document.querySelectorAll('.buttons');

const buttonPressed = e => {
    evalInput(e.target.id, e.target.getAttribute('data-type'));
}

for(let button of buttons) {
    button.addEventListener('click', buttonPressed)
}

function evalInput(id, dataType) {
    
}

function operate() {
    if(operator == "+") {
        add();
    } else if(operator == "-") {
        subtract();
    } else if(operator == "x") {
        multiply();
    } else if(operator == "/") {
        divide();
    }
}

function add() {
    return firstNumber = parseInt(firstNumber) + parseInt(secondNumber);
}

function subtract() {
    return firstNumber -= secondNumber;
}

function multiply() {
    return firstNumber *= secondNumber;
}

function divide() {
    return firstNumber /= secondNumber;
}