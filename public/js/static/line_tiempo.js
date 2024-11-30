document.addEventListener("DOMContentLoaded", function () {
    const timelineData = [
        {
            year: "2000",
            description: "Se establecen los Objetivos de Desarrollo del Milenio (ODM) con el fin de reducir la pobreza mundial a la mitad para 2015."
        },
        {
            year: "2010",
            description: "El objetivo de reducir la pobreza extrema en un 50% se establece como parte de los ODM."
        },
        {
            year: "2015",
            description: "Naciones Unidas adopta los Objetivos de Desarrollo Sostenible (ODS), incluyendo el ODS 1: Fin de la pobreza, que busca erradicar la pobreza en todas sus formas para 2030."
        },
        {
            year: "2017",
            description: "El informe anual de los ODS muestra que, aunque se han hecho avances significativos, más de 800 millones de personas siguen viviendo en pobreza extrema."
        },
        {
            year: "2020",
            description: "El mundo enfrenta la pandemia de COVID-19, lo que provoca un aumento en la tasa de pobreza mundial por primera vez en décadas."
        },
        {
            year: "2021",
            description: "Naciones Unidas lanza iniciativas globales para apoyar a las comunidades más afectadas por la pandemia, con un enfoque en la recuperación económica y la reducción de la pobreza."
        },
        {
            year: "2022",
            description: "Se lanzan programas globales enfocados en la recuperación económica de las comunidades más afectadas, con énfasis en la erradicación de la pobreza extrema."
        },
        {
            year: "2023",
            description: "Se publican nuevos datos que muestran que el progreso en la erradicación de la pobreza se ha desacelerado, en parte debido a los efectos continuos de la pandemia y las crisis económicas."
        },
        {
            year: "2024",
            description: "Naciones Unidas y países miembros redoblan los esfuerzos para cumplir con los objetivos del ODS 1, enfocándose en soluciones sostenibles y resilientes para los más afectados por la pobreza."
        }
    ];

    const timelineContainer = document.getElementById("timeline");
    let currentIndex = 0;

    function showEvent(index) {
        // Limpiar contenido del contenedor
        timelineContainer.innerHTML = "";

        // Crear elementos de año y descripción
        const item = document.createElement("div");
        item.classList.add("timeline-item", "slide-in");

        const year = document.createElement("h3");
        year.textContent = timelineData[index].year;

        const description = document.createElement("p");
        description.textContent = timelineData[index].description;

        item.appendChild(year);
        item.appendChild(description);

        // Agregar el evento actual al contenedor
        timelineContainer.appendChild(item);
    }

    // Mostrar el primer evento
    showEvent(currentIndex);

    // Cambiar evento cada 4 segundos
    setInterval(function () {
        currentIndex = (currentIndex + 1) % timelineData.length;
        showEvent(currentIndex);
    }, 4000);
});
