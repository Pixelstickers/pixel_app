const productosAmor = [
  {
    id: "AM-00001",
    nombre: "Corazón flechado",
    imagen: "../imagenes/AM-00001.png",
    categoria: "Amor"
  },
  {
    id: "AM-00002",
    nombre: "Pareja kawaii",
    imagen: "../imagenes/AM-00002.png",
    categoria: "Amor"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos-container");
  productosAmor.forEach(producto => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.productId = producto.id;
    card.dataset.productName = producto.nombre;
    card.dataset.productImg = producto.imagen.split("/").pop();

    card.innerHTML = `
      <div class="product-img" onclick="abrirModal('${producto.imagen}', '${producto.nombre}', '${producto.categoria}', '${producto.id}')">
        <img src="${producto.imagen}" alt="${producto.nombre}" />
      </div>
      <div class="cantidad-control">
        <button class="btn-restar" onclick="restarDelCarrito('${producto.id}')">−</button>
        <button class="btn-agregar" onclick="agregarAlCarritoDesdeElemento(this)"
          data-product-id="${producto.id}"
          data-product-name="${producto.nombre}"
          data-product-img="${producto.imagen.split("/").pop()}">+</button>
      </div>
      <h3>${producto.nombre}</h3>
      <p class="product-category">${producto.categoria}</p>
    `;
    contenedor.appendChild(card);
  });
});
