// Calculator Project

const numBtn = document.querySelectorAll(".numBtn");
const signBtn = document.querySelectorAll(".signBtn");
const clearBtn = document.querySelector("#clearBtn");
const equalBtn = document.querySelector("#equalBtn");
const displayValue = document.querySelector("#displayField");

let previousOperand = 0;
let currentOperand = 0;
let currentOperator = '';
let needSecondOperand = false;
let numResult = null;

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        if (needSecondOperand == false) {
            displayValue.value += button.textContent;
            currentOperand += button.textContent;
            currentOperand = +currentOperand;
        } else {
            displayValue.value += button.textContent;
            currentOperand += button.textContent;
            currentOperand = +currentOperand;
            numResult = operate();
            operate();
        }
    })
});

signBtn.forEach(sign => {
    sign.addEventListener('click', () => {
        if (numResult != null) {
            displayValue.value += sign.textContent;
            currentOperator = sign.textContent;
            previousOperand = numResult;
            currentOperand = 0;
        } else {
            needSecondOperand = true;
            displayValue.value += sign.textContent;
            currentOperator = sign.textContent;
            previousOperand = currentOperand;
            currentOperand = 0;
        }
    })
});

equalBtn.addEventListener('click', () => {
    displayValue.value = operate();
    numResult = displayValue.value;
    numResult = +numResult;
});

clearBtn.addEventListener('click', () => {
    displayValue.value = null;
    previousOperand = 0;
    currentOperand = 0;
    currentOperator = '';
    needSecondOperand = false;
    numResult = null;
});

function operate(a, b, operator) {
    a = previousOperand;
    b = currentOperand;
    operator = currentOperator;
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
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b == 0) {
        return displayValue.value = "OOPS!";
    } 
    return a / b;
};