let container = document.querySelector('.main');
let sizeButton = document.getElementById('size');
let cells;

function modifyGridSize(){
    container.replaceChildren();
    let newSize = Number(window.prompt("Type a desired size that is less than 100: ", ""));
    if (newSize > 100 || newSize <= 0){
        alert("Invalid size");
        return;
    }
    createGrid(newSize);
    addCellListener();
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
    e.target.classList.add('hovered');
}

sizeButton.addEventListener('click', modifyGridSize);
