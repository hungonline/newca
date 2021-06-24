(function ($) {
    "use strict";
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    //backToTop
    function backToTop() {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                $('#to_top').fadeIn();
                $('.tp1-topnav').addClass('sticky');
            } else {
                $('#to_top').fadeOut();
                $('.tp1-topnav').removeClass('sticky');
            }
        });


        $("#to_top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 40) {
                $('.topnav ').addClass('sticky');
            } else {
                $('.topnav ').removeClass('sticky');
            }
        });
    }

    //scrollBar
    function scrollBar() {
        var scrollContainer = $(".scrollbar-inner");
        if (scrollContainer.length > 0) {
            scrollContainer.scrollbar();
        }
    }
    //onCLick
    function onCLick() {
        $('.auto_search_button').click(function () {
            $('.search-wrap input').focus();
            if (!$(this).hasClass('is-clicked')) {
                $(this).addClass('is-clicked');
            } else {
                $(this).removeClass('is-clicked');
            }
            $('.search-wrap ').animate({
                width: 'toggle'
            });
        });
        $('#vibeji-ham').off('click').on('click', function () {
            $(this).toggleClass('open');
            $('.main-menu').toggleClass('open');
            $('body').css('overflow', $(this).hasClass('open') ? 'hidden' : '')
        });
        if (screen.width < 576) {
            $('.togle-mobile').find('.title').click(function () {
                if (!$(this).hasClass("active")) {
                    $(this).addClass("active");
                    $(this).next('ul').slideDown();
                } else {
                    $(this).removeClass("active");
                    $(this).next('ul').slideUp();
                }
            });
        }
        $('.sub_menu').click(function () {
            if ($(this).next('.level2').css('display') == 'none') {
                $(this).html('-');
            } else {
                $(this).html('+');
            };
            $(this).next('.level2').slideToggle("slow", function () {});
        });

        // Minus and Plus
        var quantitiy = 0;
        $('.quantity-right-plus').click(function (e) {
            e.preventDefault();
            var quantity = parseInt($('#quantity').val());
            $('#quantity').val(quantity + 1);

        });
        $('.quantity-left-minus').click(function (e) {
            e.preventDefault();
            var quantity = parseInt($('#quantity').val());
            if (quantity > 0) {
                $('#quantity').val(quantity - 1);
            }
        });

    }

    //Hover
    function hover() {
        $('.menu-c2').hover(
            function () {
                $('body').addClass('active');
            },
            function () {
                $('body').removeClass('active');
            }
        );
    }

    //slide Gallery
    function swiper() {

    }

    $(function () {
        backToTop();
        scrollBar();
        onCLick();
        hover();
        swiper();
    });
})(jQuery);