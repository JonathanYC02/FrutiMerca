/* ============================================================
   FRUTIMERCA — Lógica del carrito
   ============================================================ */

const CLAVE_CARRITO = 'frutimerca_carrito';

function obtenerCarrito() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE_CARRITO)) || [];
    } catch (e) { return []; }
}

function guardarCarrito(carrito) {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
    actualizarContador();
}

function agregarAlCarrito(idProducto) {
    const productos = obtenerProductos();
    const prod = productos.find(p => p.id === idProducto);
    if (!prod) return;

    const pres = prod.presentaciones[0];
    if (!pres || pres.precio === null) {
        consultarProducto(prod.nombre);
        return;
    }

    const carrito = obtenerCarrito();
    const clave = prod.id + '-' + pres.id;
    const existente = carrito.find(i => i.clave === clave);

    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({
            clave: clave,
            id: prod.id,
            nombre: prod.nombre + ' — ' + pres.nombre,
            precio: pres.precio,
            unidad: pres.nombre,
            imagen: prod.imagen,
            cantidad: 1
        });
    }

    guardarCarrito(carrito);
    mostrarToast(`✅ ${prod.nombre} agregado`);
}

function eliminarDelCarrito(index) {
    const carrito = obtenerCarrito();
    carrito.splice(index, 1);
    guardarCarrito(carrito);
    if (typeof renderizarCarrito === 'function') renderizarCarrito();
}

function cambiarCantidad(index, delta) {
    const carrito = obtenerCarrito();
    if (!carrito[index]) return;
    carrito[index].cantidad += delta;
    if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
    guardarCarrito(carrito);
    if (typeof renderizarCarrito === 'function') renderizarCarrito();
}

function calcularTotal() {
    return obtenerCarrito().reduce((s, i) => s + i.precio * i.cantidad, 0);
}

function actualizarContador() {
    const contador = document.getElementById('contador-carrito');
    if (!contador) return;
    const total = obtenerCarrito().reduce((s, i) => s + i.cantidad, 0);
    contador.textContent = total;
}

function guardarZonaEntrega(zona) {
    localStorage.setItem('frutimerca_zona_entrega', zona);
}

function obtenerZonaEntrega() {
    return localStorage.getItem('frutimerca_zona_entrega') || 'retiro';
}

function mostrarToast(mensaje) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = mensaje;
    toast.style.opacity = '1';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarContador();
    if (typeof renderizarProductos === 'function'
        && document.getElementById('lista-productos')) {
        renderizarProductos();
    }
    if (typeof renderizarCarrito === 'function'
        && document.getElementById('items-carrito-container')) {
        renderizarCarrito();
    }
});