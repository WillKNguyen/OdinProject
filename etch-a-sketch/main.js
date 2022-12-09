var canvas = document.getElementById('canvas');

var slider = document.getElementById('myRange');
var output = document.getElementById("output");
output.innerHTML = slider.value;
var timer = null;

var colorSelect = document.getElementById('color')
var color = colorSelect.value;
var rainbow = false;

var colorBtn = document.querySelector('.color');
colorSelect.oninput = () => {
    rainbow = false;
    color = document.getElementById('color').value;
};
colorBtn.onclick = () => {
    rainbow = false;
    color = document.getElementById('color').value;
};

var rainbow = document.querySelector('.rainbow');
rainbow.onclick = () => {
    rainbow = true;
};

var eraser = document.querySelector('.erase');
eraser.onclick = () => {
    rainbow = false;
    color = 'white';
};

createCanvas(slider.value);

slider.oninput = function() {
    size = this.value;
    output.innerHTML = size + "x" + size;
    createCanvas(size);
}

function createCanvas(size) {
    clearCanvas();

    let numBlocks = size * size;
    var width = 500;
    var height = 500;
    console.log(width, height);

    let container = document.createElement("div");
    container.id = "container";
    container.style.width = width + "px";
    container.style.height = height + "px";
    container.style.display = "flex";
    container.style.flexWrap = "wrap";

    for (let i = 1; i <= numBlocks; i++){
        let block = document.createElement('div')
        block.style.width = (width)/size + "px"; //remove 2 once we take out the border
        block.style.height = height / size + "px";


        block.addEventListener('mouseover', changeColor);
        block.addEventListener('mousedown', changeColor)

        container.appendChild(block);
    }
    canvas.appendChild(container);
}

function clearCanvas(){
    let container = document.getElementById("container");
    if (document.contains(container)){
        container.remove();
    }
}

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return;
    if (rainbow == true){
        e.target.style.backgroundColor = "rgb("+rgb()+","+rgb()+","+rgb()+")";
    }
    else{
        e.target.style.backgroundColor = color;
    }
}

function rgb(){
    return Math.floor(Math.random() * 255);
}

var clear = document.querySelector('.clear');
clear.addEventListener('click', function(e){
    createCanvas(slider.value);
});



