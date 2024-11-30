document.addEventListener('DOMContentLoaded', () => {
    const text = "Únete y marca la diferencia."; // Frase que se animará
    const typingTextElement = document.getElementById('typingText');

    function typeWriter(text, index, callback) {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index); // Añadir letra
            index++;
            setTimeout(() => typeWriter(text, index, callback), 100); // Controlar velocidad de la animación
        } else {
            // Esperar un segundo antes de borrar
            setTimeout(() => callback(), 5000);
        }
    }

    function startTyping() {
        typingTextElement.textContent = ''; // Limpiar el texto
        typeWriter(text, 0, startTyping); // Iniciar el efecto de escritura
    }

    startTyping(); // Inicia el efecto al cargar la página
});