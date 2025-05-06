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
        codigo: "FU-" + String(index + 1).padStart(5, '0'),
        nombre,
        categoria,
        imagen
      };

      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
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
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-agregar")) {
    const card = e.target.closest(".product-card");
    const id = card.dataset.productId;
    const nombre = card.querySelector("h3").textContent;
    const categoria = card.querySelector(".product-category").textContent;
    const imagen = card.querySelector("img").src;

    const producto = { id, nombre, categoria, imagen };
    agregarAlCarrito(producto);
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-agregar")) {
    const card = e.target.closest(".product-card");
    const id = card.dataset.productId;
    const nombre = card.querySelector("h3").textContent;
    const categoria = card.querySelector(".product-category").textContent;
    const imagen = card.querySelector("img").src;

    const producto = { id, nombre, categoria, imagen };
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
});

