$(document).ready(function() {

    // EXAMPLE
    // $('h1').click(function() {
    //     $(this).css('background-color', "#ff0000");
    // })

    // For sticky navigation
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '50px'
    });

    // For splash page buttons
    $('.js--scroll-to-contact').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000);
    })

    $('.js--scroll-to-next').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    })

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    // Animations on scroll
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    $('.js--wp-2v0').waypoint(function(direction){
        $('.js--wp-2v0').addClass('animated slideInLeft');
    }, {
        offset: '65%'
    })
    $('.js--wp-2v1').waypoint(function(direction){
        $('.js--wp-2v1').addClass('animated slideInLeft');
    }, {
        offset: '65%'
    })
    $('.js--wp-2v2').waypoint(function(direction){
        $('.js--wp-2v2').addClass('animated slideInLeft');
    }, {
        offset: '65%'
    })
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated jackInTheBox');
    }, {
        offset: '50%'
    })

    // Mobile Nav
    $('.js--nav-icon').click(function() {
        let nav = $('.js--main-nav');
        let icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-android-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-android-menu');
        } else {
            icon.addClass('ion-android-menu');
            icon.removeClass('ion-ios-close');
        }
    })

});