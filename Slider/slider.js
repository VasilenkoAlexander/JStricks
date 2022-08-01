// Получаем в константу кнопки
// Получаем в константу sidebar
// Получаем в константу container
// Получаем mainSlide, div в mainSlide
    // sidebar - style top - количсество слайдов * vh
// Вешаем клик на кнопки
// changeSlide(direction), if ('up') if ('down')
// Активный слайд
// Получаем высоту container
// стилизация mainSlide - translateY

const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const side = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
let slides = mainSlide.querySelectorAll('div').length;

side.style.top = `-${(slides - 1) * 100}vh`;
let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});
downBtn.addEventListener('click', () => {
    changeSlide('down');
});
/* Переключение с помощью кнопок */
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp'){
        changeSlide('up');
    } else if (event.key === 'ArrowDown'){
        changeSlide('down');
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slides) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slides - 1;
        }
    }
    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    side.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

