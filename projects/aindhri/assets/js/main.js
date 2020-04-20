$(document).ready(function () {

    var prevScrollpos = window.pageYOffset;
    var heroHeight = $('.hero-banner').innerHeight();

    window.onscroll = function () {

        if (window.pageYOffset > 100) {

            scrollFunction(); // For showing go to top button
            $('.scroll-next-button').css('display', 'none');

            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-110px";
            }
            prevScrollpos = currentScrollPos;
        } else {
            $('.scroll-next-button').css('display', 'inline-block');
        }

        if (window.pageYOffset > heroHeight / 3) {
            $('#navbar').css('background-color', 'white');
        } else {
            $('#navbar').css('background-color', 'white');
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

    particlesJS.load('particles-js', 'assets/particlesjs-config.json', function () {
        console.log('callback - particles.js config loaded');
    });

    var navBarHeight = $('#navbar').innerHeight();
    $('.page-content').css('padding-top', navBarHeight + 'px');

    $('.scroll-next-button').on('click', function () {
        $("html,body").animate({ scrollTop: $('#onMouseClickScroll').offset().top }, "1000");
    });

    

});

$(window).on('load', function () {

    setTimeout(function () {
        $('#loading-wrapper').fadeOut(600);
    }, 500);

});