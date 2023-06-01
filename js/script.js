const swiper = new Swiper(".project-slider", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  slidesPerView: 3.7,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".project__slider_next",
    prevEl: ".project__slider_prev",
  },
});

