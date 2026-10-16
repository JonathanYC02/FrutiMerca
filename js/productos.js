/* ============================================================
   FRUTIMERCA — Base de datos de productos
   
   - imagen (principal)  → se muestra en el index (tarjetas)
   - imagen (presentación) → se muestra en el detalle del producto
   - empaque → cómo se entrega al cliente (informativo)
   ============================================================ */

const PRODUCTOS_DEFAULT = [
    /* ==================== FRUTILLAS ==================== */
    {
        id: 1,
        slug: "frutilla-primera",
        nombre: "Frutilla Primera",
        categoria: "frutillas",
        descripcion: "Frutilla grande y homogénea en tamaño y color. La preferida por pasteleros y reposteros para decoraciones de tortas, arreglos frutales, brochetas de fresas con chocolate y eventos donde la presentación visual es clave.",
        imagen: "img/productos/p.jpg",
        stock: true,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 28.00, imagen: "img/productos/primera-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 14.00, imagen: "img/productos/primera-caja.jpg" }
        ]
    },
    {
        id: 2,
        slug: "frutilla-segunda",
        nombre: "Frutilla Segunda",
        categoria: "frutillas",
        descripcion: "Fresa de tamaño mediano con muy buen sabor y color aceptable. Muy solicitada para heladerías, preparación de batidos, postres en vaso, mermeladas artesanales y venta en fruterías al detalle.",
        imagen: "img/productos/s.jpg",
        stock: true,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 25.00, imagen: "img/productos/segunda-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 12.50, imagen: "img/productos/segunda-caja.jpg" }
        ]
    },
    {
        id: 3,
        slug: "frutilla-tercera",
        nombre: "Frutilla Tercera",
        categoria: "frutillas",
        descripcion: "Frutillas de menor tamaño o forma irregular, ideal para procesamiento rápido. Muy utilizada para licuados masivos, elaboración de concentrados, mermeladas de alto volumen, salsas y fresas con crema.",
        imagen: "img/productos/t.jpg",
        stock: true,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 15.00, imagen: "img/productos/tercera-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 7.50, imagen: "img/productos/tercera-caja.jpg" }
        ]
    },
    {
        id: 4,
        slug: "frutilla-cuarta",
        nombre: "Frutilla Cuarta",
        categoria: "frutillas",
        descripcion: "Frutilla de tamaño diminuto pero con gran concentración de dulzor y sabor natural. Muy económica y rendidora, ideal para negocios de comida rápida que venden yogures caseros con fruta, jugos, licuados, mermeladas, concentrados y pulpas.",
        imagen: "img/productos/c.jpg",
        stock: true,
        empaque: "La fruta se entrega en caja de cartón. El balde es solo para transporte interno.",
        presentaciones: [
            { id: "30lbs", nombre: "Balde de 30 libras", precio: 10.00, imagen: "img/productos/cuarta-balde.jpg" },
            { id: "15lbs", nombre: "Caja de cartón de 15 libras", precio: 5.00, imagen: "img/productos/cuarta-caja.jpg" }
        ]
    },

    /* ==================== OTRAS FRUTAS ==================== */
    {
        id: 5,
        slug: "mora-ambateña",
        nombre: "Mora Ambateña",
        categoria: "otros",
        descripcion: "Mora seleccionada de excelente coloración, acidez y rendimiento. Altamente demandada por juguerías, heladerías, pastelerías y locales de comida rápida para jugos naturales, batidos, jaleas, mermeladas y pulpas concentradas.",
        imagen: "img/productos/m.jpg",
        stock: true,
        empaque: "Se entrega en balde.",
        presentaciones: [
            { id: "16lbs", nombre: "Balde de 16-18 libras", precio: 15.00, imagen: "img/productos/m.jpg" }
        ]
    },
    {
        id: 6,
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
        id: 7,
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
            { id: "cuarta",  nombre: "Claudia Cuarta (caja por calibre)",  precio: null, imagen: "img/productos/cl.jpg" }
        ]
    },
    {
        id: 8,
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
        id: 9,
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
            { id: "cuarta",  nombre: "Aguacate Cuarta (caja por calibre)",  precio: null, imagen: "img/productos/a.jpg" }
        ]
    }
];

/* ============================================================
   FUNCIÓN PARA RESOLVER RUTAS DE IMÁGENES
   ============================================================ */
function resolverRuta(ruta) {
    if (!ruta) return ruta;

    if (ruta.startsWith('http://') ||
        ruta.startsWith('https://') ||
        ruta.startsWith('data:')) {
        return ruta;
    }

    const enPage = window.location.pathname.includes('/page/');
    const limpia = ruta.replace(/^\.\.\//, '').replace(/^\.\//, '');

    return enPage ? '../' + limpia : limpia;
}

/* ============================================================
   localStorage — CON VERIFICACIÓN DE COMPATIBILIDAD
   ============================================================ */
const VERSION_PRODUCTOS = 8;
/* ============================================================
   OBTENER PRODUCTOS (SÍNCRONO — instantáneo, sin consultas)
   ============================================================ */
function obtenerProductos() {
    if (window._PRODUCTOS_CARGADOS) {
        return window._PRODUCTOS_CARGADOS;
    }

    // Cargar productos base del código (con precios actualizados cuando
    // subas VERSION_PRODUCTOS nueva)
    const productos = JSON.parse(JSON.stringify(PRODUCTOS_DEFAULT));
    window._PRODUCTOS_CARGADOS = productos;
    return productos;
}

/* ============================================================
   INICIALIZACIÓN (sin llamadas externas)
   ============================================================ */
function inicializarProductos() {
    // Solo cargar los productos en memoria
    const productos = obtenerProductos();

    // Avisar que están listos
    window.dispatchEvent(new CustomEvent('productosListos'));

    return productos;
}

/* ============================================================
   Renderizar grid de productos (index)
   ============================================================ */
function renderizarProductos() {
    const contenedor = document.getElementById('lista-productos');
    if (!contenedor) return;

    const productos = obtenerProductos();
    contenedor.innerHTML = '';

    productos.forEach(prod => {
        const sinStock = prod.stock === false;
        const primera = prod.presentaciones[0];
        const tienePrecio = primera && primera.precio !== null;

        let precioHTML = '';
        if (tienePrecio) {
            const precios = prod.presentaciones
                .filter(p => p.precio !== null)
                .map(p => p.precio);
            const min = Math.min(...precios);
            precioHTML = `
                <span class="precio-principal">Desde $${min.toFixed(2)}</span>
                <span class="precio-secundario">${prod.presentaciones.length} presentación(es)</span>
            `;
        } else {
            precioHTML = `
                <span class="precio-pendiente">Precio a confirmar</span>
                <span class="precio-secundario">${prod.presentaciones.length} calibres disponibles</span>
            `;
        }

        const boton = sinStock
            ? `<button class="btn-comprar" disabled>❌ Agotado</button>`
            : `<button class="btn-comprar btn-agregar"
                       onclick="event.stopPropagation(); irAProducto('${prod.slug}')">
                   👁️ Ver opciones
               </button>`;

        const card = document.createElement('div');
        card.className = 'card-producto';
        card.dataset.categoria = prod.categoria;
        card.dataset.slug = prod.slug;
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => irAProducto(prod.slug));

        card.innerHTML = `
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

/* ============================================================
   Navegación a página de producto
   ============================================================ */
function irAProducto(slug) {
    window.location.href = `page/producto.html?slug=${slug}`;
}

/* ============================================================
   Consultar precio (para productos sin precio)
   ============================================================ */
function consultarProducto(nombre) {
    const tel = '0993734939';
    const msg = encodeURIComponent(
        `Hola FrutiMerca, quiero consultar el precio de: ${nombre}`
    );
    window.open(`https://wa.me/593${tel.slice(1)}?text=${msg}`, '_blank');
}