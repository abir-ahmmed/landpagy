const swiper = new Swiper('.testimonial-items', {
  // Default parameters
  //  slidesPerView: 2,
  loop:true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.2,
    },
    1024: {
      slidesPerView: 1.5,
    },
    1200: {
      slidesPerView: 1.9,
    },
  },
})
// $(document).ready(function () {
//   if ($('#billing-testimonial').length) {
//     const slider = new Swiper('#billing-testimonial', {
//       loop: true,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//       spaceBetween: 30,
//       centeredSlides: true,

//     });
//   }

// Client Area 2 
var swiperClient = new Swiper(".client-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// Dropdown

$('.dropdown').hover(function(){ 
  $('.dropdown-toggle', this).trigger('click'); 
});