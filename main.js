var gridHeight = 16;
var gridWidth = 16;
const container = document.querySelector('#grid-container');

// Create Grid Function
function generateGrid() {
    container.innerHTML = '';
    for (let i = 0; i < gridHeight * gridWidth; i++) {
        let box = document.createElement('div');
        box.setAttribute('id', 'card-styles');
        container.appendChild(box);
        console.log("box added");
        box.addEventListener('mouseover', function() {
            box.style.backgroundColor = 'black';
            console.log(box.style.backgroundColor);
        });
    }
}

// Initial grid generation
generateGrid();

// Button prompt to change width and height of grid
const changeGridSizeButton = document.querySelector('#change-grid-size');
changeGridSizeButton.addEventListener('click', function() {
    let newGridHeight = parseInt(prompt("Enter height:", gridHeight));
    let newGridWidth = parseInt(prompt("Enter width (limit 100):", gridWidth));

    if (!isNaN(newGridHeight) && newGridHeight <= 100) {
        gridHeight = newGridHeight;
    } 
    if (!isNaN(newGridWidth) && newGridWidth <= 100) {
        gridWidth = newGridWidth;
        let container = document.querySelector("#grid-container");
        container.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
    }

    // re-generate the grid with new height and width
    generateGrid();
});