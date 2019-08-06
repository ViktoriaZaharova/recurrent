$(function () {

    $('.s_structure-content').owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        smartSpeed: 900,
        // autoplay: true,
        // autoplayTimeout: 7000,
        nav: true,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('.s_ministers-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 2,
        smartSpeed: 900,
        autoplay: true,
        autoplayTimeout: 7000,
        nav: true,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            890: {
                items: 2
            }
        }
    });

    $('.about_medical-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        smartSpeed: 700,
        nav: true,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            550: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $('.information_visitors-carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 2,
        smartSpeed: 700,
        autoplay: true,
        autoplayTimeout: 7000,
        nav: true,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            890: {
                items: 2
            }
        }
    });

    $('.icon_menu').click(function () {
        $('.toggle_menu').fadeIn();
    });

    $('.toggle_menu .close').click(function () {
        $('.toggle_menu').fadeOut();
    });

    $('.search_icon').click(function () {
        $('.search-form').toggleClass('active');
        return false;
    });

    $('.header-mnu .list-drop').click(function () {
        $(this).toggleClass('in').children('.drop-menu').fadeIn();
        $('.header-mnu .list-drop').not(this).removeClass('in').children('.drop-menu').slideUp();
    });


});


$(document).ready(function () {
    $(".gallery").lightGallery();
});


// button top
$("body").on("click", ".btn-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});


$(document).ready(function () { // модальное окно форма обратной связи
    $('.popup-btn').on('click', function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_close, #overlay').on('click', function () {
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
});

$(document).ready(function () {
// Making 2 variable month and day

    setInterval(function () {
// Create a newDate() object and extract the minutes of the current time on the visitor's
        var minutes = new Date().getMinutes();
// Add a leading zero to the minutes value
        $("#min").html((minutes < 10 ? "0" : "") + minutes);
    }, 1000);

    setInterval(function () {
// Create a newDate() object and extract the hours of the current time on the visitor's
        var hours = new Date().getHours();
// Add a leading zero to the hours value
        $("#hours").html((hours < 10 ? "0" : "") + hours);
    }, 1000);
});

//Табы
(function ($) {
    $(function () {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
// end

$(window).on('load', function () {
    $(".loader").fadeOut();
    $(".load-inner").delay(300).fadeOut("slow");
});



