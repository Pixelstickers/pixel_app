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
        // Libros
    L1: {
        titulo: "Gato sobre libros",
        categoria: "categoria",
        imagen: "imagenes/LI-00001.png",
        descripcion: "Gato sobre libros. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    L2: {
        titulo: "Pila de libros",
        categoria: "categoria",
        imagen: "imagenes/LI-00002.png",
        descripcion: "Pila de libros. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    L3: {
        titulo: "Chica leyendo",
        categoria: "categoria",
        imagen: "imagenes/LI-00003.png",
        descripcion: "Chica leyendo. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    L4: {
        titulo: "Libro abierto",
        categoria: "categoria",
        imagen: "imagenes/LI-00004.png",
        descripcion: "Libro abierto. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    L5: {
        titulo: "Frasco de libros",
        categoria: "categoria",
        imagen: "imagenes/LI-00005.png",
        descripcion: "Frasco de libros. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    L6: {
        titulo: "Libro y lampara",
        categoria: "categoria",
        imagen: "imagenes/LI-00006.png",
        descripcion: "Libro y lampara. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    L7: {
        titulo: "Lectora",
        categoria: "categoria",
        imagen: "imagenes/LI-00007.png",
        descripcion: "Lectora. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    L8: {
        titulo: "Libro antiguo",
        categoria: "categoria",
        imagen: "imagenes/LI-00008.png",
        descripcion: "Libro antiguo. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    L9: {
        titulo: "Libro Rosado",
        categoria: "categoria",
        imagen: "imagenes/LI-00009.png",
        descripcion: "Libro Rosado. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    L10: {
        titulo: "Estante libro",
        categoria: "categoria",
        imagen: "imagenes/LI-00010.png",
        descripcion: "Estante libro. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    // Harry Potter
    H1: {
        titulo: "Gryffindor",
        categoria: "categoria",
        imagen: "imagenes/HP-00001.png",
        descripcion: "Gryffindor. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    H2: {
        titulo: "Slytherin",
        categoria: "categoria",
        imagen: "imagenes/HP-00002.png",
        descripcion: "Slytherin. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    H3: {
        titulo: "Ravenclaw",
        categoria: "categoria",
        imagen: "imagenes/HP-00003.png",
        descripcion: "Ravenclaw. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    H4: {
        titulo: "Hufflepuff",
        categoria: "categoria",
        imagen: "imagenes/HP-00004.png",
        descripcion: "Hufflepuff. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    H5: {
        titulo: "Sobre Hogwarts",
        categoria: "categoria",
        imagen: "imagenes/HP-00005.png",
        descripcion: "Sobre Hogwarts. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    H6: {
        titulo: "Hedwig",
        categoria: "categoria",
        imagen: "imagenes/HP-00006.png",
        descripcion: "Hedwig. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    H7: {
        titulo: "Sombrero seleccionador",
        categoria: "categoria",
        imagen: "imagenes/HP-00007.png",
        descripcion: "Sombrero seleccionador. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    H8: {
        titulo: "Hogwarts",
        categoria: "categoria",
        imagen: "imagenes/HP-00008.png",
        descripcion: "Hogwarts. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    H9: {
        titulo: "Hapee Birthdae",
        categoria: "categoria",
        imagen: "imagenes/HP-00009.png",
        descripcion: "Hapee Birthdae. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    H10: {
        titulo: "Auto encantado",
        categoria: "categoria",
        imagen: "imagenes/HP-00010.png",
        descripcion: "Auto encantado. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    // Gatitos
    G1: {
        titulo: "Gato mariposa",
        categoria: "categoria",
        imagen: "imagenes/GA-00001.png",
        descripcion: "Gato mariposa. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    G2: {
        titulo: "Hada felina",
        categoria: "categoria",
        imagen: "imagenes/GA-00002.png",
        descripcion: "Hada felina. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    G3: {
        titulo: "Gato Love",
        categoria: "categoria",
        imagen: "imagenes/GA-00003.png",
        descripcion: "Gato Love. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    G4: {
        titulo: "Gato programador",
        categoria: "categoria",
        imagen: "imagenes/GA-00004.png",
        descripcion: "Gato programador. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    G5: {
        titulo: "Gato dormilón",
        categoria: "categoria",
        imagen: "imagenes/GA-00005.png",
        descripcion: "Gato dormilón. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    G6: {
        titulo: "Gato blanco",
        categoria: "categoria",
        imagen: "imagenes/GA-00006.png",
        descripcion: "Gato blanco. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    G7: {
        titulo: "Gato brujo",
        categoria: "categoria",
        imagen: "imagenes/GA-00007.png",
        descripcion: "Gato brujo. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    G8: {
        titulo: "Gato Leyendo",
        categoria: "categoria",
        imagen: "imagenes/GA-00008.png",
        descripcion: "Gato Leyendo. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    G9: {
        titulo: "Gato Himalayo",
        categoria: "categoria",
        imagen: "imagenes/GA-00009.png",
        descripcion: "Gato Himalayo. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    G10: {
        titulo: "Gato maceta",
        categoria: "categoria",
        imagen: "imagenes/GA-00010.png",
        descripcion: "Gato maceta. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    // Disney
    D1: {
        titulo: "Mickey Mouse",
        categoria: "categoria",
        imagen: "imagenes/DI-00001.png",
        descripcion: "Mickey Mouse. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    D2: {
        titulo: "Intensamente",
        categoria: "categoria",
        imagen: "imagenes/DI-00002.png",
        descripcion: "Intensamente. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    D3: {
        titulo: "Tigger",
        categoria: "categoria",
        imagen: "imagenes/DI-00003.png",
        descripcion: "Tigger. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    D4: {
        titulo: "Bella y Bestia",
        categoria: "categoria",
        imagen: "imagenes/DI-00004.png",
        descripcion: "Bella y Bestia. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    D5: {
        titulo: "Jazmin",
        categoria: "categoria",
        imagen: "imagenes/DI-00005.png",
        descripcion: "Jazmin. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    D6: {
        titulo: "Dory",
        categoria: "categoria",
        imagen: "imagenes/DI-00006.png",
        descripcion: "Dory. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    D7: {
        titulo: "Igor",
        categoria: "categoria",
        imagen: "imagenes/DI-00007.png",
        descripcion: "Igor. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    D8: {
        titulo: "Alicia",
        categoria: "categoria",
        imagen: "imagenes/DI-00008.png",
        descripcion: "Alicia. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    D9: {
        titulo: "Nemo",
        categoria: "categoria",
        imagen: "imagenes/DI-00009.png",
        descripcion: "Nemo. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    D10: {
        titulo: "Stich con rosa",
        categoria: "categoria",
        imagen: "imagenes/DI-00010.png",
        descripcion: "Stich con rosa. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    // Capybara
    C1: {
        titulo: "Capybara mochila tortuga",
        categoria: "categoria",
        imagen: "imagenes/CA-00001.png",
        descripcion: "Capybara mochila tortuga. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    C2: {
        titulo: "Capybara tomando mate",
        categoria: "categoria",
        imagen: "imagenes/CA-00002.png",
        descripcion: "Capybara tomando mate. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    C3: {
        titulo: "Capybara con corazon",
        categoria: "categoria",
        imagen: "imagenes/CA-00003.png",
        descripcion: "Capybara con corazon. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    C4: {
        titulo: "Capydino",
        categoria: "categoria",
        imagen: "imagenes/CA-00004.png",
        descripcion: "Capydino. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    C5: {
        titulo: "Capybara taekwondista",
        categoria: "categoria",
        imagen: "imagenes/CA-00005.png",
        descripcion: "Capybara taekwondista. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    C6: {
        titulo: "Capy guirnaldas",
        categoria: "categoria",
        imagen: "imagenes/CA-00006.png",
        descripcion: "Capy guirnaldas. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    C7: {
        titulo: "Capy vaso",
        categoria: "categoria",
        imagen: "imagenes/CA-00007.png",
        descripcion: "Capy vaso. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    C8: {
        titulo: "Capybara unicornio",
        categoria: "categoria",
        imagen: "imagenes/CA-00008.png",
        descripcion: "Capybara unicornio. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    C9: {
        titulo: "Capybara bailarina",
        categoria: "categoria",
        imagen: "imagenes/CA-00009.png",
        descripcion: "Capybara bailarina. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    C10: {
        titulo: "Capybara skate",
        categoria: "categoria",
        imagen: "imagenes/CA-00010.png",
        descripcion: "Capybara skate. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },    
    // Frases
    F1: {
        titulo: "No quiero recursar pero tampoco quiero estudiar",
        categoria: "categoria",
        imagen: "imagenes/FA-00001.png",
        descripcion: "No quiero recursar pero tampoco quiero estudiar. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    F2: {
        titulo: "Tu no eres bebecita, eres bebesota",
        categoria: "categoria",
        imagen: "imagenes/FA-00002.png",
        descripcion: "Tu no eres bebecita, eres bebesota. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    F3: {
        titulo: "O madrugo o soy simpatica",
        categoria: "categoria",
        imagen: "imagenes/FA-00003.png",
        descripcion: "O madrugo o soy simpatica. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    F4: {
        titulo: "Llegue tarde por que no queria venir",
        categoria: "categoria",
        imagen: "imagenes/FA-00004.png",
        descripcion: "Llegue tarde por que no queria venir. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    F5: {
        titulo: "No te metas con mi siesta",
        categoria: "categoria",
        imagen: "imagenes/FA-00005.png",
        descripcion: "No te metas con mi siesta. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    F6: {
        titulo: "Hoy me quiero un poquito mas",
        categoria: "categoria",
        imagen: "imagenes/FA-00006.png",
        descripcion: "Hoy me quiero un poquito mas. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    F7: {
        titulo: "Deja que la vida te sorprenda",
        categoria: "categoria",
        imagen: "imagenes/FA-00007.png",
        descripcion: "Deja que la vida te sorprenda. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    F8: {
        titulo: "Disfruta cada momento",
        categoria: "categoria",
        imagen: "imagenes/FA-00008.png",
        descripcion: "Disfruta cada momento. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    C9: {
        titulo: "No estoy loca, soy mentalmente divertida",
        categoria: "categoria",
        imagen: "imagenes/FA-00009.png",
        descripcion: "No estoy loca, soy mentalmente divertida. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    F10: {
        titulo: "Sobreviviendo a mi etapa universitaria",
        categoria: "categoria",
        imagen: "imagenes/FA-00010.png",
        descripcion: "Sobreviviendo a mi etapa universitaria. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    }, 
    // Snoopy
    S1: {
        titulo: "Snoopy con flores",
        categoria: "categoria",
        imagen: "imagenes/SN-00001.png",
        descripcion: "Snoopy con flores. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    S2: {
        titulo: "Snoopy en casita",
        categoria: "categoria",
        imagen: "imagenes/SN-00002.png",
        descripcion: "Snoopy en casita, eres bebesota. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    S3: {
        titulo: "Snoopy rey",
        categoria: "categoria",
        imagen: "imagenes/SN-00003.png",
        descripcion: "Snoopy rey. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    S4: {
        titulo: "Snoopy dormido",
        categoria: "categoria",
        imagen: "imagenes/SN-00004.png",
        descripcion: "Snoopy dormido. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    S5: {
        titulo: "Snoopy riendo",
        categoria: "categoria",
        imagen: "imagenes/SN-00005.png",
        descripcion: "Snoopy riendo. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    S6: {
        titulo: "Snoopy hamburguesa",
        categoria: "categoria",
        imagen: "imagenes/SN-00006.png",
        descripcion: "Snoopy hamburguesa. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    S7: {
        titulo: "Snoopy skate",
        categoria: "categoria",
        imagen: "imagenes/SN-00007.png",
        descripcion: "Snoopy skate. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    S8: {
        titulo: "Snoopy dinosaurio",
        categoria: "categoria",
        imagen: "imagenes/SN-00008.png",
        descripcion: "Snoopy dinosaurio. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    S9: {
        titulo: "Snoopy leyendo",
        categoria: "categoria",
        imagen: "imagenes/SN-00009.png",
        descripcion: "Snoopy leyendo. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
    },
    S10: {
        titulo: "Snoopy tiburon",
        categoria: "categoria",
        imagen: "imagenes/SN-00010.png",
        descripcion: "Snoopy tiburon. Tamaño: 4x4cm. Resistente al agua, adhesivo u holográfico."
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
