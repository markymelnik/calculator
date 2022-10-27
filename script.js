// Calculator Project

const numBtn = document.querySelectorAll(".numBtn");

let firstNum = 0;

numBtn.forEach(button => button.addEventListener("click", () => {
    firstNum = button.textContent;
}));