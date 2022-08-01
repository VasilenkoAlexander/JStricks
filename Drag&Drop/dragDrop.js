// Получаем элемент для перетаскивания
// dragable = true
// События dragstart and dragend
// Создаем функции для событий
    // Добавляем класс hold и убираем его в dragend
    // Добавляем класс hide через setTimeout и убираем его в dragend
// Получаем массив placeholder
    // Вешаем события dragover dragenter dragleave drop
    // Создаем функции для событый
    // hovered - клас для dragenter удаляем для leave
    // dragdrop - вставка обьекта item, удалить border
    // dragover - preventDefault

const block = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

block.addEventListener('dragstart', dragStart);
block.addEventListener('dragend', dragEnd);

function dragStart(event) {
    event.target.classList.add('hold');
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
    event.target.innerHTML = 'Отпусти меня';
}
function dragEnd(event) {
    event.target.innerHTML = 'Перетащи меня';
    event.target.classList.remove('hold', 'hide');
}

placeholders.forEach((el) => {
    el.addEventListener('dragover', dragOver);
    el.addEventListener('dragenter', dragEnter);
    el.addEventListener('dragleave', dragLeave);
    el.addEventListener('drop', dragDrop);
});

function dragOver(event){
    event.preventDefault();
};
function dragEnter(event){
    event.target.classList.add('hovered');
};
function dragLeave(event){
    event.target.classList.remove('hovered');
};
function dragDrop(event){
    event.target.classList.remove('hovered');
    event.target.append(block);
};