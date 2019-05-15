$(function () {
    $('#products').parent().on('mouseenter', function () {
        $('.header__subnav').stop(true, true).slideDown();
    })

    $('.header__subnav').on('mouseleave', function () {
        $('.header__subnav').stop(true, true).slideUp();
    })

    

});