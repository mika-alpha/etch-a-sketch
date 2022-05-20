let container = document.querySelector('.main');
let sizeButton = document.getElementById('size');
let cells;
let randomColor = [];
let brightness = 101;


function createRandomColor(){
    randomColor[0] = Math.floor(Math.random() * 255);
    randomColor[1] = Math.floor(Math.random() * 255);
    randomColor[2] = Math.floor(Math.random() * 255);
    brightness -= 1;
}

function modifyGridSize(){
    container.replaceChildren();
    let newSize = Number(window.prompt("Type a desired size that is less than 100: ", ""));
    if (newSize > 100 || newSize <= 0){
        alert("Invalid size");
        return;
    }
    createGrid(newSize);
    addCellListener();
    brightness = 110;
}

/*create rows, create columns, then add the columns to the rows,
then add the rows to the grid */

function createGrid(x = 16){
    for (let i = 0; i < x; i++){
        let row = document.createElement('div');
        row.classList.add(`row`);
        for (let j = 0; j < x; j++){
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
        container.appendChild(row);
    }
    addCellListener();
}

createGrid();

function addCellListener(){
    cells = Array.from(document.getElementsByClassName('column'));
    cells.forEach(cell => cell.addEventListener('mouseenter',hover));
}


function hover(e){
    createRandomColor();
    e.target.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
    e.target.style.filter = `brightness(${brightness}%)`;
}

sizeButton.addEventListener('click', modifyGridSize);
