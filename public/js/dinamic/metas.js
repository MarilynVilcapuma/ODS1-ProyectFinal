//metas
document.addEventListener('DOMContentLoaded', function () {
    // Datos de metas e indicadores para cada meta ODS
    const goalData = {
        '1.1': {
            meta: 'De aquí a 2030, erradicar para todas las personas y en todo el mundo la pobreza extrema (actualmente se considera que sufren pobreza extrema las personas que viven con menos de 1,25 dólares de los Estados Unidos al día).',
            indicator: '1.1.1 Proporción de la población que vive por debajo del umbral internacional de pobreza, desglosada por sexo, edad, situación laboral y ubicación geográfica (urbana o rural).'
        },
        '1.2': {
            meta: 'De aquí a 2030, reducir al menos a la mitad la proporción de hombres, mujeres y niños de todas las edades que viven en la pobreza en todas sus dimensiones.',
            indicator: '1.2.1 Proporción de la población que vive por debajo de la línea de pobreza nacional, desglosada por sexo y edad.'
        },
        '1.3': {
            meta: 'Implementar a nivel nacional sistemas y medidas apropiadas de protección social para todos, y lograr una cobertura sustancial de los pobres y vulnerables.',
            indicator: '1.3.1 Proporción de la población que recibe beneficios de protección social, desglosada por sexo, categoría de beneficiarios.'
        },
        '1.4': {
            meta: 'De aquí a 2030, garantizar que todos los hombres y mujeres, en particular los pobres y los vulnerables, tengan los mismos derechos a los recursos económicos, así como acceso a servicios básicos.',
            indicator: '1.4.1 Proporción de la población que vive en hogares con acceso a servicios básicos.'
        },
        '1.5': {
            meta: 'De aquí a 2030, aumentar la resiliencia de los pobres y de las personas en situaciones vulnerables ante eventos climáticos extremos y otros choques económicos, sociales y ambientales.',
            indicator: '1.5.1 Número de muertes, personas desaparecidas y personas afectadas por desastres.'
        },
        '1.a': {
            meta: 'Garantizar una movilización significativa de recursos para proporcionar medios adecuados para los países en desarrollo, en particular los países menos adelantados, a fin de poner fin a la pobreza en todas sus dimensiones.',
            indicator: '1.a.1 Proporción de recursos totales del gobierno asignados directamente a programas de reducción de la pobreza.'
        },
        '1.b': {
            meta: 'Crear marcos normativos sólidos a nivel nacional, regional e internacional, basados en estrategias de desarrollo pro-pobres y sensibles al género.',
            indicator: '1.b.1 Gasto social total orientado a la reducción de la pobreza.'
        }
    };

    // Función para actualizar el contenido de las secciones .meta y .indicators
    function updateContent(goal) {
        const metaSection = document.querySelector('.meta p');
        const indicatorSection = document.querySelector('.indicators p');

        // Actualizamos el contenido con los datos correspondientes
        metaSection.textContent = goalData[goal].meta;
        indicatorSection.textContent = goalData[goal].indicator;
    }

    // Agregar evento de clic a cada botón de metas
    const buttons = document.querySelectorAll('.goal-box');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const goal = this.getAttribute('data-goal');
            updateContent(goal);
        });
    });
});