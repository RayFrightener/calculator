function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function prod(a,b){
    return a*b;
}
function div(a,b){
    if (b === 0){
        throw new Error("Nice Try!");
    }
    return a/b;
}




function operate(operator,num1,num2){
    switch(operator){
        case "+":``
            return add(num1,num2);
        case "-":
            return sub(num1,num2);
        case "*":
            return prod(num1,num2);
        case "/":
            return div(num1,num2);
        default:
            throw new Error("Invalid operator");
    }

}

let num1;
let operator;
let num2; 


let displayElement = document.getElementById("display");
const operatorButtons = document.querySelectorAll(".operator-button");
const numberButtons = document.querySelectorAll(".number-button");
const clearButton = document.querySelector(".clear-button");
const equalButton = document.querySelector(".equal-button");

let currentNumber = "";
let expression = "";

numberButtons.forEach(button =>{
    button.addEventListener("click", () => {
        currentNumber += button.textContent;
        expression += button.textContent;
        displayElement.textContent = expression; 
        
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentNumber !== "") {
            if (num1 !== undefined && operator !== undefined) {
                const num2 = parseFloat(currentNumber);
                try {
                    const result = operate(operator, num1, num2);
                    num1 = result;
                    currentNumber = "";
                } catch (error) {
                    displayElement.textContent = error.message;
                    return;
                }
            } else {
                num1 = parseFloat(currentNumber);
                currentNumber = "";
            }
            operator = button.textContent === "×" || button.textContent === "x" ? "*" : button.textContent;
            expression += " " + operator + " ";
            displayElement.textContent = expression;
        }
    });
});

clearButton.addEventListener("click", () => {
    num1 = undefined;
    currentNumber = "";
    expression = "";
    displayElement.textContent = "0";
});



equalButton.addEventListener("click", () => {
    if (currentNumber !== "" && operator !== undefined) {
        const num2 = parseFloat(currentNumber);
        try {
            const result = operate(operator, num1, num2);
            num1 = result;
            currentNumber = result.toString();
            operator = undefined;
            expression = result.toString();
            displayElement.textContent = expression;
        } catch (error) {
            displayElement.textContent = error.message;
            currentNumber = "";
            return;
        }
    }
});