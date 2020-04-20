$('.checkout-nav-link').on('click', function () {

    var toActiveItem = $(this).attr('data-checkout');

    $('.checkout.active').removeClass('active');

    $('#' + toActiveItem).addClass('active');

    // Add active class to checkout-link with data-checkout attr

    $('.checkout-link.active').removeClass('active');

    $(".checkout-link[data-checkout='" + toActiveItem + "']").addClass('active');
});

$('.showRegister').on('click', function () {

    $('#register-wrapper').show();
    $('#login-wrapper').hide();

});

$('.showLogin').on('click', function () {

    $('#register-wrapper').hide();
    $('#login-wrapper').show();

});

$('.payment-option-radio').click(function () {
    $('.payment-option-radio').removeClass('selected-payment');
    $(this).addClass('selected-payment');
});

$('.payment-type').on('click', function (e) {
    var onlinePayment = $(this).hasClass('online');

    if (onlinePayment) {
        $('.payment-gateways').removeClass('hide');
    } else {
        $('.payment-gateways').addClass('hide');
    }
});