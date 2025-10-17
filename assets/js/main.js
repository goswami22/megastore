
$(document).ready(function () {
  // best selling slider
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

// popup content toggle

// When click on heart or popup link
  $('.treding-product .popup-box a.product-popup-point').on('click', function (e) {
    e.preventDefault();

    const $clickedContent = $(this).next('.content');

    // Remove active class from other contents
    $('.treding-product .popup-box .content').not($clickedContent).removeClass('active');

    // Toggle only clicked one
    $clickedContent.toggleClass('active');

    e.stopPropagation(); // prevent document click from firing
  });

  // 👉 When clicking anywhere outside, remove all active classes
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.popup-box').length) {
      $('.treding-product .popup-box .content').removeClass('active');
    }
  });0

// tabs js
$('.tab-link').click( function() {
	
	var tabID = $(this).attr('data-tab');
	
	$(this).addClass('active').siblings().removeClass('active');
	
	$('#tab-'+tabID).addClass('active').siblings().removeClass('active');
});

  // new in all slider
 // 🟩 NEW IN ALL
let newInAllOwlInitialized = false;

function initOrDestroyNewInAllOwl() {
  const $slider = $('.new-in-all');
  const windowWidth = $(window).width();

  if (windowWidth < 992 && !newInAllOwlInitialized) {
    $slider.addClass('owl-carousel owl-theme').owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: false,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
      },
    });
    newInAllOwlInitialized = true;
  } else if (windowWidth >= 992 && newInAllOwlInitialized) {
    $slider.trigger('destroy.owl.carousel');
    $slider.removeClass('owl-carousel owl-theme owl-loaded');
    $slider.find('.owl-stage-outer').children().unwrap();
    newInAllOwlInitialized = false;
  }
}

initOrDestroyNewInAllOwl();
let newInAllResizeTimer;
$(window).on('resize', function () {
  clearTimeout(newInAllResizeTimer);
  newInAllResizeTimer = setTimeout(initOrDestroyNewInAllOwl, 300);
});


// 🟦 NEW IN TOP
let newInTopOwlInitialized = false;

function initOrDestroyNewInTopOwl() {
  const $slider = $('.new-in-top');
  const windowWidth = $(window).width();

  if (windowWidth < 992 && !newInTopOwlInitialized) {
    $slider.addClass('owl-carousel owl-theme').owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: false,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
      },
    });
    newInTopOwlInitialized = true;
  } else if (windowWidth >= 992 && newInTopOwlInitialized) {
    $slider.trigger('destroy.owl.carousel');
    $slider.removeClass('owl-carousel owl-theme owl-loaded');
    $slider.find('.owl-stage-outer').children().unwrap();
    newInTopOwlInitialized = false;
  }
}

initOrDestroyNewInTopOwl();
let newInTopResizeTimer;
$(window).on('resize', function () {
  clearTimeout(newInTopResizeTimer);
  newInTopResizeTimer = setTimeout(initOrDestroyNewInTopOwl, 300);
});


// 🟥 NEW IN BUTTOMS
let newInButtomsOwlInitialized = false;

function initOrDestroyNewInButtomsOwl() {
  const $slider = $('.new-in-buttoms');
  const windowWidth = $(window).width();

  if (windowWidth < 992 && !newInButtomsOwlInitialized) {
    $slider.addClass('owl-carousel owl-theme').owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: false,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
      },
    });
    newInButtomsOwlInitialized = true;
  } else if (windowWidth >= 992 && newInButtomsOwlInitialized) {
    $slider.trigger('destroy.owl.carousel');
    $slider.removeClass('owl-carousel owl-theme owl-loaded');
    $slider.find('.owl-stage-outer').children().unwrap();
    newInButtomsOwlInitialized = false;
  }
}

initOrDestroyNewInButtomsOwl();
let newInButtomsResizeTimer;
$(window).on('resize', function () {
  clearTimeout(newInButtomsResizeTimer);
  newInButtomsResizeTimer = setTimeout(initOrDestroyNewInButtomsOwl, 300);
});


// 🟨 NEW IN ACCESSORIES
let newInAccessoriesOwlInitialized = false;

function initOrDestroyNewInAccessoriesOwl() {
  const $slider = $('.new-in-accessories');
  const windowWidth = $(window).width();

  if (windowWidth < 992 && !newInAccessoriesOwlInitialized) {
    $slider.addClass('owl-carousel owl-theme').owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: false,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
      },
    });
    newInAccessoriesOwlInitialized = true;
  } else if (windowWidth >= 992 && newInAccessoriesOwlInitialized) {
    $slider.trigger('destroy.owl.carousel');
    $slider.removeClass('owl-carousel owl-theme owl-loaded');
    $slider.find('.owl-stage-outer').children().unwrap();
    newInAccessoriesOwlInitialized = false;
  }
}

initOrDestroyNewInAccessoriesOwl();
let newInAccessoriesResizeTimer;
$(window).on('resize', function () {
  clearTimeout(newInAccessoriesResizeTimer);
  newInAccessoriesResizeTimer = setTimeout(initOrDestroyNewInAccessoriesOwl, 300);
});



});