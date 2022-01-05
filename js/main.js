const swiper = new Swiper(".swiper", {
  speed: 500,
  loop: true,
  direction: "horizontal",
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    type: "fraction",
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: -100,
    // depth: 400,
    slideShadows: false,
  },
});
