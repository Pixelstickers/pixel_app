document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');
  const modal = document.getElementById('productModal');
  const closeModal = modal.querySelector('.close-modal');

  const modalImage = document.getElementById('modalProductImage');
  const modalTitle = document.getElementById('modalProductTitle');
  const modalCategory = document.getElementById('modalProductCategory');
  const modalId = document.getElementById('modalProductId');
  const modalDescription = document.getElementById('modalProductDescription');
  const btnAgregar = document.getElementById('btnAgregarAlCarrito');

  const descripciones = {
    f1: "Escudo Huracán.",
    f2: "Escudo Estudiantes de la Plata.",
    f3: "Escudo Independiente.",
  };

  let productoActual = null;

  productCards.forEach((card, index) => {
    const button = card.querySelector('.btn-view');
    if (button) {
      button.addEventListener('click', () => {
        const id = card.dataset.productId;
        const imagen = card.querySelector('img').src;
        const nombre = card.querySelector('h3').textContent;
        const categoria = card.querySelector('.product-category').textContent;

        modalImage.src = imagen;
        modalTitle.textContent = nombre;
        modalCategory.textContent = categoria;
        modalId.textContent = "FU-" + String(index + 1).padStart(5, '0');
        modalDescription.textContent = descripciones[id] || "Sin descripción disponible.";

        productoActual = {
          id,
          nombre,
          categoria,
          imagen,
          precio: parseFloat(card.dataset.productPrice || "0")
        };

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
      });
    }
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  });

  if (btnAgregar) {
    btnAgregar.addEventListener('click', () => {
      if (productoActual) {
        agregarAlCarrito(productoActual);
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  }
});

// ✅ Solo un único listener para botones +
/* document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-agregar")) {
    const boton = e.target;

    // Lee desde el botón directamente
    const id = boton.dataset.productId;
    const nombre = boton.dataset.productName;
    const imagen = boton.dataset.productImg;
    const precio = boton.dataset.productPrice;

    if (!id || !nombre || !imagen || !precio) {
      console.warn("Faltan datos del producto", { id, nombre, imagen, precio });
      return;
    }

    const producto = {
      id,
      nombre,
      imagen,
      precio: parseFloat(precio),
      cantidad: 1
    };

    agregarAlCarrito(producto);

    // Feedback visual
    e.target.textContent = "✅";
    setTimeout(() => {
      e.target.textContent = "➕";
    }, 1000);
  }

  if (e.target.classList.contains("btn-ver")) {
    const card = e.target.closest(".product-card");
    const id = card.dataset.productId;
    abrirModalProducto(id);
  }
}); */

function abrirModal(imagen, titulo, categoria, id) {
  const modal = document.getElementById("productModal");
  modal.classList.add("show");
  document.getElementById("modalProductImage").src = imagen;
  document.getElementById("modalProductTitle").innerText = titulo;
  document.getElementById("modalProductCategory").innerText = categoria;
  document.getElementById("modalProductId").innerText = id;
}
