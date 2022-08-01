const board = document.getElementById('board');
const colors = ['#84fc03', '#2e5870', '#7b499e', '#88288f', '#75c793','#661739','#cfa044','#d93f1c'];
const SQUARE_NUMBER = 13**2;

for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}

function setColor(element) {
    let color = getColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 4px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `none`;
}
function getColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}