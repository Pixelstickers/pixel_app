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
    contenedor.innerHTML = "<p>No hay productos en el carrito.</p>";
    return;
  }

  carrito.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("carrito-item");
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" />
      <div style="flex-grow: 1">
        <strong>${item.nombre}</strong><br>
        <small>${item.categoria}</small><br>
        <div class="cantidad-control">
          <button onclick="cambiarCantidad('${item.codigo}', -1)">➖</button>
          <span>${item.cantidad}</span>
          <button onclick="cambiarCantidad('${item.codigo}', 1)">➕</button>
        </div>
      </div>
      <button onclick="eliminarDelCarrito('${item.codigo}')">🗑️</button>
    `;
    contenedor.appendChild(div);
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
    actualizarContadorCarrito();
  }
}

function eliminarDelCarrito(codigo) {
  carrito = carrito.filter(p => p.codigo !== codigo);
  guardarCarrito();
  actualizarVistaCarrito();
  actualizarContadorCarrito();
}

// Inicializar al cargar
document.addEventListener("DOMContentLoaded", () => {
  actualizarVistaCarrito();
  actualizarContadorCarrito();

  const abrir = document.getElementById("abrirCarrito");
  const cerrar = document.getElementById("cerrarCarrito");

  if (abrir) abrir.addEventListener("click", () => {
    document.getElementById("carritoPanel").classList.add("active");
  });

  if (cerrar) cerrar.addEventListener("click", () => {
    document.getElementById("carritoPanel").classList.remove("active");
  });
});
