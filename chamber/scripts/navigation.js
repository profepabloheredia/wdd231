


// Menu toggle for mobile view
const hamburgerBtn = document.getElementById('hamburger-btn');
const primaryNav = document.getElementById('primary-nav');

if (hamburgerBtn && primaryNav) {
    hamburgerBtn.addEventListener('click', function() {
        primaryNav.classList.toggle('show');
        // Toggle between hamburger and close icon
        const isOpen = primaryNav.classList.contains('show');
        hamburgerBtn.textContent = isOpen ? '✕' : '☰';
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });
    
    // Close menu when clicking on a link
    primaryNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                primaryNav.classList.remove('show');
                hamburgerBtn.textContent = '☰';
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });
}