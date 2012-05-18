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
        var $perspectivesSlides = $("#perspectives .carousel li"),
            perspectivesSlidesCount = $perspectivesSlides.length;
        perspectivesSlideWidth = $perspectivesSlides.outerWidth();
        perspectivesContainerWidth = perspectivesSlideWidth * perspectivesSlidesCount;
        displayNumber = 1;
        slideIndex = 0;

        $("#perspectives .carousel").css({
            'width': perspectivesContainerWidth + "px"
        });

        $('#perspectives button').click(function () {
            var $perspectivesCarousel = $("#perspectives .carousel");
            if ($perspectivesCarousel.not(':animated').length) {

                if ($(this).hasClass('left') && slideIndex > 0) {
                    slideIndex -= 1;
                } else if ($(this).hasClass('right') && (slideIndex < (perspectivesSlidesCount - displayNumber))) {
                    slideIndex += 1;
                }

                var offset = -perspectivesSlideWidth * slideIndex;
                $perspectivesCarousel.animate({
                    "margin-left": offset + "px"
                }, 500);
            }
        });
    }
};

HHMI.carousel = {
    init: function () {
        console.log("running");
        $(".online-extras .carousel").wrap('<div class="wrapper"></div>');
        var $slides = $(".online-extras .carousel li"),
            slidesCount = $slides.length,
            slidesWidth = 236,
            containerWidth = slidesWidth * slidesCount;
        $(".online-extras .carousel").css({
            "width": containerWidth
        });
        $(".online-extras button").click(function () {
            if ($(this).hasClass("left").closest(".online-extras .carousel").animate({
                "left": "-944px"
            }, 500));
			else ($(this).hasClass("right").closest(".online-extras .carousel").animate({
                    "left": "-0px"
                }, 500));
            });
        }
};

$(document).ready(function () {
    HHMI.equalHeight.init();
    HHMI.slider.init();
    HHMI.carousel.init();
});