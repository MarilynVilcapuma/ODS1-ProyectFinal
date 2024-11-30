// Selecciona los elementos necesarios
const iconCards = document.querySelectorAll('.icon-card');
const modal = document.getElementById('infoModal');
const closeModalButton = document.querySelector('.close-modalButton');

// Función para voltear las cartillas al pasar el mouse
iconCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        rotateCard(card, true); // Gira la cartilla al pasar el mouse
    });

    card.addEventListener('mouseleave', () => {
        rotateCard(card, false); // Vuelve a la posición original al quitar el mouse
    });

    // Mostrar el modal al hacer clic en la cartilla
    card.addEventListener('click', () => {
        const info = card.dataset.info; // Obtiene la información del data-info
        showModal(info); // Muestra el modal con la información
    });
});

// Función para rotar la cartilla
function rotateCard(card, isFlipped) {
    if (isFlipped) {
        card.querySelector('.icon-front').style.transform = 'rotateY(180deg)'; // Rota la parte frontal
        card.querySelector('.icon-back').style.transform = 'rotateY(0deg)'; // Muestra la parte trasera
    } else {
        card.querySelector('.icon-front').style.transform = 'rotateY(0deg)'; // Vuelve a la posición original
        card.querySelector('.icon-back').style.transform = 'rotateY(180deg)'; // Oculta la parte trasera
    }
}

// Función para mostrar el modal
function showModal(text) {
    document.getElementById('modalText').textContent = text; // Establece el texto del modal
    modal.style.display = 'block'; // Muestra el modal
}

// Cerrar el modal al hacer clic en el botón de cierre
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el modal
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // Oculta el modal
    }
});
