const swiper = new Swiper('.swiper', {
  // Default parameters
  //  slidesPerView: 2,
  loop:true,
  spaceBetween: 10,
  conteredSlides:true,
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 30
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1.5,
      spaceBetween: 40
    }
  }
})