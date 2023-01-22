let firstNumber = "2";
let secondNumber = "5";
let operator = "+";

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