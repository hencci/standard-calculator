let num1;
let mum2;
let operator;

const numKey = Array.from(document.querySelectorAll('.numKey'));
const opKey = Array.from(document.querySelectorAll('.opKey'));
const clearKey = Array.from(document.querySelectorAll('clearKey'));
const equalTo = document.querySelector('#equal');

const display = document.querySelector('.display');
let entry = document.querySelector('.entry');
let afterMath = document.querySelector('.afterMath');

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

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            add(num1, num2); break;
        case "-":
            subtract(num1, num2); break
        case "*":
            multiply(num1, num2); break;
        case "/":
            divide(num1, num2); break;
    }
}

numKey.map( button => {
    button.addEventListener("click", (e) => {
        entry.innerText = e.target.innerText;
    })
})