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
    return b === 0 ? "Nice try! 😂" : a / b;
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
    if (typeof result === "string") return result;
    return Number(result.toFixed(10));
}
const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");

const numeric ="+-*/";
let firstNumber = "";
let operator = "";
let secondNumber = "";
let justCalculated = false;

function processInput(num){
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

        }else  if(num === "⌫"){

            if(operator === ""){
                firstNumber = String(firstNumber).slice(0,-1);
                display.value = firstNumber || "0";
            }else{
                secondNumber = secondNumber.slice(0,-1);
                display.value = secondNumber || "0";
            }
            return;

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
                display.value = "0";
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
        
        

};

buttons.forEach((item) => {
    item.addEventListener("click", () => {
        processInput(item.textContent);
    });
});

// Keyboard support
window.addEventListener("keydown", (e) => {
    let key = e.key;

    if (key === "Enter") key = "=";
    if (key === "Escape") key = "C";
    if (key === "Backspace") key = "⌫";

    const validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "=", "C", "⌫", "."];

    if (validKeys.includes(key)) {
        e.preventDefault();
        processInput(key);
    }
});