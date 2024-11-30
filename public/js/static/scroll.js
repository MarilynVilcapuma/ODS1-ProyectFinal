// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todas las cajas de contenido
    const boxes = document.querySelectorAll('.box');

    // Función para verificar si un elemento es visible en la ventana
    function isVisible(el) {
        const rect = el.getBoundingClientRect();
        // Comprueba si la parte superior del elemento es mayor o igual a 0
        // y si la parte inferior del elemento es menor o igual a la altura de la ventana
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Función para animar las cajas
    function animateBoxes() {
        // Recorre cada caja
        boxes.forEach(box => {
            // Si la caja es visible, mueve a su posición original y la hace visible
            if (isVisible(box)) {
                box.style.transform = "translateY(0)";
                box.style.opacity = "1";
            } else {
                // Si no es visible, la mueve hacia abajo y la hace transparente
                box.style.transform = "translateY(20px)";
                box.style.opacity = "0";
            }
        });
    }

    // Inicializa las cajas para que estén ocultas al cargar
    boxes.forEach(box => {
        box.style.transform = "translateY(20px)"; // Mueve hacia abajo
        box.style.opacity = "1"; // Hace que la caja sea transparente
        box.style.transition = "transform 0.5s, opacity 0.5s"; // Añade una transición suave
    });

    // Llama a la función de animación cuando se desplaza la página
    window.addEventListener('scroll', animateBoxes);
    
    // Llama a la función para mostrar las cajas visibles al cargar
    animateBoxes();
});
