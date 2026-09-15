// Transición de Navbar con el Scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Menú Hamburguesa para Móviles
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');

        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Submenú desplegable en dispositivos móviles
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    item.classList.toggle('open');
                }
            });
        });

        // Animaciones Reveal con IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(element => {
            observer.observe(element);
        });

        // Envío del Formulario
        document.getElementById('fiscalizaForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por sumarte a fiscalizar en Concordia! Un coordinador se pondrá en contacto pronto.');
            e.target.reset();
        });