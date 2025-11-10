document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Function to toggle menu visibility
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
    };

    // Event listener for the hamburger icon
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    // Optional: Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // Implement smooth scrolling for anchor links (optional but nice UX)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's the mobile menu button link itself, ignore it
            if (this.getAttribute('href') === '#signup' && this.closest('#mobile-menu')) {
                return; // Let the menu link perform its function
            }
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});