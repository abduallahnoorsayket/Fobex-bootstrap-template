const project__slider = new Swiper(".project-slider", {
  loop: true,
  slidesPerView: 3.7,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: ".project__slider_next",
    prevEl: ".project__slider_prev",
  },
});

const testimonial__slider = new Swiper(".testimonial-slider", {
  loop: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".testimonial__slider_next",
    prevEl: ".testimonial__slider_prev",
  },
});
