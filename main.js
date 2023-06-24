const numOfBoxes = 256;
const container = document.querySelector('#grid-container');
for (let i = 0; i < numOfBoxes; i++) {
    var box = document.createElement('div');
    box.setAttribute('id', 'card-styles');
    container.appendChild(box);
    console.log("box added");

    box.addEventListener('mouseover', function() {
        box.style.backgroundColor = 'black';
        console.log(box.style.backgroundColor);
    });
}