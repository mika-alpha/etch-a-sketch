let container = document.querySelector('.main');

/*create columns, create rows, then add the columns to the rows,
then add the rows to the grid */


function createGrid(){
    for (let i = 0; i < 16; i++){
        let row = document.createElement('div');
        row.classList.add(`row`);
        for (let j = 0; j < 16; j++){
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}


createGrid();

let cells = Array.from(document.getElementsByClassName('column'));

cells.forEach(cell => cell.addEventListener('mouseenter',hover));

function hover(e){
    e.target.classList.add('hovered');
}
