// SWIPER

var swiper = new Swiper(".swiper", {
    
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: 3, // Muestra tres imágenes a la vez
    loop: true, // Activa el bucle para que vuelva a la primera imagen después de la última
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
    }
  });