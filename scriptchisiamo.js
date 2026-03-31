r
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 10%';
        nav.style.background = '#000';
    } else {
        nav.style.padding = '20px 10%';
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});
