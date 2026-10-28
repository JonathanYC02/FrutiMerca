/* ============================================================
   FRUTIMERCA — Base de datos de productos + Stock + Horarios
   ============================================================ */

const PRODUCTOS_DEFAULT = [
    /* ===== FRUTILLAS RIOBAMBA (CEBADEÑA) ===== */
    {
        id: 1,
        slug: "frutilla-riobamba-primera",
        nombre: "Frutilla Riobamba Primera",
        categoria: "frutillas-riobamba",
        descripcion: "Frutilla cebadeña de Riobamba, grande y homogénea en tamaño y color. La preferida por pasteleros y reposteros para decoraciones de tortas, arreglos frutales, brochetas de fresas con chocolate y eventos donde la presentación visual es clave.",
        imagen: "img/productos/p.jpg",
        stock: true,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 28, imagen: "img/productos/primera-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 14, imagen: "img/productos/primera-caja.jpg" }
        ]
    },
    {
        id: 2,
        slug: "frutilla-riobamba-segunda",
        nombre: "Frutilla Riobamba Segunda",
        categoria: "frutillas-riobamba",
        descripcion: "Fresa cebadeña de tamaño mediano con muy buen sabor y color aceptable. Muy solicitada para heladerías, preparación de batidos, postres en vaso, mermeladas artesanales y venta en fruterías al detalle.",
        imagen: "img/productos/s.jpg",
        stock: true,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 25, imagen: "img/productos/segunda-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 12.5, imagen: "img/productos/segunda-caja.jpg" }
        ]
    },
    {
        id: 3,
        slug: "frutilla-riobamba-tercera",
        nombre: "Frutilla Riobamba Tercera",
        categoria: "frutillas-riobamba",
        descripcion: "Frutillas cebadeñas de menor tamaño o forma irregular, ideal para procesamiento rápido. Muy utilizada para licuados masivos, elaboración de concentrados, mermeladas de alto volumen, salsas y fresas con crema.",
        imagen: "img/productos/t.jpg",
        stock: true,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 15, imagen: "img/productos/tercera-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 7.5, imagen: "img/productos/tercera-caja.jpg" }
        ]
    },
    {
        id: 4,
        slug: "frutilla-riobamba-cuarta",
        nombre: "Frutilla Riobamba Cuarta",
        categoria: "frutillas-riobamba",
        descripcion: "Frutilla cebadeña de tamaño diminuto pero con gran concentración de dulzor y sabor natural. Muy económica y rendidora, ideal para negocios de comida rápida que venden yogures caseros con fruta, jugos, licuados, mermeladas, concentrados y pulpas.",
        imagen: "img/productos/c.jpg",
        stock: true,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 10, imagen: "img/productos/cuarta-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 5, imagen: "img/productos/cuarta-caja.jpg" }
        ]
    },
    {
        id: 5,
        slug: "frutilla-riobamba-quinta",
        nombre: "Frutilla Riobamba Quinta",
        categoria: "frutillas-riobamba",
        descripcion: "Frutilla cebadeña de tamaño muy pequeño y forma irregular, con excelente dulzor. La opción más económica para pulpas, mermeladas, concentrados industriales, jugos y batidos en volumen. Gran rendimiento por libra.",
        imagen: "img/productos/c.jpg",
        stock: true,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 8, imagen: "img/productos/cuarta-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 4, imagen: "img/productos/cuarta-caja.jpg" }
        ]
    },

    /* ===== FRUTILLAS AMBATEÑAS (1ª a 6ª) ===== */
    {
        id: 6,
        slug: "frutilla-ambatena-primera",
        nombre: "Frutilla Ambateña Primera",
        categoria: "frutillas-ambatena",
        descripcion: "Frutilla ambateña de primera calidad, seleccionada por su calibre grande, color intenso y firmeza. Ideal para decoración de tortas, arreglos frutales premium, eventos y clientes exigentes con la presentación.",
        imagen: "img/productos/p.jpg",
        stock: false,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 30, imagen: "img/productos/primera-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 15, imagen: "img/productos/primera-caja.jpg" }
        ]
    },
    {
        id: 7,
        slug: "frutilla-ambatena-segunda",
        nombre: "Frutilla Ambateña Segunda",
        categoria: "frutillas-ambatena",
        descripcion: "Frutilla ambateña de segunda, tamaño mediano con excelente sabor y color. Muy solicitada por heladerías, cafeterías, postres en vaso y venta al detalle en fruterías.",
        imagen: "img/productos/s.jpg",
        stock: false,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 26, imagen: "img/productos/segunda-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 13, imagen: "img/productos/segunda-caja.jpg" }
        ]
    },
    {
        id: 8,
        slug: "frutilla-ambatena-tercera",
        nombre: "Frutilla Ambateña Tercera",
        categoria: "frutillas-ambatena",
        descripcion: "Frutilla ambateña de tercera, tamaño pequeño y forma irregular. Ideal para licuados, concentrados, mermeladas de alto volumen, salsas y fresas con crema.",
        imagen: "img/productos/t.jpg",
        stock: false,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 18, imagen: "img/productos/tercera-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 9, imagen: "img/productos/tercera-caja.jpg" }
        ]
    },
    {
        id: 9,
        slug: "frutilla-ambatena-cuarta",
        nombre: "Frutilla Ambateña Cuarta",
        categoria: "frutillas-ambatena",
        descripcion: "Frutilla ambateña de cuarta, tamaño diminuto con gran concentración de dulzor. Muy económica y rendidora para yogures, jugos, licuados, mermeladas y pulpas.",
        imagen: "img/productos/c.jpg",
        stock: true,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 12, imagen: "img/productos/cuarta-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 6, imagen: "img/productos/cuarta-caja.jpg" }
        ]
    },
    {
        id: 10,
        slug: "frutilla-ambatena-quinta",
        nombre: "Frutilla Ambateña Quinta",
        categoria: "frutillas-ambatena",
        descripcion: "Frutilla ambateña de quinta, tamaño muy pequeño. Excelente relación precio-rendimiento para pulpas, concentrados, mermeladas industriales y jugos en volumen.",
        imagen: "img/productos/c.jpg",
        stock: true,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 9, imagen: "img/productos/cuarta-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 4.5, imagen: "img/productos/cuarta-caja.jpg" }
        ]
    },
    {
        id: 11,
        slug: "frutilla-ambatena-sexta",
        nombre: "Frutilla Ambateña Sexta",
        categoria: "frutillas-ambatena",
        descripcion: "Frutilla ambateña de sexta, la más económica del catálogo. Ideal para procesamiento industrial, pulpas, concentrados, mermeladas de gran volumen y batidos masivos. Máximo rendimiento por libra.",
        imagen: "img/productos/c.jpg",
        stock: true,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 7, imagen: "img/productos/cuarta-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 3.5, imagen: "img/productos/cuarta-caja.jpg" }
        ]
    },

    /* ===== OTRAS FRUTAS ===== */
    {
        id: 12,
        slug: "mora-ambateña",
        nombre: "Mora Ambateña",
        categoria: "otros",
        descripcion: "Mora seleccionada de excelente coloración, acidez y rendimiento. Altamente demandada por juguerías, heladerías, pastelerías y locales de comida rápida para jugos naturales, batidos, jaleas, mermeladas y pulpas concentradas.",
        imagen: "img/productos/m.jpg",
        stock: true,
        empaque: "Se entrega en balde.",
        presentaciones: [
            { id: "16lbs", nombre: "Balde de 16-18 libras", precio: 15, imagen: "img/productos/m.jpg" }
        ]
    },
    {
        id: 13,
        slug: "granadilla-selecta",
        nombre: "Granadilla Selecta",
        categoria: "otros",
        descripcion: "Presentación comercial en caja/cartón de gran volumen con aproximadamente 100 unidades o más, dependiendo del calibre. Ideal para fruterías, mercados al detalle, consumo familiar y puestos de jugos por su pulpa dulce y digestiva.",
        imagen: "img/productos/g.jpg",
        stock: true,
        empaque: "Se entrega en cartón.",
        presentaciones: [
            { id: "carton", nombre: "Cartón al granel (100+ unidades)", precio: null, imagen: "img/productos/g.jpg" }
        ]
    },
    {
        id: 14,
        slug: "claudia",
        nombre: "Claudia (Ciruela de Temporada)",
        categoria: "otros",
        descripcion: "Fruta de temporada de alta rotación comercial. Disponible en Primera, Segunda, Tercera y Cuarta. Cotizada por su equilibrio entre acidez y dulzor, ideal para consumo fresco, repostería y conservas.",
        imagen: "img/productos/cl.jpg",
        stock: true,
        empaque: "Se entrega en caja de madera.",
        presentaciones: [
            { id: "primera", nombre: "Claudia Primera (caja por calibre)", precio: null, imagen: "img/productos/cl.jpg" },
            { id: "segunda", nombre: "Claudia Segunda (caja por calibre)", precio: null, imagen: "img/productos/cl.jpg" },
            { id: "tercera", nombre: "Claudia Tercera (caja por calibre)", precio: null, imagen: "img/productos/cl.jpg" },
            { id: "cuarta", nombre: "Claudia Cuarta (caja por calibre)", precio: null, imagen: "img/productos/cl.jpg" }
        ]
    },
    {
        id: 15,
        slug: "durazno",
        nombre: "Durazno",
        categoria: "otros",
        descripcion: "Producto seleccionado por su firmeza, aroma y textura. Disponible en Primera, Segunda y Tercera. Muy solicitado para venta al detalle, elaboración de duraznos en almíbar, tartas y ensaladas de frutas.",
        imagen: "img/productos/d.jpg",
        stock: true,
        empaque: "Se entrega en caja de madera.",
        presentaciones: [
            { id: "primera", nombre: "Durazno Primera (caja por calibre)", precio: null, imagen: "img/productos/d.jpg" },
            { id: "segunda", nombre: "Durazno Segunda (caja por calibre)", precio: null, imagen: "img/productos/d.jpg" },
            { id: "tercera", nombre: "Durazno Tercera (caja por calibre)", precio: null, imagen: "img/productos/d.jpg" }
        ]
    },
    {
        id: 16,
        slug: "aguacate",
        nombre: "Aguacate",
        categoria: "otros",
        descripcion: "Alto consumo diario en el sector gastronómico y comercial. Disponible en Primera, Segunda, Tercera y Cuarta. Excelente cremosidad y sabor. Muy buscado para restaurantes, fruterías, guacamole y procesamiento industrial.",
        imagen: "img/productos/a.jpg",
        stock: true,
        empaque: "Se entrega en caja de madera.",
        presentaciones: [
            { id: "primera", nombre: "Aguacate Primera (caja por calibre)", precio: null, imagen: "img/productos/a.jpg" },
            { id: "segunda", nombre: "Aguacate Segunda (caja por calibre)", precio: null, imagen: "img/productos/a.jpg" },
            { id: "tercera", nombre: "Aguacate Tercera (caja por calibre)", precio: null, imagen: "img/productos/a.jpg" },
            { id: "cuarta", nombre: "Aguacate Cuarta (caja por calibre)", precio: null, imagen: "img/productos/a.jpg" }
        ]
    }
];

/* ============================================================
   RESOLVER RUTAS
   ============================================================ */
function resolverRuta(ruta) {
    if (!ruta) return ruta;
    if (ruta.startsWith('http://') || ruta.startsWith('https://') || ruta.startsWith('data:')) return ruta;
    const enPage = window.location.pathname.includes('/page/');
    const limpia = ruta.replace(/^\.\.\//, '').replace(/^\.\//, '');
    return enPage ? '../' + limpia : limpia;
}

/* ============================================================
   CONFIGURACIÓN
   ============================================================ */
const VERSION_PRODUCTOS = 13;

const HORARIO_PEDIDOS = { apertura: 22, cierre: 13 };
const STOCK_KEY_PRODUCTO     = 'frutimerca_stock_producto';
const STOCK_KEY_PRESENTACION = 'frutimerca_stock_presentacion';
const RESET_KEY              = 'frutimerca_ultimo_reset';

function estaAbiertoTienda() {
    const hora = new Date().getHours();
    return hora >= HORARIO_PEDIDOS.apertura || hora < HORARIO_PEDIDOS.cierre;
}

function verificarResetDiario() {
    const ahora = new Date();
    if (ahora.getHours() < HORARIO_PEDIDOS.apertura) return;
    const diaDeVenta = ahora.toISOString().slice(0, 10);
    const ultimoReset = localStorage.getItem(RESET_KEY);
    if (ultimoReset !== diaDeVenta) {
        localStorage.removeItem(STOCK_KEY_PRODUCTO);
        localStorage.removeItem(STOCK_KEY_PRESENTACION);
        localStorage.setItem(RESET_KEY, diaDeVenta);
    }
}

function obtenerStockProducto(idProducto, stockDefault) {
    try {
        const mapa = JSON.parse(localStorage.getItem(STOCK_KEY_PRODUCTO) || '{}');
        if (mapa[String(idProducto)] !== undefined) return mapa[String(idProducto)];
    } catch (e) {}
    return stockDefault !== false;
}

function guardarStockProducto(idProducto, disponible) {
    let mapa = {};
    try { mapa = JSON.parse(localStorage.getItem(STOCK_KEY_PRODUCTO) || '{}'); } catch (e) {}
    mapa[String(idProducto)] = !!disponible;
    localStorage.setItem(STOCK_KEY_PRODUCTO, JSON.stringify(mapa));
}

function obtenerStockPresentacion(idProducto, idPresentacion, stockDefault) {
    try {
        const mapa = JSON.parse(localStorage.getItem(STOCK_KEY_PRESENTACION) || '{}');
        const key = idProducto + '-' + idPresentacion;
        if (mapa[key] !== undefined) return mapa[key];
    } catch (e) {}
    return stockDefault !== false;
}

function guardarStockPresentacion(idProducto, idPresentacion, disponible) {
    let mapa = {};
    try { mapa = JSON.parse(localStorage.getItem(STOCK_KEY_PRESENTACION) || '{}'); } catch (e) {}
    const key = idProducto + '-' + idPresentacion;
    mapa[key] = !!disponible;
    localStorage.setItem(STOCK_KEY_PRESENTACION, JSON.stringify(mapa));
}

function productoEstaDisponible(prod) {
    if (!obtenerStockProducto(prod.id, prod.stock)) return false;
    return prod.presentaciones.some(pres => obtenerStockPresentacion(prod.id, pres.id, true));
}

function obtenerProductos() {
    const versionGuardada = localStorage.getItem('frutimerca_version');
    const raw = localStorage.getItem('frutimerca_productos');
    if (versionGuardada !== String(VERSION_PRODUCTOS)) {
        localStorage.removeItem('frutimerca_productos');
        localStorage.setItem('frutimerca_version', String(VERSION_PRODUCTOS));
    }
    if (raw) {
        try {
            const lista = JSON.parse(raw);
            if (Array.isArray(lista) && lista.length > 0 &&
                lista.every(p => Array.isArray(p.presentaciones) && p.slug)) return lista;
        } catch (e) {}
    }
    localStorage.setItem('frutimerca_productos', JSON.stringify(PRODUCTOS_DEFAULT));
    return PRODUCTOS_DEFAULT;
}

function guardarProductos(lista) {
    localStorage.setItem('frutimerca_productos', JSON.stringify(lista));
    localStorage.setItem('frutimerca_version', String(VERSION_PRODUCTOS));
}

/* ============================================================
   RENDERIZAR PRODUCTOS
   ============================================================ */
function renderizarProductos() {
    const contenedor = document.getElementById('lista-productos');
    if (!contenedor) return;
    verificarResetDiario();
    renderizarAvisoCerrado();
    const productos = obtenerProductos();
    contenedor.innerHTML = '';
    productos.forEach(prod => {
        const disponible = productoEstaDisponible(prod);
        const primera = prod.presentaciones[0];
        const tienePrecio = primera && primera.precio !== null;
        let precioHTML = '';
        if (tienePrecio) {
            const precios = prod.presentaciones.filter(p => p.precio !== null).map(p => p.precio);
            const min = Math.min(...precios);
            precioHTML = `<span class="precio-principal">Desde $${min.toFixed(2)}</span>
                <span class="precio-secundario">${prod.presentaciones.length} presentación(es)</span>`;
        } else {
            precioHTML = `<span class="precio-pendiente">Precio a confirmar</span>
                <span class="precio-secundario">${prod.presentaciones.length} calibres disponibles</span>`;
        }
        const boton = !disponible
            ? `<button class="btn-comprar" disabled>❌ Agotado</button>`
            : `<button class="btn-comprar btn-agregar"
                       onclick="event.stopPropagation(); irAProducto('${prod.slug}')">
                   👁️ Ver opciones
               </button>`;
        const card = document.createElement('div');
        card.className = 'card-producto' + (!disponible ? ' agotado' : '');
        card.dataset.categoria = prod.categoria;
        card.dataset.slug = prod.slug;
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => irAProducto(prod.slug));
        card.innerHTML = `
            ${!disponible ? '<div class="marca-agua-agotado"><span>AGOTADO</span></div>' : ''}
            <span class="card-badge">${prod.presentaciones.length} presentaciones</span>
            <img src="${resolverRuta(prod.imagen)}" alt="${prod.nombre}" loading="lazy"
                 onerror="this.src='https://via.placeholder.com/600x400/0f2b5b/ffffff?text=FrutiMerca'">
            <div class="card-info">
                <h3>${prod.nombre}</h3>
                <p class="descripcion">${prod.descripcion}</p>
                <div class="precios">${precioHTML}</div>
                <div class="botones-compra">${boton}</div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

function renderizarAvisoCerrado() {
    const contenedor = document.getElementById('lista-productos');
    if (!contenedor) return;
    const previo = document.getElementById('aviso-cerrado');
    if (previo) previo.remove();
    if (estaAbiertoTienda()) return;
    const aviso = document.createElement('div');
    aviso.id = 'aviso-cerrado';
    aviso.className = 'aviso-cerrado';
    aviso.innerHTML = `
        <div class="aviso-cerrado-icono">🌙</div>
        <div class="aviso-cerrado-texto">
            <strong>Pedidos cerrados por hoy</strong>
            <p>Nuestro sistema de pedidos en línea abre nuevamente <strong>hoy a las 10:00 PM</strong>.</p>
            <small>🕐 Pedidos online: 10:00 PM → 1:00 PM · Puesto físico: 4:00 AM → 1:00 PM</small>
        </div>
    `;
    contenedor.parentElement.insertBefore(aviso, contenedor);
}

/* ============================================================
   NAVEGACIÓN (CORREGIDA PARA page/)
   ============================================================ */
function irAProducto(slug) {
    // Detecta si ya estamos dentro de la carpeta /page/
    const enPage = window.location.pathname.includes('/page/');
    const url = enPage 
        ? `producto.html?slug=${slug}` 
        : `page/producto.html?slug=${slug}`;
        
    window.location.href = url;
}

function consultarProducto(nombre) {
    const tel = '0993734939';
    const msg = encodeURIComponent(`Hola FrutiMerca, quiero consultar el precio de: ${nombre}`);
    window.open(`https://wa.me/593${tel.slice(1)}?text=${msg}`, '_blank');
}