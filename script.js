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

function handleSymbol(value) {
    switch(symbol) {
        case 'C':
            runningTotal = 0;
            buffer = '0';
            break;
        case '=':
            if (previousOperator == null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator == null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.toString(0, buffer.length - 1);
            }
            break;
        case '+':
        case '-':
        case '×':
        case '÷':

    }
}

function handleMath(symbol) {
    if (buffer === 0) {
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = '0';
}

/* Symbols: ← , − , × , ÷ , + */