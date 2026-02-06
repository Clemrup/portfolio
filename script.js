// ===== Données de la galerie =====
const galleryData = [
    {
        title: 'Mon Ecole et Moi',
        description: 'Site de gestion pour école Montessori',
        images: [
            'images/MON-accueil.png',
            'images/MON-connexion_parents.png',
            'images/MON-connexion_admin.png',
            'images/MON-espace_parents.png',
            'images/MON-gestion_cantine.png',
            'images/MON-liste_enfants_parents.png',
            'images/MON-gestion_eleves_admin.png',
            'images/MON-gestion_repas_admin.png',
            'images/MON-gestion_periscolaire_admin.png',
            'images/MON-raport_repas_admin.png'
        ],
        alt: [
            'accueil',
            'connexion parents',
            'connexion administration',
            'espace parents',
            'gestion cantine coté parents',
            'liste enfants inscrits coté parents',
            'gestion des inscrits coté administration',
            'gestion des repas coté administration',
            'gestion du périscolaire coté administration',
            'raport des repas coté administration'
        ]
    },
    {
        title: 'AUTOFIN-Controle',
        description: 'Logiciel d\'automatisation de données financières',
        images: [
            'images/AUTO-import.png',
            'images/AUTO-pdf_importe.png',
            'images/AUTO-selection_page.png',
            'images/AUTO-selection_ligne.png',
            'images/AUTO-agregation.png',
            'images/AUTO-liste_agregation.png',
            'images/AUTO-export.png'
        ],
        alt: [
            'Page d\'importation',
            'Page PDF "test" importé',
            'Page de sélection des pages à traiter',
            'Page de sélection des lignes à traiter',
            'Page d\'agrégation des lignes',
            'Page de la liste des agrégations réalisées',
            'Page de mapping pour extraction dans tableau excel'
        ]
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
const modalSubtitle = document.getElementById('modalSubtitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.getElementById('modalClose');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');

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

// ===== Carousel dans les gallery-items =====
function initCarousels() {
    document.querySelectorAll('.gallery-item').forEach((item, itemIndex) => {
        const carousel = item.querySelector('.gallery-carousel');
        if (!carousel) return;
        
        const images = carousel.querySelectorAll('.carousel-images img');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        const overlay = carousel.querySelector('.gallery-overlay');
        
        let currentSlide = 0;
        
        // Créer les dots
        images.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                goToSlide(i);
            });
            dotsContainer.appendChild(dot);
        });
        
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        
        function goToSlide(index) {
            images[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            currentSlide = index;
            images[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }
        
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide((currentSlide - 1 + images.length) % images.length);
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide((currentSlide + 1) % images.length);
        });
        
        // Ouvrir la modal au clic sur l'overlay
        overlay.addEventListener('click', () => {
            openModal(itemIndex, currentSlide);
        });
    });
}

// ===== Modal Galerie =====
let currentGalleryIndex = 0;
let currentImageIndex = 0;

function openModal(galleryIndex, imageIndex = 0) {
    currentGalleryIndex = galleryIndex;
    currentImageIndex = imageIndex;
    updateModalContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function updateModalContent() {
    const gallery = galleryData[currentGalleryIndex];
    modalImage.src = gallery.images[currentImageIndex];
    modalImage.alt = gallery.alt[currentImageIndex];
    modalTitle.textContent = gallery.title;
    modalSubtitle.textContent = modalImage.alt;
    modalDescription.textContent = `${gallery.description} (${currentImageIndex + 1}/${gallery.images.length})`;
}

function nextImage() {
    const gallery = galleryData[currentGalleryIndex];
    currentImageIndex = (currentImageIndex + 1) % gallery.images.length;
    updateModalContent();
}

function prevImage() {
    const gallery = galleryData[currentGalleryIndex];
    currentImageIndex = (currentImageIndex - 1 + gallery.images.length) % gallery.images.length;
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
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    
    // Menu mobile
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Fermer menu mobile au clic sur un lien
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
    
    // Modal
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalPrev) modalPrev.addEventListener('click', prevImage);
    if (modalNext) modalNext.addEventListener('click', nextImage);
    
    // Fermer modal avec Escape ou clic extérieur
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (!modal || !modal.classList.contains('active')) return;
        
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
}

// ===== Initialisation =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEventListeners();
    initCarousels();
    initSmoothScroll();
    initScrollAnimations();
    initActiveNavigation();
});
