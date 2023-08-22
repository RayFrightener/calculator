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
        throw new Error("Cannot divide by zero");
    }
    return a/b;
}

let num1;
let operator;
let num2;


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
