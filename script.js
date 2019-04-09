const h1 = document.querySelector('#result');
const btns = document.querySelectorAll('.calculator button');
const equal = document.querySelector('.calculator #equal');
const reset = document.querySelector('#reset');

btns.forEach(btn => btn.addEventListener('click', postNumbers));
equal.addEventListener('click', doMath);
reset.addEventListener('click', resetCalc);

let action = null;
let firstNum = null;
let lastNum = null;
let result = null;

function postNumbers(e) {
    numId = e.target.id;
    if (isNaN(numId)) {
        if(!lastNum && !result) {
            return;
        }

        if (!action) {
            action = numId;
            firstNum = lastNum;
            lastNum = null;
        } else {
            calculate(lastNum);
            action = numId;
            h1.innerHTML = result;
            lastNum = null;
        }
    } else if (!lastNum) {
        lastNum = numId;
        h1.innerHTML = lastNum;
    } else {
        lastNum = lastNum + numId;
        h1.innerHTML = lastNum;
    }
}

function calculate(num) {
    if(action === 'plus') {
        if(!result) {
            result = Number(firstNum) + Number(num);
            return;
        }
        result = Number(result) + Number(num);
    } else if(action === 'subtract') {
        if(!result) {
            result = Number(firstNum) - Number(num);
            return;
        }
        result = Number(result) - Number(num);
    } else if(action === 'multiply') {
        if(!result) {
            result = Number(firstNum) * Number(num);
            return;
        }
        result = Number(result) * Number(num);
    } else if(action === 'divide') {
        if(!result) {
            result = Number(firstNum) / Number(num);
            return;
        }
        result = Number(result) / Number(num);
    }
}

function doMath() {
    calculate();
    firstNum = null;
    action = null;
}

function resetCalc() {
    action = null;
    firstNum = null;
    lastNum = null;
    result = null;
    h1.innerHTML = '0';
}

