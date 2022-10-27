// Calculator Project

const numBtn = document.querySelectorAll(".numBtn");
const signBtn = document.querySelectorAll(".signBtn");
const clearBtn = document.querySelector("#clearBtn");
const equalBtn = document.querySelector("#equalBtn");
const displayField = document.querySelector("#displayField");

let firstOperand = 0;
let secondOperand = 0;
let tempOperand = 0;
let currentOperator = null;

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        displayField.value += button.textContent;
        firstOperand += button.textContent;
        firstOperand = +firstOperand;      
})});

signBtn.forEach(sign => {
    sign.addEventListener('click', () => {
        displayField.value += sign.textContent;    
        currentOperator = sign.textContent;
})});

clearBtn.addEventListener('click', () => {
    displayField.value = '';
    firstOperand = 0;
    secondOperand = 0;
});

function operate() {
    switch(sign) {
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
