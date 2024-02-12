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