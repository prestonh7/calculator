let firstNumber = "";
let secondNumber = "";
let operator = "";

const buttons = document.querySelectorAll('.buttons');
const screen = document.querySelector('.screen');

const buttonPressed = e => {
    evalInput(e.target.id, e.target.getAttribute('data-type'));
}

for(let button of buttons) {
    button.addEventListener('click', buttonPressed)
}

function evalInput(id, dataType) {
    if(dataType == "operator" && operator == "") {
        operator = id
        screen.innerText = `${firstNumber} ${operator} ${secondNumber}`;
    } else if(dataType == "number" && operator == "") {
        firstNumber = firstNumber + id;
        screen.innerText = `${firstNumber} ${operator} ${secondNumber}`;
    } else if(dataType == "number" && operator != "") {
        secondNumber = secondNumber + id;
        screen.innerText = `${firstNumber} ${operator} ${secondNumber}`;
    } else if(dataType == "equals") {
        operate(firstNumber, secondNumber);
    } else if(dataType == "clear") {
        reset();
        screen.innerText = ""
    }
}

function operate(a, b) {
    if(operator == "+") {
        add(a, b);
    } else if(operator == "-") {
        subtract(a, b);
    } else if(operator == "x") {
        multiply(a, b);
    } else if(operator == "/") {
        divide(a, b);
    }
}

function add(a, b) {
    a = parseInt(a) + parseInt(b);
    screen.innerText = a;
    reset();
}

function subtract(a, b) {
    a -= b;
    screen.innerText = a;
    reset();
}

function multiply(a, b) {
    a *= b;
    screen.innerText = a;
    reset();
}

function divide(a, b) {
    a /= b;
    screen.innerText = a;
    reset();
}

function reset() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
}