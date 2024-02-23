const clearBtns = document.querySelectorAll(".clearBtn button");
const operatorButtons = document.querySelectorAll(".operator");

const numbers = document.querySelectorAll(".numbers");
const decimal = document.querySelector(".decimal");
const evaluate = document.getElementById("evaluate");

let screen = document.querySelector(".display");

let previousValue = "", currentValue = "", operator = "";

numbers.forEach(number => number.addEventListener("click", function (e){
    handleNumbers(e.target.textContent);
    screen.textContent = currentValue;
})
)

operatorButtons.forEach(operator => operator.addEventListener("click", (e) => {
    handleOperator(e.target.textContent);
}))

clearBtns.forEach(button => button.addEventListener("click", (e) => {
    let event = e.target.name;
    if (event === "reset"){
        previousValue = "";
        currentValue = "";
        operator = "";
        screen.textContent = currentValue;
    }
}))

evaluate.addEventListener("click", () => {
    calculate();
    screen.textContent = previousValue;
})

decimal.addEventListener("click", () => {
    addDecimal();
})

function handleNumbers(num){
    currentValue += num;
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    switch (operator){
        case "+":
            add()
            break;
        case "-":
            subtract();
            break;
        case "x":
            multiply();
            break;
        case "÷":
            divide();
            break;
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num * 100) / 100;
}

function addDecimal(){
    if (!currentValue.includes(".")){
        currentValue += ".";
    }
}

function add(){
    previousValue += currentValue;
}

function subtract(){
    previousValue -= currentValue;
}

function multiply(){
    previousValue *= currentValue;
}

function divide(){
    previousValue /= currentValue;
}