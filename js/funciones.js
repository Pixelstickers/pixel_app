/**
 * Pixel - Catálogo de Stickers y Papelería Creativa
 * Funciones JavaScript Globales
 */

// ========== Navegación ========== //

// Manejar menú móvil
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("productModal");
    const closeModalBtn = document.querySelector(".close-modal");
  
    // Cierra al tocar la X
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("show");
        document.body.style.overflow = '';
      });
    }
  
/*     // Cierra al hacer clic fuera del modal-content
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("show");
        document.body.style.overflow = '';
      }
    }); */
  
    // Cierra con tecla ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("show")) {
        modal.classList.remove("show");
        document.body.style.overflow = '';
      }
    });
  });
    
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
  
 // ========= Función global para cerrar modal =========
 function closeModalFunc() {
    const modal = document.getElementById("productModal");
    modal.classList.remove("show");
    document.body.style.overflow = "";
    document.getElementById("modalProductImage").src = ""; // limpia imagen
}
  
  // ========= Modal de Productos =========
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("productModal");
    const closeModalBtn = document.querySelector(".close-modal");
  
    // Cerrar con botón X
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", closeModalFunc);
    }
  
    // Cerrar con clic fuera del contenido
    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          closeModalFunc();
        }
      });
    }
  
    // Cerrar con tecla ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("show")) {
        closeModalFunc();
      }
    });
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
        titulo: "Messi y Roman",
        categoria: "Personajes",
        imagen: "imagenes/FU-00003.png",
        descripcion: "Messi y Roman. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    f5: {
        titulo: "Mate River",
        categoria: "categoria",
        imagen: "imagenes/FU-00005.png",
        descripcion: "Mate de River. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f6: {
        titulo: "Escudo de River Plate",
        categoria: "categoria",
        imagen: "imagenes/FU-00006.png",
        descripcion: "Escudo de River Plate. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f7: {
        titulo: "Escudo de San Lorenzo",
        categoria: "categoria",
        imagen: "imagenes/FU-00007.png",
        descripcion: "Escudo de San Lorenzo. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f8: {
        titulo: "Boca",
        categoria: "categoria",
        imagen: "imagenes/FU-00008.png",
        descripcion: "Boca. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f9: {
        titulo: "Boca BA",
        categoria: "categoria",
        imagen: "imagenes/FU-00009.png",
        descripcion: "Boca BA. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f10: {
        titulo: "CARP",
        categoria: "categoria",
        imagen: "imagenes/FU-00010.png",
        descripcion: "CARP. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f11: {
        titulo: "Dios Maradona",
        categoria: "categoria",
        imagen: "imagenes/FU-00011.png",
        descripcion: "Dios Maradona. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f12: {
        titulo: "Marcos Rojo gritando",
        categoria: "categoria",
        imagen: "imagenes/FU-00012.png",
        descripcion: "Marcos Rojo gritando. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f13: {
        titulo: "Escudo de Banfield",
        categoria: "categoria",
        imagen: "imagenes/FU-00013.png",
        descripcion: "Escudo de Banfield. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f14: {
        titulo: "Escudo de Defensa y Justicia",
        categoria: "categoria",
        imagen: "imagenes/FU-00014.png",
        descripcion: "Escudo de Defensa y Justicia. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f15: {
        titulo: "Escudo de Racing",
        categoria: "categoria",
        imagen: "imagenes/FU-00015.png",
        descripcion: "Escudo de Racing. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f16: {
        titulo: "River Libertadores",
        categoria: "categoria",
        imagen: "imagenes/FU-00016.png",
        descripcion: "River Libertadores. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f17: {
        titulo: "Monumental",
        categoria: "categoria",
        imagen: "imagenes/FU-00017.png",
        descripcion: "Monumental. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f18: {
        titulo: "Escudo de Gimnasia",
        categoria: "categoria",
        imagen: "imagenes/FU-00018.png",
        descripcion: "Escudo de Gimnasia. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f19: {
        titulo: "Julian y Enzo",
        categoria: "categoria",
        imagen: "imagenes/FU-00019.png",
        descripcion: "Julian y Enzo. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f20: {
        titulo: "Riquelme",
        categoria: "categoria",
        imagen: "imagenes/FU-00020.png",
        descripcion: "Riquelme. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f21: {
        titulo: "Estudiantes",
        categoria: "categoria",
        imagen: "imagenes/FU-00021.png",
        descripcion: "Estudiantes. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f22: {
        titulo: "Atletico Belgrano",
        categoria: "categoria",
        imagen: "imagenes/FU-00022.png",
        descripcion: "Atletico Belgrano. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f23: {
        titulo: "Tevez",
        categoria: "categoria",
        imagen: "imagenes/FU-00023.png",
        descripcion: "Tevez. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },
    f24: {
        titulo: "Estudiantes",
        categoria: "categoria",
        imagen: "imagenes/FU-00024.png",
        descripcion: "Estudiantes. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico"
    },

    // Amor
    A1: {
        titulo: "Corazon rosado",
        categoria: "categoria",
        imagen: "imagenes/AM-00001.png",
        descripcion: "Corazon Rosa. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    A2: {
        titulo: "Beso",
        categoria: "categoria",
        imagen: "imagenes/AM-00002.png",
        descripcion: "Corazon Rosa. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    A3: {
        titulo: "Sobre corazon",
        categoria: "categoria",
        imagen: "imagenes/AM-00003.png",
        descripcion: "Corazon Rosa. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    A4: {
        titulo: "Patente te amo",
        categoria: "categoria",
        imagen: "imagenes/AM-00004.png",
        descripcion: "patente te amo. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    A5: {
        titulo: "LOVE",
        categoria: "categoria",
        imagen: "imagenes/AM-00005.png",
        descripcion: "LOVE. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    A6: {
        titulo: "Decir Amor",
        categoria: "categoria",
        imagen: "imagenes/AM-00006.png",
        descripcion: "Decir Amor. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    A7: {
        titulo: "Muchos besos",
        categoria: "categoria",
        imagen: "imagenes/AM-00007.png",
        descripcion: "Muchos besos. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    A8: {
        titulo: "Dados corazon",
        categoria: "categoria",
        imagen: "imagenes/AM-00008.png",
        descripcion: "Dados corazon. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    A9: {
        titulo: "Sobre con corazon",
        categoria: "categoria",
        imagen: "imagenes/AM-00009.png",
        descripcion: "Sobre con corazon. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    A10: {
        titulo: "Perra y gato corazon",
        categoria: "categoria",
        imagen: "imagenes/AM-00010.png",
        descripcion: "Perra y gato corazon. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
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
        const modal = document.getElementById("productModal");
        modal.classList.remove("show");
        document.body.style.overflow = "";
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
        
// Mostrar cantidad actualizada
const contenedor = boton.closest('.cantidad-control');
const spanCantidad = contenedor.querySelector('.cantidad-display');
if (spanCantidad) {
  const id = boton.dataset.productId;
  const item = carrito.find(p => p.id === id);
  spanCantidad.textContent = item ? item.cantidad : 0;
}
