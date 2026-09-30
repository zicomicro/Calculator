function add(a , b){
    return a + b;
}

function subtract(a , b){
    return a - b;
}

function multiply(a , b){
    return a * b;
}

function divide(a , b){
    return a / b;
}

const firstNumber = 7;
const operator = "-";
const secondNumber = 12;

function operate(operator , firstNumber , secondNumber){

    switch(operator)
    {
        case "+":
            return add(firstNumber , secondNumber);

        case "-":
            return subtract(firstNumber , secondNumber);

        case "*":
            return multiply(firstNumber , secondNumber);

        case "/":
           return divide(firstNumber , secondNumber);

        default:
            return "invalid Option !!";
    }
}
console.log(operate(operator, firstNumber, secondNumber));