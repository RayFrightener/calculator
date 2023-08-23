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
        case "+":
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

numberButtons.forEach(button =>{
    button.addEventListener("click", () => {
        currentNumber += button.textContent;
        displayElement.textContent = currentNumber; 
        
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(currentNumber !== ""){
            num1 = parseFloat(currentNumber);
            operator = button.dataset.operator;
            currentNumber = "";  
        }
    })
});

clearButton.addEventListener("click", () => {
    currentNumber = "";
    num1 = undefined;
    operator = undefined;
    num2 = undefined;
    displayElement.textContent = "0"
});



equalButton.addEventListener("click", () => {
    if (currentNumber !== ""){
        num2 = parseFloat(currentNumber);
        try {
            const result = operate(operator, num1, num2);
            displayElement.textContent = restult;
            currentNumber = result.toString();
        } catch (error){
            displayElement.textContent = error.message;
            currentNumber ="";
        }
    }
})
