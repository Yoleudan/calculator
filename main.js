let userNumber1 = 6
let userNumber2 = 3
let userOperator = 0

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(){
    if (userOperator === "+"){
        return add(userNumber1, userNumber2);
    }
    else if(userOperator === "-"){
        return subtract(userNumber1, userNumber2);
    }
    else if(userOperator === "*"){
        return multiply(userNumber1, userNumber2);
    }
    else if(userOperator === "/"){
        return divide(userNumber1, userNumber2);
    }
    else{
        return alert("error")
    }
    
}
