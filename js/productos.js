/* ============================================================
   FRUTIMERCA — Base de datos de productos
   Cada presentación tiene su propia imagen (campo imagen dentro
   del objeto presentación). Si no tiene, se usa la imagen
   principal del producto como respaldo.
   ============================================================ */

const PRODUCTOS_DEFAULT = [
    /* ==================== FRUTILLAS ==================== */
    {
        id: 1,
        slug: "frutilla-primera",
        nombre: "Frutilla Primera",
        categoria: "frutillas",
        descripcion: "Frutilla grande y homogénea en tamaño y color. La preferida por pasteleros y reposteros para decoraciones de tortas, arreglos frutales, brochetas de fresas con chocolate y eventos donde la presentación visual es clave.",
        imagen: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800",
        stock: true,
        presentaciones: [
            {
                id: "30lbs",
                nombre: "Balde de 30 libras",
                precio: 28.00,
                imagen: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800"
            },
            {
                id: "15lbs",
                nombre: "Caja de cartón de 15 libras",
                precio: 14.00,
                imagen: "https://images.unsplash.com/photo-1543528176-61b239494933?w=800"
            }
        ]
    },
    {
        id: 2,
        slug: "frutilla-segunda",
        nombre: "Frutilla Segunda",
        categoria: "frutillas",
        descripcion: "Fresa de tamaño mediano con muy buen sabor y color aceptable. Muy solicitada para heladerías, preparación de batidos, postres en vaso, mermeladas artesanales y venta en fruterías al detalle.",
        imagen: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=800",
        stock: true,
        presentaciones: [
            {
                id: "30lbs",
                nombre: "Balde de 30 libras",
                precio: 25.00,
                imagen: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=800"
            },
            {
                id: "15lbs",
                nombre: "Caja de cartón de 15 libras",
                precio: 12.50,
                imagen: "https://images.unsplash.com/photo-1591287083773-9a2c8b1a1e6e?w=800"
            }
        ]
    },
    {
        id: 3,
        slug: "frutilla-tercera",
        nombre: "Frutilla Tercera",
        categoria: "frutillas",
        descripcion: "Frutillas de menor tamaño o forma irregular, ideal para procesamiento rápido. Muy utilizada para licuados masivos, elaboración de concentrados, mermeladas de alto volumen, salsas y fresas con crema.",
        imagen: "https://images.unsplash.com/photo-1543528176-61b239494933?w=800",
        stock: true,
        presentaciones: [
            {
                id: "30lbs",
                nombre: "Balde de 30 libras",
                precio: 15.00,
                imagen: "https://images.unsplash.com/photo-1543528176-61b239494933?w=800"
            },
            {
                id: "15lbs",
                nombre: "Caja de cartón de 15 libras",
                precio: 7.50,
                imagen: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800"
            }
        ]
    },
    {
        id: 4,
        slug: "frutilla-cuarta",
        nombre: "Frutilla Cuarta",
        categoria: "frutillas",
        descripcion: "Frutilla de tamaño diminuto pero con gran concentración de dulzor y sabor natural. Muy económica y rendidora, ideal para negocios de comida rápida que venden yogures caseros con fruta, jugos, licuados, mermeladas, concentrados y pulpas.",
        imagen: "https://images.unsplash.com/photo-1591287083773-9a2c8b1a1e6e?w=800",
        stock: true,
        presentaciones: [
            {
                id: "30lbs",
                nombre: "Balde de 30 libras",
                precio: 10.00,
                imagen: "https://images.unsplash.com/photo-1591287083773-9a2c8b1a1e6e?w=800"
            },
            {
                id: "15lbs",
                nombre: "Caja de cartón de 15 libras",
                precio: 5.00,
                imagen: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=800"
            }
        ]
    },

    /* ==================== OTRAS FRUTAS ==================== */
    {
        id: 5,
        slug: "mora-castilla",
        nombre: "Mora de Castilla",
        categoria: "otros",
        descripcion: "Mora seleccionada de excelente coloración, acidez y rendimiento. Altamente demandada por juguerías, heladerías, pastelerías y locales de comida rápida para jugos naturales, batidos, jaleas, mermeladas y pulpas concentradas.",
        imagen: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?w=800",
        stock: true,
        presentaciones: [
            {
                id: "16lbs",
                nombre: "Balde de 16-18 libras",
                precio: 15.00,
                imagen: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?w=800"
            }
        ]
    },
    {
        id: 6,
        slug: "granadilla-selecta",
        nombre: "Granadilla Selecta",
        categoria: "otros",
        descripcion: "Presentación comercial en caja/cartón de gran volumen con aproximadamente 100 unidades o más, dependiendo del calibre. Ideal para fruterías, mercados al detalle, consumo familiar y puestos de jugos por su pulpa dulce y digestiva.",
        imagen: "https://images.unsplash.com/photo-1604495772376-9657f00335f1?w=800",
        stock: true,
        presentaciones: [
            {
                id: "carton",
                nombre: "Cartón al granel (100+ unidades)",
                precio: null,
                imagen: "https://images.unsplash.com/photo-1604495772376-9657f00335f1?w=800"
            }
        ]
    },
    {
        id: 7,
        slug: "claudia",
        nombre: "Claudia (Ciruela de Temporada)",
        categoria: "otros",
        descripcion: "Fruta de temporada de alta rotación comercial. Disponible en Primera, Segunda, Tercera y Cuarta. Cotizada por su equilibrio entre acidez y dulzor, ideal para consumo fresco, repostería y conservas.",
        imagen: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800",
        stock: true,
        presentaciones: [
            { id: "primera", nombre: "Claudia Primera (caja por calibre)", precio: null, imagen: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800" },
            { id: "segunda", nombre: "Claudia Segunda (caja por calibre)", precio: null, imagen: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800" },
            { id: "tercera", nombre: "Claudia Tercera (caja por calibre)", precio: null, imagen: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800" },
            { id: "cuarta", nombre: "Claudia Cuarta (caja por calibre)", precio: null, imagen: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800" }
        ]
    },
    {
        id: 8,
        slug: "durazno",
        nombre: "Durazno",
        categoria: "otros",
        descripcion: "Producto seleccionado por su firmeza, aroma y textura. Disponible en Primera, Segunda y Tercera. Muy solicitado para venta al detalle, elaboración de duraznos en almíbar, tartas y ensaladas de frutas.",
        imagen: "https://images.unsplash.com/photo-1595124245030-41448b199d6d?w=800",
        stock: true,
        presentaciones: [
            { id: "primera", nombre: "Durazno Primera (caja por calibre)", precio: null, imagen: "https://images.unsplash.com/photo-1595124245030-41448b199d6d?w=800" },
            { id: "segunda", nombre: "Durazno Segunda (caja por calibre)", precio: null, imagen: "https://images.unsplash.com/photo-1595124245030-41448b199d6d?w=800" },
            { id: "tercera", nombre: "Durazno Tercera (caja por calibre)", precio: null, imagen: "https://images.unsplash.com/photo-1595124245030-41448b199d6d?w=800" }
        ]
    },
    {
        id: 9,
        slug: "aguacate",
        nombre: "Aguacate",
        categoria: "otros",
        descripcion: "Alto consumo diario en el sector gastronómico y comercial. Disponible en Primera, Segunda, Tercera y Cuarta. Excelente cremosidad y sabor. Muy buscado para restaurantes, fruterías, guacamole y procesamiento industrial.",
        imagen: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=800",
        stock: true,
        presentaciones: [
            { id: "primera", nombre: "Aguacate Primera (caja por calibre)", precio: null, imagen: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=800" },
            { id: "segunda", nombre: "Aguacate Segunda (caja por calibre)", precio: null, imagen: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=800" },
            { id: "tercera", nombre: "Aguacate Tercera (caja por calibre)", precio: null, imagen: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=800" },
            { id: "cuarta", nombre: "Aguacate Cuarta (caja por calibre)", precio: null, imagen: "https://images.unsplash.com/photo-1601039641847-7857b994d704?w=800" }
        ]
    }
];

/* ============================================================
   localStorage — CON VERIFICACIÓN DE COMPATIBILIDAD
   ============================================================ */
const VERSION_PRODUCTOS = 3;

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
            const validos = Array.isArray(lista)
                && lista.length > 0
                && lista.every(p => Array.isArray(p.presentaciones) && p.slug);
            if (validos) return lista;
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
            <img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy"
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