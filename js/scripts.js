
    
$(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        padding : 10,
        
        beforeLoad: function() {
            this.title = $(this.element).attr('caption');

        }

    });

//    

 $('.nav-btn').click(function() {
        $('.nav').slideToggle();
        $('header').css("background-color", "#0d0c0c");
        $('.close').show();
        $('.nav-btn').hide();
    });

 //

  $('.close').click(function() {
        $('.close').hide();
        $('.nav').slideToggle();
        $('.nav-btn').show();
        $('header').css("background-color", "transparent");
    });

//

 function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 100,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }
            }
        });
    }
    window.onload = init();  

//

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });
});

//

$(document).ready(function(){

var top_header = $('.header_img');
top_header.css({'background-position':'center center'}); // better use CSS
    $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({'background-position':'center calc(50% + '+(st*.5)+'px)'});
    });
});

//

$('.nav>li>a').click(function(){
    $('.nav').hide();
    $('.close').hide();
    $('.nav-btn').show();
    $('header').css("background-color", "transparent");
});
