const startBtn = document.getElementById('start');
const screens  = document.querySelectorAll('.screen');
const timeList = document.getElementById('time-list');
const timeEl = document.getElementById('time');
const board = document.getElementById('board');
const colors = ['#84fc03', '#2e5870', '#7b499e', '#88288f', '#75c793','#661739','#cfa044','#d93f1c'];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
       time = parseInt(event.target.dataset.time);
       startGame();
    }
})
board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    screens[1].classList.add('up');
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
    if (current < 10) {
        current = `0${current}`;
    }
    setTime(current);
    }
}
function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}
function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`;
}
function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width-size-20);
    const y = getRandomNumber(0, height-size-20);

    circle.style.top = `${x}px`;
    circle.style.left = `${y}px`;

    circle.classList.add('circle');
    circle.style.width = `${size+20}px`;
    circle.style.height = `${size+20}px`;
    circle.style.background = `${getBackground()}`;
    board.append(circle);
}
function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function getBackground() {
    return colors[Math.floor(Math.random() * colors.length)];
}
/* cheat */
function maxScore() {
    function kill() {
    const circle = document.querySelector('.circle');
    if (circle) {
        circle.click();
    }
}
    setInterval(kill, 50); //частота вызова ф-ции (50 мс)
}