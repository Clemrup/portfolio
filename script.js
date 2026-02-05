// ===== Données de la galerie =====
const galleryData = [
    {
        image: 'https://placehold.co/800x600/f59e0b/ffffff?text=Client+1',
        title: 'Application E-commerce',
        description: 'Plateforme de vente en ligne sur mesure'
    },
    {
        image: 'https://placehold.co/800x600/ec4899/ffffff?text=Client+2',
        title: 'Dashboard Analytics',
        description: 'Tableau de bord de gestion interne'
    },
    {
        image: 'https://placehold.co/800x600/06b6d4/ffffff?text=Client+3',
        title: 'Application Mobile',
        description: 'App de réservation personnalisée'
    },
    {
        image: 'https://placehold.co/800x600/84cc16/ffffff?text=Client+4',
        title: 'Site Vitrine Premium',
        description: 'Site corporate haut de gamme'
    }
];

// ===== DOM Elements =====
const themeToggle = document.getElementById('themeToggle');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.getElementById('modalClose');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
const contactForm = document.getElementById('contactForm');

let currentImageIndex = 0;

// ===== Thème =====
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ===== Menu Mobile =====
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
}

function closeMobileMenu() {
    navLinks.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
}

// ===== Modal Galerie =====
function openModal(index) {
    currentImageIndex = index;
    updateModalContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function updateModalContent() {
    const item = galleryData[currentImageIndex];
    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryData.length;
    updateModalContent();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryData.length) % galleryData.length;
    updateModalContent();
}

// ===== Formulaire de Contact =====
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Ici vous pouvez ajouter votre logique d'envoi
    // Par exemple avec Formspree, EmailJS, ou votre propre backend
    
    // Pour l'instant, on affiche juste une alerte
    alert(`Merci ${name} ! Votre message a bien été envoyé.\n\nNote: Pour un vrai envoi, configurez un service comme Formspree ou EmailJS.`);
    
    contactForm.reset();
}

// ===== Smooth Scroll pour les liens de navigation =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                closeMobileMenu();
            }
        });
    });
}

// ===== Animation au scroll =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Appliquer aux cards
    document.querySelectorAll('.project-card, .gallery-item').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// ===== Navigation active au scroll =====
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    });
}

// ===== Event Listeners =====
function initEventListeners() {
    // Thème
    themeToggle.addEventListener('click', toggleTheme);
    
    // Menu mobile
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Fermer menu mobile au clic sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Galerie
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openModal(index));
    });
    
    // Modal
    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', prevImage);
    modalNext.addEventListener('click', nextImage);
    
    // Fermer modal avec Escape ou clic extérieur
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });
    
    // Formulaire
    contactForm.addEventListener('submit', handleFormSubmit);
}

// ===== Initialisation =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEventListeners();
    initSmoothScroll();
    initScrollAnimations();
    initActiveNavigation();
});
