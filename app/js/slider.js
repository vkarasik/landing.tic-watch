window.addEventListener('DOMContentLoaded', function () {

    var slider = document.querySelector('.slider__inner');

    if(slider == null) return;

    // Define inner width
    var innWidth = slider.parentElement.clientWidth * (slider.children.length + 2);
    slider.style.width = innWidth + 'px';

    // Define background and slide width
    for(i = 0; i < slider.children.length; ++i){
        slider.children[i].style.backgroundImage = 'url(' + slider.children[i].dataset.background + ')';
        slider.children[i].style.width = slider.parentElement.clientWidth + 'px';
    }

    // Create dot switchers
    for (i = 0; i < slider.children.length; ++i) {
        var dot = document.createElement('span');
        dot.classList.add('slider__dot','abc');
        dot.setAttribute('data-position', i + 1);
        dot.addEventListener('click', function (e) {
            counter = e.target.dataset.position;
            slider.style.transition = 'transform 0.5s';
            slider.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
        });
        document.querySelector('.slider__dots').appendChild(dot);
    }

    // Create clone slides
    var firstSlideClone = slider.firstElementChild.cloneNode(true);
    var lastSlideClone = slider.lastElementChild.cloneNode(true);
    lastSlideClone.id = 'clone-last';
    firstSlideClone.id = 'clone-first';
    document.querySelector('.slider__inner').appendChild(firstSlideClone);
    document.querySelector('.slider__inner').insertBefore(lastSlideClone, slider.firstElementChild);


    var imgSize = slider.children[0].clientWidth;
    var counter = 1;

    // Set slider left on 1 slide
    slider.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';


    // Switchers
    var switchNext = document.querySelector('.slider__switch_next');
    var switchPrev = document.querySelector('.slider__switch_prev');

    switchNext.addEventListener('click', function () {
        if (counter >= slider.children.length - 1) return;
        counter++;
        slider.style.transition = 'transform 0.5s';
        slider.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
    })

    switchPrev.addEventListener('click', function () {
        if (counter <= 0) return;
        counter--;
        slider.style.transition = 'transform 0.5s';
        slider.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
    })

    slider.addEventListener('transitionend', function () {
        if (slider.children[counter].id == 'clone-last') {
            slider.style.transition = '';
            counter = slider.children.length - 2;
            slider.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
        } else if (slider.children[counter].id == 'clone-first') {
            slider.style.transition = '';
            counter = slider.children.length - counter;
            slider.style.transform = 'translateX(' + (-imgSize * counter) + 'px)';
        }
    })
})