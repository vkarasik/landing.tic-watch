$(function () {
    
    // Menu
    $('.header__burger').on('click', function(e){
        $('.header__submenu').stop(true, true).slideToggle();

        if($(e.target).attr('src') == 'img/burger.svg'){
            $(e.target).attr('src', 'img/cancel.svg')
        }
        else{
            $(e.target).attr('src', 'img/burger.svg')
        }
    })

});