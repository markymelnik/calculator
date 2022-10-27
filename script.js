// Calculator Project

const numBtn = document.querySelectorAll(".numBtn");
const operBtn = document.querySelectorAll(".operBtn");
const clearBtn = document.querySelector("clearBtn");
const equalBtn = document.querySelector("equalBtn");
const displayField = document.querySelector("#displayField");

let initialValue = 0;
let finalValue = 0;

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        displayField.value += +button.textContent;
    }
)});



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

function operate(operator, a, b) {
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