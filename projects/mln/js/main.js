$(document).ready(function () {
    var navBar = $('.navbar').innerHeight();
    $('body').css('padding-top', navBar + 'px');

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {

        if (window.pageYOffset > 100) {
            scrollFunction(); // For showing go to top button

            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-110px";
            }
            prevScrollpos = currentScrollPos;
        }

    }

    function scrollFunction() {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
            document.getElementById("goTop").style.display = "block";
        } else {
            document.getElementById("goTop").style.display = "none";
        }
    }

    $('#goTop').on('click', function () {
        $("html,body").animate({ scrollTop: 0 }, "500");
    });

    particlesJS.load('particles-js', 'assets/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });


});

$(window).on('load', function () {
    $('.loading-screen').fadeOut('slow');
});

// var rellax = new Rellax('.rellax', { center: false });
