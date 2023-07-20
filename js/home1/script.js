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
    768: {
      slidesPerView: 1.8,
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
    1500: {
      slidesPerView: 1.2,
    },
    1300: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 1,
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

const about__us__team__slider = new Swiper(".team-slider", {
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
    375: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".team__slider_next",
    prevEl: ".team__slider_prev",
  },
});
const price__service__slider = new Swiper(".price-service-slider", {
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
    nextEl: ".price__service__slider_next",
    prevEl: ".price__service__slider_prev",
  },
});
// PROGRESS BAR
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.parcent + "%";
    }
  });
});

const progressElements = document.querySelectorAll(".progress-bar");

progressElements.forEach((element) => progressObserver.observe(element));
// PROGRESS BAR
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
// price page accordion

// const items = document.querySelectorAll(".accordion-main button");
// console.log("227==== ", items);

// function toggleAccordion() {
//   const itemToggle = this.getAttribute("aria-expanded");

//   for (i = 0; i < items.length; i++) {
//     // console.log("232==== ", items[i].parentNode.parentNode.childNodes[1]);
//     items[i].setAttribute("aria-expanded", "false");
//   }
//   // console.log("240==== ", itemToggle);
//   if (itemToggle == "false") {
//     this.setAttribute("aria-expanded", "true");
//   }

//   // items.forEach((item) => {
//   //   console.log(this.getAttribute("aria-expanded"));
//   //   item.parentNode.parentNode.childNodes[1].style.backgroundColor = "";
//   //   if (this.getAttribute("aria-expanded") === false) {
//   //     item.parentNode.parentNode.childNodes[1].style.backgroundColor = "green";
//   //   }
//   // });
// }

// items.forEach((item) => item.addEventListener("click", toggleAccordion));

// function OpenMenu(e) {
//   // setting the accordion

//   //  set accordion end
//   e.target.parentNode.parentNode.parentNode.childNodes[1].classList.toggle(
//     "mm-show"
//   );
//   console.log("254 ==", e.target.parentNode.getAttribute("aria-expanded"));
//   console.log("255 ++++++", e);
// }
// // const btns = document.querySelectorAll("#accordion-button-1");
// // btns.forEach((btn) => {
// //   console.log("2==", btn.getAttribute("aria-expanded"));
// //   btn.addEventListener("click", function onClick(event) {
// //     console.log("24==", event.target);
// //     console.log("245==", btn.getAttribute("aria-expanded"));

// //     const box = document.getElementById("accordion__serial");

// //     if (btn.getAttribute("aria-expanded") === "true") {
// //       box.style.backgroundColor = "red";
// //     } else {
// //       box.style.backgroundColor = "transparent";
// //     }

// //      optionally change text color
// //     box.style.color = 'white';
// //   });
// // });
// // accordion number color
// // btn.addEventListener("click", function onClick(event) {
// //   console.log("245==", event.target.getAttribute("aria-expanded"));

// //   const box = document.getElementById("accordion__serial");

// //   if (event.target !== box) {
// //     box.style.backgroundColor = "transparent";
// //   } else {
// //     box.style.backgroundColor = "red";
// //   }
// //   // 👇️ optionally change text color
// //   // box.style.color = 'white';
// // });

const items = document.querySelectorAll(".accordion__item__container");

items.forEach((item, i) => {
  const accordionItem = item.querySelector(".accordion-button-1");
  const activeDiv = item.querySelector(".accordion__serial");

  accordionItem.addEventListener("click", (e) => {
    if (accordionItem.getAttribute("aria-expanded") === "false") {
      accordionItem.setAttribute("aria-expanded", "true");
      activeDiv.classList.toggle("mm-show");
    } else {
      accordionItem.setAttribute("aria-expanded", "false");
      activeDiv.classList.toggle("mm-show");
    }

    removeOpen(i);
  });
});

function removeOpen(index1) {
  items.forEach((accordionItem, index2) => {
    const accordionItem2 = accordionItem.querySelector(".accordion-button-1");
    const activeDiv = accordionItem.querySelector(".accordion__serial");

    if (index1 !== index2) {
      accordionItem2.setAttribute("aria-expanded", "false");
      activeDiv.classList.remove("mm-show");
    }
  });
}
