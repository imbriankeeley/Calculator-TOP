function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

let firstNumber = 0;
let operator = 0;
let secondNumber = 0;

function operate(firstNumber, operator, secondNumber){
    operator(firstNumber, secondNumber);
}

let displayValue

const display = document.getElementById('numbers')

const numberSeven = document.getElementById("seven");
numberSeven.addEventListener('click', function() {
    display.textContent = `${displayValue}` + '7'
    return displayValue;
});

const numberEight = document.getElementById("eight");
numberEight.addEventListener('click', function() {
    displayValue = 8;
    display.textContent = `${displayValue}`
    return displayValue;
});

const numberNine = document.getElementById("nine");
numberNine.addEventListener('click', function() {
    displayValue = 9;
    display.textContent = `${displayValue}` + '9'
    return displayValue;
});
