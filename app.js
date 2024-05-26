let num1 = null;
let num2 = null;
let operator = null;

const numKeys = document.querySelectorAll('.numKey');
const opKeys = document.querySelectorAll('.opKey');
const clearKeys = document.querySelectorAll('.clearKey');
const equalTo = document.querySelector('#equal');

const display = document.querySelector('.display');
const entry = document.querySelector('.entry');
const afterMath = document.querySelector('.afterMath');

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
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
        default:
            return null;
    }
}

numKeys.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if (value === '.' && entry.innerText.includes('.')) {
            return;
        }
        if (entry.innerText === '0' && value !== '.') {
            entry.innerText = value;
        } else {
            entry.innerText += value;
        }
    });
});

opKeys.forEach(button => {
    button.addEventListener("click", (e) => {
        if (operator !== null && num1 !== null && entry.innerText !== '') {
            num2 = parseFloat(entry.innerText);
            const result = operate(operator, num1, num2);
            entry.innerText = result;
            num1 = result;
        } else {
            num1 = parseFloat(entry.innerText);
        }
        operator = e.target.innerText;
        afterMath.innerText = `${num1} ${operator}`;
        entry.innerText = '';
    });
});

equalTo.addEventListener("click", () => {
    if (operator !== null && num1 !== null) {
        num2 = parseFloat(entry.innerText);
        const result = operate(operator, num1, num2);
        afterMath.innerText = `${num1} ${operator} ${num2} =`;
        entry.innerText = result;
        num1 = null;
        operator = null;
    }
});

clearKeys.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.id === 'clear') {
            entry.innerText = '';
            afterMath.innerText = '';
            num1 = null;
            num2 = null;
            operator = null;
        } else if (e.target.id === 'clearEntry') {
            entry.innerText = '';
        } else if (e.target.id === 'backspace') {
            entry.innerText = entry.innerText.slice(0, -1);
        }
    });
});
