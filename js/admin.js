/* ============================================================
   FRUTIMERCA — Panel de Administración
   ============================================================ */

document.addEventListener('DOMContentLoaded', renderizarTablaAdmin);

function renderizarTablaAdmin() {
    const tbody = document.getElementById('tabla-admin-productos');
    if (!tbody) return;

    const productos = obtenerProductos();
    tbody.innerHTML = '';

    productos.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${p.id}</td>
            <td>${p.nombre}</td>
            <td>${p.presentacion || '—'}</td>
            <td>${p.precio !== null ? '$' + p.precio.toFixed(2) : '<em>a confirmar</em>'}</td>
            <td>${p.stock === false ? '❌ Agotado' : '✅ Disponible'}</td>
            <td>
                <button onclick="editarProducto(${p.id})"
                        style="background:var(--azul-marino); color:white; border:none; padding:6px 12px; border-radius:6px; cursor:pointer; margin-right:5px;">
                    ✏️ Editar
                </button>
                <button onclick="eliminarProducto(${p.id})"
                        style="background:var(--vino); color:white; border:none; padding:6px 12px; border-radius:6px; cursor:pointer;">
                    🗑️
                </button>
            </td>`;
        tbody.appendChild(tr);
    });
}

function guardarProductoForm(event) {
    event.preventDefault();

    const id = document.getElementById('prod-id').value;
    const precioRaw = document.getElementById('prod-precio').value;
    const precio = precioRaw === '' ? null : parseFloat(precioRaw);

    const nuevo = {
        id: id ? parseInt(id) : Date.now(),
        nombre: document.getElementById('prod-nombre').value.trim(),
        presentacion: document.getElementById('prod-presentacion').value.trim(),
        descripcion: document.getElementById('prod-descripcion').value.trim(),
        precio: precio,
        unidad: document.getElementById('prod-unidad').value.trim() || 'unidad',
        imagen: document.getElementById('prod-imagen').value.trim()
                || 'https://via.placeholder.com/600x400/0f2b5b/ffffff?text=FrutiMerca',
        categoria: document.getElementById('prod-categoria').value,
        stock: document.getElementById('prod-stock').checked
    };

    let productos = obtenerProductos();
    if (id) {
        const idx = productos.findIndex(p => p.id === parseInt(id));
        if (idx !== -1) productos[idx] = nuevo;
    } else {
        productos.push(nuevo);
    }

    guardarProductos(productos);
    renderizarTablaAdmin();
    limpiarForm();
    alert('✅ Producto guardado');
}

function editarProducto(id) {
    const p = obtenerProductos().find(x => x.id === id);
    if (!p) return;

    document.getElementById('prod-id').value = p.id;
    document.getElementById('prod-nombre').value = p.nombre;
    document.getElementById('prod-presentacion').value = p.presentacion || '';
    document.getElementById('prod-descripcion').value = p.descripcion || '';
    document.getElementById('prod-precio').value = p.precio !== null ? p.precio : '';
    document.getElementById('prod-unidad').value = p.unidad || '';
    document.getElementById('prod-imagen').value = p.imagen || '';
    document.getElementById('prod-categoria').value = p.categoria || 'otros';
    document.getElementById('prod-stock').checked = p.stock !== false;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function eliminarProducto(id) {
    if (!confirm('¿Eliminar este producto?')) return;
    const productos = obtenerProductos().filter(p => p.id !== id);
    guardarProductos(productos);
    renderizarTablaAdmin();
}

function limpiarForm() {
    document.getElementById('form-producto').reset();
    document.getElementById('prod-id').value = '';
    document.getElementById('prod-stock').checked = true;
}

function restaurarDefault() {
    if (!confirm('Esto reemplazará todos los productos por los de fábrica. ¿Continuar?'))
        return;
    localStorage.removeItem('frutimerca_productos');
    obtenerProductos();
    renderizarTablaAdmin();
    alert('🔄 Productos restaurados');
}