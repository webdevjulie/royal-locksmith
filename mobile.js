const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('-translate-x-full');
    mobileMenu.classList.toggle('translate-x-0');
});

// Close button also toggles
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
});

// Optional: Close menu when clicking outside
window.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add('-translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
    }
});

// Blur navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('backdrop-blur-md', 'bg-black/70');
    } else {
        navbar.classList.remove('backdrop-blur-md', 'bg-black/70');
    }
});


