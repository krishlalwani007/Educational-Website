(function($) {
    "use strict";

    // Mobile Navigation Toggle
    $('.navbar-toggle').on('click', function() {
        $('#nav').toggleClass('open');
        $(this).toggleClass('active');
    });

    // Close mobile nav when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#header').length) {
            $('#nav').removeClass('open');
            $('.navbar-toggle').removeClass('active');
        }
    });

    // Smooth Scroll for Internal Anchors (safely handles href="#")
    $('a[href^="#"]').on('click', function(event) {
        var href = $(this).attr('href');
        if (href && href !== '#' && href.length > 1) {
            try {
                var target = $(href);
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 70
                    }, 600);
                }
            } catch(e) {
                // Ignore any invalid jQuery selector
            }
        }
    });

    // Contact Form Submission Handler
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        var $btn = $(this).find('button[type="submit"]');
        var originalText = $btn.html();
        
        $btn.html('<i class="fa fa-spinner fa-spin"></i> Sending...').prop('disabled', true);
        
        setTimeout(function() {
            $('#form-success').fadeIn();
            $('#contact-form')[0].reset();
            $btn.html(originalText).prop('disabled', false);
            
            setTimeout(function() {
                $('#form-success').fadeOut();
            }, 6000);
        }, 800);
    });

    // Remove preloader if present
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow');
    });

})(jQuery);
