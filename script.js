const display = document.querySelector(".display-label");
const buttons = document.querySelectorAll(".btn");
const operators = ["*", "+", "-", "/", "^"];
let operator = "";
let previousInput = "";
let currentInput = "";
let isResultDisplayed = false;


buttons.forEach((button) => {
    button.addEventListener("click", function(){
        console.log('click');
        if(isResultDisplayed){
            display.textContent = ""
            operator = ""
            previousInput = ""
            currentInput = ""
            isResultDisplayed = false
        }
        if(operators.includes(button.textContent)){
            display.textContent = "";
            previousInput = currentInput;
            currentInput = "";
            operator = button.textContent;
        }else if(button.textContent === "="){
            console.log(previousInput);
            console.log(currentInput);
            isResultDisplayed = true;
            operate(Number(previousInput), operator, Number(currentInput));
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
    if(operator === "+"){
        return display.textContent = add(a, b);
    }else if(operator === "-"){
        return display.textContent = substract(a, b);
    }else if(operator === "*"){
        return display.textContent = multiply(a, b);
    }else if(operator === "/"){
        return display.textContent = divide(a, b);
    }else if(operator === "^"){
        return display.textContent = power(a, b);
    }
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
