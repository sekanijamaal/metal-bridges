const fs = require('fs');

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
            <a href="projects.html" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Projects</a>
            <a href="video-gallery.html" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative active">Video Gallery</a>
            <a href="index.html#testimonials" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Testimonials</a>
            <a href="index.html#contact" class="nav-link px-4 py-2 text-[0.88rem] font-medium text-text-muted rounded-sm transition-all duration-300 hover:text-white relative">Contact</a>
            <a href="index.html#quote" class="px-6 py-2.5 text-[0.88rem] font-semibold text-dark bg-gradient-to-r from-primary to-primary-dark rounded-sm ml-2 max-md:ml-0 max-md:mt-3 max-md:text-center shadow-[0_2px_12px_rgba(212,168,67,0.3)] hover:from-primary-light hover:to-primary hover:-translate-y-0.5 transition-all duration-300">Request a Quote</a>
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
</header>`;

const thumb = 'images/videos/video-thumb.svg';

const videos = [
  { img: thumb, url: 'https://res.cloudinary.com/dmvmc4f1/video/upload/f_mp4/v1785415402/82ce7f9f-f961-4f34-bf03-e15c9d3582ff_vewduv.mov', title: 'Gate Fabrication Process', desc: 'Watch our team craft a modern sliding gate from raw steel to finished product.', tag: 'MP4 Video' },
  { img: thumb, url: 'https://res.cloudinary.com/dmvmc4f1/video/upload/f_mp4/v1785415404/5e398746-23e5-4f0c-bbcd-d386e3ea6569_l6qtkv.mov', title: 'Staircase Installation', desc: 'See the precision engineering behind our custom spiral staircase installation.', tag: 'MP4 Video' },
  { img: thumb, url: 'https://res.cloudinary.com/dmvmc4f1/video/upload/v1785415421/ced4f97d-ff4c-4da2-916b-04502787101b_eivz0g.mp4', title: 'Workshop Tour', desc: 'A guided tour of our state-of-the-art metal fabrication workshop in Tantra Hill.', tag: 'MP4 Video' },
  { img: thumb, url: 'https://res.cloudinary.com/dmvmc4f1/video/upload/v1785415425/6e8ccc0c-4d4a-4c02-bbb1-53f28e28d357_jrtd27.mp4', title: 'Security Door Showcase', desc: 'Featuring our premium security door collection with modern design elements.', tag: 'MP4 Video' },
  { img: thumb, url: 'https://res.cloudinary.com/dmvmc4f1/video/upload/v1785415423/1465e137-087c-4007-8325-6e076f83a942_k8lkpd.mp4', title: 'Industrial Roofing Project', desc: 'Time-lapse of a large-scale industrial roofing structure installation.', tag: 'MP4 Video' },
  { img: thumb, url: 'https://res.cloudinary.com/dmvmc4f1/video/upload/v1785415417/fb10164d-ab2a-49e2-9f9a-02b84ef9668e_sightj.mp4', title: 'Client Testimonial Video', desc: 'Hear from our satisfied clients about their experience with METAL BRIDGES.', tag: 'MP4 Video' },
];

const vcards = videos.map(v => `
                <div class="video-card bg-dark-card border border-border rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.3)] hover:shadow-glow cursor-pointer" data-video="${v.url}">
                    <div class="relative aspect-video bg-gradient-to-br from-dark-surface to-dark flex items-center justify-center overflow-hidden">
                        <img src="${v.img}" alt="${v.title}" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[0.6s] group-hover:scale-105">
                        <div class="play-button absolute w-[70px] h-[70px] bg-[rgba(212,168,67,0.9)] rounded-full flex items-center justify-center text-dark shadow-[0_4px_30px_rgba(212,168,67,0.3)] transition-all duration-300 hover:scale-110 hover:bg-primary">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" class="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        </div>
                    </div>
                    <div class="p-5">
                        <h3 class="font-heading text-[0.95rem] font-bold text-white mb-2">${v.title}</h3>
                        <p class="text-[0.88rem] text-text-muted leading-relaxed">${v.desc}</p>
                        <span class="inline-block text-[0.7rem] font-semibold text-primary bg-[rgba(212,168,67,0.1)] px-[10px] py-[3px] rounded-xl mt-2.5 uppercase tracking-[1px]">${v.tag}</span>
                    </div>
                </div>`).join('\n');

const content = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="METAL BRIDGES — Watch our project videos showcasing metal fabrication and welding work in Accra, Ghana.">
    <title>Video Gallery — METAL BRIDGES | Project Videos</title>
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
<body class="font-body bg-dark text-text antialiased overflow-x-hidden transition-[background-color,color] duration-[0.4s]">

${nav}

<section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=1080&fit=crop&auto=format&q=80')] bg-cover bg-center">
    <div class="absolute inset-0 bg-gradient-to-br from-[rgba(10,10,15,0.88)] via-[rgba(26,26,46,0.82)] to-[rgba(13,17,23,0.9)] z-[1]"></div>
    <div class="absolute inset-0 z-[1]" style="background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 60px 60px;"></div>
    <div class="relative z-[2] text-center max-w-[900px] px-6 pt-[120px]">
        <span class="inline-block font-heading text-[0.75rem] font-bold tracking-[3px] uppercase text-primary mb-4 px-4 py-1.5 border border-[rgba(212,168,67,0.3)] rounded-xl bg-[rgba(212,168,67,0.05)]">Watch Our Work</span>
        <h1 class="font-heading text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.15] text-white">Video <span class="text-primary">Gallery</span></h1>
        <p class="text-[1.15rem] text-text-muted max-w-[650px] mx-auto mt-6 leading-relaxed">Watch our fabrication process and completed projects in action. See the precision and craftsmanship behind every piece.</p>
    </div>
</section>

<section class="py-24 relative bg-dark">
    <div class="max-w-container mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">${vcards}
        </div>

        <div class="text-center mt-[60px] p-10 bg-dark-card border border-border rounded-lg">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-primary opacity-60 mx-auto mb-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            <h3 class="font-heading text-[1.1rem] text-white mb-2">More Videos Coming Soon</h3>
            <p class="text-text-muted max-w-[500px] mx-auto">New project videos will be added soon. We regularly upload footage of our fabrication process, completed projects, and client testimonials.</p>
        </div>
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

fs.writeFileSync('video-gallery.html', content, 'utf8');
console.log('video-gallery.html written');
