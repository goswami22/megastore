$(document).ready(function () {
    // ✅ list all your slider classes here
    const sliderSelectors = ['.best-selling-slider', '.offer-slider'];
    let owlInitialized = {};

    function initOrDestroyOwl(selector) {
        const $slider = $(selector);
        const windowWidth = $(window).width();

        if (windowWidth < 992 && !owlInitialized[selector]) {
            $slider.addClass('owl-carousel owl-theme').owlCarousel({
                loop: true,
                margin: 10,
                dots: false,
                nav: false,
                responsive: {
                    0: { items: 1 },
                    600: { items: 2 }
                }
            });
            owlInitialized[selector] = true;
        } 
        else if (windowWidth >= 992 && owlInitialized[selector]) {
            $slider.trigger('destroy.owl.carousel');
            $slider.removeClass('owl-carousel owl-theme owl-loaded');
            $slider.find('.owl-stage-outer').children().unwrap();
            owlInitialized[selector] = false;
        }
    }

    function handleAllSliders() {
        sliderSelectors.forEach(selector => initOrDestroyOwl(selector));
    }

    // Run on load
    handleAllSliders();

    // Debounced resize listener
    let resizeTimer;
    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleAllSliders, 300);
    });
});
