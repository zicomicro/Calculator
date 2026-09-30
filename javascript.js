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
const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");

buttons.forEach( item => {
    item.addEventListener('click', function (e){
        const num = item.textContent;
        if(display.value ==="0"){
            display.value = num;
        }else{
            display.value +=num;
        }
        

    })
});