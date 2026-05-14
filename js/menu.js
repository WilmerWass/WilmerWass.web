document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    if (!menuBtn || !navLinks) return; // seguridad
    // Estado inicial
    navLinks.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');

    menuBtn.addEventListener('click', function(e) {
        const isActive = navLinks.classList.toggle('active');
        menuBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        e.stopPropagation();

        // Alinear el desplegable con el botón en móviles
        if (isActive) {
            const rect = menuBtn.getBoundingClientRect();
            // Ponemos right en base a la distancia desde el borde derecho
            const right = window.innerWidth - (rect.left + rect.width);
            navLinks.style.right = Math.max(8, right) + 'px';
        } else {
            navLinks.style.right = '';
        }
        // Mostrar/ocultar overlay
        if (isActive) {
            showOverlay();
        } else {
            hideOverlay();
        }
    });

    // Cerrar el menú si se hace clic fuera (en móvil)
    document.addEventListener('click', function(e) {
        if (navLinks.classList.contains('active')) {
            // Si el click no está dentro del navLinks ni dentro del botón, cerramos
            if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                navLinks.style.right = '';
                hideOverlay();
            }
        }
    });

    // --- Overlay management ---
    let overlay = null;
    function createOverlay() {
        overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', function() {
            // cerrar menú al pulsar overlay
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                navLinks.style.right = '';
            }
            hideOverlay();
        });
    }
    function showOverlay() {
        if (!overlay) createOverlay();
        // forzar un reflow antes de activar para que la transición funcione
        requestAnimationFrame(() => overlay.classList.add('active'));
    }
    function hideOverlay() {
        if (!overlay) return;
        overlay.classList.remove('active');
        // opcional: eliminar del DOM después de la transición
        setTimeout(() => {
            if (overlay && !overlay.classList.contains('active')) {
                overlay.remove();
                overlay = null;
            }
        }, 220);
    }

    // Cerrar el menú al hacer click en un enlace del nav (anclas)
    const links = navLinks.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (!href) return;
            // si es un ancla interna
            if (href.startsWith('#')) {
                // permitir que el navegador haga el scroll; pero cerramos el menú
                navLinks.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                navLinks.style.right = '';
                hideOverlay();
                // si href="#" queremos llevar al top
                if (href === '#') {
                    // scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    e.preventDefault();
                }
            }
        });
    });
});
