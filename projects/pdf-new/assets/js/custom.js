$(document).ready(function () {

    $(window).load(function () {

        // REMOVE TIMEOUT FUNCTION IN PRODUCTION
        // AND BRING THE LINE INSIDE THE FUNCTION, OUT!
        $('.preloader').fadeOut('slow');

        setTimeout(function () {
            $('.preloader').fadeOut('slow');
        }, 3000);


    });

    // CARAOUSEL STYLES

    $('.mobile-menu-toggler').on('click', function () {

        // slide the mobile menu from the right side
        // show the clos button
        // show the overlay

        $('.mobile-overlay').css({ 'display': 'block' });
        $('.menu-wrapper>.my-nav').css({ 'right': '0px' });
        $('.close-mobile-menu').css({ 'right': '15px' });


    });

    $('.mobile-overlay').on('click', function () {

        // slide the mobile menu from the right side
        // show the clos button
        // show the overlay

        $('.mobile-overlay').css({ 'display': 'none' });
        $('.menu-wrapper>.my-nav').css({ 'right': '-100%' });
        $('.close-mobile-menu').css({ 'right': '-100%' });

    });

    $('.close-mobile-menu').on('click', function () {

        // slide the mobile menu from the right side
        // show the clos button
        // show the overlay

        $('.mobile-overlay').css({ 'display': 'none' });
        $('.menu-wrapper>.my-nav').css({ 'right': '-100%' });
        $('.close-mobile-menu').css({ 'right': '-100%' });

    });

    $('#video-tag').on('click', function () {

        var url = $('#popUpVideoPlayer').attr('src');

        if (url.search('&autoplay=') < 0) {
            url = url + '&autoplay=1';
        }

        var autoplayOn = url.replace("&autoplay=0", "&autoplay=1");

        //Then assign the src to null, this then stops the video been playing
        $('#popUpVideoPlayer').attr('src', '');

        // Finally you reasign the URL back to your iframe, so when you hide and load it again you still have the link
        $('#popUpVideoPlayer').attr('src', autoplayOn);


        $('#video-popup').addClass('show');

    });

    $('.video-close').on('click', function () {

        //First get the  iframe URL
        var url = $('#popUpVideoPlayer').attr('src');

        var autoplayOff = url.replace("&autoplay=1", "&autoplay=0");

        //Then assign the src to null, this then stops the video been playing
        $('#popUpVideoPlayer').attr('src', '');

        // Finally you reasign the URL back to your iframe, so when you hide and load it again you still have the link
        $('#popUpVideoPlayer').attr('src', autoplayOff);

        $('#video-popup').removeClass('show');
        $('#video-popup').addClass('hide');

        // SHOW THE VISITOR PET DETAILS POP UP 

        $('#visitorDataModal').modal();

    });

    $('.login-link').on('click', function () {

        var toActiveItem = $(this).attr('data-logintype');

        console.log(toActiveItem);

        $('.login-item.active').removeClass('active');

        $('.' + toActiveItem + '-section').addClass('active');

        // Add active class to checkout-link with data-checkout attr

        $('.login-link.active').removeClass('active');

        $(".login-link[data-logintype='" + toActiveItem + "']").addClass('active');
    });

    $('.forgot-password').on('click', function () {
        // hide login-wrapper
        // show forgot-password-wrapper

        $('.login-wrapper').addClass('hide');
        $('.forgot-password-wrapper').removeClass('hide');

    });

    $('.go-to-login-wrapper').on('click', function () {
        $('.login-wrapper').removeClass('hide');
        $('.forgot-password-wrapper').addClass('hide');
    });


    $('.show-login').on('click', function () {

        $('#loginRegModal').modal();
        $('.login-item.active').removeClass('active');
        $('.login-section').addClass('active');

        $('.login-link.active').removeClass('active');

        $(".login-link[data-logintype='login']").addClass('active');

        $('.login-wrapper').removeClass('hide');
        $('.forgot-password-wrapper').addClass('hide');

    });

    $('.show-register').on('click', function () {

        $('#loginRegModal').modal();

        $('.login-item.active').removeClass('active');
        $('.register-section').addClass('active');

        $('.login-link.active').removeClass('active');

        $(".login-link[data-logintype='register']").addClass('active');

        $('.login-wrapper').removeClass('hide');
        $('.forgot-password-wrapper').addClass('hide');


    });


    $('.open-calc').on('click', function () {
        $('.calc-content').toggleClass('hide');
        $(this).toggleClass('hide');
    });

    $(".a-open-calc").click(function (event) {
        event.preventDefault();

        $('.open-calc').trigger("click")
    });

    $('.close-button').on('click', function () {
        $('.calc-content').toggleClass('hide');
        $('.calc-button').toggleClass('hide');
    });

    $('.add-new-address').on('click', function () {
        $('.new-add-form').toggleClass('hide');
    });

    $('.product-list-image').on('click', function () {

        var urlpath = $(this).find('img').attr('src');

        $('.product-image').find('img').attr('src', urlpath);

        $('.product-list-image').removeClass('active');

        $(this).addClass('active');

    });

    $('.edit-panel-button').on('click', function (e) {

        e.preventDefault();
        // remove all active classes and add active class to this parent with class panel
        $('.panel').removeClass('active');

        $(this).closest('.panel').addClass('active');

    });


    // CHECKOUT PAGE LOGIN / REGISTER TOGGLE

    $('.showRegister').on('click', function () {

        $('.login-form').toggleClass('hide');
        $('.register-form').toggleClass('hide');

    });

    $('.showLogin').on('click', function () {

        $('.login-form').toggleClass('hide');
        $('.register-form').toggleClass('hide');

    });

    $('.toggleAddress').on('click', function () {

        $('.billing-form').toggleClass('hide');

    });

    $('.payment-option-radio').click(function () {
        $('.payment-option-radio').removeClass('selected-payment');
        $(this).addClass('selected-payment');
    });

    // CART PAGE UPDATE INPUT ROUNDING

    $('.round-off-quantity').keyup(function () {

        var RoundedValue = Math.floor($(this).val());

        $(this).val(RoundedValue)

    });


    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 600) {        // If page is scrolled more than 50px
            $('.go-to-top').addClass('visible');    // Fade in the arrow
        } else {
            $('.go-to-top').removeClass('visible');   // Else fade out the arrow
        }
    });

    $('.go-to-top').click(function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });


    $('[data-toggle="tooltip"]').tooltip();

    $('.payment-type').on('click', function (e) {
        var onlinePayment = $(this).hasClass('online');

        if (onlinePayment) {
            $('.payment-gateways').removeClass('hide');
        } else {
            $('.payment-gateways').addClass('hide');
        }
    });

    $('.cart-wrapper').on('click', function(e) {
        window.location.href = 'cart.html';
    });;

});