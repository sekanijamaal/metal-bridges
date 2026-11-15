const fs = require('fs');
const p = s => { process.stdout.write(s + '\n'); };

const head = `<!DOCTYPE html>
<html lang="en" data-theme="dark" data-theme-preference="system">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="METAL BRIDGES — View our complete project portfolio. Gates, doors, staircases, roofing, railings, industrial structures, and custom metal designs in Accra, Ghana.">
    <title>Projects — METAL BRIDGES | Metal Fabrication Portfolio</title>
    <script src="js/theme.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
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
                        border: 'var(--color-border)',
                        'border-light': 'var(--color-border-light)',
                    },
                    fontFamily: { heading: ['Orbitron', 'sans-serif'], body: ['Inter', 'sans-serif'] },
                    maxWidth: { container: '1280px' },
                    borderRadius: { sm: '6px', md: '12px', lg: '20px', xl: '30px' },
                    boxShadow: { glow: '0 0 30px rgba(212, 168, 67, 0.15)' },
                }
            }
        }
    </script>
</head>
<body class="font-body bg-dark text-text antialiased overflow-x-hidden transition-[background-color,color] duration-[0.4s]">`;

const nav = `
<header id="navbar" class="navbar scrolled fixed top-0 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1256px] h-20 z-[1000] bg-[rgba(10,10,15,0.6)] rounded-b-[50px] border border-border border-t-0 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300">
    <div class="max-w-full mx-auto px-8 h-full flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-3 no-underline">
            <span class="text-[2rem] text-primary font-black leading-none">&#9646;</span>
            <div class="flex flex-col">
                <span class="font-heading text-lg font-extrabold text-white tracking-[2px] leading-tight">METAL BRIDGES</span>
                <span class="text-[0.65rem] text-primary tracking-[2px] uppercase font-medium">Precision Fabrication</span>
            </div>
        </a>
        <nav class="flex items-center gap-2 max-md:fixed max-md:top-0 max-md:-right-full max-md:w-[300px] max-md:h-screen max-md:bg-dark-alt max-md:flex-col max-md:p-[100px_30px_30px] max-md:gap-1 max-md:border-l max-md:border-border" id="navMenu">
            <a href="index.html" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Home</a>
            <a href="index.html#about" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">About Us</a>
            <a href="index.html#services" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Services</a>
            <a href="projects.html" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative active">Projects</a>
            <a href="video-gallery.html" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Video Gallery</a>
            <a href="index.html#testimonials" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Testimonials</a>
            <a href="index.html#contact" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Contact</a>
            <a href="index.html#quote" class="px-6 py-2.5 text-[0.88rem] font-semibold text-dark bg-gradient-to-r from-primary to-primary-dark rounded-sm ml-2 max-md:ml-0 max-md:mt-3 max-md:text-center shadow-[0_2px_12px_rgba(212,168,67,0.3)] hover:from-primary-light hover:to-primary hover:-translate-y-0.5 transition-all duration-300">Request a Quote</a>
        </nav>
        <button type="button" class="theme-control theme-icon-button" data-theme-toggle aria-label="Color theme: System. Activate to switch to Light." title="Switch to Light theme">
            <svg data-theme-icon="light" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l-1.42 1.42m11.3-11.3 1.42-1.42"></path></svg>
            <svg data-theme-icon="dark" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"></path></svg>
            <svg data-theme-icon="system" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="13" rx="2"></rect><path d="M8 21h8m-4-4v4"></path></svg>
        </button>
        <button class="nav-toggle hidden max-md:flex flex-col gap-[5px] bg-none border-none cursor-pointer p-2" id="navToggle" aria-label="Toggle navigation">
            <span class="hamburger-line w-7 h-[2px] bg-white rounded-[2px] transition-all duration-300"></span>
            <span class="hamburger-line w-7 h-[2px] bg-white rounded-[2px] transition-all duration-300"></span>
            <span class="hamburger-line w-7 h-[2px] bg-white rounded-[2px] transition-all duration-300"></span>
        </button>
    </div>
</header>`;

const pageHero = `
<section class="theme-hero relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=1080&fit=crop&auto=format&q=80')] bg-cover bg-center">
    <div class="absolute inset-0 bg-gradient-to-br from-[rgba(10,10,15,0.88)] via-[rgba(26,26,46,0.82)] to-[rgba(13,17,23,0.9)] z-[1]"></div>
    <div class="absolute inset-0 z-[1]" style="background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 60px 60px;"></div>
    <div class="relative z-[2] text-center max-w-[900px] px-6 pt-[120px]">
        <span class="inline-block font-heading text-[0.75rem] font-bold tracking-[3px] uppercase text-primary mb-4 px-4 py-1.5 border border-[rgba(212,168,67,0.3)] rounded-xl bg-[rgba(212,168,67,0.05)]">Our Portfolio</span>
        <h1 class="font-heading text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.15] text-white">Project <span class="text-primary">Gallery</span></h1>
        <p class="text-[1.15rem] text-text-muted max-w-[650px] mx-auto mt-6 leading-relaxed">Explore our completed projects showcasing the breadth and quality of our metal fabrication expertise across Ghana.</p>
    </div>
</section>`;

const projects = [
  { cat: 'gates', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415688/df0c1b84-2f6a-4fa7-8d6f-058c23d6aed8_grzzqx.jpg', alt: 'Modern Sliding Gate', name: 'Modern Sliding Gate', desc: 'Elegant steel sliding gate with geometric patterns' },
  { cat: 'gates', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415689/ea2389ce-f1da-4f45-9771-2491786eff74_bq5hgb.jpg', alt: 'Ornamental Double Swing Gate', name: 'Ornamental Double Swing Gate', desc: 'Classic double-swing gate with ornamental details' },
  { cat: 'gates', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415486/b5ca7167-0faf-4db1-a2ae-65f0a312defe_c5fvjx.jpg', alt: 'Automatic Rolling Gate', name: 'Automatic Rolling Gate', desc: 'Motorized rolling gate for commercial property' },
  { cat: 'doors', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415485/8c38782d-01cb-48e4-8391-96951b8b82ae_lwjwy1.jpg', alt: 'Heavy-Duty Security Door', name: 'Heavy-Duty Security Door', desc: 'Reinforced steel security door with modern finish' },
  { cat: 'doors', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415485/e36d926e-901c-4383-a26a-e2206125d05c_q2bree.jpg', alt: 'Designer Front Door', name: 'Designer Front Door', desc: 'Premium steel entrance door with decorative panels' },
  { cat: 'staircases', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415489/e8f93370-33b2-49b4-b760-e45e54606837_wijnxb.jpg', alt: 'Custom Spiral Staircase', name: 'Custom Spiral Staircase', desc: 'Space-saving spiral staircase with handrails' },
  { cat: 'staircases', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415491/5BD65239-E7E4-42CC-B6FC-F565BFB43DAF_pon9kf.jpg', alt: 'Modern L-Shaped Staircase', name: 'Modern L-Shaped Staircase', desc: 'Contemporary steel staircase with glass railing' },
  { cat: 'roofing', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415426/d91381e9-3cd6-4968-8ca1-39f61d063f9c_bv5p4u.jpg', alt: 'Industrial Roofing Structure', name: 'Industrial Roofing Structure', desc: 'Large-span steel roofing for warehouse facility' },
  { cat: 'roofing', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415488/4bceed22-161f-49df-9350-8a2d2baff10c_gv9rwy.jpg', alt: 'Residential Carport Roof', name: 'Residential Carport Roof', desc: 'Custom steel canopy for residential parking' },
  { cat: 'railings', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415690/032fa17c-6f98-4dd8-b203-890a4d3562da_lnmcvr.jpg', alt: 'Stainless Steel Balcony Railings', name: 'Stainless Steel Balcony Railings', desc: 'Premium stainless steel balustrade system' },
  { cat: 'railings', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415690/8ec561bc-b0a1-41ba-bf53-82f0f1d45b3b_j2yu7x.jpg', alt: 'Decorative Handrails', name: 'Decorative Handrails', desc: 'Custom-designed handrails with artistic patterns' },
  { cat: 'industrial', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415425/6cf81117-81d5-4a5a-9993-e9ff950bee7f_nqhdap.jpg', alt: 'Commercial Steel Framework', name: 'Commercial Steel Framework', desc: 'Heavy-duty structural steel for commercial building' },
  { cat: 'industrial', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415425/479684e4-da41-45b9-b0c5-f571ebcfb00d_lsli1z.jpg', alt: 'Warehouse Storage Racks', name: 'Warehouse Storage Racks', desc: 'Heavy-duty industrial storage rack system' },
  { cat: 'custom', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415423/ce4402e6-c6c0-4ea6-b9e0-ddc21e08634a_dl0hta.jpg', alt: 'Decorative Metal Partition', name: 'Decorative Metal Partition', desc: 'Artistic room divider with intricate patterns' },
  { cat: 'custom', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415430/E25D7FBA-F8DE-47A6-836C-40821530CBC3_oc7shh.jpg', alt: 'Metal Garden Art', name: 'Metal Garden Art', desc: 'Custom decorative metal sculptures for garden' },
  { cat: 'custom', img: 'https://res.cloudinary.com/dmvmc4f1/image/upload/v1785415485/4e1d731f-c372-40bb-9dbc-119b9a225b64_bqjhxa.jpg', alt: 'Custom Metal Furniture', name: 'Custom Metal Furniture', desc: 'Industrial-style metal furniture and fixtures' },
];

let projectCards = '';
projects.forEach(p => {
  projectCards += `
            <div class="project-card relative rounded-md overflow-hidden cursor-pointer border border-border transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.3)] hover:shadow-glow" data-category="${p.cat}">
                <div class="overflow-hidden aspect-[4/3]"><img src="${p.img}" alt="${p.alt}" loading="lazy" class="w-full h-full object-cover transition-transform duration-[0.6s] hover:scale-105"></div>
                <div class="project-overlay absolute bottom-0 left-0 w-full p-[30px_20px_20px] opacity-0 translate-y-5 transition-all duration-300">
                    <span class="font-heading text-[0.65rem] font-semibold tracking-[2px] uppercase text-primary block mb-1.5">${p.cat.charAt(0).toUpperCase() + p.cat.slice(1)}</span>
                    <h3 class="font-heading text-base font-bold text-white mb-1">${p.name}</h3>
                    <p class="text-[0.8rem] text-text-muted">${p.desc}</p>
                </div>
            </div>`;
});

const content = head + nav + pageHero + `
<section class="py-24 relative bg-dark">
    <div class="max-w-container mx-auto px-6">
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">${projectCards}
        </div>
    </div>
</section>

<section class="py-24 relative bg-dark-surface text-center">
    <div class="max-w-container mx-auto px-6">
        <h2 class="font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-white mb-5">Have a Project in Mind?</h2>
        <p class="text-[1.05rem] text-text-muted leading-relaxed max-w-[500px] mx-auto mb-8">Let us bring your vision to life with our expertise in metal fabrication and welding.</p>
        <a href="index.html#quote" class="inline-flex items-center gap-2.5 px-10 py-[18px] font-body text-[1.05rem] font-semibold rounded-sm bg-gradient-to-r from-primary to-primary-dark text-dark shadow-[0_4px_20px_rgba(212,168,67,0.3)] hover:from-primary-light hover:to-primary hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,168,67,0.4)] transition-all duration-300 no-underline whitespace-nowrap">Request a Free Quote</a>
    </div>
</section>

<footer class="bg-dark-alt border-t border-border">
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

<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>
<script src="js/main.js"></script>
</body>
</html>`;

fs.writeFileSync('projects.html', content, 'utf8');
console.log('projects.html written');
