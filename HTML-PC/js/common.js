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

        $('.confir_res input[type="checkbox"]').bind('change', function (v) {

            if($(this).is(':checked')) {
                $(this).parent().addClass('active');
            } else {
                $(this).parent().removeClass('active');
            }
        });
        
        $(".tab-default a").click(function (event) {
            $(".tab-default a").removeClass("active")
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
            event.preventDefault();
            var tab = $(this).attr("href");
            $(".tab-content >div").not(tab).css("display", "none");
            $(tab).fadeIn();
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
        var swiperCustomer = new Swiper(".box-customer .swiper-container", {
            spaceBetween: 30,
            navigation: {
                nextEl: ".swiper-customer-next",
                prevEl: ".swiper-customer-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
        var swiperWhy = new Swiper(".box-why-choose .swiper-container", {
            slidesPerView: 1,
            spaceBetween: 16,
            navigation: {
                nextEl: ".swiper-why-next",
                prevEl: ".swiper-why-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        var swiperService = new Swiper("#list-service_grid4 .swiper-container", {
            slidesPerView: 4,
            spaceBetween: 24,
            simulateTouch: false,
            navigation: {
                nextEl: ".swiper-service-next",
                prevEl: ".swiper-service-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                414: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                }
            }
        });
        var swiperService2 = new Swiper("#list-service_grid5 .swiper-container", {
            slidesPerView: 5,
            spaceBetween: 1,
            simulateTouch: false,
            navigation: {
                nextEl: ".swiper-service-next",
                prevEl: ".swiper-service-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                414: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                }
            }
        });

        var swiperService3 = new Swiper("#list-service_grid3 .swiper-container", {
            slidesPerView: 3,
            spaceBetween: 24,
            simulateTouch: false,
            navigation: {
                nextEl: ".swiper-service-next",
                prevEl: ".swiper-service-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                414: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                }
            }
        });

        var swiperRating = new Swiper(".service-rating .swiper-container", {
            slidesPerView: 1.3,
            spaceBetween: 24,
            navigation: {
                nextEl: ".swiper-rating-next",
                prevEl: ".swiper-rating-prev",
            }
        });

    }

    $(function () {
        backToTop();
        scrollBar();
        onCLick();
        hover();
        swiper();
        $('[data-toggle="tooltip"]').tooltip();
    });
})(jQuery);