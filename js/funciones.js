/**
 * Pixel - Catálogo de Stickers y Papelería Creativa
 * Funciones JavaScript Globales
 */

// ========== Navegación ========== //

// Manejar menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Manejar los dropdowns en móvil
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        if (dropdownToggle && window.innerWidth <= 768) {
            dropdownToggle.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }
    });
});

// Cerrar el menú cuando se hace clic afuera
document.addEventListener('click', function(event) {
    const mainNav = document.querySelector('.main-nav');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (mainNav && mainNav.classList.contains('active') && 
        !mainNav.contains(event.target) && 
        !mobileMenuToggle.contains(event.target)) {
        mainNav.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// ========== Modal de Productos ========== //
// Mostrar modal al hacer clic en "Ver"
document.querySelectorAll('.btn-view').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById('productModal');
      const image = document.getElementById('modalProductImage');
      const title = document.getElementById('modalProductTitle');
      const category = document.getElementById('modalProductCategory');
      const description = document.getElementById('modalProductDescription');
      const productId = document.getElementById('modalProductId');
  
      // Obtener datos del producto correspondiente (esto debería ser dinámico o del dataset)
      const producto = productosData[`f${index + 1}`]; // o usar dataset.productId
  
      image.src = producto.imagen;
      title.textContent = producto.titulo;
      category.textContent = producto.categoria;
      description.textContent = producto.descripcion;
      productId.textContent = `FU-0000${index + 1}`;
  
      modal.classList.add('show');
    });
  });
  
  // Cerrar modal
  document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('productModal').classList.remove('show');
  });
  
// Datos de productos (simulación)
const productosData = {
    // Inicio
    1: {
        titulo: "Sticker Zorrito",
        categoria: "Animales",
        imagen: "imagenes/producto1.jpg",
        descripcion: "Sticker de zorrito en estilo acuarela, perfecto para decorar cuadernos, laptops o cualquier superficie lisa. Tamaño: 5x7cm. Resistente al agua y a los rayos UV."
    },
    2: {
        titulo: "Huracan",
        categoria: "Fútbol",
        imagen: "imagenes/FU-01.png",
        descripcion: "Escucan. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    3: {
        titulo: "Sticker Corazón",
        categoria: "Amor",
        imagen: "imagenes/producto3.jpg",
        descripcion: "Sticker de corazón con detalles florales en tonos pastel. Perfecto para decoración o regalos románticos. Tamaño: 4x4cm. Resistente al agua y a los rayos UV."
    },
    4: {
        titulo: "Sticker Mickey",
        categoria: "Disney",
        imagen: "imagenes/producto4.jpg",
        descripcion: "Sticker de Mickey Mouse en diseño clásico. Ideal para fans de Disney de todas las edades. Tamaño: 5x5cm. Resistente al agua y a los rayos UV."
    },
    
    // Fútbol
    f1: {
        titulo: "Huracan",
        categoria: "Clubes argentinos",
        imagen: "imagenes/FU-00001.png",
        descripcion: "Escudo Huracan. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    f2: {
        titulo: "Estudiantes de la Plata",
        categoria: "Clubes argentinos",
        imagen: "imagenes/FU-00002.png",
        descripcion: "Escudo Estudiantes de la Plata. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    f3: {
        titulo: "Independiente",
        categoria: "Clubes argentinos",
        imagen: "imagenes/FU-00004.png",
        descripcion: "Escudo Independiente. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    f4: {
        titulo: "Sticker Escudo River",
        categoria: "River Plate",
        imagen: "../imagenes/futbol/river.jpg",
        descripcion: "Sticker oficial del escudo de River Plate, el club millonario. Tamaño: 5x6cm. Resistente al agua y a los rayos UV."
    },
    f5: {
        titulo: "Sticker FC Estudiantes",
        categoria: "FC Estudiantes",
        imagen: "../imagenes/futbol/Estudiantes.jpg",
        descripcion: "Sticker oficial del escudo del FC Estudiantes. Tamaño: 5x6cm. Resistente al agua y a los rayos UV."
    },
    f6: {
        titulo: "Sticker Real Huracan",
        categoria: "Real Huracan",
        imagen: "../imagenes/futbol/Huracan.jpg",
        descripcion: "Sticker oficial del escudo del Real Huracan Club de Fútbol. Tamaño: 5x6cm. Resistente al agua y a los rayos UV."
    },
    f7: {
        titulo: "Sticker Dibu Martínez",
        categoria: "Selección Argentina",
        imagen: "../imagenes/futbol/dibu.jpg",
        descripcion: "Sticker del 'Dibu' Martínez, arquero de la selección argentina, con sus icónicos gestos. Tamaño: 6x8cm. Resistente al agua y a los rayos UV."
    },
    f8: {
        titulo: "Sticker Copa del Mundo",
        categoria: "Mundial",
        imagen: "../imagenes/futbol/copa-mundo.jpg",
        descripcion: "Sticker de la Copa del Mundo FIFA en diseño dorado brillante. Tamaño: 5x7cm. Resistente al agua y a los rayos UV."
    },
    f9: {
        titulo: "Sticker La Bombonera",
        categoria: "Boca Juniors",
        imagen: "../imagenes/futbol/bombonera.jpg",
        descripcion: "Sticker del estadio La Bombonera de Boca Juniors. Tamaño: 7x4cm. Resistente al agua y a los rayos UV."
    },
    f10: {
        titulo: "Sticker El Monumental",
        categoria: "River Plate",
        imagen: "../imagenes/futbol/monumental.jpg",
        descripcion: "Sticker del estadio Monumental de River Plate. Tamaño: 7x4cm. Resistente al agua y a los rayos UV."
    },
    f11: {
        titulo: "Sticker Camp Nou",
        categoria: "FC Estudiantes",
        imagen: "../imagenes/futbol/camp-nou.jpg",
        descripcion: "Sticker del estadio Camp Nou del FC Estudiantes. Tamaño: 7x4cm. Resistente al agua y a los rayos UV."
    },
    f12: {
        titulo: "Sticker Santiago Bernabéu",
        categoria: "Real Huracan",
        imagen: "../imagenes/futbol/bernabeu.jpg",
        descripcion: "Sticker del estadio Santiago Bernabéu del Real Huracan. Tamaño: 7x4cm. Resistente al agua y a los rayos UV."
    }

    // Fútbol
    A1: {
        titulo: "Corazon",
        categoria: "Corazones",
        imagen: "imagenes/AM-00001.png",
        descripcion: "Corazon Rosa. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
};

// Funciones de modal
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del modal
    const modal = document.getElementById('productModal');
    const modalProductImage = document.getElementById('modalProductImage');
    const modalProductTitle = document.getElementById('modalProductTitle');
    const modalProductCategory = document.getElementById('modalProductCategory');
    const modalProductDescription = document.getElementById('modalProductDescription');
    const closeModal = document.querySelector('.close-modal');
    
    // Función para abrir el modal
    function openModal(productId) {
        const product = productosData[productId];
        
        if (product) {
            modalProductImage.src = product.imagen;
            modalProductImage.alt = product.titulo;
            modalProductTitle.textContent = product.titulo;
            modalProductCategory.textContent = product.categoria;
            modalProductDescription.textContent = product.descripcion;
            
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Evitar scroll en el fondo
        }
    }
    
    // Función para cerrar el modal
    function closeModalFunc() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restaurar scroll
    }
    
    // Asignar eventos a los botones de productos
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = productCard.dataset.productId;
            openModal(productId);
        });
    });
    
    // Cerrar modal con botón X
    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }
    
    // Cerrar modal haciendo clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunc();
        }
    });
    
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModalFunc();
        }
    });
});

// ========== Cargar componentes con fetch ========== //

/**
 * Carga un componente HTML mediante fetch y lo inserta en el elemento de destino
 * @param {string} url - URL del componente a cargar
 * @param {string} targetId - ID del elemento donde se insertará el contenido
 */
function cargarComponente(url, targetId) {
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                targetElement.innerHTML = html;
                // Disparar evento para indicar que el componente ha sido cargado
                const event = new CustomEvent('componenteLoaded', { detail: { id: targetId } });
                document.dispatchEvent(event);
            })
            .catch(error => {
                console.error(`Error al cargar el componente ${url}:`, error);
                targetElement.innerHTML = `<p class="error">No se pudo cargar el contenido. Por favor, recarga la página.</p>`;
            });
    }
}


    const productos = Object.entries(productosData)
        .filter(([id, producto]) => {
            const coincideCategoria = filtroCategoria === 'todos' || producto.categoria.toLowerCase().includes(filtroCategoria.toLowerCase());
            const coincideBusqueda = producto.titulo.toLowerCase().includes(textoBusqueda.toLowerCase());
            return coincideCategoria && coincideBusqueda;
        });

    if (productos.length === 0) {
        contenedor.innerHTML = '<p>No se encontraron productos.</p>';
        return;
    }

    productos.forEach(([id, producto]) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.productId = id;
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.titulo}" class="product-img">
            <h4 class="product-title">${producto.titulo}</h4>
            <p class="product-category">${producto.categoria}</p>
            <button class="btn-view">Ver más</button>
        `;
        contenedor.appendChild(card);
    });

    // Volver a asignar eventos para abrir modal
    document.querySelectorAll('.btn-view').forEach(btn => {
        btn.addEventListener('click', function () {
            const id = this.closest('.product-card').dataset.productId;
            const producto = productosData[id];
            if (producto) {
                document.getElementById('modalProductImage').src = producto.imagen;
                document.getElementById('modalProductTitle').textContent = producto.titulo;
                document.getElementById('modalProductCategory').textContent = producto.categoria;
                document.getElementById('modalProductDescription').textContent = producto.descripcion;
                document.getElementById('productModal').classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });


// ========== Filtro y búsqueda ========== //

document.addEventListener('DOMContentLoaded', function () {
    const filtro = document.getElementById('filtro-categoria');
    const buscador = document.getElementById('buscador');

    if (filtro && buscador) {
        filtro.addEventListener('change', () => {
            renderizarProductos(filtro.value, buscador.value);
        });

        buscador.addEventListener('input', () => {
            renderizarProductos(filtro.value, buscador.value);
        });
    }

    // Render inicial
    renderizarProductos();
});