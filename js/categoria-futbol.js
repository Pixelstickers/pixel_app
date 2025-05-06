document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    const modal = document.getElementById('productModal');
    const closeModal = modal.querySelector('.close-modal');
  
    const modalImage = document.getElementById('modalProductImage');
    const modalTitle = document.getElementById('modalProductTitle');
    const modalCategory = document.getElementById('modalProductCategory');
    const modalId = document.getElementById('modalProductId');
    const modalDescription = document.getElementById('modalProductDescription');
  
    // Descripciones (pueden expandirse o conectarse a productosData si lo usás)
   const descripciones = {
      f1: "Sticker de Lionel Messi levantando la copa en Qatar 2022.",
      f2: "Escudo oficial de la Asociación del Fútbol Argentino (AFA).",
      f3: "Escudo de Boca Juniors, el club Xeneize.",
      f4: "Escudo de River Plate, el club Millonario.",
      f5: "Escudo del FC Barcelona.",
      f6: "Escudo del Real Madrid.",
      f7: "Sticker del arquero Dibu Martínez.",
      f8: "Sticker de la Copa del Mundo.",
      f9: "Sticker del estadio La Bombonera.",
      f10: "Sticker del estadio Monumental.",
      f11: "Sticker del estadio Camp Nou.",
      f12: "Sticker del estadio Santiago Bernabéu."
    };
  
    productCards.forEach((card, index) => {
      const button = card.querySelector('.btn-view');
      button.addEventListener('click', () => {
        const id = card.dataset.productId; // ej: "f1"
        const image = card.querySelector('img').src;
        const title = card.querySelector('h3').textContent;
        const category = card.querySelector('.product-category').textContent;
  
        modalImage.src = image;
        modalTitle.textContent = title;
        modalCategory.textContent = category;
        modalId.textContent = "FU-" + String(index + 1).padStart(5, '0');
        modalDescription.textContent = descripciones[id] || "Descripción no disponible.";
  
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
      });
    });
  
    // Cerrar modal
    closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    });
  
    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
      }
    });
  });
  
  const carrito = [];

function actualizarContadorCarrito() {
  document.getElementById("carritoContador").textContent = carrito.length;
}

function renderizarCarrito() {
  const contenedor = document.getElementById("carritoContenido");
  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = '<p class="carrito-vacio">Todavía no agregaste nada 🛒</p>';
    return;
  }

  carrito.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("carrito-item");
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <div>
        <strong>${item.nombre}</strong><br>
        <small>${item.categoria}</small>
      </div>
    `;
    contenedor.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btnAgregar = document.getElementById("btnAgregarAlCarrito");
  const panel = document.getElementById("carritoPanel");
  const abrir = document.getElementById("abrirCarrito");
  const cerrar = document.getElementById("cerrarCarrito");
  const vaciar = document.getElementById("vaciarCarrito");

  if (btnAgregar) {
    btnAgregar.addEventListener("click", () => {
      const id = document.getElementById("modalProductId").textContent;
      const nombre = document.getElementById("modalProductTitle").textContent;
      const categoria = document.getElementById("modalProductCategory").textContent;
      const imagen = document.getElementById("modalProductImage").src;

      carrito.push({ id, nombre, categoria, imagen });
      actualizarContadorCarrito();
      renderizarCarrito();
      alert("Producto agregado al carrito.");
    });
  }

  if (abrir) {
    abrir.addEventListener("click", () => {
      panel.classList.add("active");
    });
  }

  if (cerrar) {
    cerrar.addEventListener("click", () => {
      panel.classList.remove("active");
    });
  }

  if (vaciar) {
    vaciar.addEventListener("click", () => {
      carrito.length = 0;
      actualizarContadorCarrito();
      renderizarCarrito();
    });
  }
});
