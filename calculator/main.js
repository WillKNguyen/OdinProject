var acceptKeys = ['1','2','3','4','5','6','7','8','9','0'];
var operators = ['+', '-', '*', '/'];
var prevInput = "";
var operator = "";
var input = "";
var prevKey = "";

//button listeners
document.addEventListener("keydown", function(e){
    if (acceptKeys.includes(e.key)){
        appendNum(e.key);
    }
    if (e.key == 'Backspace'){
        deleteNum();
    }

    if (e.key === 'Enter' || e.key === '='){
        equal();
    }

    if (e.key == 'Escape'){
        reset();
    }

    if (operators.includes(e.key)){
        insertOperator(e.key);
    }
    console.log(e.key);
    prevKey = e.key;
});

function setDisplay(string){
    let display = document.querySelector('.display');
    display.innerHTML = string;
}

function clearInput(){
    input = "";
}

function calculate(input1, input2, operator){
    console.log(input1, input2, operator);
    let result = 0
    let x = Number(input1);
    let y = Number(input2);

    switch (operators.indexOf(operator)) {
        case 0:
            result = x + y;
            break;
        case 1:
            result = y - x;
            break;
        case 2:
            result = y * x;
            break;
        case 3:
            result = y / x;
            break;
        default:
            break;
    }
    writeHistory(input1, input2, operator, result);
    return String(result);
}

function clear(){
    input = "";
    prevInput = "";
}

function writeHistory (input1, input2, operator, result){
    let string  = input2 + ' ' + operator + ' ' + input1 + ' = ' + result;
    let results = document.querySelector('.results');
    let entry = document.createElement('div');
    entry.innerHTML = string;
    results.appendChild(entry);
}

function clearHistory() {
    let results = document.querySelector('.results');
    results.innerHTML = '';
}

function appendNum(e) {
    if (prevKey === 'Enter' || prevKey === '='){
        clearInput();
    }
    if (operators.includes(prevKey)){
        prevInput = input;
        clearInput();
    }
    input += e;
    setDisplay(input);
}

function deleteNum(){
    input = input.slice(0,input.length-1);
    setDisplay(input);
    if (input.length == 0){
        setDisplay('0');
    }
}

function reset(){
    clear();
    clearHistory();
    setDisplay('0');
}

function insertOperator(e){
    operator = e;
    setDisplay(e);
    prevKey = e;
}

function equal() {
    prevKey = 'Enter';
    if (prevInput !== ""){
        prevInput = calculate(input, prevInput, operator);
        setDisplay(prevInput);
    }
}

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', reset);

const delBtn = document.querySelector('.delete');
delBtn.addEventListener('click', deleteNum);

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', function(e) {
    insertOperator('+');
});

const minusBtn = document.querySelector('.minus');
minusBtn.addEventListener('click', function(e) {
    insertOperator('-');
});

const multBtn = document.querySelector('.mult');
multBtn.addEventListener('click', function(e) {
    insertOperator('*');
});

const divBtn = document.querySelector('.divide');
divBtn.addEventListener('click', function(e) {
    insertOperator('/');
});

const enterBtn = document.querySelector('.equal');
enterBtn.addEventListener('click', equal);


const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', function(e) {
    appendNum(number.textContent);
} ));


