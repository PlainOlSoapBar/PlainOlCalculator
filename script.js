let runningTotal = 0;
let buffer = '0';
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNan(value)) {
        handleSymbol(value);
    } else {
        handleSymbol(value);
    }
    screen.innerText = buffer;
}