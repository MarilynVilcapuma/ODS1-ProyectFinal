function changeImage(element) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = element.src;
}

function toggleDetails() {
    const details = document.getElementById('more-details');
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}




//mostrar informacion 

function toggleMoreInfo() {
    const moreInfo = document.getElementById('more-info');
    const showMoreBtn = document.getElementById('show-more-btn');
    
    // Alternar la clase "active" para mostrar/ocultar la sección
    if (moreInfo.classList.contains('active')) {
        moreInfo.classList.remove('active');
        showMoreBtn.textContent = "Ver más detalles";
    } else {
        moreInfo.classList.add('active');
        showMoreBtn.textContent = "Ver menos detalles";
    }
}