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
});
