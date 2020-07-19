/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
function displayIntro(){
    $(".masthead-heading").text("I'm Tanha Shah");
}
function describeMyself(){
    $(".masthead-subsubheading").text("A self-motivated technologist with a zeal to learn something new");
}
(function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
            if(current==13){
                $( ".masthead-heading").delay(800).fadeIn("3000");
                $( ".masthead-subsubheading").delay(1400).fadeIn("5000");
            // $( ".masthead-heading").delay(800).text("I'm Tanha Shah");
            // $( ".masthead-subsubheading").delay(1400).text("A self-motivated technologist with a zeal to learn something new");
            // setTimeout(displayIntro,2000);
            // setTimeout(describeMyself,4000);
            }
        }, 100);
        
    };
    
})(jQuery);
$(".masthead-subheading").writeText("Hello, World!");

    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $(".home").addClass("home-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $(".home").removeClass("home-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

// Circular progress bar
circularbarColor='#027004';
$('#circle-java').circleProgress({value: 0.90, startAngle: -1.55,
    size: 120,thickness:5,fill: {color: circularbarColor}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        //$(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
        });

$('#circle-c').circleProgress({value: 0.75, startAngle: -1.55,
    size: 120,thickness:5,fill: {color: circularbarColor}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        });

$('#circle-python').circleProgress({value: 0.50, startAngle: -1.55,
    size: 120,thickness:5,fill: {color: circularbarColor}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        });

$('#circle-sql').circleProgress({value: 0.90, startAngle: -1.55,
    size: 120,thickness:5,fill: {color: '#008000'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        });

$('#circle-html').circleProgress({value: 0.85, startAngle: -1.55,
    size: 120,thickness:5,fill: {color: '#008000'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        });

$('#circle-css').circleProgress({value: 0.85, startAngle: -1.55,
    size: 120,thickness:5,fill: {color: '#008000'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        });

$('#circle-js').circleProgress({value: 0.85, startAngle: -1.55,
    size: 120,thickness:5,fill: {color: '#008000'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        });

$('#circle-jquery').circleProgress({value: 0.80, startAngle: -1.55,
    size: 120,thickness:5,fill: {color: '#008000'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        });

$('#circle-d3js').circleProgress({value: 0.75, startAngle: -1.55,
    size: 120,thickness:5,fill: {color: '#008000'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        });

$('#circle-tableau').circleProgress({value: 0.72, startAngle: -1.55,
    size: 120,thickness:5,fill: {color: '#008000'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        });

$('#circle-powerbi').circleProgress({value: 0.70, startAngle: -1.55,
    size: 120,thickness:5,fill: {color: '#008000'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        });

$('#circle-git').circleProgress({value: 0.80, startAngle: -1.55,
    size: 120,thickness:5,fill: {color: '#008000'}})
    .on('circle-animation-progress', function(event, progress, stepValue){
        });
