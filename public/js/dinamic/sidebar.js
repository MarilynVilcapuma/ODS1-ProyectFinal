// Seleccionar los elementos necesarios
const historyButton = document.getElementById('history-button');
const sidebar = document.getElementById('sidebar');
const closeSidebarButton = document.getElementById('close-sidebar');

// Transición suave y ocultar la barra incialmente
sidebar.style.transition = 'right 0.3s'; 
sidebar.style.right = '100%'; 

// Función para mostrar la barra lateral a la vista
function openSidebar() {
    sidebar.style.right= '0';  
}

// Función para ocultar de nuevo la barra lateral
function closeSidebar() {
    sidebar.style.right = '100%';  
}

// Abre la ventana con el botón historia
historyButton.addEventListener('click', openSidebar);

// Cierra la ventana con el botón cerrar
closeSidebarButton.addEventListener('click', closeSidebar);
