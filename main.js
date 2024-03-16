let userNumber1 = ""
let userNumber2 = ""
let userOperator = ""
let display = 0
let result = 0

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

function updateDisplay(){
    display = userNumber1 + " " + userOperator + " " + userNumber2
    return content.textContent = (display);
}

function appendOrReplace(input){
    if (userNumber1 === 0){
        userNumber1 = input.toString();
    }
    else{
        userNumber1 += input.toString();
    }

}

const disp = document.querySelector('#display')

const content = document.createElement('div')
content.classList.add('content')
content.textContent = (display)
disp.appendChild(content);



const one = document.querySelector('#one')
one.addEventListener('click', () =>{
    appendOrReplace(1);
    updateDisplay();
    console.log(userNumber1)
})
const two = document.querySelector('#two')
two.addEventListener('click', () =>{
    appendOrReplace(2);
    updateDisplay();
    console.log(userNumber1)
})
const three = document.querySelector('#three')
three.addEventListener('click', () =>{
    appendOrReplace(3);
    updateDisplay();
    console.log(userNumber1)
})
const four = document.querySelector('#four')
four.addEventListener('click', () =>{
    appendOrReplace(4);
    updateDisplay();
    console.log(userNumber1)
})
const five = document.querySelector('#five')
six.addEventListener('click', () =>{
    appendOrReplace(6);
    updateDisplay();
    console.log(userNumber1)
})
const seven = document.querySelector('#seven')
seven.addEventListener('click', () =>{
    appendOrReplace(7);
    updateDisplay();
    console.log(userNumber1)
})
const eight = document.querySelector('#eight')
eight.addEventListener('click', () =>{
    appendOrReplace(8);
    updateDisplay();
    console.log(userNumber1)
})
const nine = document.querySelector('#nine')
nine.addEventListener('click', () =>{
    appendOrReplace(9);
    updateDisplay();
    console.log(userNumber1)
})
const zero = document.querySelector('#zero')
zero.addEventListener('click', () =>{
    appendOrReplace(0);
    updateDisplay();
    console.log(userNumber1)
})


const divideBtn = document.querySelector('#divide')
divideBtn.addEventListener('click', () =>{
    userOperator = "÷";
    updateDisplay();
})
const addBtn = document.querySelector('#add')
addBtn.addEventListener('click', () =>{
    userOperator = "+";
    updateDisplay();
})
const minusBtn = document.querySelector('#minus')
minusBtn.addEventListener('click', () =>{
    userOperator = "-";
    updateDisplay();
})
const multiplyBtn = document.querySelector('#multiply')
multiplyBtn.addEventListener('click', () =>{
    userOperator = "*";
    updateDisplay();
})
