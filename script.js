// Calculator Project

const calcBtn = document.querySelectorAll(".calcBtn");
const numBtn = document.querySelectorAll(".numBtn");
const signBtn = document.querySelectorAll(".signBtn");
const clearBtn = document.querySelector("#clearBtn");
const equalBtn = document.querySelector("#equalBtn");
const displayValue = document.querySelector("#displayField");

let previousOperand = 0;
let currentOperand = 0;
let currentOperator = '';
let needSecondOperand = false;
let finalSum = 0;

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (needSecondOperand == false) {
            displayValue.value += button.textContent;
            currentOperand += button.textContent;
            currentOperand = parseInt(currentOperand);
        } else {
            displayValue.value += button.textContent;
            currentOperand += button.textContent;
            currentOperand = parseInt(currentOperand);
            console.log(currentOperand);
}})});

signBtn.forEach(sign => {
    sign.addEventListener('click', () => {
        needSecondOperand = true;
        displayValue.value += sign.textContent;
        previousOperand = currentOperand;
        currentOperand = 0;
        console.log(previousOperand)    
})});

clearBtn.addEventListener('click', () => {
    displayValue.value = '';
    previousOperand = 0;
    currentOperand = 0;
    currentOperator = 0;
});

function operate(a, b, operator) {
    switch(operator) {
        case "+": 
            return add(a, b);
        case "-": 
            return subtract(a,b);
        case "*": 
            return multiply(a,b);
        case "/": 
            return divide(a,b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}