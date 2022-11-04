const display = document.querySelector(".display")
const buttons = document.querySelector(".buttons")
let value = 0;
let firstNum = 0;
let secondNum = 0;
let operator = "";

buttons.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    }
    let btnPressed = event.target.id
    if (btnPressed <= 0 || btnPressed <= 9 ) {
        value += btnPressed;
        populateDisplay(+value, firstNum, operator, secondNum);
    } 
    checkOperation(btnPressed)
})

function checkOperation(btnPressed) {
    if(btnPressed === "+" || btnPressed === "-" || btnPressed === "×" ||  btnPressed === "÷") {
        if (firstNum === 0) {
            firstNum = +value;
            operator = btnPressed;
            value = 0;
            populateDisplay(value, firstNum, operator, secondNum);
        } else if (secondNum === 0 && value === 0) {
            operator = btnPressed
            populateDisplay(value, firstNum, operator, secondNum);
        }
        else {
            getResult(btnPressed)
        }
    }

    if (btnPressed === "=" && value === '05264') {
        display.innerHTML = "<p>Kami</p>"
    }

    if (btnPressed === "=") {
        getResult(btnPressed)
    }
}

function getResult(btnPressed) {
    if (btnPressed === "=" && value === 0) {
        return
    }
    if (secondNum === 0) {
        secondNum = +value;
    }
    if (operator === "+"){
        value = add(firstNum, secondNum);
    } 
    if (operator === "-") {
        value = subtract(firstNum, secondNum);
    }
    if (operator === "×") {
        value = multiply(firstNum, secondNum);
    }
    if (operator === "÷") {
        value = divide(firstNum, secondNum)
    }
    
    populateDisplay(value, firstNum, operator, secondNum)
    firstNum = value;
    value = 0;
    secondNum = 0;
    if (operator === "=" || operator === btnPressed) {
        operator = "";
    } else {
        operator = btnPressed
    }
}

function add(num1, num2) {
    return +num1 + +num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2); 
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

function populateDisplay(actualValue, beforeNum, operatorSing, afterNum) {
    if (beforeNum === 0) {
        beforeNum = ""
    }
    if (afterNum === 0) {
        afterNum = ""
    }
    display.innerHTML = `<h1>${beforeNum} ${operatorSing} ${afterNum}</h1> <p>${+actualValue}</p>`
}

function clearCalculator() {
    value = 0;
    firstNum = 0;
    secondNum = 0;
    operator = "";
    populateDisplay(value, firstNum, operator, secondNum);
}

function backSpace() {
    value = value.toString()
    value = value.slice(0, -1);
    populateDisplay(value, firstNum, operator, secondNum);
}

