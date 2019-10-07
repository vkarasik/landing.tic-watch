$(function () {

    // Menu
    $('.header__burger').on('click', function (e) {
        $('.header__submenu').stop(true, true).slideToggle();

        var host = window.location.origin;

        if ($(e.target).attr('src') == '/img/icon_burger.svg') {
            $(e.target).attr('src', host + '/img/icon_cancel.svg')
        } else {
            $(e.target).attr('src', '/img/icon_burger.svg')
        }
    })

    // Shop Logo
    $('.shop').hover(function () {
        $(this).find('.shop__overlay').stop(true, true).slideToggle()
    }, function () {
        $(this).find('.shop__overlay').stop(true, true).slideToggle()
    })

    // Overlay video
    $('.video__button').on('click', function () {
        $('.overlay').fadeIn().on('click', function () {
            $(this).fadeOut();
        });
    })

    // Model SE banner bg switcher
    $('.banner__selector').on('click', function () {
        $(this).siblings().removeClass('banner__selector_active');
        $(this).addClass('banner__selector_active');

        var currentWidth = $(this)[0].offsetParent.offsetParent.offsetWidth;

        if (currentWidth > 768) {
            var background = 'url(' + $(this).attr('data-background-lg') + ')';
            $('.banner_ticwatch-se').css('background-image', background);
        }
        else{
            var background = 'url(' + $(this).attr('data-background-sm') + ')';
            $('.banner_ticwatch-se').css('background-image', background);
        }
    })

    $('.features__switch').on('click', function(e){
        var nextBackground = e.target.dataset.color;
        var nextImage = 'url('+ e.target.dataset.img +')';

        if(nextBackground == '#F8F8F8'){
            $('.feature__text').addClass('feature__text_color_dark');
            $('.features__head').addClass('feature__text_color_dark');
        }
        else{
            $('.feature__text').removeClass('feature__text_color_dark');
            $('.features__head').removeClass('feature__text_color_dark');
        }

        $('.features')[0].style.background = nextBackground;

        $('.features__bg').animate({left: '-100%'}, 200, 'linear', function(){
            $(this).css({background: nextBackground, left: 0});
        });

        $('.photo').fadeOut(100, function(){
            $(this).css({'background-image': nextImage}).fadeIn(100);
        });

    })
});