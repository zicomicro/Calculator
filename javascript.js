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
    return b ===0 ? 0 : a / b;
}


function operate(operator , firstNumber , secondNumber){
    let result ;
    switch(operator)
    {
        case "+":
            result = add(firstNumber , secondNumber);
            break;

        case "-":
            result = subtract(firstNumber , secondNumber);
            break;

        case "*":
            result = multiply(firstNumber , secondNumber);
            break;

        case "/":
           result = divide(firstNumber , secondNumber);
           break;

        default:
            return "invalid Option !!";
    }
    return Number(result.toFixed(10));
}
const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");

const numeric ="+-*/";
let firstNumber = "";
let operator = "";
let secondNumber = "";
let justCalculated = false;

buttons.forEach( item => {
    item.addEventListener('click', function (e){

        const num = item.textContent;
        if(numeric.includes(num)){
            if(num === "-" && firstNumber === ""){
                firstNumber = "-";
                display.value ="-";
                return;
            }

             if(operator && firstNumber !==""
                 && secondNumber !==""){

                const result = operate(
                    operator,
                    Number(firstNumber),
                    Number(secondNumber)
                );
                firstNumber = result;
                secondNumber ="";
                display.value = result;
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
                display.value = result;
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
             if(num==="C")
            {
                firstNumber = "";
                operator = "";
                secondNumber = "";
                justCalculated = false;
                display.value = "";
                return;
            }else if (num === ".") {
                const currentNumber = operator ? secondNumber : firstNumber;

                if (currentNumber.includes(".")) {
                    return;
                    }
           
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