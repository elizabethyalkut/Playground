// JSLint options:
/*global jQuery, $, init */
/*jslint browser: true, white: true, nomen: false, vars: false, plusplus: false */
// Adds js class to html when javascript runs
document.documentElement.className = "js";

// Setting up a HHMI namespace
var HHMI = HHMI || {};

// Pseudo-code:
// Create the definition of a tallest element by creating a variable to hold the definition.
// Loop through the group of elements and find the height of each item. If the height of any item is greater than any of the previous items, the variable is set to the new value.
// After the loop, reset the height of each item to be the value of the variable.
HHMI.equalHeight = {
    init: function () {
        var tallest = 0;
        $(".features li").each(function () {
            var thisHeight = $(this).height();
            if (thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        $(".features li").height(tallest);
    }
};

HHMI.slider = {
    init: function () {
        var $slides = $(".carousel li"),
            slidesCount = $slides.length,
            slideWidth = $slides.outerWidth();
        containerWidth = slideWidth * slidesCount;
		perspectivesDisplayNumber = 1;
        extrasDisplayNumber = 4;
        slideIndex = 0;

        $(".carousel").css({
            'width': containerWidth + "px"
        });

        $('button').click(function () {
            var $carousel = $(".carousel");
            if ($carousel.not(':animated').length) {

                if ($('.carousel').parents('#perspectives') {

                    if ($(this).attr('class') == 'left' && slideIndex > 0) {
                        slideIndex -= 1;
                    } else if ($(this).attr('class') == 'right' && (slideIndex < (slidesCount - perspectivesDisplayNumber))) {
                        slideIndex += 1;
                    };

                } else if ($('.carousel').parents('.online-extras') {
					if ($(this).attr('class') == 'left' && slideIndex > 0) {
						slideIndex -= 1;
					} else if ($(this).attr('class') == 'right' && (slideIndex < (slidesCount - perspectivesDisplayNumber))) {
						slideIndex += 1;
					};

                var offset = -slideWidth * slideIndex;
                $carousel.animate({
                    "margin-left": offset + "px"
                }, 500);
            });
	);
};

HHMI.authorCall = {
    init: function () {

    }
};

$(document).ready(function () {
    HHMI.equalHeight.init();
    HHMI.slider.init();
    HHMI.authorCall;
});