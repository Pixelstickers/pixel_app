// carrito.js

function agregarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const index = carrito.findIndex(item => item.id === producto.id);

  if (index !== -1) {
    carrito[index].cantidad += 1;
  } else {
    carrito.push({
      ...producto,
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

function actualizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contenedor = document.getElementById('carritoContenido');
  const totalElemento = document.getElementById('carritoTotal');

  contenedor.innerHTML = '';

  if (carrito.length === 0) {
    contenedor.innerHTML = '<p>No hay productos en el carrito.</p>';
    totalElemento.textContent = '$0';
    return;
  }

  let total = 0;

  carrito.forEach(item => {
    const productoHTML = document.createElement('div');
    productoHTML.classList.add('carrito-item');
    productoHTML.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" />
      <div>
        <strong>${item.nombre}</strong><br />
        <span>Cantidad: ${item.cantidad}</span><br />
        <span>Precio: $${item.precio}</span>
      </div>
    `;
    contenedor.appendChild(productoHTML);

    total += item.cantidad * item.precio;
  });

  totalElemento.textContent = `$${total}`;
}

document.getElementById('abrirCarrito').addEventListener('click', () => {
  document.getElementById('carritoPanel').classList.add('active');
  actualizarCarrito();
});

document.getElementById('cerrarCarrito').addEventListener('click', () => {
  document.getElementById('carritoPanel').classList.remove('active');
});
