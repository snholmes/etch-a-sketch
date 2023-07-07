var gridHeight = 16;
var gridWidth = 16;
const container = document.querySelector('#grid-container');

// Random Color Function
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    color.push(1);
    return 'rgba(' + color.join(', ') + ')';
}

// Create Grid Function
function generateGrid() {
    container.innerHTML = '';
    for (let i = 0; i < gridHeight * gridWidth; i++) {
        let box = document.createElement('div');
        box.setAttribute('id', 'card-styles');
        container.appendChild(box);
        box.addEventListener('mouseover', function() {

            // Check if box already has a background color
            if (window.getComputedStyle( box ).backgroundColor !== 'rgba(0, 0, 0, 0)') {
                
                let rgbValues = window.getComputedStyle(box).backgroundColor.match(/[\d.]+/g);
                let alphaValue;
                let newAlphaValue;

                // Check if RGB includes an alpha value (determines transparency)
                if (rgbValues.length < 4) {
                    newAlphaValue = 0.9;
                    rgbValues.push(newAlphaValue);

                // If it does, reduce by 10%
                } else {
                    alphaValue = parseFloat(rgbValues[3]);
                    newAlphaValue = Math.max(alphaValue - 0.10, 0); // Use 'Math.max()' to ensure the alpha value does not go below 0
                }

                box.style.backgroundColor = `rgba(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]},${newAlphaValue})`;

            // Add background color if box does not have one
            } else {
                box.style.backgroundColor = randomColor();
            } 
        });
    }
}

// Initial grid generation
generateGrid();

// Button prompt to change width and height of grid
const changeGridSizeButton = document.querySelector('#change-grid-size');
changeGridSizeButton.addEventListener('click', function() {
    let newGridHeight = parseInt(prompt("Enter height (limit 100):", gridHeight));
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