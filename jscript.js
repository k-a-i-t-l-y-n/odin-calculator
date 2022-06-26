const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-display");

const operators = [];
const numbers = [];

//Add click eventListener to all buttons in .calculator-keys class
keys.addEventListener("click", e => {
    if (e.target.matches('button')) {
        const currentKey = e.target;
        const action = currentKey.dataset.action; //gets data-action of key

        if (action === "all-clear") {
            display.textContent = "0";
            calculator.dataset.firstNum = 0;
            calculator.dataset.secondNum = 0;
        }
        else if (action === "clear") {
            display.textContent = "0";
        }
        else if (action === "delete") {
            if (display.textContent.length === 1) {
                display.textContent = "0";
            }
            else {
                const displayText = display.textContent;
                display.textContent = displayText.slice(0, -1);
            }
        }

        else if (action === "modulus" ||
            action === "exponent" ||
            action === "squareRoot" ||
            action === "divide" ||
            action === "multiply" ||
            action === "subtract" ||
            action === "add") {

            if(display.content != ""){
                calculator.dataset.firstNum = display.textContent;
                numbers.push(calculator.dataset.firstNum);
                operators.push(action);
                display.textContent = " ";
                calculator.dataset.operator = action;
            }
            
        }

        else if (action === "decimal") {
            display.textContent += ".";
        }

        else if (action === "sign") {
            console.log("sign change");
        }

        else if (action === "equal") {
            const operator = calculator.dataset.operator;
            const firstNum = calculator.dataset.firstNum;
            const secondNum = display.textContent;

            if (operator === "squareRoot") {
                display.textContent = calculateAnswer(firstNum, 0, operator);
                console.log(display.textContent);
            }

            else{
                display.textContent = calculateAnswer(firstNum, secondNum, operator);
                console.log(display.textContent);
            }
        }

        else {
            if (display.textContent === "0") {
                display.textContent = currentKey.textContent;
            }
            else {
                display.textContent += currentKey.textContent;
            }
        }
    }
})

function calculateAnswer(first, second, operator) {

    firstNum = parseFloat(first);
    secondNum = parseFloat(second);

    if (operator === "add") {
        console.log(firstNum + secondNum);
        return firstNum + secondNum;
    }

    else if (operator === "subtract") {
        return firstNum - secondNum;
    }

    else if (operator === "multiply") {
        return firstNum * secondNum;
    }

    else if (operator === "divide") {
        return firstNum / secondNum;
    }

    else if (operator === "exponent") {
        return Math.pow(firstNum, secondNum);
    }

    else if (operator === "squareRoot") {
        return Math.sqrt(firstNum);
    }

    else {
        return firstNum % secondNum;
    }

}