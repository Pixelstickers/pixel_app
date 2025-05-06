let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(producto) {
  const existente = carrito.find(p => p.codigo === producto.codigo);
  if (existente) {
    existente.cantidad++;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }
  guardarCarrito();
  actualizarVistaCarrito();
  actualizarContadorCarrito();
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarVistaCarrito() {
  const contenedor = document.getElementById("carritoContenido");
  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
    return;
  }

  carrito.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("carrito-item");

    div.innerHTML = `
      <div style="flex-grow: 1">
        <strong>${item.nombre}</strong><br>
        <small>${item.categoria}</small><br>
        <div class="cantidad-control">
          <button class="menos" data-codigo="${item.codigo}">➖</button>
          <span>${item.cantidad}</span>
          <button class="mas" data-codigo="${item.codigo}">➕</button>
        </div>
      </div>
      <button class="eliminar" data-codigo="${item.codigo}">🗑️</button>
    `;

    contenedor.appendChild(div);
  });

  // Reasignar eventos a los botones
  document.querySelectorAll('.mas').forEach(btn => {
    btn.addEventListener('click', () => cambiarCantidad(btn.dataset.codigo, 1));
  });

  document.querySelectorAll('.menos').forEach(btn => {
    btn.addEventListener('click', () => cambiarCantidad(btn.dataset.codigo, -1));
  });

  document.querySelectorAll('.eliminar').forEach(btn => {
    btn.addEventListener('click', () => eliminarDelCarrito(btn.dataset.codigo));
  });
}

function actualizarContadorCarrito() {
  const contador = document.getElementById("carritoContador");
  const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  contador.textContent = total;
}

function cambiarCantidad(codigo, delta) {
  const producto = carrito.find(p => p.codigo === codigo);
  if (!producto) return;

  producto.cantidad += delta;
  if (producto.cantidad <= 0) {
    eliminarDelCarrito(codigo);
  } else {
    guardarCarrito();
    actualizarVistaCarrito();
  }
}

function eliminarDelCarrito(codigo) {
  carrito = carrito.filter(p => p.codigo !== codigo);
  guardarCarrito();
  actualizarVistaCarrito();
  actualizarContadorCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarVistaCarrito();
  actualizarContadorCarrito();
});