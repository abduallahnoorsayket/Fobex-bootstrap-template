//
"strict mode";

const home1__hero__slider = new Swiper(".home1-hero-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".hero__navigation",
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + (index + 1) + "</li>";
    },
  },
});
const home2__hero__slider = new Swiper(".home2-hero-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".hero__navigation",
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + (index + 1) + "</li>";
    },
  },
});

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

const accordionItemHeaders = document.querySelectorAll(".card-header");

accordionItemHeaders.forEach((accordionItemHeader) => {
  const accordionItemBody = accordionItemHeader.nextElementSibling;
});

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

$(document).ready(function () {
  /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
  var url = $("#cartoonVideo").attr("src");

  /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
  $("#myModal").on("hide.bs.modal", function () {
    $("#cartoonVideo").attr("src", "");
  });

  /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
  $("#myModal").on("show.bs.modal", function () {
    $("#cartoonVideo").attr("src", url);
  });
});
// new Search input form
jQuery(document).ready(function ($) {
  var wHeight = window.innerHeight;
  //search bar middle alignment
  $("#mk-fullscreen-searchform").css("top", wHeight / 2);
  //reform search bar
  jQuery(window).resize(function () {
    wHeight = window.innerHeight;
    $("#mk-fullscreen-searchform").css("top", wHeight / 2);
  });
  // Search
  $("#search-button").click(function () {
    console.log("Open Search, Search Centered");
    $("div.mk-fullscreen-search-overlay").addClass(
      "mk-fullscreen-search-overlay-show"
    );
  });
  $("a.mk-fullscreen-close").click(function () {
    console.log("Closed Search");
    $("div.mk-fullscreen-search-overlay").removeClass(
      "mk-fullscreen-search-overlay-show"
    );
  });
});
