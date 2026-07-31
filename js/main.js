/* =============================================
   METAL BRIDGES — Main JavaScript (Anime.js)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* ─── 1. PRELOADER ─── */
    const preloader = document.getElementById('preloader');
    const beams = document.querySelectorAll('.steel-beam');
    let preloaderDismissed = false;

    if (beams.length) {
        anime({
            targets: beams,
            scaleX: [0.3, 1],
            opacity: [0.2, 1],
            duration: 600,
            delay: anime.stagger(150),
            easing: 'easeInOutQuad',
            loop: true,
            direction: 'alternate'
        });
    }

    const dismissPreloader = () => {
        if (preloaderDismissed || !preloader) return;
        preloaderDismissed = true;
        anime({
            targets: preloader,
            opacity: [1, 0],
            duration: 500,
            easing: 'easeOutQuad',
            complete: () => {
                preloader.style.visibility = 'hidden';
                preloader.style.pointerEvents = 'none';
                initHeroAnimations();
                initFloatingButtons();
            }
        });
    };

    window.addEventListener('load', () => setTimeout(dismissPreloader, 800));
    setTimeout(dismissPreloader, 3000);

    /* ─── 2. HERO TEXT REVEAL ─── */
    function initHeroAnimations() {
        const heroTL = anime.timeline({ easing: 'easeOutExpo' });

        // Badge
        heroTL.add({
            targets: '.hero-badge',
            opacity: [0, 1],
            translateY: [30, 0],
            scale: [0.9, 1],
            duration: 800
        });

        // Title lines — wrap each text node in .hero-line spans
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            // Store original innerHTML to restore on re-init
            if (!heroTitle.dataset.original) {
                heroTitle.dataset.original = heroTitle.innerHTML;
            }
            heroTitle.innerHTML = heroTitle.dataset.original;

            // Split by <br> tags, preserving them
            const html = heroTitle.innerHTML;
            const parts = html.split(/<br\s*\/?>/gi);
            heroTitle.innerHTML = parts.map(part => {
                return `<span class="hero-line">${part.trim()}</span>`;
            }).join('<br>');
        }

        heroTL.add({
            targets: '.hero-line',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 900,
            delay: anime.stagger(250)
        }, '-=400');

        // Subtitle
        heroTL.add({
            targets: '.hero-subtitle',
            opacity: [0, 1],
            translateY: [25, 0],
            duration: 700
        }, '-=500');

        // Buttons
        heroTL.add({
            targets: '.hero-buttons .btn',
            opacity: [0, 1],
            translateY: [20, 0],
            scale: [0.95, 1],
            duration: 600,
            delay: anime.stagger(120)
        }, '-=400');

        // Scroll indicator
        heroTL.add({
            targets: '.hero-scroll-indicator',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600
        }, '-=300');

        // Stats bar items — THEN start counters after they appear
        heroTL.add({
            targets: '.stat-item',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 500,
            delay: anime.stagger(100),
            complete: () => animateCounters()
        }, '-=400');
    }

    /* ─── 3. ANIMATED COUNTERS ─── */
    const counters = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounters() {
        if (countersAnimated) return;
        countersAnimated = true;
        counters.forEach((counter, i) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const obj = { val: 0 };
            anime({
                targets: obj,
                val: target,
                duration: 2200,
                delay: i * 150,
                easing: 'easeOutExpo',
                update: () => {
                    counter.textContent = Math.floor(obj.val);
                },
                complete: () => {
                    counter.textContent = target;
                }
            });
        });
    }

    /* ─── 4. NAVBAR SCROLL ─── */
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const handleNavScroll = () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        };
        window.addEventListener('scroll', handleNavScroll);
        handleNavScroll();
    }

    /* ─── 5. MOBILE NAV MENU (Anime.js — no CSS transition conflict) ─── */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu ? navMenu.querySelectorAll('.nav-link, .nav-btn-quote') : [];
    let menuOpen = false;

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            menuOpen = !menuOpen;
            navToggle.classList.toggle('active', menuOpen);

            if (menuOpen) {
                navMenu.classList.add('open');
                anime({
                    targets: navMenu,
                    right: ['-100%', '0%'],
                    duration: 400,
                    easing: 'easeOutCubic'
                });
                anime({
                    targets: navLinks,
                    opacity: [0, 1],
                    translateX: [30, 0],
                    duration: 350,
                    delay: anime.stagger(60, { start: 150 }),
                    easing: 'easeOutQuad'
                });
            } else {
                anime({
                    targets: navMenu,
                    right: ['0%', '-100%'],
                    duration: 350,
                    easing: 'easeInCubic',
                    complete: () => navMenu.classList.remove('open')
                });
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuOpen) {
                    menuOpen = false;
                    navToggle.classList.remove('active');
                    anime({
                        targets: navMenu,
                        right: ['0%', '-100%'],
                        duration: 350,
                        easing: 'easeInCubic',
                        complete: () => navMenu.classList.remove('open')
                    });
                }
            });
        });
    }

    /* ─── 6. ACTIVE NAV LINK ON SCROLL ─── */
    const sections = document.querySelectorAll('section[id]');
    const allNavLinks = document.querySelectorAll('.nav-link');
    const handleActiveNav = () => {
        const scrollPos = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollPos >= top && scrollPos < top + height) {
                allNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', handleActiveNav);

    /* ─── 7. SCROLL-TRIGGERED SECTION REVEALS (Anime.js) ─── */
    const revealSections = document.querySelectorAll(
        '.section-header, .about-grid, .ceo-section, .projects-grid, .video-grid, .why-grid, .testimonial-slider, .quote-form, .contact-grid, .contact-map'
    );

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                sectionObserver.unobserve(el);

                if (el.classList.contains('section-header')) {
                    const children = el.querySelectorAll('.section-tag, .section-title, .section-desc');
                    anime({
                        targets: children,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 700,
                        delay: anime.stagger(120),
                        easing: 'easeOutExpo'
                    });
                    return;
                }

                // Grid containers: stagger direct children
                const cards = el.children;
                if (cards.length > 0) {
                    anime({
                        targets: cards,
                        opacity: [0, 1],
                        translateY: [40, 0],
                        scale: [0.97, 1],
                        duration: 600,
                        delay: anime.stagger(80, { start: 100 }),
                        easing: 'easeOutCubic'
                    });
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealSections.forEach(el => sectionObserver.observe(el));

    /* ─── 8. SERVICE CARDS — staggered reveal (single observer, no conflict) ─── */
    const serviceGrid = document.querySelector('.services-grid');
    if (serviceGrid) {
        const serviceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    serviceObserver.unobserve(entry.target);
                    const cards = entry.target.querySelectorAll('.service-card');
                    if (cards.length) {
                        anime({
                            targets: cards,
                            opacity: [0, 1],
                            translateY: [50, 0],
                            scale: [0.95, 1],
                            duration: 600,
                            delay: anime.stagger(60, { start: 100 }),
                            easing: 'easeOutCubic'
                        });
                    }
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
        serviceObserver.observe(serviceGrid);
    }

    /* ─── 9. PROJECT FILTERS (Anime.js stagger) ─── */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            const toReveal = [];
            const toHide = [];
            projectCards.forEach(card => {
                const matches = filter === 'all' || card.getAttribute('data-category') === filter;
                if (matches) {
                    if (card.classList.contains('hidden')) {
                        card.classList.remove('hidden');
                        toReveal.push(card);
                    }
                } else if (!card.classList.contains('hidden')) {
                    toHide.push(card);
                }
            });
            if (toHide.length) {
                anime.remove(toHide);
                anime({
                    targets: toHide,
                    opacity: 0,
                    scale: 0.95,
                    duration: 250,
                    easing: 'easeInQuad',
                    complete: () => {
                        toHide.forEach(c => {
                            c.classList.add('hidden');
                            c.removeAttribute('style');
                        });
                    }
                });
            }
            if (toReveal.length) {
                anime.remove(toReveal);
                anime({
                    targets: toReveal,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    scale: [0.97, 1],
                    duration: 450,
                    delay: anime.stagger(60),
                    easing: 'easeOutCubic'
                });
            }
        });
    });

    const defaultFilter = document.querySelector('.filter-btn[data-filter="all"]');
    if (defaultFilter) defaultFilter.classList.add('active');

    /* ─── 10. TESTIMONIAL SLIDER (Anime.js) ─── */
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    const dotsContainer = document.getElementById('testimonialDots');
    let currentTestimonial = 0;
    const totalTestimonials = testimonialCards.length;

    if (dotsContainer) {
        for (let i = 0; i < totalTestimonials; i++) {
            const dot = document.createElement('span');
            dot.classList.add('testimonial-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToTestimonial(i));
            dotsContainer.appendChild(dot);
        }
    }

    function goToTestimonial(index) {
        currentTestimonial = index;
        anime({
            targets: testimonialTrack,
            translateX: `-${index * 100}%`,
            duration: 500,
            easing: 'easeInOutCubic'
        });
        document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToTestimonial((currentTestimonial - 1 + totalTestimonials) % totalTestimonials);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToTestimonial((currentTestimonial + 1) % totalTestimonials);
        });
    }

    let testimonialInterval = null;
    if (testimonialTrack) {
        testimonialInterval = setInterval(() => {
            goToTestimonial((currentTestimonial + 1) % totalTestimonials);
        }, 6000);
    }

    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider && testimonialTrack) {
        testimonialSlider.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
        testimonialSlider.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(() => {
                goToTestimonial((currentTestimonial + 1) % totalTestimonials);
            }, 6000);
        });
    }

    /* ─── 11. FLOATING BUTTONS (Anime.js entrance) ─── */
    function initFloatingButtons() {
        const floats = document.querySelectorAll('.floating-btn');
        if (!floats.length) return;
        anime({
            targets: floats,
            scale: [0, 1],
            opacity: [0, 1],
            duration: 500,
            delay: anime.stagger(120, { start: 600 }),
            easing: 'easeOutBack'
        });
    }

    /* ─── 12. BACK TO TOP ─── */
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ─── 13. FORM HANDLING ─── */
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            anime({
                targets: quoteForm,
                opacity: [1, 0],
                translateY: [0, -20],
                duration: 300,
                easing: 'easeInQuad',
                complete: () => {
                    quoteForm.innerHTML = `
                        <div class="form-success">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#48bb78" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <h3>Quote Request Submitted!</h3>
                            <p>Thank you for your interest in METAL BRIDGES. We will review your project details and get back to you within 24 hours.</p>
                        </div>`;
                    anime({
                        targets: '.form-success',
                        opacity: [0, 1],
                        scale: [0.9, 1],
                        translateY: [20, 0],
                        duration: 500,
                        easing: 'easeOutBack'
                    });
                }
            });
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            anime({
                targets: contactForm,
                opacity: [1, 0],
                translateY: [0, -20],
                duration: 300,
                easing: 'easeInQuad',
                complete: () => {
                    const formWrapper = contactForm.parentElement;
                    contactForm.remove();
                    const successDiv = document.createElement('div');
                    successDiv.className = 'form-success';
                    successDiv.innerHTML = `
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#48bb78" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <h3>Message Sent!</h3>
                        <p>Thank you for reaching out to METAL BRIDGES. We will respond to your inquiry shortly.</p>`;
                    formWrapper.appendChild(successDiv);
                    anime({
                        targets: successDiv,
                        opacity: [0, 1],
                        scale: [0.9, 1],
                        translateY: [20, 0],
                        duration: 500,
                        easing: 'easeOutBack'
                    });
                }
            });
        });
    }

    /* ─── 14. FILE UPLOAD PREVIEW ─── */
    const fileInput = document.getElementById('photos');
    const fileUpload = document.querySelector('.file-upload');
    if (fileInput && fileUpload) {
        fileInput.addEventListener('change', () => {
            const label = fileUpload.querySelector('.file-upload-label span');
            if (fileInput.files.length > 0) {
                label.textContent = `${fileInput.files.length} file(s) selected`;
                anime({
                    targets: fileUpload,
                    scale: [1, 1.03, 1],
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            } else {
                label.textContent = 'Drag & drop or click to upload';
            }
        });
    }

    /* ─── 15. SMOOTH SCROLL ─── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const top = target.offsetTop - 90;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    /* ─── 16. SERVICE CARD ICON PULSE ON HOVER ─── */
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.service-icon');
            if (icon) {
                anime({
                    targets: icon,
                    scale: [1, 1.15, 1],
                    rotate: [0, 5, -5, 0],
                    duration: 400,
                    easing: 'easeOutQuad'
                });
            }
        });
    });

    /* ─── 17. FLOATING BUTTON PULSE ON SCROLL ─── */
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
        const delta = Math.abs(window.scrollY - lastScrollY);
        if (delta > 50) {
            const whatsapp = document.querySelector('.whatsapp-float');
            if (whatsapp) {
                anime({
                    targets: whatsapp,
                    scale: [1, 1.1, 1],
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
            lastScrollY = window.scrollY;
        }
    });

    /* ─── 18. THEME TOGGLE ─── */
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const html = document.documentElement;
            const current = html.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            anime({
                targets: themeToggle.querySelector('svg'),
                rotate: { value: 360, duration: 500 },
                easing: 'easeOutQuad'
            });
        });
    }

});
