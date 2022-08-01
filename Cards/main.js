function slidesPlugin(activeSlide = 0) {
    const allSlide = document.querySelectorAll('.slide');

    allSlide[activeSlide].classList.add('active');

    allSlide.forEach(el => {
        el.addEventListener('click', function(){
            clear();
            el.classList.add('active');
        })
    })
    
    function clear() {
        allSlide.forEach(el => {
            el.classList.remove('active');
        })
    }
}
slidesPlugin(2);