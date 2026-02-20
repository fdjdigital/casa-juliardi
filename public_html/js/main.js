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
    // Cursor Effect (Desktop only) - Enhanced
    // ========================================
    function initCursorEffect() {
        if (window.innerWidth < 768) return;

        // Cursor principal (ponto dourado)
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
            transition: transform 0.15s ease, opacity 0.15s ease, width 0.3s ease, height 0.3s ease, background 0.3s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursor);

        // Cursor externo (anel)
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
            transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease, height 0.3s ease, border-radius 0.3s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursorOuter);

        // Texto contextual (Explorar, Ver mais, etc.)
        const cursorText = document.createElement('div');
        cursorText.className = 'custom-cursor-text';
        cursorText.style.cssText = `
            position: fixed;
            pointer-events: none;
            z-index: 9997;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #c9a962;
            opacity: 0;
            transform: translate(-50%, 20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
            white-space: nowrap;
        `;
        document.body.appendChild(cursorText);

        // Ícone de taça para vinhos
        const cursorIcon = document.createElement('div');
        cursorIcon.className = 'custom-cursor-icon';
        cursorIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a962" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 22h8"/>
            <path d="M12 11v11"/>
            <path d="M17 5c0 3.87-2.24 7-5 7s-5-3.13-5-7"/>
            <path d="M5 2h14v3c0 4.97-3.13 9-7 9s-7-4.03-7-9V2z"/>
        </svg>`;
        cursorIcon.style.cssText = `
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
            transition: opacity 0.3s ease, transform 0.3s ease;
        `;
        document.body.appendChild(cursorIcon);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let currentState = 'default';

        // Funções para mudar estado do cursor
        function setCursorState(state, text = '') {
            if (currentState === state) return;
            currentState = state;

            // Reset
            cursor.style.width = '8px';
            cursor.style.height = '8px';
            cursor.style.background = '#c9a962';
            cursor.style.borderRadius = '50%';
            cursorOuter.style.width = '32px';
            cursorOuter.style.height = '32px';
            cursorOuter.style.borderRadius = '50%';
            cursorOuter.style.borderColor = 'rgba(201, 169, 98, 0.5)';
            cursorText.style.opacity = '0';
            cursorIcon.style.opacity = '0';
            cursorIcon.style.transform = 'translate(-50%, -50%) scale(0.5)';

            switch(state) {
                case 'wine':
                    // Ícone de taça para cards de vinho
                    cursor.style.opacity = '0';
                    cursorOuter.style.width = '50px';
                    cursorOuter.style.height = '50px';
                    cursorOuter.style.borderColor = 'rgba(201, 169, 98, 0.8)';
                    cursorIcon.style.opacity = '1';
                    cursorIcon.style.transform = 'translate(-50%, -50%) scale(1)';
                    break;

                case 'explore':
                    // Texto "Explorar" para seções
                    cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
                    cursorOuter.style.width = '80px';
                    cursorOuter.style.height = '80px';
                    cursorOuter.style.borderColor = 'rgba(201, 169, 98, 0.3)';
                    cursorText.textContent = text || 'Explorar';
                    cursorText.style.opacity = '1';
                    break;

                case 'drag':
                    // Cursor de arrastar para timeline
                    cursor.style.width = '4px';
                    cursor.style.height = '16px';
                    cursor.style.borderRadius = '2px';
                    cursorOuter.style.width = '40px';
                    cursorOuter.style.height = '40px';
                    cursorText.textContent = 'Arraste';
                    cursorText.style.opacity = '1';
                    break;

                case 'interactive':
                    // Estado padrão para elementos clicáveis
                    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                    cursorOuter.style.transform = 'translate(-50%, -50%) scale(1.5)';
                    break;

                default:
                    cursor.style.opacity = '1';
                    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                    cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = currentState === 'wine' ? '0' : '1';
            cursorOuter.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorOuter.style.opacity = '0';
            cursorText.style.opacity = '0';
            cursorIcon.style.opacity = '0';
        });

        // Cards de vinho - ícone de taça
        const wineCards = document.querySelectorAll('.vinho-card');
        wineCards.forEach(el => {
            el.addEventListener('mouseenter', () => setCursorState('wine'));
            el.addEventListener('mouseleave', () => setCursorState('default'));
        });

        // Seções exploráveis - texto "Explorar"
        const exploreSections = document.querySelectorAll('.hero-cta, .essencia-video, .timeline-card');
        exploreSections.forEach(el => {
            el.addEventListener('mouseenter', () => {
                const text = el.classList.contains('essencia-video') ? 'Assistir' :
                            el.classList.contains('timeline-card') ? 'Conhecer' : 'Explorar';
                setCursorState('explore', text);
            });
            el.addEventListener('mouseleave', () => setCursorState('default'));
        });

        // Timeline - cursor de arrastar
        const timelineItems = document.querySelectorAll('.timeline-image');
        timelineItems.forEach(el => {
            el.addEventListener('mouseenter', () => setCursorState('drag'));
            el.addEventListener('mouseleave', () => setCursorState('default'));
        });

        // Elementos interativos padrão (links, botões)
        const interactiveElements = document.querySelectorAll('a:not(.vinho-card a), button, input, textarea, select');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                if (currentState === 'default') setCursorState('interactive');
            });
            el.addEventListener('mouseleave', () => {
                if (currentState === 'interactive') setCursorState('default');
            });
        });

        // Animation loop
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;

            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';

            cursorOuter.style.left = cursorX + 'px';
            cursorOuter.style.top = cursorY + 'px';

            cursorText.style.left = mouseX + 'px';
            cursorText.style.top = mouseY + 'px';

            cursorIcon.style.left = mouseX + 'px';
            cursorIcon.style.top = mouseY + 'px';

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
    // Storytelling Scroll Animation
    // ========================================
    function initStorytelling() {
        const storyScenes = document.querySelectorAll('.story-scene');

        if (!storyScenes.length) return;

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active');
                } else {
                    // Remove class when leaving viewport for re-animation
                    entry.target.classList.remove('is-active');
                }
            });
        }, observerOptions);

        storyScenes.forEach(scene => {
            observer.observe(scene);
        });

        // Parallax effect on scroll
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    storyScenes.forEach(scene => {
                        const rect = scene.getBoundingClientRect();
                        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

                        if (scrollPercent > 0 && scrollPercent < 1) {
                            const bg = scene.querySelector('.story-bg');
                            if (bg) {
                                const parallaxOffset = (scrollPercent - 0.5) * 50;
                                bg.style.transform = `scale(1.1) translateY(${parallaxOffset}px)`;
                            }
                        }
                    });
                    ticking = false;
                });
                ticking = true;
            }
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
        init3DViewer();
        initStorytelling();

        // Desktop only features
        if (window.innerWidth >= 768) {
            initCursorEffect();
        }
    }

    // ========================================
    // 3D Viewer (Foto + 3D dual mode)
    // ========================================
    function init3DViewer() {
        var modal = document.getElementById('viewer3d-modal');
        var modelViewer = document.getElementById('viewer3d-model');
        var titleEl = document.getElementById('viewer3d-title');
        var badgeEl = document.getElementById('viewer3d-badge');
        var closeBtn = document.getElementById('viewer3d-close');
        var toggleBtn = document.getElementById('viewer3d-toggle');
        var toggleText = document.getElementById('viewer3d-toggle-text');
        var photoMode = document.getElementById('viewer3d-photo-mode');
        var threeDMode = document.getElementById('viewer3d-3d-mode');
        var photoEl = document.getElementById('viewer3d-photo');
        var instructionsEl = document.getElementById('viewer3d-instructions');
        var backdrop = modal ? modal.querySelector('.viewer3d-backdrop') : null;
        var buttons = document.querySelectorAll('.btn-3d-view');

        if (!modal || !modelViewer || buttons.length === 0) return;

        var currentModelId = '';
        var is3DMode = false;
        var modelLoaded = {};

        // Zoom state for photo
        var scale = 1;
        var panX = 0;
        var panY = 0;
        var isDragging = false;
        var startX = 0;
        var startY = 0;

        function updatePhotoTransform() {
            photoEl.style.transform = 'scale(' + scale + ') translate(' + panX + 'px, ' + panY + 'px)';
        }

        function resetZoom() {
            scale = 1;
            panX = 0;
            panY = 0;
            updatePhotoTransform();
        }

        // Mouse wheel zoom
        photoMode.addEventListener('wheel', function(e) {
            e.preventDefault();
            var delta = e.deltaY > 0 ? -0.15 : 0.15;
            scale = Math.max(1, Math.min(5, scale + delta));
            if (scale === 1) { panX = 0; panY = 0; }
            updatePhotoTransform();
        }, { passive: false });

        // Drag to pan
        photoMode.addEventListener('mousedown', function(e) {
            if (scale <= 1) return;
            isDragging = true;
            startX = e.clientX - panX;
            startY = e.clientY - panY;
        });

        photoMode.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            panX = e.clientX - startX;
            panY = e.clientY - startY;
            updatePhotoTransform();
        });

        window.addEventListener('mouseup', function() { isDragging = false; });

        // Touch zoom/pan
        var lastTouchDist = 0;
        photoMode.addEventListener('touchstart', function(e) {
            if (e.touches.length === 2) {
                var dx = e.touches[0].clientX - e.touches[1].clientX;
                var dy = e.touches[0].clientY - e.touches[1].clientY;
                lastTouchDist = Math.sqrt(dx * dx + dy * dy);
            } else if (e.touches.length === 1 && scale > 1) {
                isDragging = true;
                startX = e.touches[0].clientX - panX;
                startY = e.touches[0].clientY - panY;
            }
        }, { passive: true });

        photoMode.addEventListener('touchmove', function(e) {
            if (e.touches.length === 2) {
                e.preventDefault();
                var dx = e.touches[0].clientX - e.touches[1].clientX;
                var dy = e.touches[0].clientY - e.touches[1].clientY;
                var dist = Math.sqrt(dx * dx + dy * dy);
                var delta = (dist - lastTouchDist) * 0.01;
                scale = Math.max(1, Math.min(5, scale + delta));
                if (scale === 1) { panX = 0; panY = 0; }
                lastTouchDist = dist;
                updatePhotoTransform();
            } else if (isDragging && e.touches.length === 1) {
                panX = e.touches[0].clientX - startX;
                panY = e.touches[0].clientY - startY;
                updatePhotoTransform();
            }
        }, { passive: false });

        photoMode.addEventListener('touchend', function() { isDragging = false; });

        // Double-click to reset zoom
        photoMode.addEventListener('dblclick', function() { resetZoom(); });

        function setPhotoMode() {
            is3DMode = false;
            photoMode.style.display = 'flex';
            threeDMode.style.display = 'none';
            toggleBtn.style.display = 'inline-flex';
            badgeEl.textContent = 'Foto';
            instructionsEl.innerHTML =
                '<span class="viewer3d-instruction">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>' +
                'Pinça para zoom</span>' +
                '<span class="viewer3d-instruction">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5"/></svg>' +
                'Duplo clique para resetar</span>';
        }

        function set3DMode() {
            is3DMode = true;
            photoMode.style.display = 'none';
            threeDMode.style.display = 'block';
            toggleBtn.style.display = 'none';
            badgeEl.textContent = '3D Interativo';
            // Load model on first switch
            if (!modelLoaded[currentModelId]) {
                modelViewer.setAttribute('src', 'assets/models/' + currentModelId + '.glb');
                modelLoaded[currentModelId] = true;
            }
            instructionsEl.innerHTML =
                '<span class="viewer3d-instruction">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 9l7 7 7-7"/></svg>' +
                'Arraste para girar</span>' +
                '<span class="viewer3d-instruction">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>' +
                'Pinça para zoom</span>';
        }

        // Toggle button - só vai para 3D (sem volta)
        toggleBtn.addEventListener('click', function() {
            set3DMode();
        });

        function openViewer(modelId, modelName) {
            currentModelId = modelId;
            titleEl.textContent = modelName;
            badgeEl.textContent = '3D Interativo';
            toggleBtn.style.display = 'none';
            photoMode.style.display = 'none';
            threeDMode.style.display = 'block';
            modelViewer.setAttribute('poster', 'assets/images/posters/' + modelId + '.webp');
            modelViewer.setAttribute('src', 'assets/models/' + modelId + '.glb');
            modelViewer.setAttribute('alt', 'Garrafa ' + modelName + ' - Casa Juliardi');
            instructionsEl.innerHTML =
                '<span class="viewer3d-instruction">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 9l7 7 7-7"/></svg>' +
                'Arraste para girar</span>' +
                '<span class="viewer3d-instruction">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>' +
                'Pinça para zoom</span>';
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeViewer() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(function() {
                if (!modal.classList.contains('active')) {
                    modelViewer.removeAttribute('src');
                    photoEl.src = '';
                    modelLoaded = {};
                }
            }, 500);
        }

        buttons.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openViewer(btn.getAttribute('data-model'), btn.getAttribute('data-name'));
            });
        });

        closeBtn.addEventListener('click', closeViewer);
        backdrop.addEventListener('click', closeViewer);

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeViewer();
            }
        });
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
