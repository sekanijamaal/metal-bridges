const fs = require('fs');

const sections = [];

// Head
sections.push(`<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="METAL BRIDGES — Premium metal fabrication and welding services in Accra, Ghana.">
    <meta name="keywords" content="metal fabrication, welding, Ghana, Accra, gates, doors, staircases, roofing">
    <meta name="author" content="METAL BRIDGES">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="METAL BRIDGES — Precision Metal Fabrication &amp; Modern Welding Solutions">
    <meta property="og:description" content="Building Strength in Steel, Crafting Excellence.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.metalbridges.com">
    <meta name="twitter:card" content="summary_large_image">
    <title>METAL BRIDGES — Precision Metal Fabrication &amp; Modern Welding Solutions</title>
    <script>
        (function() {
            var t = localStorage.getItem('theme');
            if (t === 'light' || t === 'dark') {
                document.documentElement.setAttribute('data-theme', t);
            } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                document.documentElement.setAttribute('data-theme', 'light');
            }
        })();
    </script>
    <link rel="canonical" href="https://www.metalbridges.com">
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;family=Orbitron:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: { DEFAULT: 'var(--color-primary)', light: 'var(--color-primary-light)', dark: 'var(--color-primary-dark)' },
                        dark: { DEFAULT: 'var(--color-dark)', alt: 'var(--color-dark-alt)', surface: 'var(--color-dark-surface)', card: 'var(--color-dark-card)' },
                        steel: { DEFAULT: 'var(--color-steel)', light: 'var(--color-steel-light)' },
                        text: { DEFAULT: 'var(--color-text)', muted: 'var(--color-text-muted)' },
                        whatsapp: 'var(--color-whatsapp)',
                        border: 'var(--color-border)',
                        'border-light': 'var(--color-border-light)',
                    },
                    fontFamily: {
                        heading: ['Orbitron', 'sans-serif'],
                        body: ['Inter', 'sans-serif'],
                    },
                    maxWidth: { container: '1280px' },
                    borderRadius: { sm: '6px', md: '12px', lg: '20px', xl: '30px' },
                    boxShadow: { glow: '0 0 30px rgba(212, 168, 67, 0.15)' },
                }
            }
        }
    </script>
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "METAL BRIDGES",
        "description": "Premium metal fabrication and welding services",
        "founder": { "@type": "Person", "name": "Kofi Boansi", "jobTitle": "Modern Metal Designer" },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tantra Hill, Between GOIL Filling Station and Rockers",
            "addressLocality": "Accra", "addressCountry": "GH",
            "postalCode": "P.O. Box 1288, New-Achimota"
        },
        "telephone": "+233244044001",
        "areaServed": "Accra, Ghana",
        "serviceType": ["Metal Fabrication", "Welding Services", "Stainless Steel Works", "Security Doors", "Gates", "Burglar Proof Installation"]
    }
    </script>
</head>
<body class="font-body bg-dark text-text antialiased overflow-x-hidden transition-[background-color,color] duration-[0.4s]">`);

// Preloader
sections.push(`
<div id="preloader">
    <div class="text-center">
        <div class="steel-beam"></div>
        <div class="steel-beam"></div>
        <div class="steel-beam"></div>
        <p class="font-heading text-xl font-bold text-primary tracking-[4px] mt-5">METAL BRIDGES</p>
    </div>
</div>`);

// Nav
sections.push(`
<header id="navbar" class="navbar fixed top-0 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1256px] h-20 z-[1000] bg-[rgba(10,10,15,0.6)] rounded-b-[50px] border border-border border-t-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300">
    <div class="max-w-full mx-auto px-8 h-full flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-3 no-underline">
            <span class="text-[2rem] text-primary font-black leading-none">&#9646;</span>
            <div class="flex flex-col">
                <span class="font-heading text-lg font-extrabold text-white tracking-[2px] leading-tight">METAL BRIDGES</span>
                <span class="text-[0.65rem] text-primary tracking-[2px] uppercase font-medium">Precision Fabrication</span>
            </div>
        </a>
        <nav class="flex items-center gap-2 max-md:fixed max-md:top-0 max-md:-right-full max-md:w-[300px] max-md:h-screen max-md:bg-dark-alt max-md:flex-col max-md:p-[100px_30px_30px] max-md:gap-1 max-md:border-l max-md:border-border" id="navMenu">
            <a href="#home" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative active">Home</a>
            <a href="#about" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">About Us</a>
            <a href="#services" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Services</a>
            <a href="#projects" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Projects</a>
            <a href="video-gallery.html" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Video Gallery</a>
            <a href="#testimonials" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Testimonials</a>
            <a href="#contact" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Contact</a>
            <a href="#quote" class="px-6 py-2.5 text-[0.88rem] font-semibold text-dark bg-gradient-to-r from-primary to-primary-dark rounded-sm ml-2 max-md:ml-0 max-md:mt-3 max-md:text-center shadow-[0_2px_12px_rgba(212,168,67,0.3)] hover:from-primary-light hover:to-primary hover:-translate-y-0.5 transition-all duration-300">Request a Quote</a>
        </nav>
        <button class="flex items-center justify-center w-10 h-10 border border-border-light rounded-full bg-transparent cursor-pointer text-text-muted hover:text-primary hover:border-primary hover:bg-[rgba(212,168,67,0.08)] transition-all duration-300 shrink-0" id="themeToggle" aria-label="Toggle theme">
            <svg class="icon-moon w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            <svg class="icon-sun w-[18px] h-[18px] hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        </button>
        <button class="nav-toggle hidden max-md:flex flex-col gap-[5px] bg-none border-none cursor-pointer p-2" id="navToggle" aria-label="Toggle navigation">
            <span class="hamburger-line w-7 h-[2px] bg-white rounded-[2px] transition-all duration-300"></span>
            <span class="hamburger-line w-7 h-[2px] bg-white rounded-[2px] transition-all duration-300"></span>
            <span class="hamburger-line w-7 h-[2px] bg-white rounded-[2px] transition-all duration-300"></span>
        </button>
    </div>
</header>`);

// Hero
sections.push(`
<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&amp;h=1080&amp;fit=crop&amp;auto=format&amp;q=80')] bg-cover bg-center pb-[120px]">
    <div class="absolute inset-0 bg-gradient-to-br from-[rgba(10,10,15,0.88)] via-[rgba(26,26,46,0.82)] to-[rgba(13,17,23,0.9)] z-[1]"></div>
    <div class="absolute inset-0 z-[1]" style="background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 60px 60px;"></div>
    <div class="relative z-[2] text-center max-w-[900px] px-6 pt-[100px] max-md:pt-20">
        <p class="hero-badge inline-block font-heading text-[0.7rem] font-semibold tracking-[3px] uppercase text-primary px-5 py-2 border border-[rgba(212,168,67,0.3)] rounded-xl bg-[rgba(212,168,67,0.05)] mb-8 opacity-0">Modern Metal Designer — Accra, Ghana</p>
        <h1 class="hero-title font-heading text-[clamp(2.2rem,6vw,4rem)] font-black leading-[1.15] text-white mb-6">
            Building Strength in Steel,<br>
            <span class="text-primary relative">Crafting Excellence.</span>
        </h1>
        <p class="hero-subtitle text-[1.15rem] text-text-muted max-w-[650px] mx-auto mb-10 leading-relaxed opacity-0">Precision Metal Fabrication &amp; Modern Welding Solutions. From concept to completion, we deliver durable, innovative, and high-quality metal structures.</p>
        <div class="flex gap-4 justify-center flex-wrap max-sm:flex-col max-sm:items-center">
            <a href="#quote" class="opacity-0 inline-flex items-center gap-2.5 px-8 py-3.5 font-body text-[0.95rem] font-semibold rounded-sm bg-gradient-to-r from-primary to-primary-dark text-dark shadow-[0_4px_20px_rgba(212,168,67,0.3)] hover:from-primary-light hover:to-primary hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)] transition-all duration-300 no-underline whitespace-nowrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Request a Quote
            </a>
            <a href="tel:+233244044001" class="opacity-0 inline-flex items-center gap-2.5 px-8 py-3.5 font-body text-[0.95rem] font-semibold rounded-sm bg-transparent text-white border-2 border-border-light hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300 no-underline whitespace-nowrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Call Now
            </a>
        </div>
    </div>
    <div class="absolute bottom-[140px] left-1/2 -translate-x-1/2 z-[2] text-center opacity-0">
        <span class="block text-[0.7rem] tracking-[2px] uppercase text-text-muted mb-2">Scroll Down</span>
        <div class="scroll-arrow w-5 h-[30px] border-2 border-border-light rounded-[10px] mx-auto relative"></div>
    </div>
    <div class="absolute bottom-0 left-0 w-full z-[2] flex justify-center items-center px-6 py-[30px] bg-gradient-to-t from-[rgba(10,10,15,0.95)] to-[rgba(10,10,15,0.7)] backdrop-blur border-t border-border flex-wrap">
        <div class="text-center px-10 max-lg:px-6 opacity-0">
            <span class="stat-number font-heading text-[2.5rem] max-lg:text-[2rem] font-black text-primary leading-none" data-target="150">0</span>
            <span class="font-heading text-[1.5rem] text-primary">+</span>
            <span class="block text-[0.8rem] text-text-muted uppercase tracking-[1px] mt-1.5">Projects Completed</span>
        </div>
        <div class="w-px h-10 bg-border max-md:hidden"></div>
        <div class="text-center px-10 max-lg:px-6 opacity-0">
            <span class="stat-number font-heading text-[2.5rem] max-lg:text-[2rem] font-black text-primary leading-none" data-target="12">0</span>
            <span class="font-heading text-[1.5rem] text-primary">+</span>
            <span class="block text-[0.8rem] text-text-muted uppercase tracking-[1px] mt-1.5">Years Experience</span>
        </div>
        <div class="w-px h-10 bg-border max-md:hidden"></div>
        <div class="text-center px-10 max-lg:px-6 opacity-0">
            <span class="stat-number font-heading text-[2.5rem] max-lg:text-[2rem] font-black text-primary leading-none" data-target="200">0</span>
            <span class="font-heading text-[1.5rem] text-primary">+</span>
            <span class="block text-[0.8rem] text-text-muted uppercase tracking-[1px] mt-1.5">Happy Clients</span>
        </div>
        <div class="w-px h-10 bg-border max-md:hidden"></div>
        <div class="text-center px-10 max-lg:px-6 opacity-0">
            <span class="stat-number font-heading text-[2.5rem] max-lg:text-[2rem] font-black text-primary leading-none" data-target="25">0</span>
            <span class="font-heading text-[1.5rem] text-primary">+</span>
            <span class="block text-[0.8rem] text-text-muted uppercase tracking-[1px] mt-1.5">Skilled Professionals</span>
        </div>
    </div>
</section>`);

// About
sections.push(`
<section id="about" class="py-24 relative bg-dark">
    <div class="max-w-container mx-auto px-6">
        <div class="text-center max-w-[700px] mx-auto mb-14">
            <span class="inline-block font-heading text-[0.75rem] font-bold tracking-[3px] uppercase text-primary mb-4 px-4 py-1.5 border border-[rgba(212,168,67,0.3)] rounded-xl bg-[rgba(212,168,67,0.05)]">About Us</span>
            <h2 class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-white mb-5">Precision, Innovation &amp;<br><span class="text-primary">Uncompromising Quality</span></h2>
            <p class="text-[1.05rem] text-text-muted leading-relaxed">METAL BRIDGES is a professional welding and metal fabrication company dedicated to producing durable metal structures across Ghana.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-[60px] items-center mb-20">
            <div>
                <h3 class="font-heading text-[1.5rem] font-bold text-white mb-5">Who We Are</h3>
                <p class="text-text-muted mb-4 leading-relaxed">Founded with a vision to revolutionize metal fabrication in Ghana, METAL BRIDGES has grown into one of the most trusted names in the industry.</p>
                <p class="text-text-muted mb-4 leading-relaxed">Our state-of-the-art workshop in Tantra Hill, Accra, is equipped with the latest tools and machinery.</p>
                <div class="grid grid-cols-2 gap-3 mt-6">
                    <div class="flex items-center gap-2.5 text-[0.95rem] font-medium text-text"><span class="w-7 h-7 flex items-center justify-center bg-[rgba(212,168,67,0.1)] text-primary rounded-full text-[0.8rem] font-bold shrink-0">&#10003;</span><span>Premium Materials</span></div>
                    <div class="flex items-center gap-2.5 text-[0.95rem] font-medium text-text"><span class="w-7 h-7 flex items-center justify-center bg-[rgba(212,168,67,0.1)] text-primary rounded-full text-[0.8rem] font-bold shrink-0">&#10003;</span><span>Expert Craftsmanship</span></div>
                    <div class="flex items-center gap-2.5 text-[0.95rem] font-medium text-text"><span class="w-7 h-7 flex items-center justify-center bg-[rgba(212,168,67,0.1)] text-primary rounded-full text-[0.8rem] font-bold shrink-0">&#10003;</span><span>Timely Delivery</span></div>
                    <div class="flex items-center gap-2.5 text-[0.95rem] font-medium text-text"><span class="w-7 h-7 flex items-center justify-center bg-[rgba(212,168,67,0.1)] text-primary rounded-full text-[0.8rem] font-bold shrink-0">&#10003;</span><span>Competitive Pricing</span></div>
                </div>
            </div>
            <div class="relative">
                <div class="rounded-md overflow-hidden border border-border">
                    <img src="https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=800&amp;h=600&amp;fit=crop&amp;auto=format&amp;q=80" alt="METAL BRIDGES Workshop" loading="lazy" class="w-full h-full object-cover transition-transform duration-[0.6s] hover:scale-105">
                </div>
                <div class="absolute -bottom-5 -right-5 w-[120px] h-[120px] bg-gradient-to-br from-primary to-primary-dark rounded-md flex flex-col items-center justify-center shadow-lg">
                    <span class="font-heading text-[2rem] font-black text-dark leading-none">12+</span>
                    <span class="text-[0.7rem] font-semibold text-dark text-center leading-tight opacity-80">Years of<br>Excellence</span>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-[50px] items-center p-12 lg:p-[50px] bg-dark-card border border-border rounded-lg">
            <div class="rounded-md overflow-hidden border-2 border-primary">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;h=530&amp;fit=crop&amp;auto=format&amp;q=80" alt="Kofi Boansi" loading="lazy" class="w-full h-full object-cover">
            </div>
            <div class="max-lg:text-center">
                <span class="inline-block font-heading text-[0.75rem] font-bold tracking-[3px] uppercase text-primary mb-4 px-4 py-1.5 border border-[rgba(212,168,67,0.3)] rounded-xl bg-[rgba(212,168,67,0.05)]">Leadership</span>
                <h3 class="font-heading text-[1.8rem] font-extrabold text-white mt-2">Kofi Boansi</h3>
                <p class="text-primary font-semibold mb-4">Modern Metal Designer</p>
                <p class="text-text-muted mb-3 leading-relaxed">With a deep passion for craftsmanship and innovation, Kofi Boansi leads METAL BRIDGES with an unwavering commitment to precision, quality, and customer satisfaction.</p>
                <p class="text-text-muted leading-relaxed">Under his leadership, METAL BRIDGES has completed over 150 projects across residential, commercial, and industrial sectors.</p>
            </div>
        </div>
    </div>
</section>`);

// Services header
sections.push(`
<section id="services" class="py-24 relative bg-dark-surface">
    <div class="max-w-container mx-auto px-6">
        <div class="text-center max-w-[700px] mx-auto mb-14">
            <span class="inline-block font-heading text-[0.75rem] font-bold tracking-[3px] uppercase text-primary mb-4 px-4 py-1.5 border border-[rgba(212,168,67,0.3)] rounded-xl bg-[rgba(212,168,67,0.05)]">Our Services</span>
            <h2 class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-white mb-5">Comprehensive Metal<br><span class="text-primary">Fabrication Solutions</span></h2>
            <p class="text-[1.05rem] text-text-muted leading-relaxed">From concept to completion, we offer a full range of metal fabrication and welding services tailored to your needs.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">`);

const services = [
  { icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>', name: 'Metal Fabrication', desc: 'Custom metal structures designed and built to your exact specifications using premium materials and modern techniques.' },
  { icon: '<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>', name: 'Welding Services', desc: 'Professional welding services including MIG, TIG, and arc welding for all types of metal projects and repairs.' },
  { icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>', name: 'Stainless Steel Works', desc: 'Elegant stainless steel installations for railings, countertops, and architectural features with lasting finish.' },
  { icon: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>', name: 'Security Doors', desc: 'Heavy-duty security doors combining robust protection with modern aesthetics for residential and commercial use.' },
  { icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>', name: 'Gates', desc: 'Beautifully crafted gates in modern and classic designs - sliding, swing, and automatic options available.' },
  { icon: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect>', name: 'Burglar Proof Installation', desc: 'Strong and discreet burglar proof windows and grills that provide security without compromising aesthetics.' },
  { icon: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>', name: 'Balustrades & Handrails', desc: 'Stylish and safe balustrades and handrails for staircases, balconies, and terraces in various designs.' },
  { icon: '<path d="M2 20h20"></path><path d="M5 20V8l7-5 7 5v12"></path><path d="M9 20v-6h6v6"></path>', name: 'Roofing Structures', desc: 'Durable steel roofing structures and frames engineered for strength, weather resistance, and longevity.' },
  { icon: '<path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>', name: 'Metal Canopies', desc: 'Custom-designed canopies for entrances, walkways, and outdoor spaces with modern styling.' },
  { icon: '<rect x="1" y="6" width="22" height="12" rx="2" ry="2"></rect><path d="M1 10h22"></path><path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"></path>', name: 'Carports', desc: 'Weatherproof carport structures designed to protect your vehicles with style and durability.' },
  { icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>', name: 'Staircase Fabrication', desc: 'Modern and classic staircase designs in steel, including spiral, straight, and L-shaped configurations.' },
  { icon: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>', name: 'Window Protectors', desc: 'Decorative and functional window protectors that enhance security while maintaining visual appeal.' },
  { icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>', name: 'Warehouse Structures', desc: 'Industrial-grade warehouse frames, shelving, and structural components built for heavy-duty use.' },
  { icon: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>', name: 'Industrial Fabrication', desc: 'Large-scale industrial metal fabrication for factories, plants, and commercial infrastructure projects.' },
  { icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>', name: 'Decorative Metal Designs', desc: 'Artistic and decorative metalwork including wall art, room dividers, and ornamental features.' },
  { icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>', name: 'Metal Repairs & Maintenance', desc: 'Expert repair and maintenance services to restore and extend the life of your metal structures.' },
  { icon: '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>', name: 'Custom Metal Projects', desc: 'Bespoke metal solutions crafted to your unique vision - if you can imagine it, we can build it.' },
];

services.forEach(svc => {
  sections.push(`
            <div class="service-card relative bg-dark-card border border-border rounded-md p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(212,168,67,0.2)] hover:shadow-glow overflow-hidden">
                <div class="w-16 h-16 flex items-center justify-center bg-[rgba(212,168,67,0.08)] border border-[rgba(212,168,67,0.15)] rounded-md text-primary mb-5 transition-all duration-300">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${svc.icon}</svg>
                </div>
                <h3 class="font-heading text-base font-bold text-white mb-3 tracking-[0.5px]">${svc.name}</h3>
                <p class="text-[0.9rem] text-text-muted leading-relaxed mb-4">${svc.desc}</p>
                <a href="#quote" class="text-[0.85rem] font-semibold text-primary inline-flex items-center gap-1.5 hover:gap-[10px] transition-all">Learn More &rarr;</a>
            </div>`);
});
sections.push(`
        </div>
    </div>
</section>`);

// Projects
sections.push(`
<section id="projects" class="py-24 relative bg-dark">
    <div class="max-w-container mx-auto px-6">
        <div class="text-center max-w-[700px] mx-auto mb-14">
            <span class="inline-block font-heading text-[0.75rem] font-bold tracking-[3px] uppercase text-primary mb-4 px-4 py-1.5 border border-[rgba(212,168,67,0.3)] rounded-xl bg-[rgba(212,168,67,0.05)]">Our Projects</span>
            <h2 class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-white mb-5">Featured<br><span class="text-primary">Project Portfolio</span></h2>
            <p class="text-[1.05rem] text-text-muted leading-relaxed">Explore our completed projects showcasing the breadth and quality of our metal fabrication expertise.</p>
        </div>
        <div class="flex justify-center gap-2 mb-10 flex-wrap">
            <button class="filter-btn px-5 py-2 font-body text-[0.85rem] font-medium text-text-muted bg-transparent border border-border rounded-xl cursor-pointer transition-all duration-300 hover:text-primary hover:border-primary" data-filter="all">All</button>
            <button class="filter-btn px-5 py-2 font-body text-[0.85rem] font-medium text-text-muted bg-transparent border border-border rounded-xl cursor-pointer transition-all duration-300 hover:text-primary hover:border-primary" data-filter="gates">Gates</button>
            <button class="filter-btn px-5 py-2 font-body text-[0.85rem] font-medium text-text-muted bg-transparent border border-border rounded-xl cursor-pointer transition-all duration-300 hover:text-primary hover:border-primary" data-filter="doors">Doors</button>
            <button class="filter-btn px-5 py-2 font-body text-[0.85rem] font-medium text-text-muted bg-transparent border border-border rounded-xl cursor-pointer transition-all duration-300 hover:text-primary hover:border-primary" data-filter="staircases">Staircases</button>
            <button class="filter-btn px-5 py-2 font-body text-[0.85rem] font-medium text-text-muted bg-transparent border border-border rounded-xl cursor-pointer transition-all duration-300 hover:text-primary hover:border-primary" data-filter="roofing">Roofing</button>
            <button class="filter-btn px-5 py-2 font-body text-[0.85rem] font-medium text-text-muted bg-transparent border border-border rounded-xl cursor-pointer transition-all duration-300 hover:text-primary hover:border-primary" data-filter="railings">Railings</button>
            <button class="filter-btn px-5 py-2 font-body text-[0.85rem] font-medium text-text-muted bg-transparent border border-border rounded-xl cursor-pointer transition-all duration-300 hover:text-primary hover:border-primary" data-filter="industrial">Industrial</button>
            <button class="filter-btn px-5 py-2 font-body text-[0.85rem] font-medium text-text-muted bg-transparent border border-border rounded-xl cursor-pointer transition-all duration-300 hover:text-primary hover:border-primary" data-filter="custom">Custom</button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div class="project-card relative rounded-md overflow-hidden cursor-pointer border border-border transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.3)] hover:shadow-glow" data-category="gates">
                <div class="overflow-hidden aspect-[4/3]"><img src="https://images.unsplash.com/photo-1621905251918-48018bf4b882?w=600&amp;h=450&amp;fit=crop&amp;auto=format&amp;q=80" alt="Modern Sliding Gate" loading="lazy" class="w-full h-full object-cover transition-transform duration-[0.6s] hover:scale-105"></div>
                <div class="project-overlay absolute bottom-0 left-0 w-full p-[30px_20px_20px] opacity-0 translate-y-5 transition-all duration-300">
                    <span class="font-heading text-[0.65rem] font-semibold tracking-[2px] uppercase text-primary block mb-1.5">Gates</span>
                    <h3 class="font-heading text-base font-bold text-white mb-1">Modern Sliding Gate</h3>
                    <p class="text-[0.8rem] text-text-muted">Elegant steel sliding gate with geometric patterns</p>
                </div>
            </div>
            <div class="project-card relative rounded-md overflow-hidden cursor-pointer border border-border transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.3)] hover:shadow-glow" data-category="doors">
                <div class="overflow-hidden aspect-[4/3]"><img src="https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=600&amp;h=450&amp;fit=crop&amp;auto=format&amp;q=80" alt="Security Door" loading="lazy" class="w-full h-full object-cover transition-transform duration-[0.6s] hover:scale-105"></div>
                <div class="project-overlay absolute bottom-0 left-0 w-full p-[30px_20px_20px] opacity-0 translate-y-5 transition-all duration-300">
                    <span class="font-heading text-[0.65rem] font-semibold tracking-[2px] uppercase text-primary block mb-1.5">Doors</span>
                    <h3 class="font-heading text-base font-bold text-white mb-1">Heavy-Duty Security Door</h3>
                    <p class="text-[0.8rem] text-text-muted">Reinforced steel security door with modern finish</p>
                </div>
            </div>
            <div class="project-card relative rounded-md overflow-hidden cursor-pointer border border-border transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.3)] hover:shadow-glow" data-category="staircases">
                <div class="overflow-hidden aspect-[4/3]"><img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&amp;h=450&amp;fit=crop&amp;auto=format&amp;q=80" alt="Spiral Staircase" loading="lazy" class="w-full h-full object-cover transition-transform duration-[0.6s] hover:scale-105"></div>
                <div class="project-overlay absolute bottom-0 left-0 w-full p-[30px_20px_20px] opacity-0 translate-y-5 transition-all duration-300">
                    <span class="font-heading text-[0.65rem] font-semibold tracking-[2px] uppercase text-primary block mb-1.5">Staircases</span>
                    <h3 class="font-heading text-base font-bold text-white mb-1">Custom Spiral Staircase</h3>
                    <p class="text-[0.8rem] text-text-muted">Space-saving spiral staircase with handrails</p>
                </div>
            </div>
            <div class="project-card relative rounded-md overflow-hidden cursor-pointer border border-border transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.3)] hover:shadow-glow" data-category="roofing">
                <div class="overflow-hidden aspect-[4/3]"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&amp;h=450&amp;fit=crop&amp;auto=format&amp;q=80" alt="Industrial Roofing" loading="lazy" class="w-full h-full object-cover transition-transform duration-[0.6s] hover:scale-105"></div>
                <div class="project-overlay absolute bottom-0 left-0 w-full p-[30px_20px_20px] opacity-0 translate-y-5 transition-all duration-300">
                    <span class="font-heading text-[0.65rem] font-semibold tracking-[2px] uppercase text-primary block mb-1.5">Roofing</span>
                    <h3 class="font-heading text-base font-bold text-white mb-1">Industrial Roofing Structure</h3>
                    <p class="text-[0.8rem] text-text-muted">Large-span steel roofing for warehouse facility</p>
                </div>
            </div>
            <div class="project-card relative rounded-md overflow-hidden cursor-pointer border border-border transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.3)] hover:shadow-glow" data-category="railings">
                <div class="overflow-hidden aspect-[4/3]"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&amp;h=450&amp;fit=crop&amp;auto=format&amp;q=80" alt="Balcony Railings" loading="lazy" class="w-full h-full object-cover transition-transform duration-[0.6s] hover:scale-105"></div>
                <div class="project-overlay absolute bottom-0 left-0 w-full p-[30px_20px_20px] opacity-0 translate-y-5 transition-all duration-300">
                    <span class="font-heading text-[0.65rem] font-semibold tracking-[2px] uppercase text-primary block mb-1.5">Railings</span>
                    <h3 class="font-heading text-base font-bold text-white mb-1">Stainless Steel Balcony Railings</h3>
                    <p class="text-[0.8rem] text-text-muted">Premium stainless steel balustrade system</p>
                </div>
            </div>
            <div class="project-card relative rounded-md overflow-hidden cursor-pointer border border-border transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.3)] hover:shadow-glow" data-category="industrial">
                <div class="overflow-hidden aspect-[4/3]"><img src="https://images.unsplash.com/photo-1535813547-9b5c4c3f3470?w=600&amp;h=450&amp;fit=crop&amp;auto=format&amp;q=80" alt="Steel Framework" loading="lazy" class="w-full h-full object-cover transition-transform duration-[0.6s] hover:scale-105"></div>
                <div class="project-overlay absolute bottom-0 left-0 w-full p-[30px_20px_20px] opacity-0 translate-y-5 transition-all duration-300">
                    <span class="font-heading text-[0.65rem] font-semibold tracking-[2px] uppercase text-primary block mb-1.5">Industrial</span>
                    <h3 class="font-heading text-base font-bold text-white mb-1">Commercial Steel Framework</h3>
                    <p class="text-[0.8rem] text-text-muted">Heavy-duty structural steel for commercial building</p>
                </div>
            </div>
            <div class="project-card relative rounded-md overflow-hidden cursor-pointer border border-border transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.3)] hover:shadow-glow" data-category="custom">
                <div class="overflow-hidden aspect-[4/3]"><img src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=600&amp;h=450&amp;fit=crop&amp;auto=format&amp;q=80" alt="Metal Partition" loading="lazy" class="w-full h-full object-cover transition-transform duration-[0.6s] hover:scale-105"></div>
                <div class="project-overlay absolute bottom-0 left-0 w-full p-[30px_20px_20px] opacity-0 translate-y-5 transition-all duration-300">
                    <span class="font-heading text-[0.65rem] font-semibold tracking-[2px] uppercase text-primary block mb-1.5">Custom</span>
                    <h3 class="font-heading text-base font-bold text-white mb-1">Decorative Metal Partition</h3>
                    <p class="text-[0.8rem] text-text-muted">Artistic room divider with intricate patterns</p>
                </div>
            </div>
            <div class="project-card relative rounded-md overflow-hidden cursor-pointer border border-border transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.3)] hover:shadow-glow" data-category="gates">
                <div class="overflow-hidden aspect-[4/3]"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&amp;h=450&amp;fit=crop&amp;auto=format&amp;q=80" alt="Swing Gate" loading="lazy" class="w-full h-full object-cover transition-transform duration-[0.6s] hover:scale-105"></div>
                <div class="project-overlay absolute bottom-0 left-0 w-full p-[30px_20px_20px] opacity-0 translate-y-5 transition-all duration-300">
                    <span class="font-heading text-[0.65rem] font-semibold tracking-[2px] uppercase text-primary block mb-1.5">Gates</span>
                    <h3 class="font-heading text-base font-bold text-white mb-1">Ornamental Double Swing Gate</h3>
                    <p class="text-[0.8rem] text-text-muted">Classic double-swing gate with ornamental details</p>
                </div>
            </div>
        </div>
        <div class="text-center mt-12">
            <a href="projects.html" class="inline-flex items-center gap-2.5 px-8 py-3.5 font-body text-[0.95rem] font-semibold rounded-sm bg-gradient-to-r from-primary to-primary-dark text-dark shadow-[0_4px_20px_rgba(212,168,67,0.3)] hover:from-primary-light hover:to-primary hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)] transition-all duration-300 no-underline whitespace-nowrap">View All Projects</a>
        </div>
    </div>
</section>`);

// Why Us
sections.push(`
<section class="py-24 relative bg-dark-surface">
    <div class="max-w-container mx-auto px-6">
        <div class="text-center max-w-[700px] mx-auto mb-14">
            <span class="inline-block font-heading text-[0.75rem] font-bold tracking-[3px] uppercase text-primary mb-4 px-4 py-1.5 border border-[rgba(212,168,67,0.3)] rounded-xl bg-[rgba(212,168,67,0.05)]">Why Choose Us</span>
            <h2 class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-white mb-5">The METAL BRIDGES<br><span class="text-primary">Advantage</span></h2>
            <p class="text-[1.05rem] text-text-muted leading-relaxed">We don't just build metal structures - we craft lasting solutions backed by expertise, quality, and dedication.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div class="bg-dark-card border border-border rounded-md p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.2)] hover:shadow-glow">
                <div class="w-[60px] h-[60px] flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-md text-primary mx-auto mb-4">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h3 class="font-heading text-[0.9rem] font-bold text-white mb-2.5 tracking-[0.5px]">Quality Craftsmanship</h3>
                <p class="text-[0.88rem] text-text-muted leading-relaxed">Every project is executed with meticulous attention to detail and the highest standards of workmanship.</p>
            </div>
            <div class="bg-dark-card border border-border rounded-md p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.2)] hover:shadow-glow">
                <div class="w-[60px] h-[60px] flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-md text-primary mx-auto mb-4">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                </div>
                <h3 class="font-heading text-[0.9rem] font-bold text-white mb-2.5 tracking-[0.5px]">Precision Engineering</h3>
                <p class="text-[0.88rem] text-text-muted leading-relaxed">Using modern tools and techniques to ensure exact measurements and perfect fit every time.</p>
            </div>
            <div class="bg-dark-card border border-border rounded-md p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.2)] hover:shadow-glow">
                <div class="w-[60px] h-[60px] flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-md text-primary mx-auto mb-4">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </div>
                <h3 class="font-heading text-[0.9rem] font-bold text-white mb-2.5 tracking-[0.5px]">Modern Equipment</h3>
                <p class="text-[0.88rem] text-text-muted leading-relaxed">State-of-the-art machinery and tools for superior results and efficient project completion.</p>
            </div>
            <div class="bg-dark-card border border-border rounded-md p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.2)] hover:shadow-glow">
                <div class="w-[60px] h-[60px] flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-md text-primary mx-auto mb-4">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3 class="font-heading text-[0.9rem] font-bold text-white mb-2.5 tracking-[0.5px]">Reliable Delivery</h3>
                <p class="text-[0.88rem] text-text-muted leading-relaxed">We respect your timelines and deliver projects on schedule without compromising quality.</p>
            </div>
            <div class="bg-dark-card border border-border rounded-md p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.2)] hover:shadow-glow">
                <div class="w-[60px] h-[60px] flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-md text-primary mx-auto mb-4">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 class="font-heading text-[0.9rem] font-bold text-white mb-2.5 tracking-[0.5px]">Experienced Team</h3>
                <p class="text-[0.88rem] text-text-muted leading-relaxed">Skilled professionals with years of hands-on experience in diverse metal fabrication projects.</p>
            </div>
            <div class="bg-dark-card border border-border rounded-md p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.2)] hover:shadow-glow">
                <div class="w-[60px] h-[60px] flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-md text-primary mx-auto mb-4">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <h3 class="font-heading text-[0.9rem] font-bold text-white mb-2.5 tracking-[0.5px]">Affordable Pricing</h3>
                <p class="text-[0.88rem] text-text-muted leading-relaxed">Competitive rates without hidden costs - exceptional value for premium metal fabrication.</p>
            </div>
            <div class="bg-dark-card border border-border rounded-md p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.2)] hover:shadow-glow">
                <div class="w-[60px] h-[60px] flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-md text-primary mx-auto mb-4">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h3 class="font-heading text-[0.9rem] font-bold text-white mb-2.5 tracking-[0.5px]">Durable Materials</h3>
                <p class="text-[0.88rem] text-text-muted leading-relaxed">Only premium-grade steel and metals are used to ensure lasting strength and performance.</p>
            </div>
            <div class="bg-dark-card border border-border rounded-md p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.2)] hover:shadow-glow">
                <div class="w-[60px] h-[60px] flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-md text-primary mx-auto mb-4">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </div>
                <h3 class="font-heading text-[0.9rem] font-bold text-white mb-2.5 tracking-[0.5px]">Customer Satisfaction</h3>
                <p class="text-[0.88rem] text-text-muted leading-relaxed">Your satisfaction is our priority - we work closely with you to exceed expectations.</p>
            </div>
        </div>
    </div>
</section>`);

// Testimonials (simplified - 4 cards with slider)
const testimonials = [
  { text: '"METAL BRIDGES delivered an exceptional gate for our home. The craftsmanship is outstanding and the attention to detail is remarkable. Kofi and his team are true professionals."', name: 'Kwame Mensah', title: 'Homeowner, East Legon' },
  { text: '"We hired METAL BRIDGES for our warehouse structural work and they exceeded our expectations. Durable, well-engineered, and delivered on time. Highly recommended!"', name: 'Ama Darko', title: 'Factory Manager, Tema' },
  { text: '"The stainless steel railings they installed in our office building are simply beautiful. Modern design, perfect finish, and very professional installation team."', name: 'Yaw Boateng', title: 'Business Owner, Osu' },
  { text: '"From the initial consultation to the final installation, METAL BRIDGES was exceptional. Our security doors are top-notch quality and the pricing was very fair."', name: 'Abena Osei', title: 'Resident, Cantonments' },
];

sections.push(`
<section id="testimonials" class="py-24 relative bg-dark">
    <div class="max-w-container mx-auto px-6">
        <div class="text-center max-w-[700px] mx-auto mb-14">
            <span class="inline-block font-heading text-[0.75rem] font-bold tracking-[3px] uppercase text-primary mb-4 px-4 py-1.5 border border-[rgba(212,168,67,0.3)] rounded-xl bg-[rgba(212,168,67,0.05)]">Testimonials</span>
            <h2 class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-white mb-5">What Our Clients<br><span class="text-primary">Say About Us</span></h2>
        </div>
        <div class="max-w-[900px] mx-auto overflow-hidden relative">
            <div class="testimonial-track flex transition-transform duration-[0.5s]" id="testimonialTrack">`);

testimonials.forEach(t => {
  sections.push(`
                <div class="testimonial-card min-w-full p-10 bg-dark-card border border-border rounded-lg text-center">
                    <div class="text-primary text-[1.2rem] tracking-[4px] mb-5">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p class="text-[1.1rem] text-text leading-relaxed mb-6 italic">${t.text}</p>
                    <div class="flex items-center gap-3.5 justify-center">
                        <div class="w-[50px] h-[50px] rounded-full bg-[rgba(212,168,67,0.1)] flex items-center justify-center text-primary border-2 border-[rgba(212,168,67,0.3)]">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <div class="text-left">
                            <h4 class="text-base font-semibold text-white">${t.name}</h4>
                            <span class="text-[0.8rem] text-text-muted">${t.title}</span>
                        </div>
                    </div>
                </div>`);
});

sections.push(`
            </div>
            <div class="flex items-center justify-center gap-4 mt-8">
                <button class="w-11 h-11 flex items-center justify-center bg-dark-card border border-border rounded-full text-text cursor-pointer transition-all duration-300 hover:border-primary hover:text-primary" id="testimonialPrev" aria-label="Previous">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <div class="flex gap-2" id="testimonialDots"></div>
                <button class="w-11 h-11 flex items-center justify-center bg-dark-card border border-border rounded-full text-text cursor-pointer transition-all duration-300 hover:border-primary hover:text-primary" id="testimonialNext" aria-label="Next">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
        </div>
    </div>
</section>`);

// Quote form
sections.push(`
<section id="quote" class="py-24 relative bg-dark-surface">
    <div class="max-w-container mx-auto px-6">
        <div class="text-center max-w-[700px] mx-auto mb-14">
            <span class="inline-block font-heading text-[0.75rem] font-bold tracking-[3px] uppercase text-primary mb-4 px-4 py-1.5 border border-[rgba(212,168,67,0.3)] rounded-xl bg-[rgba(212,168,67,0.05)]">Get Started</span>
            <h2 class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-white mb-5">Request a<br><span class="text-primary">Free Quote</span></h2>
            <p class="text-[1.05rem] text-text-muted leading-relaxed">Tell us about your project and we'll provide a detailed quotation within 24 hours.</p>
        </div>
        <form class="max-w-[900px] mx-auto bg-dark-card border border-border rounded-lg p-10 max-sm:p-6" id="quoteForm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                    <label for="fullName" class="text-[0.88rem] font-semibold text-text">Full Name *</label>
                    <input type="text" id="fullName" name="fullName" required placeholder="Enter your full name" class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)] placeholder:text-steel-light">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="phone" class="text-[0.88rem] font-semibold text-text">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required placeholder="0244-044001" class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)] placeholder:text-steel-light">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="email" class="text-[0.88rem] font-semibold text-text">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="your@email.com" class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)] placeholder:text-steel-light">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="location" class="text-[0.88rem] font-semibold text-text">Project Location *</label>
                    <input type="text" id="location" name="location" required placeholder="e.g. East Legon, Accra" class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)] placeholder:text-steel-light">
                </div>
                <div class="flex flex-col gap-2">
                    <label for="service" class="text-[0.88rem] font-semibold text-text">Type of Service *</label>
                    <select id="service" name="service" required class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)] cursor-pointer appearance-none" style="background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23a0aec0%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22></polyline></svg>');background-repeat:no-repeat;background-position:right 16px center;padding-right:40px">
                        <option value="">Select a service</option>
                        <option value="metal-fabrication">Metal Fabrication</option>
                        <option value="welding">Welding Services</option>
                        <option value="stainless-steel">Stainless Steel Works</option>
                        <option value="security-doors">Security Doors</option>
                        <option value="gates">Gates</option>
                        <option value="burglar-proof">Burglar Proof Installation</option>
                        <option value="balustrades">Balustrades &amp; Handrails</option>
                        <option value="roofing">Roofing Structures</option>
                        <option value="canopies">Metal Canopies</option>
                        <option value="carports">Carports</option>
                        <option value="staircases">Staircase Fabrication</option>
                        <option value="window-protectors">Window Protectors</option>
                        <option value="warehouse">Warehouse Structures</option>
                        <option value="industrial">Industrial Fabrication</option>
                        <option value="decorative">Decorative Metal Designs</option>
                        <option value="repairs">Metal Repairs &amp; Maintenance</option>
                        <option value="custom">Custom Metal Projects</option>
                    </select>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="budget" class="text-[0.88rem] font-semibold text-text">Estimated Budget (GHS)</label>
                    <select id="budget" name="budget" class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)] cursor-pointer appearance-none" style="background-image:url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23a0aec0%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22></polyline></svg>');background-repeat:no-repeat;background-position:right 16px center;padding-right:40px">
                        <option value="">Select budget range</option>
                        <option value="under-5000">Under GHS 5,000</option>
                        <option value="5000-10000">GHS 5,000 - 10,000</option>
                        <option value="10000-25000">GHS 10,000 - 25,000</option>
                        <option value="25000-50000">GHS 25,000 - 50,000</option>
                        <option value="50000-100000">GHS 50,000 - 100,000</option>
                        <option value="over-100000">Over GHS 100,000</option>
                    </select>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="completionDate" class="text-[0.88rem] font-semibold text-text">Preferred Completion Date</label>
                    <input type="date" id="completionDate" name="completionDate" class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)]">
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-[0.88rem] font-semibold text-text">Upload Photos</label>
                    <div class="file-upload">
                        <input type="file" id="photos" name="photos" multiple accept="image/*" class="file-input">
                        <div class="flex flex-col items-center gap-2 text-text-muted">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-primary opacity-60"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                            <span class="text-[0.9rem] font-medium">Drag &amp; drop or click to upload</span>
                            <small class="text-[0.75rem] text-steel-light">JPG, PNG, PDF (max 5MB each)</small>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-2 md:col-span-2">
                    <label for="description" class="text-[0.88rem] font-semibold text-text">Project Description *</label>
                    <textarea id="description" name="description" rows="5" required placeholder="Describe your project in detail" class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)] placeholder:text-steel-light resize-y"></textarea>
                </div>
            </div>
            <div class="text-center mt-8">
                <button type="submit" class="inline-flex items-center gap-2.5 px-10 py-[18px] font-body text-[1.05rem] font-semibold rounded-sm bg-gradient-to-r from-primary to-primary-dark text-dark shadow-[0_4px_20px_rgba(212,168,67,0.3)] hover:from-primary-light hover:to-primary hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)] transition-all duration-300 cursor-pointer border-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    Submit Quote Request
                </button>
            </div>
        </form>
    </div>
</section>`);

// Contact + Footer + Scripts
sections.push(`
<section id="contact" class="py-24 relative bg-dark">
    <div class="max-w-container mx-auto px-6">
        <div class="text-center max-w-[700px] mx-auto mb-14">
            <span class="inline-block font-heading text-[0.75rem] font-bold tracking-[3px] uppercase text-primary mb-4 px-4 py-1.5 border border-[rgba(212,168,67,0.3)] rounded-xl bg-[rgba(212,168,67,0.05)]">Contact Us</span>
            <h2 class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-white mb-5">Get in Touch<br><span class="text-primary">With METAL BRIDGES</span></h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div class="flex flex-col gap-4">
                <div class="flex gap-4 p-5 bg-dark-card border border-border rounded-md transition-all duration-300 hover:border-[rgba(212,168,67,0.2)]">
                    <div class="w-12 h-12 flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-sm text-primary shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <div>
                        <h4 class="text-[0.85rem] font-semibold text-white mb-1">Business Name</h4>
                        <p class="text-[0.95rem] text-text font-medium">METAL BRIDGES</p>
                        <p class="text-[0.85rem] text-text-muted">CEO: Kofi Boansi</p>
                        <p class="text-[0.85rem] text-text-muted">Modern Metal Designer</p>
                    </div>
                </div>
                <div class="flex gap-4 p-5 bg-dark-card border border-border rounded-md transition-all duration-300 hover:border-[rgba(212,168,67,0.2)]">
                    <div class="w-12 h-12 flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-sm text-primary shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                        <h4 class="text-[0.85rem] font-semibold text-white mb-1">Phone</h4>
                        <p class="text-[0.95rem] text-text font-medium"><a href="tel:+233244044001" class="text-text hover:text-primary transition-all">0244-044001</a></p>
                    </div>
                </div>
                <div class="flex gap-4 p-5 bg-dark-card border border-border rounded-md transition-all duration-300 hover:border-[rgba(212,168,67,0.2)]">
                    <div class="w-12 h-12 flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-sm text-primary shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <div>
                        <h4 class="text-[0.85rem] font-semibold text-white mb-1">Postal Address</h4>
                        <p class="text-[0.95rem] text-text font-medium">P.O. Box 1288</p>
                        <p class="text-[0.85rem] text-text-muted">New-Achimota, Accra</p>
                    </div>
                </div>
                <div class="flex gap-4 p-5 bg-dark-card border border-border rounded-md transition-all duration-300 hover:border-[rgba(212,168,67,0.2)]">
                    <div class="w-12 h-12 flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-sm text-primary shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    </div>
                    <div>
                        <h4 class="text-[0.85rem] font-semibold text-white mb-1">Workshop</h4>
                        <p class="text-[0.95rem] text-text font-medium">Tantra Hill</p>
                        <p class="text-[0.85rem] text-text-muted">Between GOIL Filling Station and Rockers, Accra</p>
                    </div>
                </div>
                <div class="flex gap-4 p-5 bg-dark-card border border-border rounded-md transition-all duration-300 hover:border-[rgba(212,168,67,0.2)]">
                    <div class="w-12 h-12 flex items-center justify-center bg-[rgba(212,168,67,0.08)] rounded-sm text-primary shrink-0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <div>
                        <h4 class="text-[0.85rem] font-semibold text-white mb-1">Business Hours</h4>
                        <p class="text-[0.95rem] text-text font-medium">Mon - Fri: 8:00 AM - 6:00 PM</p>
                        <p class="text-[0.85rem] text-text-muted">Saturday: 8:00 AM - 2:00 PM</p>
                        <p class="text-[0.85rem] text-text-muted">Sunday: Closed</p>
                    </div>
                </div>
                <div class="flex gap-3 mt-2 max-sm:flex-col">
                    <a href="tel:+233244044001" class="inline-flex items-center gap-2.5 px-8 py-3.5 font-body text-[0.95rem] font-semibold rounded-sm bg-gradient-to-r from-primary to-primary-dark text-dark shadow-[0_4px_20px_rgba(212,168,67,0.3)] hover:from-primary-light hover:to-primary hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)] transition-all duration-300 no-underline whitespace-nowrap max-sm:w-full max-sm:justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Call Now
                    </a>
                    <a href="https://wa.me/233244044001" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2.5 px-8 py-3.5 font-body text-[0.95rem] font-semibold rounded-sm bg-whatsapp text-white hover:bg-[#1ebe5d] hover:-translate-y-0.5 transition-all duration-300 no-underline whitespace-nowrap max-sm:w-full max-sm:justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                        WhatsApp
                    </a>
                </div>
            </div>
            <div class="bg-dark-card border border-border rounded-lg p-8">
                <h3 class="font-heading text-[1.2rem] font-bold text-white mb-6">Send Us a Message</h3>
                <form class="flex flex-col gap-[18px]" id="contactForm">
                    <div class="flex flex-col gap-2">
                        <label for="contactName" class="text-[0.88rem] font-semibold text-text">Full Name *</label>
                        <input type="text" id="contactName" name="contactName" required placeholder="Your full name" class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)] placeholder:text-steel-light">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="contactEmail" class="text-[0.88rem] font-semibold text-text">Email *</label>
                        <input type="email" id="contactEmail" name="contactEmail" required placeholder="your@email.com" class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)] placeholder:text-steel-light">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="contactPhone" class="text-[0.88rem] font-semibold text-text">Phone</label>
                        <input type="tel" id="contactPhone" name="contactPhone" placeholder="Your phone number" class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)] placeholder:text-steel-light">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="contactSubject" class="text-[0.88rem] font-semibold text-text">Subject *</label>
                        <input type="text" id="contactSubject" name="contactSubject" required placeholder="How can we help?" class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)] placeholder:text-steel-light">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="contactMessage" class="text-[0.88rem] font-semibold text-text">Message *</label>
                        <textarea id="contactMessage" name="contactMessage" rows="4" required placeholder="Your message..." class="px-4 py-3.5 font-body text-[0.95rem] text-text bg-dark-surface border border-border rounded-sm outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,168,67,0.1)] placeholder:text-steel-light resize-y"></textarea>
                    </div>
                    <button type="submit" class="self-start inline-flex items-center gap-2.5 px-8 py-3.5 font-body text-[0.95rem] font-semibold rounded-sm bg-gradient-to-r from-primary to-primary-dark text-dark shadow-[0_4px_20px_rgba(212,168,67,0.3)] hover:from-primary-light hover:to-primary hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)] transition-all duration-300 cursor-pointer border-none whitespace-nowrap">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        Send Message
                    </button>
                </form>
            </div>
            <div class="lg:col-span-2 mt-5">
                <h3 class="font-heading text-[1.2rem] font-bold text-white mb-5">Find Us on the Map</h3>
                <div class="rounded-md overflow-hidden border border-border">
                    <div class="h-[350px] bg-gradient-to-br from-dark-card to-dark-surface flex flex-col items-center justify-center gap-4 text-steel-light">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="opacity-40"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <p class="text-[0.95rem] opacity-70">Google Maps - GPS Coordinates Coming Soon</p>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 font-body text-[0.9rem] font-semibold rounded-sm bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-dark transition-all duration-300 no-underline">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<footer class="bg-dark-alt border-t border-border">
    <div class="py-[60px] pb-10">
        <div class="max-w-container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div class="lg:col-span-1.5">
                    <a href="index.html" class="flex items-center gap-3 mb-4">
                        <span class="text-[2rem] text-primary font-black leading-none">&#9646;</span>
                        <div class="flex flex-col">
                            <span class="font-heading text-lg font-extrabold text-white tracking-[2px] leading-tight">METAL BRIDGES</span>
                            <span class="text-[0.65rem] text-primary tracking-[2px] uppercase font-medium">Precision Fabrication</span>
                        </div>
                    </a>
                    <p class="text-[0.9rem] text-text-muted leading-relaxed mb-5">Premium metal fabrication and welding services in Accra, Ghana. Building strength in steel, crafting excellence since 2014.</p>
                    <div class="flex gap-2.5">
                        <a href="#" aria-label="Facebook" class="w-10 h-10 flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-border rounded-sm text-text-muted hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" aria-label="Instagram" class="w-10 h-10 flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-border rounded-sm text-text-muted hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" aria-label="Twitter" class="w-10 h-10 flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-border rounded-sm text-text-muted hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                        </a>
                        <a href="#" aria-label="YouTube" class="w-10 h-10 flex items-center justify-center bg-[rgba(255,255,255,0.05)] border border-border rounded-sm text-text-muted hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h4 class="font-heading text-[0.85rem] font-bold text-white mb-5 tracking-[1px] uppercase">Quick Links</h4>
                    <ul class="space-y-2.5">
                        <li><a href="#home" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Home</a></li>
                        <li><a href="#about" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">About Us</a></li>
                        <li><a href="#services" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Services</a></li>
                        <li><a href="#projects" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Projects</a></li>
                        <li><a href="video-gallery.html" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Video Gallery</a></li>
                        <li><a href="#testimonials" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Testimonials</a></li>
                        <li><a href="#quote" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Request a Quote</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-heading text-[0.85rem] font-bold text-white mb-5 tracking-[1px] uppercase">Services</h4>
                    <ul class="space-y-2.5">
                        <li><a href="#services" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Metal Fabrication</a></li>
                        <li><a href="#services" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Welding Services</a></li>
                        <li><a href="#services" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Security Doors</a></li>
                        <li><a href="#services" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Gates</a></li>
                        <li><a href="#services" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Staircases</a></li>
                        <li><a href="#services" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Roofing Structures</a></li>
                        <li><a href="#services" class="text-[0.9rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Custom Projects</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-heading text-[0.85rem] font-bold text-white mb-5 tracking-[1px] uppercase">Contact Info</h4>
                    <ul class="space-y-3.5">
                        <li class="flex items-start gap-2.5 text-[0.9rem] text-text-muted">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="shrink-0 mt-0.5 text-primary opacity-70"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <a href="tel:+233244044001" class="text-text-muted hover:text-primary transition-all">0244-044001</a>
                        </li>
                        <li class="flex items-start gap-2.5 text-[0.9rem] text-text-muted">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="shrink-0 mt-0.5 text-primary opacity-70"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span>Tantra Hill, Accra</span>
                        </li>
                        <li class="flex items-start gap-2.5 text-[0.9rem] text-text-muted">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="shrink-0 mt-0.5 text-primary opacity-70"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            <a href="mailto:info@metalbridges.com" class="text-text-muted hover:text-primary transition-all">info@metalbridges.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="py-5 border-t border-border">
        <div class="max-w-container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p class="text-[0.85rem] text-text-muted">&copy; 2026 METAL BRIDGES. All rights reserved.</p>
            <div class="flex gap-5">
                <a href="#" class="text-[0.85rem] text-text-muted hover:text-primary transition-all">Privacy Policy</a>
                <a href="#" class="text-[0.85rem] text-text-muted hover:text-primary transition-all">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>

<a href="https://wa.me/233244044001" target="_blank" rel="noopener noreferrer" class="floating-btn whatsapp-float" aria-label="Chat on WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
</a>
<a href="tel:+233244044001" class="floating-btn bottom-[160px] right-6 w-[50px] h-[50px] bg-primary text-dark" aria-label="Call us">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</a>
<button class="floating-btn back-to-top bottom-[230px] right-6 w-[50px] h-[50px] bg-dark-card text-text border border-border" id="backToTop" aria-label="Back to top">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
</button>

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>`);

fs.writeFileSync('index.html', sections.join('\n'), 'utf8');
console.log('index.html written successfully');
