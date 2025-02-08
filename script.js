const display = document.querySelector(".display-label");
const buttons = document.querySelectorAll(".btn");
const operators = ["*", "+", "-", "/", "^"];
let operator = "";
let previousInput = "";
let currentInput = "";
let isResultDisplayed = false;
let result = "";


buttons.forEach((button) => {
    button.addEventListener("click", function(){
        console.log('click');
        if (!operators.includes(button.textContent) && button.textContent !== "=") {
            if (isResultDisplayed) {
                display.textContent = "";
                isResultDisplayed = false;
            }
            
            if (button.textContent.includes(".") && display.textContent.includes(".")) {
                return;
            }
        }
        if(operators.includes(button.textContent)){
            if(!isResultDisplayed){
                display.textContent = "";
                previousInput = currentInput;
                currentInput = "";
                operator = button.textContent;
            }else{
                previousInput = result;
                currentInput = "";
                operator = button.textContent;
                display.textContent = "";
            }
        }else if(button.textContent === "="){
            if (previousInput === "" || currentInput === "" || operator === "") {
                return;
            }
            console.log(previousInput);
            console.log(currentInput);
            isResultDisplayed = true;
            result = operate(Number(previousInput), operator, Number(currentInput));
            previousInput = result.toString();
            currentInput = "";
        }
        if(!operators.includes(button.textContent) && button.textContent != "="){
            if(button.textContent.includes(".") && display.textContent.includes(".")){
                console.log("includes")
                return
            }
            display.textContent = display.textContent + button.textContent;
            currentInput = currentInput + button.textContent;
        }
    });
});

function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        return "Can't divide by zero.";
    }else{
        return a / b;
    }
}

function power(a, b){
    return a ** b;
}

function operate(a, operator, b){
    console.log("operating")
    let result;
    if(operator === "+"){
        result = add(a, b);
    }else if(operator === "-"){
        result = substract(a, b);
    }else if(operator === "*"){
        result = multiply(a, b);
    }else if(operator === "/"){
        result = divide(a, b);
    }else if(operator === "^"){
        result = power(a, b);
    }
    display.textContent = result;
    return result;
}

function clearButton(){
    display.textContent = "";
    operator = "";
    previousInput = "";
    currentInput = "";
}

function toggleSign(){
    display.textContent = currentInput * -1;
    currentInput = currentInput * -1;
}
