
let contador = 0; // Empezamos desde la primera imagen
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let startX = 0;
let endX = 0;
let intervalo;

// Función para configurar la visibilidad y posición de las imágenes
function actualizarSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('prev', 'active', 'next');
        slide.style.display = 'none'; // Oculta todas las imágenes inicialmente
    });

    // Calcular los índices para las imágenes prev, active y next
    const prevIndex = (contador - 1 + slides.length) % slides.length;
    const nextIndex = (contador + 1) % slides.length;

    // Asignar clases y mostrar las tres imágenes necesarias
    slides[prevIndex].classList.add('prev');
    slides[prevIndex].style.display = 'block';

    slides[contador].classList.add('active');
    slides[contador].style.display = 'block';

    slides[nextIndex].classList.add('next');
    slides[nextIndex].style.display = 'block';

    // Actualizar los puntos de navegación
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === contador) {
            dot.classList.add('active');
        }
    });
}

// Función para cambiar manualmente la imagen según la dirección
function cambiarManual(direccion) {
    if (direccion === 'DER') {
        contador = (contador + 1) % slides.length;
    } else if (direccion === 'IZQ') {
        contador = (contador - 1 + slides.length) % slides.length;
    }
    actualizarSlides();
}

// Función para cambiar a la imagen cuando se hace clic en un punto
function cambiarManualDot(index) {
    contador = index;
    actualizarSlides();
}

// Inicializar el carrusel mostrando las primeras tres imágenes
window.addEventListener('load', () => {
    actualizarSlides();
    iniciarCarrusel(); // Inicia el movimiento automático
});

// Eventos de arrastre para cambiar la imagen
const slider = document.getElementById('slider');

slider.addEventListener('mousedown', (event) => {
    startX = event.clientX;
    detenerCarrusel(); // Detiene el carrusel cuando el usuario interactúa
});

slider.addEventListener('mouseup', (event) => {
    endX = event.clientX;
    handleSwipe();
    iniciarCarrusel(); // Vuelve a iniciar el carrusel después de la interacción
});

slider.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    detenerCarrusel(); // Detiene el carrusel cuando el usuario interactúa
});

slider.addEventListener('touchend', (event) => {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
    iniciarCarrusel(); // Vuelve a iniciar el carrusel después de la interacción
});

function handleSwipe() {
    if (startX > endX + 50) {
        cambiarManual("DER"); // Si se arrastra a la izquierda, pasa a la derecha
    } else if (startX < endX - 50) {
        cambiarManual("IZQ"); // Si se arrastra a la derecha, pasa a la izquierda
    }
}

// Iniciar el carrusel automáticamente
function iniciarCarrusel() {
    intervalo = setInterval(() => {
        cambiarManual("DER");
    }, 5000); // Cambia cada 3 segundos
}

// Detener el carrusel
function detenerCarrusel() {
    clearInterval(intervalo);
}
