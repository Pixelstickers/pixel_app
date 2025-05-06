document.addEventListener("DOMContentLoaded", () => {
  const descripciones = {
    f1: "Escudo Huracan",
    f2: "Escudo Estudiantes de la Plata",
    f3: "Escudo Independiente",
  };

  const productCards = document.querySelectorAll(".product-card");
  const modal = document.getElementById("productModal");
  const modalImage = document.getElementById("modalProductImage");
  const modalTitle = document.getElementById("modalProductTitle");
  const modalCategory = document.getElementById("modalProductCategory");
  const modalId = document.getElementById("modalProductId");
  const modalDescription = document.getElementById("modalProductDescription");
  const closeModal = document.querySelector(".close-modal");
  const btnAgregar = document.getElementById("btnAgregarAlCarrito");

  let productoActual = null;

  productCards.forEach((card) => {
    const btn = card.querySelector(".btn-view");
    btn.addEventListener("click", () => {
      const id = card.dataset.productId;
      const img = card.querySelector("img").src;
      const nombre = card.querySelector("h3").textContent;
      const categoria = card.querySelector(".product-category").textContent;

      modalImage.src = img;
      modalTitle.textContent = nombre;
      modalCategory.textContent = categoria;
      modalId.textContent = "FU-" + id.padStart(5, "0");
      modalDescription.textContent = descripciones[id] || "Sin descripción.";

      productoActual = {
        codigo: id,
        nombre,
        categoria,
        imagen: img,
      };

      modal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  });

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    });
  }

  if (btnAgregar) {
    btnAgregar.addEventListener("click", () => {
      if (productoActual) {
        agregarAlCarrito(productoActual); // Usa la función de carrito.js
        modal.classList.remove("show");
        document.body.style.overflow = "";
      }
    });
  }

  document.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });
});
