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

    // Change Feature Color
    $('.features__switchers span').on('click', function(){
        alert(2);
        
    })
});