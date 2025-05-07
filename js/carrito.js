window.carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let carrito = window.carrito;


;

function agregarAlCarrito(producto) {
  const existente = carrito.find(item => item.id === producto.id);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push(producto);
  }
  guardarCarrito();
  actualizarVistaCarrito();
}

function restarDelCarrito(productId) {
  const index = carrito.findIndex(item => item.id === productId);
  if (index !== -1) {
    carrito[index].cantidad -= 1;
    if (carrito[index].cantidad <= 0) {
      carrito.splice(index, 1);
    }
    guardarCarrito();
    actualizarVistaCarrito();
  }
}

function eliminarDelCarrito(productId) {
  carrito = carrito.filter(item => item.id !== productId);
  guardarCarrito();
  actualizarVistaCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  actualizarVistaCarrito();
}

function exportarCarrito() {
  let contenido = carrito.map(prod => `• ${prod.nombre} - ${prod.codigo} (x${prod.cantidad})`).join('\n');
  const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'carrito_pixel.txt';
  a.click();
  URL.revokeObjec
  tURL(url);
}
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarVistaCarrito() {
  const contenido = document.getElementById("carritoContenido");
  const total = document.getElementById("carritoTotal");
  const contador = document.getElementById("carritoContador");

  if (!contenido || !total || !contador) return;

  contenido.innerHTML = "";
  let totalPrecio = 0;
  let totalCantidad = 0;

  if (carrito.length === 0) {
    contenido.innerHTML = "<p>No hay productos en el carrito.</p>";
  } else {
    carrito.forEach(producto => {
      const item = document.createElement("div");
      item.className = "carrito-item";

      item.innerHTML = `
        <div class="carrito-item-info">
          <img src="${location.pathname.endsWith('index.html') || location.pathname === '/' 
  ? producto.imagen.replace('../', '') 
  : producto.imagen}" alt="${producto.nombre}" />
          <div>
            <p>${producto.nombre}</p>
            <p class="product-code">${producto.codigo}</p>
            <div class="carrito-controles">
              <button onclick="restarDelCarrito('${producto.id}')">−</button>
              <span>${producto.cantidad}</span>
              <button onclick="agregarAlCarrito(${JSON.stringify(producto).replace(/"/g, '&quot;')})">+</button>
              <button class="btn-eliminar" onclick="eliminarDelCarrito('${producto.id}')">🗑️</button>
            </div>
          </div>
        </div>
      `;
      contenido.appendChild(item);
      totalPrecio += producto.cantidad * 1; // Podés multiplicar por precio si lo agregás
      totalCantidad += producto.cantidad;
    });
  }

  total.textContent = `${totalPrecio}`;
  contador.textContent = totalCantidad;
}

// Mostrar carrito panel
document.addEventListener("DOMContentLoaded", () => {
  actualizarVistaCarrito();

  const abrirCarritoBtn = document.getElementById("abrirCarrito");
  const cerrarCarritoBtn = document.getElementById("cerrarCarrito");
  const panelCarrito = document.getElementById("carritoPanel");

  if (abrirCarritoBtn && cerrarCarritoBtn && panelCarrito) {
    abrirCarritoBtn.addEventListener("click", () => {
      panelCarrito.classList.add("active");
    });

    cerrarCarritoBtn.addEventListener("click", () => {
      panelCarrito.classList.remove("active");
    });
  }
});
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  window.carrito = carrito; // <- esta línea es clave
}
