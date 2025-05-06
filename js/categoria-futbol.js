document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');
  const modal = document.getElementById('productModal');
  const closeModal = modal.querySelector('.close-modal');

  const modalImage = document.getElementById('modalProductImage');
  const modalTitle = document.getElementById('modalProductTitle');
  const modalCategory = document.getElementById('modalProductCategory');
  const modalId = document.getElementById('modalProductId');
  const modalDescription = document.getElementById('modalProductDescription');
  const btnAgregar = document.getElementById("btnAgregarAlCarrito");

  const descripciones = {
    f1: "Escudo Huracán.",
    f2: "Escudo Estudiantes de la Plata.",
    f3: "Escudo Independiente.",
    f4: "Escudo River Plate.",
    f5: "Escudo FC Barcelona.",
    f6: "Escudo Real Madrid.",
    f7: "Sticker del arquero Dibu Martínez.",
    f8: "Sticker de la Copa del Mundo.",
    f9: "Sticker del estadio La Bombonera.",
    f10: "Sticker del estadio Monumental.",
    f11: "Sticker del estadio Camp Nou.",
    f12: "Sticker del estadio Santiago Bernabéu."
  };

  let productoActual = null;

  productCards.forEach((card, index) => {
    const button = card.querySelector('.btn-view');
    button.addEventListener('click', () => {
      const id = card.dataset.productId;
      const image = card.querySelector('img').src;
      const title = card.querySelector('h3').textContent;
      const category = card.querySelector('.product-category').textContent;

      const codigo = "FU-" + String(index + 1).padStart(5, '0');

      productoActual = {
        codigo,
        nombre: title,
        categoria: category,
        imagen: image,
        descripcion: descripciones[id] || "Descripción no disponible."
      };

      modalImage.src = image;
      modalTitle.textContent = title;
      modalCategory.textContent = category;
      modalId.textContent = codigo;
      modalDescription.textContent = productoActual.descripcion;

      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  const btnAgregar = document.getElementById("btnAgregarAlCarrito");

  if (btnAgregar) {
  btnAgregar.addEventListener("click", () => {
    if (productoActual) {
      agregarAlCarrito(productoActual);
      document.getElementById('productModal').classList.remove('show');
      document.body.style.overflow = '';
    }
  });
}

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
});
