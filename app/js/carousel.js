window.onload = function () {

    initCarousel();

    function caruselManualMover(e) {

        var slideHolder = document.getElementById('carousel__slide-holder');
        var firstSlide = slideHolder.firstElementChild;
        var lastSlide = slideHolder.lastElementChild;

        // Left arrow
        if (e.target.id === 'carousel__switcher_left') {
            
            // Slide for move
            firstSlide.nextElementSibling.style.marginLeft = -(firstSlide.width) + 'px';

            function moveSlideToEnd(){
                slideHolder.appendChild(firstSlide);
                slideHolder.lastElementChild.style = "";
                this.removeEventListener('transitionend', moveSlideToEnd);
            }
            
            firstSlide.nextElementSibling.addEventListener('transitionend', moveSlideToEnd);
        }

        // Right arrow
        else if (e.target.id === 'carousel__switcher_right') {
            
            firstSlide.style.marginLeft = '0px';
        
            function moveSlideToBeginning(){
                lastSlide.style.display = 'none';
                slideHolder.insertBefore(lastSlide, firstSlide);
                slideHolder.firstElementChild.style = "display: inline; margin-left:" + (-firstSlide.width) + "px";
                //slideHolder.firstElementChild.style.marginLeft = -(firstSlide.width) + 'px';
                //slideHolder.firstElementChild.style.display = '';
                this.removeEventListener('transitionend', moveSlideToBeginning);
            }

            firstSlide.addEventListener('transitionend', moveSlideToBeginning); 
        }
    }


    function initCarousel() {
        // Get array of images
        var images = document.getElementsByClassName('carousel__item');

        // Set number of slides
        var numberImg = 5;

        // Calculate image width
        var currentWinWidth = window.innerWidth;
        var imgWidth = currentWinWidth / numberImg;
        for (i = 0; i < images.length; ++i) {
            images[i].width = imgWidth;
        }

        // Set width of slide's holder
        var carousel = document.getElementById('carousel__slide-holder');
        carousel.style = 'width:' + Math.round(imgWidth * images.length) + 'px';

        // Set first image outside visible area
        carousel.children[0].style.marginLeft = -imgWidth + 'px';

        // Add eventListeners to switchers
        var switchers = document.getElementsByClassName('carousel__switcher');
        for (i = 0; i < switchers.length; i++) {
            switchers[i].addEventListener('click', caruselManualMover);
        }
    }
}