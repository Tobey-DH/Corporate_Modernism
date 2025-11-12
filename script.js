/* ====================================
   CORPORATE MODERNISM WEBSITE
   JavaScript Interactivity
   ==================================== */

document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializeScrollEffects();
    initializeFormValidation();
    initializeIntersectionObserver();
});

/* ====================================
   MOBILE MENU TOGGLE
   ==================================== */

function initializeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/* ====================================
   SCROLL EFFECTS
   ==================================== */

function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add shadow to navbar on scroll
        if (scrollTop > 10) {
            navbar.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

/* ====================================
   INTERSECTION OBSERVER
   ==================================== */

function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all principle cards, feature cards, and system cards
    const elementsToObserve = document.querySelectorAll(
        '.principle-card, .element-card, .featured-card, .system-card, .app-card, .practice-item'
    );

    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
}

/* ====================================
   SMOOTH SCROLL TO ANCHOR
   ==================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Ignore if href is just "#"
        if (href === '#') return;

        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ====================================
   ACTIVE NAV LINK DETECTION
   ==================================== */

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.includes(currentSection) && currentSection !== '') {
            link.classList.add('active');
        }
    });
});

/* ====================================
   FORM VALIDATION (for future contact form)
   ==================================== */

function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
            }
        });
    });
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

/* ====================================
   UTILITY FUNCTIONS
   ==================================== */

// Add fade-in animation on scroll
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-in {
        animation: fadeIn 0.6s ease-out forwards;
    }
`;
document.head.appendChild(style);

/* ====================================
   UTILITY: Get viewport height
   ==================================== */

function getViewportHeight() {
    return Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
    );
}

/* ====================================
   UTILITY: Debounce function
   ==================================== */

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

/* ====================================
   RESIZE LISTENER FOR RESPONSIVE BEHAVIOR
   ==================================== */

const debouncedResize = debounce(function() {
    // Handle any resize-specific logic here
}, 250);

window.addEventListener('resize', debouncedResize);

/* ====================================
   PRELOAD CRITICAL RESOURCES
   ==================================== */

function preloadResources() {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = 'styles.css';
    document.head.appendChild(link);
}

preloadResources();

/* ====================================
   CONSOLE MESSAGE
   ==================================== */

console.log('%c Corporate Modernism ', 'background: #3B82F6; color: white; padding: 8px 12px; border-radius: 4px; font-weight: bold;');
console.log('%c Design System v1.0', 'color: #757575; font-size: 12px;');
console.log('Built with simplicity, clarity, and professional sophistication.');
