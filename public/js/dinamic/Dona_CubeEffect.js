//Carousel of images cube effect

var swiper = new Swiper(".swiper", {
    effect: "cube", // Efecto visual de transición entre diapositivas en forma de cubo.
    grabCursor: true, // Cambia el cursor al icono "manita" cuando se pasa por encima.
    loop: true, // Permite que las diapositivas se repitan indefinidamente.
    speed: 1000, // Define la velocidad de la transición (1 segundo).
    cubeEffect: { // Configuración específica del efecto "cubo".
      shadow: false, // Desactiva la sombra general del cubo.
      slideShadows: true, // Activa sombras específicas en las diapositivas durante la transición.
      shadowOffset: 10, // (No tiene efecto porque shadow está desactivado).
      shadowScale: 0.94, // Escala de la sombra (no afecta por shadow: false).
    },
    autoplay: { // Configura el desplazamiento automático.
      delay: 2500, // Tiempo de espera entre transiciones automáticas (2.5 segundos).
      pauseOnMouseEnter: true, // Pausa el carrusel al pasar el mouse por encima.
    },
  });