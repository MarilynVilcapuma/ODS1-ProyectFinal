fetch('http://52.205.143.76:3000/evento')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Cambiar a .json() para manejar la respuesta en formato JSON
    })
    .then(data => {
        const eventoDiv = document.getElementById('eventodia');
        
        // Mostrar el evento y el ODS, o el mensaje si no hay eventos
        if (data.evento) {
            eventoDiv.innerText = `Hoy es ${new Date().toLocaleDateString()}, se celebra: ${data.evento}. (${data.ods})`;
        } else {
            eventoDiv.innerText = data.mensaje;
        }
    })
    .catch(error => {
        console.error('Error al obtener el evento:', error);
        document.getElementById('eventodia').innerText = 'No se pudo cargar el evento del día.';
    });
