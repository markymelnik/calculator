// Calculator Project

const numBtn = document.querySelectorAll(".numBtn");
const operBtn = document.querySelectorAll(".operBtn");
const clearBtn = document.querySelector("clearBtn");
const equalBtn = document.querySelector("equalBtn");

const displayText = document.querySelector("displayText");


numBtn.forEach(button => {
    button.addEventListener('click', () => {
        getNum(button.textContent);
    }
)});

function getNum(num) {
    console.log(num)
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