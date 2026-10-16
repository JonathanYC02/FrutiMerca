/* ============================================================
   FRUTIMERCA — Módulo de Administración (compatible)
   Trabaja con la estructura actual de productos.js:
   cada producto tiene un array `presentaciones`.
   ============================================================ */

(function () {
    'use strict';

    const PRECIOS_KEY = 'frutimerca_precios_editados';

    /* ============================================================
       UTILIDADES
       ============================================================ */
    function escapeHTML(v) {
        if (v === null || v === undefined) return '';
        return String(v)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function getProductos() {
        if (typeof obtenerProductos === 'function') return obtenerProductos();
        if (window.PRODUCTOS_DEFAULT) return JSON.parse(JSON.stringify(window.PRODUCTOS_DEFAULT));
        return [];
    }

    function getPreciosEditados() {
        try {
            return JSON.parse(localStorage.getItem(PRECIOS_KEY) || '{}');
        } catch (e) {
            return {};
        }
    }

    function setPreciosEditados(obj) {
        localStorage.setItem(PRECIOS_KEY, JSON.stringify(obj));
    }

    /* ============================================================
       TABLA ADMIN — una fila por presentación
       ============================================================ */
    function renderizarTablaAdmin() {
        const tbody = document.getElementById('tabla-admin-productos');
        if (!tbody) return;

        const productos = getProductos();
        const preciosEditados = getPreciosEditados();

        tbody.innerHTML = '';

        productos.forEach(function (prod) {
            const presentaciones = Array.isArray(prod.presentaciones) ? prod.presentaciones : [];

            presentaciones.forEach(function (pres) {
                const clave = prod.id + '-' + pres.id;
                const precio = preciosEditados[clave] !== undefined
                    ? preciosEditados[clave]
                    : pres.precio;

                const precioHTML = (precio !== null && precio !== undefined && !isNaN(precio))
                    ? '$' + Number(precio).toFixed(2)
                    : '<em>a confirmar</em>';

                const tr = document.createElement('tr');
                tr.innerHTML =
                    '<td>' + prod.id + '</td>' +
                    '<td>' + escapeHTML(prod.nombre) + '</td>' +
                    '<td>' + escapeHTML(pres.nombre) + '</td>' +
                    '<td>' + precioHTML + '</td>' +
                    '<td>' + (prod.stock === false ? '❌ Agotado' : '✅ Disponible') + '</td>' +
                    '<td>' +
                        '<button type="button" onclick="editarProducto(' + prod.id + ')" ' +
                        'style="background:var(--azul-marino);color:white;border:none;' +
                        'padding:6px 12px;border-radius:6px;cursor:pointer;margin-right:5px;">' +
                        '✏️ Editar</button>' +
                        '<button type="button" onclick="eliminarProducto(' + prod.id + ')" ' +
                        'style="background:var(--vino);color:white;border:none;' +
                        'padding:6px 12px;border-radius:6px;cursor:pointer;">🗑️</button>' +
                    '</td>';
                tbody.appendChild(tr);
            });
        });
    }

    /* ============================================================
       FORM — Guardar (crea o actualiza un producto)
       ============================================================ */
    function guardarProductoForm(event) {
        if (event) event.preventDefault();

        const idEl      = document.getElementById('prod-id');
        const nombreEl  = document.getElementById('prod-nombre');
        const precioEl  = document.getElementById('prod-precio');
        const imagenEl  = document.getElementById('prod-imagen');
        const catEl     = document.getElementById('prod-categoria');
        const stockEl   = document.getElementById('prod-stock');
        const descEl    = document.getElementById('prod-descripcion');
        const presEl    = document.getElementById('prod-presentacion');

        if (!idEl || !nombreEl) return;

        const id = idEl.value ? parseInt(idEl.value, 10) : Date.now();
        const precioRaw = precioEl ? precioEl.value.trim() : '';
        const precio = precioRaw === '' ? null : parseFloat(precioRaw);

        const nuevo = {
            id: id,
            slug: (nombreEl.value.trim().toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-]/g, '')) || ('producto-' + id),
            nombre: nombreEl.value.trim(),
            categoria: catEl ? catEl.value : 'otros',
            descripcion: descEl ? descEl.value.trim() : '',
            imagen: (imagenEl && imagenEl.value.trim()) ||
                    'data:image/svg+xml;utf8,' + encodeURIComponent(
                        "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'>" +
                        "<rect width='600' height='400' fill='#0f2b5b'/>" +
                        "<text x='50%' y='50%' fill='white' font-family='Arial' " +
                        "font-size='30' text-anchor='middle'>FrutiMerca</text></svg>"
                    ),
            stock: stockEl ? stockEl.checked : true,
            empaque: '',
            presentaciones: [{
                id: 'unica',
                nombre: presEl ? (presEl.value.trim() || 'Única presentación') : 'Única presentación',
                precio: precio,
                imagen: (imagenEl && imagenEl.value.trim()) || ''
            }]
        };

        const productos = getProductos();
        const idx = productos.findIndex(function (p) { return p.id === id; });

        if (idx !== -1) productos[idx] = nuevo;
        else productos.push(nuevo);

        if (typeof guardarProductos === 'function') {
            guardarProductos(productos);
        } else {
            localStorage.setItem('frutimerca_productos', JSON.stringify(productos));
        }

        renderizarTablaAdmin();
        limpiarForm();
        alert('✅ Producto guardado');
    }

    function editarProducto(id) {
        const productos = getProductos();
        const p = productos.find(function (x) { return x.id === id; });
        if (!p) return;

        const pres = (p.presentaciones && p.presentaciones[0]) || {};

        const setV = function (elId, val) {
            const el = document.getElementById(elId);
            if (el) el.value = val;
        };
        const setC = function (elId, val) {
            const el = document.getElementById(elId);
            if (el) el.checked = val;
        };

        setV('prod-id', p.id);
        setV('prod-nombre', p.nombre || '');
        setV('prod-presentacion', pres.nombre || '');
        setV('prod-descripcion', p.descripcion || '');
        setV('prod-precio', pres.precio !== null && pres.precio !== undefined ? pres.precio : '');
        setV('prod-imagen', p.imagen || '');
        setV('prod-categoria', p.categoria || 'otros');
        setC('prod-stock', p.stock !== false);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function eliminarProducto(id) {
        if (!confirm('¿Eliminar este producto?')) return;
        const productos = getProductos().filter(function (p) { return p.id !== id; });

        if (typeof guardarProductos === 'function') guardarProductos(productos);
        else localStorage.setItem('frutimerca_productos', JSON.stringify(productos));

        renderizarTablaAdmin();
    }

    function limpiarForm() {
        const form = document.getElementById('form-producto');
        if (form) form.reset();
        const idEl = document.getElementById('prod-id');
        if (idEl) idEl.value = '';
        const stockEl = document.getElementById('prod-stock');
        if (stockEl) stockEl.checked = true;
    }

    function restaurarDefault() {
        if (!confirm('Esto reemplazará todos los productos por los de fábrica. ¿Continuar?')) return;

        localStorage.removeItem('frutimerca_productos');
        localStorage.removeItem('frutimerca_version');
        localStorage.removeItem(PRECIOS_KEY);
        localStorage.removeItem('frutimerca_proxima_version');

        if (typeof obtenerProductos === 'function') obtenerProductos();
        renderizarTablaAdmin();
        alert('🔄 Productos restaurados');
    }

    /* ============================================================
       EXPOSICIÓN GLOBAL
       ============================================================ */
    window.renderizarTablaAdmin  = renderizarTablaAdmin;
    window.guardarProductoForm   = guardarProductoForm;
    window.editarProducto        = editarProducto;
    window.eliminarProducto      = eliminarProducto;
    window.limpiarForm           = limpiarForm;
    window.restaurarDefault      = restaurarDefault;

    // Auto-render si existe la tabla en la página
    document.addEventListener('DOMContentLoaded', function () {
        if (document.getElementById('tabla-admin-productos')) {
            renderizarTablaAdmin();
        }
    });
})();