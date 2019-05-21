$(function () {
    
    // Menu
    $('.header__burger').on('click', function(e){
        $('.header__submenu').stop(true, true).slideToggle();

        var host = window.location.origin;

        if($(e.target).attr('src') == '/img/burger.svg'){
            $(e.target).attr('src', host + '/img/cancel.svg')
        }
        else{
            $(e.target).attr('src', '/img/burger.svg')
        }
    })

    // Shop Logo
    $('.shop').hover(function(){
        $(this).find('.shop__overlay').stop(true, true).slideToggle()
    }, function(){
        $(this).find('.shop__overlay').stop(true, true).slideToggle()
    })

    // Overlay video
    $('.video__button').on('click', function(){
        $('.overlay').fadeIn().on('click', function(){
            $(this).fadeOut();
        });
    })
});