function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

let firstNum, lastNum, operator;

function operate(firstNum,lastNum,operator){
    switch(operator){
        case "+":
            result = add(firstNum,lastNum);
            break;
        case "-":
            result = subtract(firstNum,lastNum);
            break;
        case "*":
            result = multiply(firstNum,lastNum);
            break;
        case "/":
            result = divide(firstNum,lastNum);
            break;
    }
    return result;
}

const numbers = document.querySelectorAll(".numbers");
const displayResult = document.querySelector(".display");
const evaluate = document.getElementById("evaluate");

//Clear Buttons

const clearBtns = document.querySelectorAll(".clearBtn button");

clearBtns.forEach(item => {
    item.addEventListener('click', (e) => {
        let event = e.target.name;
        if (event === "reset"){
            displayResult.textContent = "0";
        } else if (event === "backspace"){
            displayResult.textContent = displayResult.textContent.slice(0,-1);
        }
    })
})

// console.log(clearBtns);
// console.log(numbers);
// numbers.forEach(item => {
//     item.addEventListener('click', (e) => {
//         const num = e.target.textContent; 
//         appendToDisplay(num);
//         console.log(e.target.textContent);
//     })
// })

function appendToDisplay(num){
    displayResult.textContent += num;
}

