// carrito.js corregido con contador y suma/resta correctos

function agregarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const index = carrito.findIndex(item => item.id === producto.id);

  if (index !== -1) {
    carrito[index].cantidad += 1;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      imagen: producto.imagen,
      cantidad: 1
    });
  }

  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarCarrito();
}

function restarDelCarrito(id) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const index = carrito.findIndex(item => item.id === id);

  if (index !== -1) {
    if (carrito[index].cantidad > 1) {
      carrito[index].cantidad -= 1;
    } else {
      carrito.splice(index, 1);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
  }
}

function agregarUno(id) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const index = carrito.findIndex(item => item.id === id);

  if (index !== -1) {
    carrito[index].cantidad += 1;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
  }
}

function vaciarCarrito() {
  localStorage.removeItem('carrito');
  actualizarCarrito();
}

function actualizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contenedor = document.getElementById('carritoContenido');
  const totalElemento = document.getElementById('carritoTotal');

  // Actualizar burbuja contador
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
  document.getElementById('carritoContador').textContent = totalItems;

  contenedor.innerHTML = '';

  if (carrito.length === 0) {
    contenedor.innerHTML = '<p>No hay productos en el carrito.</p>';
    totalElemento.textContent = '';
    return;
  }

  carrito.forEach(item => {
    const productoHTML = document.createElement('div');
    productoHTML.classList.add('carrito-item');
    productoHTML.innerHTML = `
      <div class="carrito-item-info">
        <img src="${item.imagen}" alt="${item.nombre}" />
        <div>
          <strong>${item.nombre}</strong><br />
          <span>Cantidad: ${item.cantidad}</span>
        </div>
      </div>
      <div class="carrito-controles">
        <button onclick="restarDelCarrito('${item.id}')">−</button>
        <button onclick="agregarUno('${item.id}')">+</button>

      </div>
    `;
    contenedor.appendChild(productoHTML);
  });

  const vaciar = document.createElement('button');
  vaciar.textContent = 'Vaciar Carrito';
  vaciar.className = 'btn-vaciar';
  vaciar.onclick = vaciarCarrito;
  contenedor.appendChild(vaciar);

  totalElemento.textContent = '';
}

document.getElementById('abrirCarrito').addEventListener('click', () => {
  document.getElementById('carritoPanel').classList.add('active');
  actualizarCarrito();
});

document.getElementById('cerrarCarrito').addEventListener('click', () => {
  document.getElementById('carritoPanel').classList.remove('active');
});
