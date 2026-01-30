/**
 * Casa Juliardi - Premium Wine Website
 * A Coragem Constrói Legado
 * Main JavaScript File
 */

(function() {
    'use strict';

    // ========================================
    // DOM Elements
    // ========================================
    const loader = document.getElementById('loader');
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav-link');
    const ageModal = document.getElementById('age-modal');
    const ageConfirm = document.getElementById('age-confirm');
    const ageDeny = document.getElementById('age-deny');
    const contatoForm = document.getElementById('contato-form');

    // ========================================
    // Loader
    // ========================================
    function hideLoader() {
        setTimeout(() => {
            loader.classList.add('hidden');
            document.body.classList.remove('no-scroll');
            initAnimations();
        }, 1500);
    }

    // ========================================
    // Age Verification
    // ========================================
    function checkAgeVerification() {
        const isVerified = localStorage.getItem('ageVerified');

        if (!isVerified) {
            ageModal.classList.remove('hidden');
            document.body.classList.add('no-scroll');
        } else {
            ageModal.classList.add('hidden');
        }
    }

    function handleAgeConfirm() {
        localStorage.setItem('ageVerified', 'true');
        ageModal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }

    function handleAgeDeny() {
        window.location.href = 'https://www.google.com';
    }

    // ========================================
    // Navigation
    // ========================================
    function toggleMenu() {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    function closeMenu() {
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    function handleNavLinkClick(e) {
        closeMenu();

        // Update active state
        navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
    }

    // ========================================
    // Header Scroll Effect
    // ========================================
    function handleScroll() {
        const scrollY = window.scrollY;

        // Header background
        if (scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Update active nav link based on section
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ========================================
    // Smooth Scroll
    // ========================================
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // ========================================
    // Animations (Simple AOS alternative)
    // ========================================
    function initAnimations() {
        const animatedElements = document.querySelectorAll('[data-aos]');

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-aos-delay') || 0;

                    setTimeout(() => {
                        entry.target.classList.add('aos-animate');
                    }, delay);

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // ========================================
    // Contact Form
    // ========================================
    function handleFormSubmit(e) {
        e.preventDefault();

        const formData = new FormData(contatoForm);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Simulate form submission
        const submitBtn = contatoForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        setTimeout(() => {
            // Show success message
            contatoForm.innerHTML = `
                <div class="form-success">
                    <div class="success-icon"></div>
                    <h3>Mensagem Enviada!</h3>
                    <p>Agradecemos seu interesse na Casa Juliardi. Entraremos em contato em breve.</p>
                </div>
            `;

            // Add success styles
            const successDiv = contatoForm.querySelector('.form-success');
            successDiv.style.textAlign = 'center';
            successDiv.style.padding = '3rem 1rem';

            const successIcon = successDiv.querySelector('.success-icon');
            successIcon.style.width = '60px';
            successIcon.style.height = '60px';
            successIcon.style.margin = '0 auto 1.5rem';
            successIcon.style.borderRadius = '50%';
            successIcon.style.border = '2px solid #c9a962';
            successIcon.style.position = 'relative';
            successIcon.innerHTML = '<span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(45deg);width:12px;height:24px;border-bottom:2px solid #c9a962;border-right:2px solid #c9a962;"></span>';

            const h3 = successDiv.querySelector('h3');
            h3.style.fontFamily = "'Cormorant Garamond', serif";
            h3.style.fontSize = '1.5rem';
            h3.style.color = '#c9a962';
            h3.style.marginBottom = '0.75rem';

            const p = successDiv.querySelector('p');
            p.style.color = '#cccccc';
            p.style.fontSize = '0.9rem';
        }, 1500);
    }

    // ========================================
    // Parallax Effect (subtle)
    // ========================================
    function initParallax() {
        const hero = document.querySelector('.hero');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
                hero.style.transform = `translateY(${scrollY * 0.3}px)`;
            }
        });
    }

    // ========================================
    // Cursor Effect (Desktop only)
    // ========================================
    function initCursorEffect() {
        if (window.innerWidth < 768) return;

        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: #c9a962;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.15s ease, opacity 0.15s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursor);

        const cursorOuter = document.createElement('div');
        cursorOuter.className = 'custom-cursor-outer';
        cursorOuter.style.cssText = `
            position: fixed;
            width: 32px;
            height: 32px;
            border: 1px solid rgba(201, 169, 98, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transition: transform 0.3s ease, opacity 0.3s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursorOuter);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '1';
            cursorOuter.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorOuter.style.opacity = '0';
        });

        // Interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                cursorOuter.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });

            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });

        // Animation loop
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;

            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
            cursor.style.transform = 'translate(-50%, -50%)';

            cursorOuter.style.left = cursorX + 'px';
            cursorOuter.style.top = cursorY + 'px';
            cursorOuter.style.transform = 'translate(-50%, -50%)';

            requestAnimationFrame(animateCursor);
        }

        animateCursor();
    }

    // ========================================
    // Reveal on Scroll (for images)
    // ========================================
    function initRevealOnScroll() {
        const images = document.querySelectorAll('.timeline-image, .vinho-image, .essencia-image');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        images.forEach(image => {
            image.style.opacity = '0';
            image.style.transform = 'scale(1.05)';
            image.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(image);
        });
    }

    // ========================================
    // Number Counter Animation
    // ========================================
    function initCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const endValue = parseInt(target.textContent);
                    const duration = 2000;
                    const startTime = performance.now();

                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);

                        // Easing function
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        const currentValue = Math.round(easeOutQuart * endValue);

                        target.textContent = currentValue;

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        }
                    }

                    target.textContent = '0';
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(target);
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    }

    // ========================================
    // Wine Card Hover Effect
    // ========================================
    function initWineCardEffects() {
        const wineCards = document.querySelectorAll('.vinho-card');

        wineCards.forEach(card => {
            card.addEventListener('mouseenter', function(e) {
                const cardImage = this.querySelector('.vinho-image');
                if (cardImage) {
                    cardImage.style.transform = 'scale(1.05)';
                }
            });

            card.addEventListener('mouseleave', function(e) {
                const cardImage = this.querySelector('.vinho-image');
                if (cardImage) {
                    cardImage.style.transform = 'scale(1)';
                }
            });
        });
    }

    // ========================================
    // Initialize Everything
    // ========================================
    function init() {
        // Set initial states
        document.body.classList.add('no-scroll');

        // Event Listeners
        if (navToggle) navToggle.addEventListener('click', toggleMenu);
        if (navClose) navClose.addEventListener('click', closeMenu);

        navLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
            link.addEventListener('click', smoothScroll);
        });

        // All anchor links with hash
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', smoothScroll);
        });

        window.addEventListener('scroll', handleScroll);

        if (ageConfirm) ageConfirm.addEventListener('click', handleAgeConfirm);
        if (ageDeny) ageDeny.addEventListener('click', handleAgeDeny);

        if (contatoForm) contatoForm.addEventListener('submit', handleFormSubmit);

        // Initialize features
        hideLoader();
        checkAgeVerification();
        initParallax();
        initRevealOnScroll();
        initCounterAnimation();
        initWineCardEffects();

        // Desktop only features
        if (window.innerWidth >= 768) {
            initCursorEffect();
        }
    }

    // ========================================
    // DOM Ready
    // ========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
