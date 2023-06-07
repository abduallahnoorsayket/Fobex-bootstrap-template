function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items");

  navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
}
document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);

(function () {
  "use strict";

  function carousels() {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
  }

  (function ($) {
    carousels();
  })(jQuery);
})();

//
const project__slider = new Swiper(".project-slider", {
  loop: true,
  slidesPerView: 3.7,
  spaceBetween: 20,
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".project__slider_next",
    prevEl: ".project__slider_prev",
  },
});

const testimonial__slider = new Swiper(".testimonial-slider", {
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".testimonial__slider_next",
    prevEl: ".testimonial__slider_prev",
  },
});
