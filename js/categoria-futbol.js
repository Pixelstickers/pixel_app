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
  