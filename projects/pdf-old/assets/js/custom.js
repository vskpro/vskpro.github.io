$(document).on('click', '.top-nav .dropdown-menu', function (e) {
    e.stopPropagation();
});

$('#usage-calulator').on('click', function (e) {

    // show dark right-side-panel

    $('.right-side-panel.dark').css('right', '0%');

});

$('.dark-close').on('click', function (e) {

    // hide dark right-side-panel

    $('.right-side-panel.dark').css('right', '-100%');

});

$('.btn-proceed').on('click', function (e) {

    // hide dark right-side-panel

    $('.right-side-panel.light').css('right', '0%');

});

$('.light-close').on('click', function (e) {

    // hide dark right-side-panel

    $('.right-side-panel.light').css('right', '-100%');

});