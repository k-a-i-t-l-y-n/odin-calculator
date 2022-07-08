const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-display");

const operators = [];
const operands = [];


//Add click eventListener to all buttons in .calculator-keys class
keys.addEventListener("click", e => {
    if (e.target.matches('button')) {
        const currentKey = e.target;
        const action = currentKey.dataset.action; //gets data-action of key

        if (action === "all-clear") {
            clearArray(operands);  
            clearArray(operators);

            display.textContent = "0";
            calculator.dataset.firstNum = 0;
            calculator.dataset.secondNum = 0;
        }

        else if (action === "clear") {
            if (display.textContent != "") {
                calculator.dataset.firstNum = parseFloat(display.textContent);
                operands.push(display.textContent);
                display.textContent = "0";
            }
            else {
                display.textContent = "0";
            }
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

        else if (action === "decimal") {
            display.textContent += ".";
        }

        else if (action === "sign") {
            let number = parseFloat(display.textContent);

            if (number < 0) {
                display.textContent = Math.abs(number);
            }
            else {
                display.textContent = "-" + number;
            }
        }

        else if (action === "modulus" ||
            action === "exponent" ||
            action === "squareRoot" ||
            action === "divide" ||
            action === "multiply" ||
            action === "subtract" ||
            action === "add") {

            if (display.textContent == "0") {
                calculator.dataset.operator = action;
                operators.push(action);

                console.log(operands);
                console.log(operators);
            }

            else if (display.textContent != "") {
                calculator.dataset.firstNum = display.textContent;
                calculator.dataset.operator = action;

                operators.push(action);
                operands.push(display.textContent);

                display.textContent = " "; //clear the board

                console.log(operands);
                console.log(operators);
            }
        }



        else if (action === "equal") {
            const operator = calculator.dataset.operator;
            const firstNum = calculator.dataset.firstNum;
            const secondNum = display.textContent;;

            operands.push(secondNum);

            console.log("OP F S: " + operator, firstNum, secondNum);

            if (operator === "squareRoot") {
                display.textContent = getAnswer(operands, operators);
                console.log(display.textContent);

                console.log(operands);
                console.log(operators);

                clearArray(operands);  
                clearArray(operators);

            
            }

            else {
                display.textContent = getAnswer(operands, operators);
                console.log(display.textContent);

                console.log(operands);
                console.log(operators);

                clearArray(operands);  
                clearArray(operators);

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


function calculate(first, second, operator) {

    firstNum = parseFloat(first);
    secondNum = parseFloat(second);

    if (operator === "add") {
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

function clearArray(arr){
    arr.length = 0;
}

function getAnswer(operands, operators)
{
    let result = operands[0];
    let j = 0;

    for(let i = 1; i < operands.length; i++)
    {
        result = calculate(result, operands[i], operators[j]);
        j++;
    }

    return result;
}