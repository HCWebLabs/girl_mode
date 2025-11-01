'use strict';

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileNavDrawer = document.querySelector('.mobile-nav-drawer');
const mobileNavClose = document.querySelector('.mobile-nav-close');
const body = document.body;

function openMobileMenu() {
    mobileMenuToggle.classList.add('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
    mobileMenuOverlay.classList.add('active');
    mobileNavDrawer.classList.add('active');
    body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenuToggle.classList.remove('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenuOverlay.classList.remove('active');
    mobileNavDrawer.classList.remove('active');
    body.style.overflow = '';
}

mobileMenuToggle.addEventListener('click', () => {
    if (mobileNavDrawer.classList.contains('active')) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

mobileNavClose.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Close menu when clicking a nav link
document.querySelectorAll('.mobile-nav-section-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavDrawer.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || !href) return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Poll form handling
const pollForm = document.querySelector('.poll-options');
const pollBtn = document.querySelector('.poll-btn');

if (pollBtn) {
    pollBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const selected = pollForm.querySelector('input[type="radio"]:checked');
        if (selected) {
            alert('Thanks for voting! Results will be shown soon.');
        } else {
            alert('Please select an option first!');
        }
    });
}

console.log('girl_mode v2.0 - gURL.com inspired layout loaded! 💜');
