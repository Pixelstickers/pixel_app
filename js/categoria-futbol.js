/**
 * Pixel - Catálogo de Stickers y Papelería Creativa
 * Funciones específicas para la categoría de Fútbol
 */

document.addEventListener('DOMContentLoaded', function() {
    // Filtrar productos por equipo
    const filterTeam = document.getElementById('filterTeam');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterTeam) {
        filterTeam.addEventListener('change', function() {
            const selectedTeam = this.value;
            
            productCards.forEach(card => {
                if (selectedTeam === 'todos' || card.dataset.team === selectedTeam) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Ordenar productos
    const sortProducts = document.getElementById('sortProducts');
    const productsGrid = document.querySelector('.products-grid');
    
    if (sortProducts && productsGrid) {
        sortProducts.addEventListener('change', function() {
            const selectedSort = this.value;
            const productsArray = Array.from(productCards);
            
            if (selectedSort === 'newest') {
                // Ordenar por más recientes (se asume que el orden actual es el más reciente)
                productsArray.sort((a, b) => {
                    return a.dataset.productId.localeCompare(b.dataset.productId);
                });
            } else if (selectedSort === 'popular') {
                // Simular ordenamiento por popularidad usando un criterio arbitrario
                // En un caso real, esto podría basarse en datos reales de popularidad
                productsArray.sort((a, b) => {
                    // Orden arbitrario para simular popularidad
                    const popularOrder = ['f1', 'f8', 'f7', 'f3', 'f4', 'f2', 'f5', 'f6', 'f9', 'f10', 'f11', 'f12'];
                    return popularOrder.indexOf(a.dataset.productId) - popularOrder.indexOf(b.dataset.productId);
                });
            }
            
            // Vaciar el contenedor y añadir los productos en el nuevo orden
            productsGrid.innerHTML = '';
            productsArray.forEach(product => {
                productsGrid.appendChild(product);
            });
        });
    }
    
    // Reajustar el filtro cuando se cambia el tamaño de la ventana
    window.addEventListener('resize', function() {
        if (filterTeam && filterTeam.value !== 'todos') {
            filterTeam.dispatchEvent(new Event('change'));
        }
    });
    
    // Animación al hacer scroll para los productos
    const animateOnScroll = function() {
        productCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.classList.add('animate-in');
            }
        });
    };
    
    // Añadir clase para animación
    productCards.forEach(card => {
        card.classList.add('product-animation');
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Ejecutar una vez al cargar para elementos visibles inicialmente
    animateOnScroll();
});

// Funciones adicionales específicas para esta categoría
/**
 * Muestra información adicional sobre jugadores cuando están disponibles
 * @param {string} playerId - ID del jugador
 */
function mostrarInfoJugador(playerId) {
    const jugadoresInfo = {
        'messi': {
            nombre: 'Lionel Messi',
            equipo: 'Inter Miami CF',
            info: 'Considerado uno de los mejores jugadores de todos los tiempos. Campeón del mundo con Argentina en 2022.'
        },
        'dibu': {
            nombre: 'Emiliano "Dibu" Martínez',
            equipo: 'Aston Villa',
            info: 'Arquero de la selección argentina. Héroe en la final del Mundial 2022 con atajadas decisivas.'
        }
        // Se pueden agregar más jugadores según sea necesario
    };
    
    const jugador = jugadoresInfo[playerId];
    
    if (jugador) {
        alert(`${jugador.nombre}\nEquipo actual: ${jugador.equipo}\n\n${jugador.info}`);
    }
}

// Esta función no está en uso actualmente, pero está disponible si se quiere implementar
// un botón de info para jugadores en el futuro