//
const project__slider = new Swiper(".project-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1650: {
      slidesPerView: 3.7,
    },

    1300: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 2,
    },

    880: {
      slidesPerView: 1.8,
    },

    768: {
      slidesPerView: 1.7,
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

function classToggle() {
  const navs = document.querySelectorAll(".navbar__Items");

  navs.forEach((nav) => nav.classList.toggle("navbar__ToggleShow"));
}
document
  .querySelector(".navbar__Link-toggle")
  .addEventListener("click", classToggle);
