// categoria-futbol.js corregido sin precio

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
    A1: "Corazon rosado",
    A2: "Sobre corazon",
    A3: "Beso."
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
          imagen,
          cantidad: 1
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
