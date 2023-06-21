//
"strict mode";
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

const home__2__service__slider = new Swiper(".home-2-service-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1650: {
      slidesPerView: 2,
    },

    1300: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".service__slider_next",
    prevEl: ".service__slider_prev",
  },
});
const home__2__project__slider = new Swiper(".home-2-project-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1650: {
      slidesPerView: 1.5,
    },

    1300: {
      slidesPerView: 1.5,
    },

    1024: {
      slidesPerView: 1.5,
    },
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

const home__2__testimonial__slider = new Swiper(".home-2-testimonial-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  // breakpoints: {
  //   375: {
  //     slidesPerView: 1,
  //   },
  // },

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
const navtoggle = document.querySelector(".navbar__Link-toggle");
if (navtoggle) {
  navtoggle.addEventListener("click", classToggle);
}
// for Home 2 feature accordion bullet
const accordionItemHeaders = document.querySelectorAll(".card-header");
// console.log("105====", accordionItemHeaders);

accordionItemHeaders.forEach((accordionItemHeader) => {
  const accordionItemBody = accordionItemHeader.nextElementSibling;
  // console.log("120====", accordionItemBody);
  // if (accordionItemBody.classList.contains("show")) {
  //   accordionItemHeader.style.border = "6px solid #ffde00";
  // } else {
  //   accordionItemHeader.style.border = "6px solid #ffffff";
  // }
  // accordionItemBody.forEach((eachItemBody) => {

  // });

  // accordionItemHeader.addEventListener("click", (event) => {

  //   const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
  //   if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
  //     currentlyActiveAccordionItemHeader.classList.toggle("active");
  //     currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
  //   }

  //   accordionItemHeader.classList.toggle("active");
  //   const accordionItemBody = accordionItemHeader.nextElementSibling;
  //   if (accordionItemHeader.classList.contains("active")) {
  //     accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
  //   } else {
  //     accordionItemBody.style.maxHeight = 0;
  //   }
  // });
  // event end
});
