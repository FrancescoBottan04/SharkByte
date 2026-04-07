document.addEventListener('DOMContentLoaded', () => {
    
    // Gestione dell'animazione al caricamento e allo scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    // Effetto Parallasse Header (Opzionale)
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroTitle = document.querySelector('.hero-title');
        heroTitle.style.transform = `translateY(${scrolled * 0.2}px)`;
        heroTitle.style.opacity = 1 - (scrolled / 600);
    });
});
