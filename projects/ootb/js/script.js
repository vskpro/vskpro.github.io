$(document).ready(function(){

    $('.nav-toggler').on('click',function(){
        $(this).addClass('hide');
        $('.nav-overlay').addClass('open').addClass('flipInY').removeClass('flipOutY');
        $('.nav-content > a').addClass('shake');
    });

    $('.close-nav').on('click',function(){
        $('.nav-overlay').removeClass('open').removeClass('flipInY').addClass('flipOutY');
        $('.nav-toggler').removeClass('hide');
        $('.nav-content > a').removeClass('shake');
    });

    $('.stretch-div').on('click',function(e){
        
        e.preventDefault();
        
        var popUpName = $(this).attr("data-popup");
        
        $('.sec-pop-up.'+popUpName).css({ 'left': '0', 'opacity': '1' });

    });

    $('.close-pop-up').on('click',function(e){
        e.preventDefault();

        $(this).parent().css({"left":"-100%", 'opacity': '0'});

    });


});