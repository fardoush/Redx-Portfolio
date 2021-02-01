// ---------------------------
//         [ Color Scheme]
//  -------------------------------



//Theme Background color

function lightFunction() {

    $('.about-section').css("background-color", "#ffffff");
    $('.contact-section').css("background-color", "#ffffff");
    $('.portfolio-section').css("background-color", "#ffffff");
    $('.service-section').css("background-color", "#F9F9F9");
    $('.time-line').css("background-color", "#ffffff");


    $('.news-section').css("background-color", "#F9F9F9");


    $('.news-section').css("background-color", "#ffffff");





    $('.card').css("background-color", "#fff");


    $('p,label,.port-link').css("color", "#222");

    $('h2,h3,h4,h5,h6').css("color", "#000");


    // let light = document.body;
    // light.classList.toggle("light-mode");
}

function darkFunction() {
    // let dark = document.body;
    // dark.classList.toggle("dark-mode");
    $('.about-section').css("background-color", "#000000");
    $('.contact-section').css("background-color", "#000000");
    $('.portfolio-section').css("background-color", "#000000");
    $('.service-section').css("background-color", "#111111");
    $('.time-line').css("background-color", "#000000");

    $('.news-section').css("background-color", "#111111");
    $('.service-section').css("background-color", "#111111");
    $('.news-section').css("background-color", "#111111");

    $('.card').css("background-color", "#111111");


    $('p,span,label,a').css("color", "#f9f9f9");

    $('h1,h2,h3,h4,h5,h6').css("color", "#fff");
}


// color


$(document).ready(function() {

    $('span').click(function() {

        $('.colors, span').toggleClass('active');

    });

    // ===== button background
    $('ul.button-colors li').click(function() {

        $('.port-link,.submit-btn,.hire-btn,.scroll-btn ').css('background', $(this).css('color'));



    });

    // ================== hire-btn

    $('ul.button-colors li').click(function() {


        $('.hire-btn').mouseover(function() {
            $('.hire-btn').css("background-color", "#666D41", "cursor", "pointer");



        });
    });

    $('ul.button-colors li').click(function() {
        $('.hire-btn').mouseout(function() {

            $('.hire-btn').css('background', '#454545',
                $(this).css('color'), "cursor", "default");

        });

    });
    // ================== submit-btn

    $('ul.button-colors li').click(function() {


        $('.submit-btn ').mouseover(function() {
            $('.submit-btn').css("background-color", "#666D41", "cursor", "pointer");



        });
    });

    $('ul.button-colors li').click(function() {
        $('.submit-btn').mouseout(function() {

            $('.submit-btn').css('background', '#454545',
                $(this).css('color'), "cursor", "default");

        });

    });







    // text-color



    $('ul.text-colors li').click(function() {



        $('.clr, .quote ,.active').css('color', $(this).css('color'));

        $('.btn,.btn-clr').css('background-color', $(this).css('color'));

    });



    // hover icon1

    $('ul.text-colors li').click(function() {

        $('.social1').hover(function() {

            $('.social1').css('border-color', $(this).css('color'));



        });

    });


    // hover icon2






    $('ul.text-colors li').click(function() {

        $('.social2').hover(function() {

            $('.social2').css('border-color', $(this).css('color'));



        });

    });
    // hover icon3



    $('ul.text-colors li').click(function() {

        $('.social3').hover(function() {

            $('.social3').css('border-color', $(this).css('color'));



        });

    });

    // hover icon4


    $('ul.text-colors li').click(function() {

        $('.social4').hover(function() {

            $('.social4').css('border-color', $(this).css('color'));



        });

    });






});

























// ---------------------------
//         [ Navbar scroll ]
//  -------------------------------

$(function() {
    var navbar = $('.header-inner');
    $(window).scroll(function() {
        if ($(window).scrollTop() <= 40) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });
});



// ---------------------------
//         [ Banner Type Text  ]
//  -------------------------------




var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff;}";
    document.body.appendChild(css);
};


// ---------------------------
//         [ Owl Carousel ]
//  -------------------------------
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});




// ---------------------------
//         [ progress bar ******* skilll ]
//  -------------------------------

$('.skill-per').each(function() {
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({ animatedValue: 0 }).animate({ animatedValue: per }, {
        duration: 1000,
        step: function() {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function() {
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
    });
});





// ---------------------------
//         [ Portfolio isotope ]
//  -------------------------------

(function() {

    'use strict';


    var $gallary = $('.gallary');

    $gallary.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e) {

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $gallary.isotope({ filter: filter });

    });

    $('.card').mouseenter(function() {

        $(this).find('.card-head').css({ 'top': '-100%' });
        $(this).find('.card-hover').css({ 'top': '0' });

    }).mouseleave(function() {

        $(this).find('.card-head').css({ 'top': '0' });
        $(this).find('.card-hover').css({ 'top': '100%' });

    });

})(jQuery);




// ---------------------------
//         [ Portfolio Counter up ]
//  -------------------------------

$(".count").counterUp({
    delay: 10,
    time: 3000
});