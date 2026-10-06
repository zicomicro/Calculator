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

const numaric ="+-*/";
let firstNumber = "";
let operator = "";
let secondNumber = "";
let justCalculated = false;

buttons.forEach( item => {
    item.addEventListener('click', function (e){

        const num = item.textContent;
        if(numaric.includes(num)){

             if(operator && firstNumber !==""
                 && secondNumber !==""){

                const result = operate(
                    operator,
                    Number(firstNumber),
                    Number(secondNumber)
                );
                firstNumber = Number(result.toFixed(10));
                secondNumber ="";
                display.value = Number(result.toFixed(10));
                justCalculated = true;
                }else {
                    display.value = "";
                }

            
          operator = num; 
           
            
          
        }else if(num == "="){

            if(operator && firstNumber !==""
                 && secondNumber !==""){

                const result = operate(
                    operator,
                    Number(firstNumber),
                    Number(secondNumber)
                );
                display.value = Number(result.toFixed(10));
                firstNumber = result;
                secondNumber = "";
                // No operator means a completely new calculation
                operator = "";
                justCalculated = true;
            }

        }else{
            if(justCalculated){
                display.value = "";

                // If there is no operator
                // this is a completely new calculation
                if(operator ==="")
                firstNumber = "";

                secondNumber = "";
                justCalculated = false;
            }
           
           operator ? secondNumber += num: firstNumber+=num;
    
           if(display.value ==="0" && num !=="."){
            display.value = num;

        }else{
            display.value += num;
        }
        }
        
        

    })
});