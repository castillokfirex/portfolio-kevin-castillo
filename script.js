// =========================================================
// Habilitar animaciones reveal solo si JS está activo
// =========================================================
document.documentElement.classList.add('js-enabled');

// =========================================================
// i18n - Sistema de Idiomas
// =========================================================
const translations = {
  es: {
    "skip-link": "Saltar al contenido",
    "nav-about": "Sobre mí",
    "nav-skills": "Habilidades",
    "nav-projects": "Proyectos",
    "nav-contact": "Contacto",
    "btn-cv": "Descargar CV",
    "hero-eyebrow": "Floridablanca, Santander · En formación activa",
    "hero-title-1": "Conectando piezas de código<br>hasta formar soluciones ",
    "hero-title-2": "reales",
    "hero-title-3": ".",
    "hero-subtitle": "Soy Kevin Andrés Castillo Pabón, tengo 17 años y llevo 10 meses como estudiante de software en Campuslands. Cada proyecto que construyo es un nodo más en una red que no para de crecer.",
    "hero-btn-projects": "Ver proyectos",
    "hero-btn-contact": "Hablemos",
    "about-eyebrow": "01 · Sobre mí",
    "about-title": "Aprendiendo a construir, <br>un nodo a la vez.",
    "about-p1": "Empecé hace 10 meses como estudiante de software en Campuslands, pero ya he recorrido suficiente camino como para tener tres proyectos reales en producción: una tienda online, un bot de automatización con IA y un portal bancario simulado. Me gusta entender cómo se conectan las piezas de un sistema, desde el front-end hasta los flujos que automatizan tareas repetitivas.",
    "about-p2": "No vengo de un camino \"perfecto\" en tecnología: vengo de la curiosidad constante y de la disciplina de seguir aprendiendo, semana tras semana. Eso es lo que quiero que veas en este portafolio.",
    "about-tech-title": "Habilidades y Tecnologías",
    "skill-leadership": "Liderazgo",
    "skill-teamwork": "Trabajo en equipo",
    "skill-emotional": "Inteligencia emocional",
    "skill-adaptability": "Adaptabilidad",
    "skill-communication": "Comunicación asertiva",
    "skill-resilience": "Resiliencia",
    "skills-eyebrow": "02 · Habilidades técnicas",
    "skills-title": "Mi stack en construcción",
    "skills-lede": "Tecnologías que he venido manejando durante mi formación, agrupadas por el rol que cumplen en lo que construyo.",
    "skills-card1-title": "Lenguajes",
    "skills-card2-title": "Front-End",
    "skills-card3-title": "Backend & Datos",
    "skills-card4-title": "Herramientas & Flujo",
    "skills-card-design": "Diseño responsive",
    "projects-eyebrow": "03 · Proyectos",
    "projects-title": "Lo que he construido hasta ahora",
    "projects-lede": "Tres proyectos reales, tres formas distintas de resolver problemas: comercio, automatización y simulación financiera.",
    "proj1-title": "E-commerce de ropa",
    "proj1-desc": "Interfaz front-end que simula una experiencia de compra moderna para una tienda de ropa online. Prioriza el descubrimiento de productos, la comparación rápida entre prendas y una ruta clara hacia el checkout.",
    "proj-link": "Ver repositorio",
    "proj2-title": "DeliveryBot",
    "proj2-desc": "Sistema de automatización de pedidos para cafeterías institucionales, construido sobre n8n. Convierte Telegram en una terminal de pedidos inteligente, con un agente de IA.",
    "proj3-title": "Acme Bank",
    "proj3-desc": "Simulación de un portal bancario interactivo, responsivo y moderno. Aplicación enfocada exclusivamente en front-end.",
    "contact-eyebrow": "04 · Contacto",
    "contact-title": "Conectemos el siguiente nodo",
    "contact-lede": "Si buscas a alguien en formación, con ganas reales de aprender y aportar, escríbeme. Respondo rápido.",
    "footer-text": " Kevin Andrés Castillo Pabón. Hecho con curiosidad y café."
  },
  en: {
    "skip-link": "Skip to content",
    "nav-about": "About me",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-contact": "Contact",
    "btn-cv": "Download CV",
    "hero-eyebrow": "Floridablanca, Santander · Active learning",
    "hero-title-1": "Connecting code pieces<br>to build ",
    "hero-title-2": "real",
    "hero-title-3": " solutions.",
    "hero-subtitle": "I'm Kevin Andrés Castillo Pabón, 17 years old, with 10 months as a software student at Campuslands. Every project I build is another node in a constantly growing network.",
    "hero-btn-projects": "View projects",
    "hero-btn-contact": "Let's talk",
    "about-eyebrow": "01 · About me",
    "about-title": "Learning to build, <br>one node at a time.",
    "about-p1": "I started 10 months ago as a software student at Campuslands, but I've already walked enough path to have three real projects in production: an online store, an AI automation bot, and a simulated banking portal. I like understanding how system pieces connect, from the front-end to workflows that automate repetitive tasks.",
    "about-p2": "I don't come from a \"perfect\" path in tech: I come from constant curiosity and the discipline to keep learning, week after week. That's what I want you to see in this portfolio.",
    "about-tech-title": "Skills and Technologies",
    "skill-leadership": "Leadership",
    "skill-teamwork": "Teamwork",
    "skill-emotional": "Emotional intelligence",
    "skill-adaptability": "Adaptability",
    "skill-communication": "Assertive communication",
    "skill-resilience": "Resilience",
    "skills-eyebrow": "02 · Technical skills",
    "skills-title": "My stack in progress",
    "skills-lede": "Technologies I've been mastering during my training, grouped by the role they play in what I build.",
    "skills-card1-title": "Languages",
    "skills-card2-title": "Front-End",
    "skills-card3-title": "Backend & Data",
    "skills-card4-title": "Tools & Workflow",
    "skills-card-design": "Responsive design",
    "projects-eyebrow": "03 · Projects",
    "projects-title": "What I've built so far",
    "projects-lede": "Three real projects, three different ways to solve problems: commerce, automation, and financial simulation.",
    "proj1-title": "Clothing E-commerce",
    "proj1-desc": "Front-end interface simulating a modern shopping experience for an online clothing store. Prioritizes product discovery, quick comparison, and a clear path to checkout.",
    "proj-link": "View repository",
    "proj2-title": "DeliveryBot",
    "proj2-desc": "Order automation system for institutional cafeterias, built on n8n. Turns Telegram into a smart order terminal, with an AI agent.",
    "proj3-title": "Acme Bank",
    "proj3-desc": "Interactive, responsive, and modern banking portal simulation. Front-end focused application.",
    "contact-eyebrow": "04 · Contact",
    "contact-title": "Let's connect the next node",
    "contact-lede": "If you are looking for someone in training, with a real desire to learn and contribute, write to me. I reply fast.",
    "footer-text": " Kevin Andrés Castillo Pabón. Built with curiosity and coffee."
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' && el.type === 'placeholder') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
  }
}

// =========================================================
// Menú móvil
// =========================================================
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  navList.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menú');
    });
  });
}

// =========================================================
// Reveal on scroll (animaciones sutiles)
// =========================================================
const revealTargets = document.querySelectorAll(
  '.about-grid, .skills-grid, .projects-grid, .contact-inner, .skill-card, .project-card, .about-skills-subsection'
);

revealTargets.forEach((el) => el.classList.add('reveal'));

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('is-visible'));
}

// =========================================================
// Inicialización
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

// =========================================================
// Efectos Interactivos y Creativos (Wow Factor)
// =========================================================

// 1. Orbe luminoso del cursor
const glow = document.createElement('div');
glow.className = 'mouse-glow';
document.body.appendChild(glow);

let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateGlow() {
  glowX += (mouseX - glowX) * 0.15;
  glowY += (mouseY - glowY) * 0.15;
  glow.style.transform = `translate(${glowX}px, ${glowY}px)`;
  requestAnimationFrame(animateGlow);
}
if (!prefersReducedMotion) animateGlow();

// Aumentar el tamaño del orbe al pasar por botones o enlaces
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    glow.style.width = '400px';
    glow.style.height = '400px';
    glow.style.background = 'radial-gradient(circle, rgba(125, 211, 252, 0.12) 0%, transparent 60%)';
  });
  el.addEventListener('mouseleave', () => {
    glow.style.width = '300px';
    glow.style.height = '300px';
    glow.style.background = 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)';
  });
});

// 2. Efecto de Brillo Interactivo en Tarjetas
const cards = document.querySelectorAll('.project-card, .skill-card');
cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// 3. Parallax sutil en el Hero SVG
const heroBg = document.querySelector('.hero-bg');
if (heroBg && !prefersReducedMotion) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    heroBg.style.transform = `translate(${-x}px, ${-y}px)`;
  });
}
