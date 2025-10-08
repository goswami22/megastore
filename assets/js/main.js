// best selling slider
$(document).ready(function () {
    let owlInitialized = false;

    function initOrDestroyOwl() {
        const $slider = $('.best-selling-slider');
        const windowWidth = $(window).width();

        // ✅ Initialize for mobile/tablet only
        if (windowWidth < 992 && !owlInitialized) {
            $slider.addClass('owl-carousel owl-theme').owlCarousel({
                loop: true,
                margin: 10,
                dots: false,
                nav: false,
                responsive: {
                    0: { items: 1 },
                    600: { items: 2 },
                }
            });
            owlInitialized = true;
        }

        // 🚫 Destroy for desktop
        else if (windowWidth >= 992 && owlInitialized) {
            $slider.trigger('destroy.owl.carousel');
            $slider.removeClass('owl-carousel owl-theme owl-loaded');
            $slider.find('.owl-stage-outer').children().unwrap();
            owlInitialized = false;
        }
    }

    initOrDestroyOwl(); // Run once on load

    // 🔁 Handle resize with debounce (prevents flicker)
    let resizeTimer;
    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(initOrDestroyOwl, 300);
    });



// Our offer slider
$(document).ready(function () {
  let offerOwlInitialized = false;
  const $offerSlider = $('.offer-slider');
  const offerBreakpoint = 992; // desktop breakpoint

  function initOrDestroyOfferOwl() {
    const windowWidth = $(window).width();

    // 👉 Initialize Owl Carousel below 1200px
    if (windowWidth < offerBreakpoint && !offerOwlInitialized) {
      $offerSlider.addClass('owl-carousel owl-theme').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: windowWidth < 992, // show arrows only for mobile
        navText: [
          '<span class="owl-prev-arrow">‹</span>',
          '<span class="owl-next-arrow">›</span>'
        ],
        responsive: {
          0: { items: 1 },     // mobile
          600: { items: 2 },   // tablet
          992: { items: 3 }    // large tablet / small laptop
        }
      });
      offerOwlInitialized = true;
    }

    // 🚫 Destroy Owl Carousel above or equal to 1200px
    if (windowWidth >= offerBreakpoint && offerOwlInitialized) {
      $offerSlider.trigger('destroy.owl.carousel');
      $offerSlider.removeClass('owl-carousel owl-theme owl-loaded');
      $offerSlider.find('.owl-stage-outer').children().unwrap();
      offerOwlInitialized = false;
    }
  }

  // ✅ Initial check
  initOrDestroyOfferOwl();

  // ✅ Recheck on window resize (debounced)
  let resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initOrDestroyOfferOwl, 300);
  });
});






});