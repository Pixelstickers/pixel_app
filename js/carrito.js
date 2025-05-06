/**
 * Pixel - Catálogo de Stickers y Papelería Creativa
 * Funciones del carrito de compras
 */

// Gestión del carrito
let carrito = JSON.parse(localStorage.getItem('pixelCarrito')) || [];

// Función para agregar producto al carrito
function agregarAlCarrito(codigo, nombre, categoria, cantidad = 1) {
    const itemExistente = carrito.find(item => item.codigo === codigo);
    
    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({
            codigo,
            nombre,
            categoria,
            cantidad
        });
    }
    
    guardarCarrito();
    actualizarContadorCarrito();
    mostrarNotificacion(`${nombre} agregado al carrito`);
}
// Mostrar contenido del carrito en el panel lateral
function actualizarVistaCarrito() {
    const contenedor = document.getElementById('carritoContenido');
    const total = document.getElementById('carritoTotal');

    if (!contenedor || !total) return;

    if (carrito.length === 0) {
        contenedor.innerHTML = '<p>No hay productos en el carrito.</p>';
        total.textContent = '$0';
        return;
    }

    contenedor.innerHTML = '';
    let sumaTotal = 0;

    carrito.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('carrito-item');

        div.innerHTML = `
            <div>
                <strong>${item.nombre}</strong><br>
                <small>Categoría: ${item.categoria}</small><br>
                <small>Cantidad: ${item.cantidad}</small>
            </div>
            <button onclick="eliminarDelCarrito('${item.codigo}')">🗑️</button>
        `;

        contenedor.appendChild(div);
        sumaTotal += item.cantidad * 100; // acá podés reemplazar 100 por el precio real si lo tenés
    });

    total.textContent = `$${sumaTotal}`;
}

// Función para eliminar producto del carrito
function eliminarDelCarrito(codigo) {
    carrito = carrito.filter(item => item.codigo !== codigo);
    guardarCarrito();
    actualizarContadorCarrito();
    actualizarVistaCarrito();
}

// Función para actualizar cantidad de un producto
function actualizarCantidad(codigo, nuevaCantidad) {
    const item = carrito.find(item => item.codigo === codigo);
    if (item) {
        item.cantidad = Math.max(1, nuevaCantidad);
        guardarCarrito();
        actualizarVistaCarrito();
    }
}

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('pixelCarrito', JSON.stringify(carrito));
}

// Actualizar contador del carrito en el header
function actualizarContadorCarrito() {
    const contador = document.getElementById('carritoContador');
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    
    if (contador) {
        contador.textContent = totalItems;
        contador.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// Mostrar notificación
function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion';
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.classList.add('mostrar');
        setTimeout(() => {
            notificacion.classList.remove('mostrar');
            setTimeout(() => {
                notificacion.remove();
            }, 300);
        }, 2000);
    }, 100);
}

// Actualizar vista del carrito
function actualizarVistaCarrito() {
    const carritoLista = document.getElementById('carritoLista');
    const carritoTotal = document.getElementById('carritoTotal');
    
    if (carritoLista) {
        carritoLista.innerHTML = '';
        
        if (carrito.length === 0) {
            carritoLista.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío</p>';
            return;
        }
        
        carrito.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'carrito-item';
            itemElement.innerHTML = `
                <div class="carrito-item-info">
                    <h3>${item.nombre}</h3>
                    <p>Código: ${item.codigo}</p>
                    <p class="categoria">${item.categoria}</p>
                </div>
                <div class="carrito-item-cantidad">
                    <button onclick="actualizarCantidad('${item.codigo}', ${item.cantidad - 1})">-</button>
                    <span>${item.cantidad}</span>
                    <button onclick="actualizarCantidad('${item.codigo}', ${item.cantidad + 1})">+</button>
                </div>
                <button class="btn-eliminar" onclick="eliminarDelCarrito('${item.codigo}')">×</button>
            `;
            carritoLista.appendChild(itemElement);
        });
    }
}

// Función para generar mensaje de WhatsApp
function generarMensajeWhatsApp() {
    let mensaje = "¡Hola! Me gustaría hacer un pedido de los siguientes stickers:%0A%0A";
    
    carrito.forEach(item => {
        mensaje += `• ${item.cantidad}x ${item.nombre} (Código: ${item.codigo})%0A`;
    });
    
    mensaje += "%0A¿Podrías indicarme el precio total y los métodos de envío disponibles?";
    
    window.open(`https://wa.me/1234567890?text=${mensaje}`, '_blank');
}

// Inicializar carrito al cargar la página
/* document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorCarrito();
    actualizarVistaCarrito();
});
carritoToggle.addEventListener('click', function() {
    carritoPanel.classList.add('active');
    document.body.style.overflow = 'hidden';
  }); */
  document.addEventListener('DOMContentLoaded', () => {
    const abrir = document.getElementById('abrirCarrito');
    const cerrar = document.getElementById('cerrarCarrito');
    const panel = document.getElementById('carritoPanel');

    if (abrir) {
        abrir.addEventListener('click', () => {
            panel.classList.add('active');
            actualizarVistaCarrito();
        });
    }

    if (cerrar) {
        cerrar.addEventListener('click', () => {
            panel.classList.remove('active');
        });
    }

    actualizarContadorCarrito(); // actualizar contador al cargar
});