let acceptKeys = ['1','2','3','4','5','6','7','8','9','0', '.', 'e', 'E'];
let operators = ['+', '-', '*', '/'];
let prevInput = "";
let operator = "";
let input = "";
let prevKey = "";

//button listeners
document.addEventListener("keydown", function(e){
    if (acceptKeys.includes(e.key)){
        appendNum(e.key);
    }
    if (e.key == 'Backspace'){
        deleteNum();
    }

    if (e.key == 'Enter' || e.key == '='){
        equal();
    }

    if (e.key == 'Escape'){
        reset();
    }

    if (operators.includes(e.key)){
        insertOperator(e.key);
    }
});

function setDisplay(string){
    let display = document.querySelector('.display');
    display.innerHTML = string;
}

function clearInput(){
    input = "";
}

function calculate(input1, input2, operator){
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
    writeHistory(x, y, operator, result.toPrecision(3));
    return String(result);
}

function clear(){
    input = "";
    prevInput = "";
}

function writeHistory (input1, input2, operator, result){
    let y = input2.toPrecision(5);
    let x = input1.toPrecision(5);
    let string  = y + ' ' + operator + ' ' + x + ' = ' + result;
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
    if (prevKey == 'Enter' || prevKey == '='){
        clearInput();
    }
    if (operators.includes(prevKey)){
        prevInput = input;
        clearInput();
    }
    if (e.toLowerCase() == 'e' && !acceptKeys.includes(prevKey)) {return};

    input += e;
    setDisplay(input);
    prevKey = e;
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
    setDisplay(operator);
    prevKey = operator;
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

const enterBtn = document.querySelector('.equal');
enterBtn.addEventListener('click', equal);


const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', function() {
    appendNum(number.textContent);
}))

const operBtns = document.querySelectorAll('.operator');
operBtns.forEach(operand => operand.addEventListener('click',function(){
    insertOperator(operand.textContent);
}));
