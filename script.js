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
    if(dataType == "operator" && operator == "") {
        operator = id
    } else if(dataType == "number" && operator == "") {
        firstNumber = firstNumber + id;
    } else if(dataType == "number" && operator != "") {
        secondNumber = secondNumber + id;
    }
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

function add(a, b) {
    return a = parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return a -= b;
}

function multiply(a, b) {
    return a *= b;
}

function divide(a, b) {
    return a /= b;
}