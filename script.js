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
            previousValue += currentValue;
            break;
        case "-":
            previousValue -= currentValue;
            break;
        case "x":
            previousValue *= currentValue;
            break;
        case "÷":
            previousValue /= currentValue;
            break;
    }
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}