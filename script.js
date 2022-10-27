// Calculator Project

const operatorBtn = document.querySelectorAll(".operatorBtn");
const displayText = document.querySelector(".displayText");
const equalBtn = document.querySelector("#equalBtn");

let firstNum = 12;
let secondNum = 4;
let sign = '/';

equalBtn.addEventListener("click", () => {
    displayText.textContent = `${operate()}`
});

function operate() { 
    switch(sign) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}