import { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";

Swiper.use([Navigation, Pagination]);

new Swiper(".examples__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    prevEl: ".examples-prev",
    nextEl: ".examples-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".gallery__slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    prevEl: ".gallery-prev",
    nextEl: ".gallery-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 4,
    },
  },
});

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 768px)", ".our-service__slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: {
      prevEl: ".our-service-prev",
      nextEl: ".our-service-next",
    },
  });
});
