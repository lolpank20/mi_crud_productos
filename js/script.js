// Confirmación de eliminación
document.querySelectorAll('.eliminar').forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.dataset.productName; // Obtén el nombre del producto (agrega un atributo data-product-name a tus botones)
        const confirmDelete = confirm(`¿Estás seguro de que quieres eliminar el producto "${productName}"?`);
        
        if (!confirmDelete) {
            event.preventDefault(); // Si no confirma, previene la acción de eliminación
        }
    });
});

// Animación de bienvenida al cargar la página
window.onload = () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 1s ease-in-out';
    document.body.style.opacity = 1;
};
