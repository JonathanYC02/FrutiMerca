/* ============================================================
   FRUTIMERCA — Filtros de productos
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.btn-filtro');
    if (!botones.length) return;

    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            botones.forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');

            const filtro = btn.dataset.filtro;
            document.querySelectorAll('.card-producto').forEach(card => {
                if (filtro === 'todos') {
                    card.style.display = 'flex';
                } else {
                    card.style.display =
                        card.dataset.categoria === filtro ? 'flex' : 'none';
                }
            });
        });
    });
});