/* ============================================================
   EFECTO SCROLL REVEAL OPTIMIZADO
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Detectar si es un dispositivo móvil
    const esMovil = window.innerWidth <= 768;

    // 1. Seleccionamos los elementos a animar
    const elementosAAnimar = document.querySelectorAll(
        '.beneficio, .card-producto, .paso, .historia-texto, .filtros h2, .como-comprar h2'
    );

    // 2. Configuramos el observador (Scroll Reveal)
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                // En celular, la animación es más rápida
                const delay = esMovil ? 0.05 : 0.1;
                
                // Aplicamos la clase 'visible'
                entrada.target.classList.add('visible');
                
                // Dejamos de observar
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: "0px 0px -40px 0px" // Margen más ajustado
    });

    // 3. Aplicamos la clase 'reveal' y observamos
    elementosAAnimar.forEach(el => {
        el.classList.add('reveal');
        observador.observe(el);
    });
});