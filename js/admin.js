/* ============================================================
   FRUTIMERCA — Módulo de Administración (v2)
   - Ordena: Ambateña 1ª→6ª, Riobamba 1ª→5ª, Otras
   - Filtros por categoría y buscador
   - Edición de precio inline por presentación
   - Edición de producto con múltiples presentaciones
   ============================================================ */

(function () {
    'use strict';

    const PRECIOS_KEY = 'frutimerca_precios_editados';
    let FILTRO_ACTUAL = 'todos';
    let BUSQUEDA_ACTUAL = '';
    const CAMBIOS_PENDIENTES = {}; // { clave: nuevoPrecio }

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
       ORDENAMIENTO INTELIGENTE
       Extrae el "calibre" del nombre:
         "Primera"→1, "Segunda"→2 ... "Sexta"→6
       Y ordena dentro de cada categoría.
       ============================================================ */
    const CALIBRES = {
        primera: 1, segundo: 2, segunda: 2, tercero: 3, tercera: 3,
        cuarto: 4, cuarta: 4, quinto: 5, quinta: 5, sexto: 6, sexta: 6
    };

    const ORDEN_CATEGORIAS = {
        'frutillas-ambatena': 1,
        'frutillas-riobamba': 2,
        'otros': 3
    };

    function obtenerCalibre(prod) {
        const texto = ((prod.nombre || '') + ' ' + (prod.slug || '')).toLowerCase();
        for (const key in CALIBRES) {
            if (texto.indexOf(key) !== -1) return CALIBRES[key];
        }
        return 99; // otros productos van al final de su grupo
    }

    function ordenarProductos(lista) {
        return lista.slice().sort(function (a, b) {
            const catA = ORDEN_CATEGORIAS[a.categoria] || 99;
            const catB = ORDEN_CATEGORIAS[b.categoria] || 99;
            if (catA !== catB) return catA - catB;

            const calA = obtenerCalibre(a);
            const calB = obtenerCalibre(b);
            if (calA !== calB) return calA - calB;

            return (a.nombre || '').localeCompare(b.nombre || '');
        });
    }

    /* ============================================================
       FILTRADO
       ============================================================ */
    function coincideFiltro(prod) {
        if (FILTRO_ACTUAL !== 'todos' && prod.categoria !== FILTRO_ACTUAL) return false;
        if (BUSQUEDA_ACTUAL) {
            const t = (prod.nombre || '').toLowerCase();
            if (t.indexOf(BUSQUEDA_ACTUAL) === -1) return false;
        }
        return true;
    }

    /* ============================================================
       TABLA ADMIN — una fila por presentación
       ============================================================ */
    function renderizarTablaAdmin() {
        const tbody = document.getElementById('tabla-admin-productos');
        if (!tbody) return;

        const productos = ordenarProductos(getProductos());
        const preciosEditados = getPreciosEditados();

        tbody.innerHTML = '';

        let filasVisibles = 0;

        productos.forEach(function (prod) {
            if (!coincideFiltro(prod)) return;

            const presentaciones = Array.isArray(prod.presentaciones) ? prod.presentaciones : [];

            presentaciones.forEach(function (pres) {
                const clave = prod.id + '-' + pres.id;
                const precioOriginal = pres.precio;
                const precioEditado = preciosEditados[clave];
                const precioMostrar = precioEditado !== undefined ? precioEditado : precioOriginal;
                const estaEditado = precioEditado !== undefined
                                 && precioEditado !== precioOriginal;
                const valorInput = CAMBIOS_PENDIENTES[clave] !== undefined
                    ? CAMBIOS_PENDIENTES[clave]
                    : (precioMostrar === null || precioMostrar === undefined ? '' : precioMostrar);
                const esPendiente = CAMBIOS_PENDIENTES[clave] !== undefined;

                const precioOriginalHTML = precioOriginal === null || precioOriginal === undefined
                    ? '<em>a confirmar</em>'
                    : '$' + Number(precioOriginal).toFixed(2);

                const etiquetaCat = {
                    'frutillas-ambatena': '🍓 Ambateña',
                    'frutillas-riobamba': '🍓 Riobamba',
                    'otros': '🍇 Otras'
                }[prod.categoria] || prod.categoria || '—';

                const tr = document.createElement('tr');
                tr.dataset.categoria = prod.categoria;
                tr.dataset.clave = clave;
                if (esPendiente) tr.style.background = '#fff7d6';

                tr.innerHTML =
                    '<td>' + prod.id + '</td>' +
                    '<td><small>' + etiquetaCat + '</small></td>' +
                    '<td>' + escapeHTML(prod.nombre) + '</td>' +
                    '<td>' + escapeHTML(pres.nombre) + '</td>' +
                    '<td>' +
                        '<div class="precio-celda">' +
                            '<span class="precio-original" title="Precio original">' +
                                precioOriginalHTML +
                            '</span>' +
                            (estaEditado
                                ? ' <span class="badge-editado" title="Editado">✏️</span>'
                                : '') +
                        '</div>' +
                    '</td>' +
                    '<td>' +
                        '<input type="number" step="0.01" min="0" ' +
                            'class="input-precio-inline" ' +
                            'data-clave="' + clave + '" ' +
                            'value="' + (valorInput === null ? '' : valorInput) + '" ' +
                            'placeholder="—" ' +
                            'oninput="marcarCambioPrecio(this)" ' +
                            'style="width:100px;padding:4px 6px;border:1px solid #ccc;' +
                            'border-radius:4px;">' +
                    '</td>' +
                    '<td>' +
                        (prod.stock === false ? '❌ Agotado' : '✅ Disponible') +
                    '</td>' +
                    '<td>' +
                        '<button type="button" ' +
                            'onclick="guardarPrecioFila(\'' + clave + '\')" ' +
                            'style="background:#0f2b5b;color:white;border:none;' +
                            'padding:6px 10px;border-radius:6px;cursor:pointer;margin-right:4px;" ' +
                            'title="Guardar precio de esta fila">💾</button>' +
                        (estaEditado
                            ? '<button type="button" ' +
                                'onclick="resetPrecioFila(\'' + clave + '\')" ' +
                                'style="background:#a02020;color:white;border:none;' +
                                'padding:6px 10px;border-radius:6px;cursor:pointer;margin-right:4px;" ' +
                                'title="Volver al precio de fábrica">↺</button>'
                            : '') +
                        '<button type="button" onclick="editarProducto(' + prod.id + ')" ' +
                            'style="background:var(--azul-marino);color:white;border:none;' +
                            'padding:6px 10px;border-radius:6px;cursor:pointer;margin-right:4px;" ' +
                            'title="Editar producto">✏️</button>' +
                        '<button type="button" onclick="eliminarProducto(' + prod.id + ')" ' +
                            'style="background:var(--vino);color:white;border:none;' +
                            'padding:6px 10px;border-radius:6px;cursor:pointer;" ' +
                            'title="Eliminar">🗑️</button>' +
                    '</td>';
                tbody.appendChild(tr);
                filasVisibles++;
            });
        });

        if (filasVisibles === 0) {
            tbody.innerHTML =
                '<tr><td colspan="8" style="text-align:center;padding:24px;color:#888;">' +
                'No hay productos que coincidan con el filtro.</td></tr>';
        }

        // Habilitar/deshabilitar el botón "Guardar todo"
        const btnGuardarTodo = document.getElementById('btn-guardar-todo');
        if (btnGuardarTodo) {
            const hay = Object.keys(CAMBIOS_PENDIENTES).length > 0;
            btnGuardarTodo.disabled = !hay;
            btnGuardarTodo.textContent = hay
                ? '💾 Guardar cambios (' + Object.keys(CAMBIOS_PENDIENTES).length + ')'
                : '💾 Guardar cambios';
        }

        // Contador
        const contador = document.getElementById('contador-filas');
        if (contador) contador.textContent = filasVisibles + ' presentaciones';
    }

    /* ============================================================
       MANEJO DE CAMBIOS DE PRECIO INLINE
       ============================================================ */
    window.marcarCambioPrecio = function (input) {
        const clave = input.dataset.clave;
        const val = input.value.trim();
        if (val === '') {
            delete CAMBIOS_PENDIENTES[clave];
        } else {
            CAMBIOS_PENDIENTES[clave] = parseFloat(val);
        }
        // Actualizar botón "Guardar todo" sin re-render completo
        const btnGuardarTodo = document.getElementById('btn-guardar-todo');
        if (btnGuardarTodo) {
            const hay = Object.keys(CAMBIOS_PENDIENTES).length > 0;
            btnGuardarTodo.disabled = !hay;
            btnGuardarTodo.textContent = hay
                ? '💾 Guardar cambios (' + Object.keys(CAMBIOS_PENDIENTES).length + ')'
                : '💾 Guardar cambios';
        }
    };

    window.guardarPrecioFila = function (clave) {
        if (CAMBIOS_PENDIENTES[clave] === undefined) {
            alert('No hay cambios en esta fila.');
            return;
        }
        const editados = getPreciosEditados();
        editados[clave] = CAMBIOS_PENDIENTES[clave];
        setPreciosEditados(editados);
        delete CAMBIOS_PENDIENTES[clave];
        renderizarTablaAdmin();
        aplicarPreciosEnProductos();
        alert('✅ Precio actualizado');
    };

    window.resetPrecioFila = function (clave) {
        if (!confirm('¿Volver al precio de fábrica para esta presentación?')) return;
        const editados = getPreciosEditados();
        delete editados[clave];
        setPreciosEditados(editados);
        delete CAMBIOS_PENDIENTES[clave];
        renderizarTablaAdmin();
        aplicarPreciosEnProductos();
    };

    window.guardarTodosLosCambios = function () {
        const claves = Object.keys(CAMBIOS_PENDIENTES);
        if (claves.length === 0) {
            alert('No hay cambios pendientes.');
            return;
        }
        const editados = getPreciosEditados();
        claves.forEach(function (clave) {
            editados[clave] = CAMBIOS_PENDIENTES[clave];
            delete CAMBIOS_PENDIENTES[clave];
        });
        setPreciosEditados(editados);
        renderizarTablaAdmin();
        aplicarPreciosEnProductos();
        alert('✅ ' + claves.length + ' precio(s) guardado(s)');
    };

    /* ============================================================
       APLICAR PRECIOS EDITADOS A LOS PRODUCTOS
       (para que la tienda los muestre al instante)
       ============================================================ */
    function aplicarPreciosEnProductos() {
        const productos = getProductos();
        const editados = getPreciosEditados();
        let huboCambios = false;

        productos.forEach(function (prod) {
            prod.presentaciones.forEach(function (pres) {
                const clave = prod.id + '-' + pres.id;
                if (editados[clave] !== undefined) {
                    if (pres.precio !== editados[clave]) {
                        pres.precio = editados[clave];
                        huboCambios = true;
                    }
                }
            });
        });

        if (huboCambios && typeof guardarProductos === 'function') {
            guardarProductos(productos);
        }
    }

    /* ============================================================
       FILTROS Y BUSCADOR
       ============================================================ */
    function configurarFiltros() {
        const botones = document.querySelectorAll('.filtro-admin');
        botones.forEach(function (btn) {
            btn.addEventListener('click', function () {
                botones.forEach(function (b) { b.classList.remove('activo'); });
                btn.classList.add('activo');
                FILTRO_ACTUAL = btn.dataset.filtro;
                renderizarTablaAdmin();
            });
        });

        const buscador = document.getElementById('admin-buscador');
        if (buscador) {
            buscador.addEventListener('input', function (e) {
                BUSQUEDA_ACTUAL = e.target.value.trim().toLowerCase();
                renderizarTablaAdmin();
            });
        }
    }

    /* ============================================================
       FORM — Guardar (crea o actualiza un producto con N presentaciones)
       ============================================================ */
    function guardarProductoForm(event) {
        if (event) event.preventDefault();

        const idEl      = document.getElementById('prod-id');
        const nombreEl  = document.getElementById('prod-nombre');
        const imagenEl  = document.getElementById('prod-imagen');
        const catEl     = document.getElementById('prod-categoria');
        const stockEl   = document.getElementById('prod-stock');
        const descEl    = document.getElementById('prod-descripcion');
        const empaqueEl = document.getElementById('prod-empaque');

        if (!idEl || !nombreEl) return;

        const id = idEl.value ? parseInt(idEl.value, 10) : Date.now();

        // Leer presentaciones desde los inputs dinámicos
        const presInputs = document.querySelectorAll('.presentacion-item');
        const presentaciones = [];

        presInputs.forEach(function (item, i) {
            const pidEl    = item.querySelector('.pres-id');
            const pnombreEl = item.querySelector('.pres-nombre');
            const pprecioEl = item.querySelector('.pres-precio');
            const pimagenEl = item.querySelector('.pres-imagen');

            if (!pnombreEl || !pnombreEl.value.trim()) return;

            const precioRaw = pprecioEl ? pprecioEl.value.trim() : '';
            presentaciones.push({
                id: (pidEl && pidEl.value.trim()) || ('pres-' + (i + 1)),
                nombre: pnombreEl.value.trim(),
                precio: precioRaw === '' ? null : parseFloat(precioRaw),
                imagen: (pimagenEl && pimagenEl.value.trim()) || (imagenEl ? imagenEl.value.trim() : '')
            });
        });

        if (presentaciones.length === 0) {
            alert('Debes agregar al menos una presentación.');
            return;
        }

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
            empaque: empaqueEl ? empaqueEl.value.trim() : '',
            presentaciones: presentaciones
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
        setV('prod-descripcion', p.descripcion || '');
        setV('prod-imagen', p.imagen || '');
        setV('prod-empaque', p.empaque || '');
        setV('prod-categoria', p.categoria || 'otros');
        setC('prod-stock', p.stock !== false);

        // Cargar presentaciones en el editor dinámico
        const contenedor = document.getElementById('presentaciones-contenedor');
        if (contenedor) {
            contenedor.innerHTML = '';
            (p.presentaciones || []).forEach(function (pres) {
                agregarPresentacionAlForm(pres);
            });
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function eliminarProducto(id) {
        if (!confirm('¿Eliminar este producto?')) return;
        const productos = getProductos().filter(function (p) { return p.id !== id; });

        if (typeof guardarProductos === 'function') guardarProductos(productos);
        else localStorage.setItem('frutimerca_productos', JSON.stringify(productos));

        renderizarTablaAdmin();
    }

    /* ============================================================
       EDITOR DE PRESENTACIONES DINÁMICO
       ============================================================ */
    window.agregarPresentacionAlForm = function (pres) {
        const contenedor = document.getElementById('presentaciones-contenedor');
        if (!contenedor) return;

        pres = pres || {};
        const div = document.createElement('div');
        div.className = 'presentacion-item';
        div.style.cssText = 'border:1px solid #ddd;padding:10px;margin-bottom:10px;border-radius:6px;background:#fafafa;';
        div.innerHTML =
            '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-end;">' +
                '<div style="flex:1;min-width:120px;">' +
                    '<label style="display:block;font-size:12px;color:#666;">ID</label>' +
                    '<input type="text" class="pres-id" value="' + escapeHTML(pres.id || '') + '" ' +
                        'style="width:100%;padding:6px;border:1px solid #ccc;border-radius:4px;">' +
                '</div>' +
                '<div style="flex:2;min-width:160px;">' +
                    '<label style="display:block;font-size:12px;color:#666;">Nombre</label>' +
                    '<input type="text" class="pres-nombre" value="' + escapeHTML(pres.nombre || '') + '" ' +
                        'placeholder="Ej: Balde 30 libras" ' +
                        'style="width:100%;padding:6px;border:1px solid #ccc;border-radius:4px;">' +
                '</div>' +
                '<div style="flex:1;min-width:100px;">' +
                    '<label style="display:block;font-size:12px;color:#666;">Precio</label>' +
                    '<input type="number" step="0.01" min="0" class="pres-precio" ' +
                        'value="' + (pres.precio !== null && pres.precio !== undefined ? pres.precio : '') + '" ' +
                        'placeholder="—" ' +
                        'style="width:100%;padding:6px;border:1px solid #ccc;border-radius:4px;">' +
                '</div>' +
                '<div style="flex:2;min-width:160px;">' +
                    '<label style="display:block;font-size:12px;color:#666;">Imagen</label>' +
                    '<input type="text" class="pres-imagen" value="' + escapeHTML(pres.imagen || '') + '" ' +
                        'placeholder="img/productos/..." ' +
                        'style="width:100%;padding:6px;border:1px solid #ccc;border-radius:4px;">' +
                '</div>' +
                '<button type="button" onclick="this.parentElement.parentElement.remove()" ' +
                    'style="background:#a02020;color:white;border:none;padding:8px 12px;' +
                    'border-radius:6px;cursor:pointer;" title="Quitar">🗑️</button>' +
            '</div>';
        contenedor.appendChild(div);
    };

    function limpiarForm() {
        const form = document.getElementById('form-producto');
        if (form) form.reset();
        const idEl = document.getElementById('prod-id');
        if (idEl) idEl.value = '';
        const stockEl = document.getElementById('prod-stock');
        if (stockEl) stockEl.checked = true;
        const contenedor = document.getElementById('presentaciones-contenedor');
        if (contenedor) contenedor.innerHTML = '';
        // Dejar una presentación vacía por defecto
        agregarPresentacionAlForm();
    }

    function restaurarDefault() {
        if (!confirm('Esto reemplazará todos los productos por los de fábrica. ¿Continuar?')) return;

        localStorage.removeItem('frutimerca_productos');
        localStorage.removeItem('frutimerca_version');
        localStorage.removeItem(PRECIOS_KEY);

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

    /* ============================================================
       INIT
       ============================================================ */
    document.addEventListener('DOMContentLoaded', function () {
        if (document.getElementById('tabla-admin-productos')) {
            configurarFiltros();
            renderizarTablaAdmin();
        }
        // Dejar una presentación vacía lista en el form
        if (document.getElementById('presentaciones-contenedor')) {
            agregarPresentacionAlForm();
        }
    });
})();