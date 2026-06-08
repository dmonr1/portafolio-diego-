import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import diegoImage from "./assets/Diego1.png";
import dmonImage from "./assets/DMON.png";
import previewHero from "./assets/hero1.png";
import previewAbout from "./assets/hero2.png";
import previewProjects from "./assets/hero3.png";
import previewWork from "./assets/hero4.png";
import previewContact from "./assets/hero5.png";
import capOne from "./assets/cap1.png";
import capTwo from "./assets/cap7.png";
import capThree from "./assets/cap4.png";
import capFour from "./assets/cap5.png";
import capFive from "./assets/cap6.png";
import capSix from "./assets/cap8.png";
import angularIcon from "./assets/svgs/angular.svg";
import cssIcon from "./assets/svgs/css.svg";
import gitIcon from "./assets/svgs/git.svg";
import gsapIcon from "./assets/svgs/gsap.svg";
import htmlIcon from "./assets/svgs/html-5.svg";
import javaIcon from "./assets/svgs/java.svg";
import javascriptIcon from "./assets/svgs/javascript.svg";
import jenkinsIcon from "./assets/svgs/jenkins.svg";
import nodeIcon from "./assets/svgs/node-js.svg";
import oracleIcon from "./assets/svgs/oracle.svg";
import phpIcon from "./assets/svgs/php.svg";
import reactIcon from "./assets/svgs/react.svg";
import springIcon from "./assets/svgs/spring.svg";
import sqlIcon from "./assets/svgs/sql.svg";
import threeIcon from "./assets/svgs/threejs-1.svg";
import typescriptIcon from "./assets/svgs/typescript.svg";
import viteIcon from "./assets/svgs/vite.svg";
import webglIcon from "./assets/svgs/webgl.svg";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root element was not found.");
}

const skillIcons = [
  { label: "Angular", icon: angularIcon },
  { label: "React", icon: reactIcon },
  { label: "TypeScript", icon: typescriptIcon },
  { label: "JavaScript", icon: javascriptIcon },
  { label: "HTML", icon: htmlIcon },
  { label: "CSS", icon: cssIcon },
  { label: "Gsap", icon: gsapIcon },
  { label: "WebGL", icon: webglIcon },
  { label: "ThreeJs", icon: threeIcon },
  { label: "Vite", icon: viteIcon },
  { label: "Java", icon: javaIcon },
  { label: "Spring Boot", icon: springIcon },
  { label: "Jenkins", icon: jenkinsIcon },
  { label: "Git, GitLab, GitHub", icon: gitIcon },
  { label: "Node.js", icon: nodeIcon },
  { label: "PHP", icon: phpIcon },
  { label: "SQL", icon: sqlIcon },
  { label: "Oracle", icon: oracleIcon }
];

document.body.classList.add("is-scroll-locked");

app.innerHTML = `
  <section class="smoke-hero" id="top">
    <canvas class="smoke-canvas" aria-hidden="true"></canvas>
      <div class="preloader-intro" aria-hidden="true">
        <div class="intro-name">
        <span class="intro-word" aria-label="Diego">
          <span class="intro-char">D</span><span class="intro-char">i</span><span class="intro-char">e</span><span class="intro-char">g</span><span class="intro-char">o</span>
        </span>
        <span class="intro-word" aria-label="Rutti">
          <span class="intro-char">R</span><span class="intro-char">u</span><span class="intro-char">t</span><span class="intro-char">t</span><span class="intro-char">i</span>
        </span>
      </div>
    </div>
    <div class="hero-interface">
      <header class="hero-nav" aria-label="Navegacion principal">
        <a class="brand-mark" href="#top" aria-label="Diego portafolio">DR</a>

        <div class="nav-center">
          <nav class="nav-cluster" aria-label="Repertorio">
            <svg class="nav-symbol" viewBox="0 0 24 24" role="button" tabindex="0" aria-label="Cambiar forma de Repertorio">
              <path data-base="M4 4 L20 20 L4 20 L4 4 Z" data-alt="M3 5 L21 12 L3 19 L8 12 Z" d="M4 4 L20 20 L4 20 L4 4 Z"></path>
            </svg>
            <strong><span class="reveal-text">Repertorio</span></strong>
            <a href="#projects"><span class="reveal-text">Trabajos</span></a>
            <a href="#skills"><span class="reveal-text">Ideas</span></a>
          </nav>

          <nav class="nav-cluster" aria-label="Narrativa">
            <svg class="nav-symbol" viewBox="0 0 24 24" role="button" tabindex="0" aria-label="Cambiar forma de Narrativa">
              <path data-base="M12 2 C17.5 2 22 6.5 22 12 C22 17.5 17.5 22 12 22 C6.5 22 2 17.5 2 12 C2 6.5 6.5 2 12 2 Z" data-alt="M12 2 C16 6 22 5 22 12 C22 19 16 18 12 22 C8 18 2 19 2 12 C2 5 8 6 12 2 Z" d="M12 2 C17.5 2 22 6.5 22 12 C22 17.5 17.5 22 12 22 C6.5 22 2 17.5 2 12 C2 6.5 6.5 2 12 2 Z"></path>
            </svg>
            <strong><span class="reveal-text">Narrativa</span></strong>
            <a href="#about"><span class="reveal-text">Sobre mi</span></a>
            <a href="#contact"><span class="reveal-text">Contacto</span></a>
          </nav>

          <nav class="nav-cluster" aria-label="Liaison">
            <svg class="nav-symbol" viewBox="0 0 24 24" role="button" tabindex="0" aria-label="Cambiar forma de Enfoque">
              <path data-base="M4 4 L20 4 L20 20 L4 20 Z" data-alt="M12 2 L22 12 L12 22 L2 12 Z" d="M4 4 L20 4 L20 20 L4 20 Z"></path>
            </svg>
            <strong><span class="reveal-text">Enfoque</span></strong>
            <a href="#brands"><span class="reveal-text">Frontend</span></a>
            <a href="#agencies"><span class="reveal-text">Producto</span></a>
          </nav>
        </div>

        <div class="hero-status" aria-label="Estado local">
          <span id="peru-time">00:00:00</span>
          <span>Lima</span>
          <span>PER</span>
        </div>

      </header>

      <a class="hero-cta" href="#contact">
        <span>Hablemos</span>
        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </a>

      <div class="hero-title">
        <h1>
          <span><span class="reveal-text"><em>Diego Rutti.</em></span></span>
          <span><span class="reveal-text">Diseño & Reimagino</span></span>
          <span><span class="reveal-text">a quien busca destacar.</span></span>
        </h1>
        <span class="hero-corner corner-a"></span>
        <span class="hero-corner corner-b"></span>
        <span class="hero-corner corner-c"></span>
        <span class="hero-corner corner-d"></span>
      </div>


      <footer class="hero-footer">
        <span>-> V1.0 - 2026</span>
        <nav aria-label="Redes sociales">
          <a href="https://www.behance.net/" target="_blank" rel="noreferrer">BEHANCE</a>
          <span>/</span>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN</a>
          <span>/</span>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GITHUB</a>
        </nav>
        <nav aria-label="Secciones">
          <a href="#projects">PROYECTOS</a>
          <a href="#about">INFO</a>
          <a href="#contact">CONTACTO</a>
        </nav>
      </footer>

    </div>
  </section>

  <section class="portrait-section" id="about">
    <img src="${diegoImage}" alt="Diego" class="portrait-image" />
    <div class="portrait-exit-shade" aria-hidden="true"></div>
    <div class="intro-copy" aria-label="Creo experiencias digitales modernas que combinan diseño, rendimiento e innovación para transformar ideas en productos con impacto">
      <span><em class="copy-glitch-badge"><span class="glitch-stack"><span class="glitch-base">Creo</span><span class="glitch-layer glitch-top" aria-hidden="true">Creo</span><span class="glitch-layer glitch-bottom" aria-hidden="true">Creo</span></span></em> experiencias digitales modernas</span>
      <span>para <em class="copy-glitch-badge"><span class="glitch-stack"><span class="glitch-base">transformar</span><span class="glitch-layer glitch-top" aria-hidden="true">transformar</span><span class="glitch-layer glitch-bottom" aria-hidden="true">transformar</span></span></em> ideas en productos con impacto</span>
    </div>
    <div class="about-block">
      <p class="about-copy">
        Mi nombre es Diego me apasiona el <em>diseño</em> y <em>desarrollo</em> de interfaces modernas para <em>crear</em> espacios atractivos y memorables. Que <em>generan</em> valor y dejan una impresión duradera
      </p>
      <div class="about-info-label" aria-label="Info" tabindex="0">
        <span class="glitch-stack">
          <span class="glitch-base">INFO</span>
          <span class="glitch-layer glitch-top" aria-hidden="true">INFO</span>
          <span class="glitch-layer glitch-bottom" aria-hidden="true">INFO</span>
        </span>
      </div>
    </div>
    <div class="info-copy" aria-label="Básicamente, hago sitios web.">
      <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      <span><em class="copy-glitch-badge"><span class="glitch-stack"><span class="glitch-base">Básicamente</span><span class="glitch-layer glitch-top" aria-hidden="true">Básicamente</span><span class="glitch-layer glitch-bottom" aria-hidden="true">Básicamente</span></span></em>, hago sitios web.</span>
    </div>
  </section>

  <section class="projects" id="projects">
    <canvas class="projects-bg-canvas" aria-hidden="true"></canvas>
    <svg class="path-svg" viewBox="0 0 1600 3200" preserveAspectRatio="xMidYMin meet">
      <defs>
        <linearGradient id="skillsPathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#caff26" />
          <stop offset="38%" stop-color="#5fbd46" />
          <stop offset="72%" stop-color="#33d7c9" />
          <stop offset="100%" stop-color="#caff26" />
        </linearGradient>
      </defs>
      <path
        id="scrollPath"
        d="
          M -320 400

          C 160 -40, 520 140, 610 430
          C 760 860, 260 990, 130 1310

          C -40 1800, 560 1900, 690 2160
          C 800 2360, 550 2410, 460 2640

          C 420 2780, 600 2820, 920 2785
          C 1250 2760, 1650 2680, 2100 2500
        "
      />
    </svg>

    <div class="skills-section-title" aria-label="Mis skills">
      <span>
        <i><em>M</em></i><i>I</i><i>S</i><i>&nbsp;</i><i>S</i><i><em>K</em></i><i>I</i><i>L</i><i>L</i><i><em>S</em></i>
      </span>
    </div>

    <div class="layout">
      <aside class="left">
       
        <div class="project-item" data-img="2">
          <h2>Angular</h2>
        </div>

        <div class="project-item" data-img="3">
          <h2>React</h2>
        </div>

        <div class="project-item" data-img="4">
          <h2>TypeScript</h2>
        </div>

        <div class="project-item" data-img="5">
          <h2>JavaScript</h2>
        </div>

        <div class="project-item" data-img="6">
          <h2>HTML</h2>
        </div>

        <div class="project-item" data-img="6">
          <h2>CSS</h2>
        </div>

        <div class="project-item" data-img="6">
          <h2>Gsap</h2>
        </div>

        <div class="project-item" data-img="6">
          <h2>WebGL</h2>
        </div>

         <div class="project-item" data-img="6">
          <h2>ThreeJs</h2>
        </div>

        <div class="project-item" data-img="7">
          <h2>Vite</h2>
        </div>

        <div class="project-item" data-img="9">
          <h2>Java</h2>
        </div>

        <div class="project-item" data-img="10">
          <h2>Spring Boot</h2>
        </div>

         <div class="project-item" data-img="15">
          <h2>Jenkins</h2>
        </div>

        <div class="project-item" data-img="15">
          <h2>Git, GitLab, GitHub</h2>
        </div>

        <div class="project-item" data-img="11">
          <h2>Node.js</h2>
        </div>

        <div class="project-item" data-img="12">
          <h2>PHP</h2>
        </div>

        <div class="project-item" data-img="14">
          <h2>PostgreSQL</h2>
        </div>

        <div class="project-item" data-img="15">
          <h2>Oracle</h2>
        </div>
      </aside>

    </div>
  </section>

  <section class="glow-section" id="glow">
    <canvas class="glow-canvas" aria-hidden="true"></canvas>
    <div class="glow-section-grain" aria-hidden="true"></div>
    <div class="glow-content">
      <div class="projects-section-title" aria-label="Mis proyectos">
        <span>MIS PROYECTOS</span>
      </div>
      <p class="projects-section-note">Cada proyecto es una oportunidad para aprender, experimentar y superar mis limites.</p>
      <div class="case-viewport" aria-label="Proyectos destacados">
        <div class="case-track">
          <article class="case-card is-featured">
            <h3>R-K</h3>
            <p>Identity + Art Direction</p>
            <img src="${capOne}" alt="Proyecto R-K" />
          </article>
          <div class="case-stack">
            <article class="case-card is-small">
              <h3>Prop Films</h3>
              <p>Exploration</p>
              <img src="${capTwo}" alt="Proyecto Prop Films" />
            </article>
            <article class="case-card is-small">
              <h3>Buyt Bags</h3>
              <p>Web Development</p>
              <img src="${capThree}" alt="Proyecto Buyt Bags" />
            </article>
          </div>
          <article class="case-card is-featured">
            <h3>Interface Lab</h3>
            <p>Creative Frontend</p>
            <img src="${capFour}" alt="Proyecto Interface Lab" />
          </article>
          <article class="case-card is-medium">
            <h3>Motion UI</h3>
            <p>Interaction System</p>
            <img src="${capFive}" alt="Proyecto Motion UI" />
          </article>
          <div class="case-stack">
            <article class="case-card is-small">
              <h3>Visual Grid</h3>
              <p>Layout Studies</p>
              <img src="${capTwo}" alt="Proyecto Visual Grid" />
            </article>
            <article class="case-card is-small">
              <h3>Signal Kit</h3>
              <p>Interface Details</p>
              <img src="${capThree}" alt="Proyecto Signal Kit" />
            </article>
          </div>
          <article class="case-card is-featured">
            <h3>Data Flow</h3>
            <p>Product Experience</p>
            <img src="${capSix}" alt="Proyecto Data Flow" />
          </article>
        </div>
      </div>
    </div>
  </section>

  <section class="black-section" id="contact">
    <h2 class="contact-title">Contacto</h2>
    <div class="contact-details" aria-label="Datos de contacto">
      <a href="tel:+51991127220">+51 991127220</a>
      <a href="mailto:diegorutti26@gmail.com">diegorutti26@gmail.com</a>
      <span>LIM, PERU</span>
    </div>
    <img class="contact-portrait" src="${dmonImage}" alt="Diego Rutti" />
    <nav class="contact-socials" aria-label="Redes sociales">
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <span>LinkedIn</span>
        <strong>@diegorutti</strong>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <span>Facebook</span>
        <strong>@diegorutti</strong>
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <span>Twitter</span>
        <strong>@diegorutti</strong>
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <span>Instagram</span>
        <strong>@diegorutti</strong>
      </a>
    </nav>
  </section>

  <aside class="skills-orbit-panel" aria-label="Icono de skill activo">
    <div class="skills-orbit-shell">
      <span class="skills-orbit-ring" aria-hidden="true"></span>
      <span class="skills-orbit-ring is-secondary" aria-hidden="true"></span>
      <div class="skills-orbit-center">
        <img class="skills-orbit-center-icon" src="${angularIcon}" alt="" />
      </div>
      ${skillIcons.slice(1).map((skill, index) => `
        <div class="skills-orbit-node orbit-node-${index + 1}" data-skill-index="${index + 1}">
          <img src="${skill.icon}" alt="${skill.label}" />
        </div>
      `).join("")}
    </div>
    <p class="skills-orbit-name">Angular</p>
  </aside>

  <aside class="section-preview" aria-label="Vista previa de seccion actual">
    <a href="#top" class="section-preview-item is-active" data-preview=".smoke-hero" aria-label="Ir a Hero">
      <span class="section-preview-frame"><img src="${previewHero}" alt="" class="section-preview-image" /></span>
      <span class="section-preview-label">INICIO</span>
    </a>
    <a href="#about" class="section-preview-item" data-preview=".portrait-section" aria-label="Ir a Info">
      <span class="section-preview-frame"><img src="${previewAbout}" alt="" class="section-preview-image" /></span>
      <span class="section-preview-label">Info</span>
    </a>
    <a href="#projects" class="section-preview-item" data-preview=".projects" aria-label="Ir a Work">
      <span class="section-preview-frame"><img src="${previewProjects}" alt="" class="section-preview-image" /></span>
      <span class="section-preview-label">SKILLS</span>
    </a>
    <a href="#glow" class="section-preview-item" data-preview=".glow-section" aria-label="Ir a Proyectos">
      <span class="section-preview-frame"><img src="${previewWork}" alt="" class="section-preview-image" /></span>
      <span class="section-preview-label">PROYECTOS</span>
    </a>
    <a href="#contact" class="section-preview-item" data-preview=".black-section" aria-label="Ir a Contacto">
      <span class="section-preview-frame"><img src="${previewContact}" alt="" class="section-preview-image" /></span>
      <span class="section-preview-label">CONTACTO</span>
    </a>
  </aside>
`;

const peruTime = document.querySelector<HTMLElement>("#peru-time");
const sectionPreviewItems = gsap.utils.toArray<HTMLElement>(".section-preview-item");

function setActiveSectionPreview(trigger: string) {
  const activeIndex = sectionPreviewItems.findIndex((item) => item.dataset.preview === trigger);
  const maxVisibleItems = Math.min(3, sectionPreviewItems.length);
  const maxVisibleStart = Math.max(sectionPreviewItems.length - maxVisibleItems, 0);
  const visibleStart = activeIndex >= sectionPreviewItems.length - 1
    ? maxVisibleStart
    : Math.min(Math.max(activeIndex - 1, 0), maxVisibleStart);

  sectionPreviewItems.forEach((item) => {
    const itemIndex = sectionPreviewItems.indexOf(item);
    const isVisible = itemIndex >= visibleStart && itemIndex < visibleStart + maxVisibleItems;

    item.classList.toggle("is-active", item.dataset.preview === trigger);
    item.classList.toggle("is-preview-hidden", !isVisible);
  });
}

function updatePeruTime() {
  if (!peruTime) return;

  peruTime.textContent = new Intl.DateTimeFormat("es-PE", {
    timeZone: "America/Lima",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(new Date());
}

updatePeruTime();
window.setInterval(updatePeruTime, 1000);

const navClusters = gsap.utils.toArray<HTMLElement>(".nav-cluster");

function closeNavCluster(cluster: HTMLElement) {
  const path = cluster.querySelector<SVGPathElement>(".nav-symbol path");
  const links = gsap.utils.toArray<HTMLElement>("a", cluster);
  const basePath = path?.dataset.base;

  cluster.classList.remove("is-morphed");

  if (path && basePath) {
    gsap.to(path, {
      attr: { d: basePath },
      duration: 0.42,
      ease: "power3.inOut"
    });
  }

  gsap.to(links, {
    y: -8,
    opacity: 0,
    duration: 0.24,
    ease: "power2.in",
    stagger: 0.025,
    overwrite: true
  });
}

navClusters.forEach((cluster) => {
  const symbol = cluster.querySelector<SVGSVGElement>(".nav-symbol");
  const title = cluster.querySelector<HTMLElement>("strong");
  const path = cluster.querySelector<SVGPathElement>(".nav-symbol path");
  const links = gsap.utils.toArray<HTMLElement>("a", cluster);
  const linkTexts = gsap.utils.toArray<HTMLElement>("a .reveal-text", cluster);

  if (!symbol || !path || !path.dataset.base || !path.dataset.alt) return;

  const morphCluster = () => {
    const shouldOpen = !cluster.classList.contains("is-morphed");

    if (!shouldOpen) {
      closeNavCluster(cluster);
      return;
    }

    cluster.classList.add("is-morphed");
    const nextPath = path.dataset.alt;

    if (!nextPath) return;

    gsap.to(path, {
      attr: { d: nextPath },
      duration: 0.58,
      ease: "power3.inOut"
    });

    gsap.set(linkTexts, { yPercent: 0 });
    gsap.fromTo(links, {
      y: 14,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      stagger: 0.055
    });
  };

  cluster.classList.add("is-morphed");
  gsap.set(path, { attr: { d: path.dataset.alt } });
  gsap.set(linkTexts, { yPercent: 0 });
  gsap.set(links, { y: 0, opacity: 1, pointerEvents: "auto" });

  symbol.addEventListener("click", morphCluster);
  title?.addEventListener("click", morphCluster);
  symbol.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    morphCluster();
  });
});

const smokeCanvas = document.querySelector<HTMLCanvasElement>(".smoke-canvas");
const glowCanvas = document.querySelector<HTMLCanvasElement>(".glow-canvas");

if (!smokeCanvas) {
  throw new Error("Smoke canvas element was not found.");
}

const smokeCanvasEl = smokeCanvas;

const smokeScene = new THREE.Scene();
const smokeCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const smokeRenderer = new THREE.WebGLRenderer({
  canvas: smokeCanvasEl,
  antialias: false,
  alpha: true
});

const canvasPixelRatio = Math.min(window.devicePixelRatio, 1.35);

smokeRenderer.setPixelRatio(canvasPixelRatio);
smokeRenderer.setClearColor(0x050505, 1);

const smokeUniforms = {
  uTime: { value: 0 },
  uResolution: { value: new THREE.Vector2(1, 1) }
};

const smokeMaterial = new THREE.ShaderMaterial({
  uniforms: smokeUniforms,
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  fragmentShader: `
    precision highp float;

    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);

      return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;

      for (int i = 0; i < 5; i++) {
        value += amplitude * noise(p);
        p = mat2(1.6, 1.2, -1.2, 1.6) * p;
        amplitude *= 0.52;
      }

      return value;
    }

    void main() {
      vec2 uv = vUv;
      float aspect = uResolution.x / uResolution.y;
      vec2 p = vec2((uv.x - 0.5) * aspect, uv.y - 0.36);

      float t = uTime * 0.08;
      float introProgress = smoothstep(0.0, 2.7, uTime);
      float expansion = mix(5.8, 1.0, introProgress);
      vec2 expandingP = p * expansion;
      vec2 wideDrift = vec2(sin(uTime * 0.06), cos(uTime * 0.045)) * 0.72;
      vec2 softDrift = vec2(cos(uTime * 0.035), sin(uTime * 0.055)) * 0.54;

      float smoke = fbm(expandingP * 2.35 + wideDrift + vec2(t * 1.2, -t));
      smoke += 0.56 * fbm(expandingP * 4.7 + softDrift + vec2(-t * 0.6, t * 1.7));
      smoke = smoothstep(0.39, 1.13, smoke);

      float source = smoothstep(0.42 + introProgress * 1.1, 0.02, length(p * vec2(0.78, 1.0)));
      float centerGlow = smoothstep(1.28, 0.06, length(p * vec2(0.58, 0.88)));
      float topMist = smoothstep(-0.18, 0.92, uv.y);
      float bottomFade = smoothstep(0.0, 0.22, uv.y);

      float intensity = smoke * centerGlow * topMist * source;
      vec3 deepGreen = vec3(0.024, 0.22, 0.09);
      vec3 acidGreen = vec3(0.22, 0.76, 0.28);
      vec3 color = mix(deepGreen, acidGreen, intensity);

      color *= 0.28 + intensity * 1.02;
      color *= bottomFade;
      color = mix(color, vec3(0.01, 0.025, 0.015), 1.0 - centerGlow * 0.55);
      color *= smoothstep(0.0, 0.7, introProgress);

      gl_FragColor = vec4(color, 1.0);
    }
  `
});

smokeScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), smokeMaterial));

function resizeSmoke() {
  const width = smokeCanvasEl.clientWidth;
  const height = smokeCanvasEl.clientHeight;

  smokeRenderer.setSize(width, height, false);
  smokeUniforms.uResolution.value.set(width, height);
}

let smokeStartedAt: number | null = null;
let smokeRenderActive = true;

function startSmoke() {
  smokeStartedAt = performance.now();
}

function renderSmoke(time: number) {
  if (!smokeRenderActive) {
    requestAnimationFrame(renderSmoke);
    return;
  }

  smokeUniforms.uTime.value = smokeStartedAt === null ? 0 : (time - smokeStartedAt) * 0.001;
  smokeRenderer.render(smokeScene, smokeCamera);
  requestAnimationFrame(renderSmoke);
}

resizeSmoke();
window.addEventListener("resize", resizeSmoke);
requestAnimationFrame(renderSmoke);

if (glowCanvas) {
  const glowCanvasEl = glowCanvas;
  const glowScene = new THREE.Scene();
  const glowCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const glowRenderer = new THREE.WebGLRenderer({
    canvas: glowCanvasEl,
    antialias: false,
    alpha: false
  });
  const glowUniforms = {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(1, 1) }
  };
  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: glowUniforms,
    vertexShader: `
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
    fragmentShader: `
      precision highp float;

      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(41.7, 289.1))) * 45758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);

        return mix(
          mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;

        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = mat2(1.62, 1.08, -1.08, 1.62) * p;
          a *= 0.52;
        }

        return v;
      }

      float glowBlob(vec2 uv, vec2 center, vec2 size) {
        vec2 p = (uv - center) / size;
        return exp(-dot(p, p) * 1.65);
      }

      void main() {
        vec2 uv = vUv;
        float aspect = uResolution.x / uResolution.y;
        vec2 p = vec2((uv.x - 0.5) * aspect + 0.5, uv.y);
        float t = uTime * 0.13;
        vec2 drift = vec2(t, sin(uTime * 0.18) * 0.08);

        float field = fbm(p * 2.15 - drift);
        field += 0.55 * fbm(p * 4.1 + vec2(-t * 0.8, t * 0.35));
        field = smoothstep(0.28, 1.04, field);

        float leftShade = smoothstep(0.36, 0.0, uv.x);
        float mainGlow = glowBlob(uv, vec2(0.78 + sin(uTime * 0.11) * 0.06, 0.54 + cos(uTime * 0.09) * 0.08), vec2(0.56, 0.5));
        float hotGlow = glowBlob(uv, vec2(1.02 + sin(uTime * 0.07) * 0.08, 0.26 + cos(uTime * 0.13) * 0.1), vec2(0.42, 0.34));
        float lowerGlow = glowBlob(uv, vec2(0.82 + cos(uTime * 0.1) * 0.05, 0.88), vec2(0.54, 0.35));
        float darkPool = glowBlob(uv, vec2(0.22 + sin(uTime * 0.08) * 0.04, 0.72), vec2(0.34, 0.3));

        vec3 darkBlue = vec3(0.035, 0.075, 0.095);
        vec3 deepGreen = vec3(0.0, 0.16, 0.025);
        vec3 vividGreen = vec3(0.0, 0.86, 0.02);
        vec3 acid = vec3(0.72, 1.0, 0.04);

        vec3 color = mix(darkBlue, deepGreen, smoothstep(0.04, 0.55, uv.x));
        color = mix(color, vividGreen, clamp(mainGlow * 0.78 + field * 0.28, 0.0, 1.0));
        color = mix(color, acid, clamp(hotGlow * 0.92 + lowerGlow * 0.34, 0.0, 1.0));
        color = mix(color, vec3(0.0, 0.025, 0.01), darkPool * 0.86);
        color = mix(color, darkBlue * 0.65, leftShade * 0.82);
        color += (field - 0.5) * 0.045;

        gl_FragColor = vec4(color, 1.0);
      }
    `
  });

  glowScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), glowMaterial));
  glowRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2));

  function resizeGlow() {
    const width = glowCanvasEl.clientWidth;
    const height = glowCanvasEl.clientHeight;

    glowRenderer.setSize(width, height, false);
    glowUniforms.uResolution.value.set(width, height);
  }

  function renderGlow(time: number) {
    glowUniforms.uTime.value = time * 0.001;
    glowRenderer.render(glowScene, glowCamera);
    requestAnimationFrame(renderGlow);
  }

  resizeGlow();
  window.addEventListener("resize", resizeGlow);
  requestAnimationFrame(renderGlow);
}

const projectsCanvas = document.querySelector<HTMLCanvasElement>(".projects-bg-canvas");

if (!projectsCanvas) {
  throw new Error("Projects background canvas element was not found.");
}

const projectsCanvasEl = projectsCanvas;
const projectsScene = new THREE.Scene();
const projectsCamera = new THREE.PerspectiveCamera(42, 1, 0.1, 20);
projectsCamera.position.z = 2.6;
const projectsParticleBounds = {
  x: 1.08,
  y: 1.08
};
const projectsRenderer = new THREE.WebGLRenderer({
  canvas: projectsCanvasEl,
  antialias: false,
  alpha: false
});

projectsRenderer.setPixelRatio(canvasPixelRatio);

const projectsUniforms = {
  uTime: { value: 0 },
  uResolution: { value: new THREE.Vector2(1, 1) },
  uFill: { value: 0 },
  uScroll: { value: 0 }
};

const projectsMaterial = new THREE.ShaderMaterial({
  uniforms: projectsUniforms,
  depthWrite: false,
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    precision highp float;

    uniform float uTime;
    uniform float uFill;
    uniform float uScroll;
    uniform vec2 uResolution;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
      );
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;

      for (int i = 0; i < 4; i++) {
        value += amplitude * noise(p);
        p = p * 2.02 + vec2(17.13, 9.27);
        amplitude *= 0.52;
      }

      return value;
    }

    void main() {
      vec2 uv = vUv;
      vec2 centered = uv - 0.5;
      float angle = uScroll * 1.65 + sin(uScroll * 3.14159) * 0.28;
      mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      float flip = sin(uScroll * 3.14159 * 1.35);
      centered.y *= 0.74 + flip * 0.26;
      centered.x += centered.y * flip * 0.32;
      vec2 spunUv = rot * centered + 0.5;
      spunUv.y += flip * 0.14 * (spunUv.y - 0.5);
      vec2 aspectUv = vec2(spunUv.x * (uResolution.x / max(uResolution.y, 1.0)), spunUv.y);

      float t = uTime * 0.08;
      vec2 lowerP = aspectUv - vec2(0.18, 0.38);
      float wideSmoke = fbm(lowerP * 1.9 + vec2(t * 1.25, -t * 0.7));
      wideSmoke += 0.58 * fbm(lowerP * 3.8 + vec2(-t * 0.7, t * 1.4));
      wideSmoke += 0.28 * fbm(lowerP * 7.4 + vec2(uScroll * 1.8, -uTime * 0.035));
      float scratch = fbm(lowerP * 19.0 + vec2(-uTime * 0.09, uScroll * 2.4));
      wideSmoke += (scratch - 0.5) * 0.26;
      float smoke = smoothstep(0.42, 0.98, wideSmoke);
      smoke *= 0.82 + scratch * 0.58;

      float lowerSource = 1.0 - length((uv - vec2(0.42, 0.44)) * vec2(0.95, 1.28));
      float source = smoothstep(-0.25, 0.72, lowerSource);
      float verticalBand = smoothstep(0.12, 0.34, uv.y) * (1.0 - smoothstep(0.78, 0.98, uv.y));
      float topBlack = smoothstep(0.66, 1.0, uv.y);
      float bottomBlack = 1.0 - smoothstep(0.02, 0.22, uv.y);
      float topSmokeLimit = 1.0 - smoothstep(0.56, 0.82, uv.y);
      float leftShadow = 1.0 - smoothstep(0.0, 0.34, uv.x);
      float fillBreath = smoothstep(uFill - 0.12, uFill + 0.18, uv.x);

      vec3 black = vec3(0.0, 0.004, 0.002);
      vec3 deepGreen = vec3(0.019, 0.105, 0.04);
      vec3 moss = vec3(0.105, 0.29, 0.08);
      vec3 acid = vec3(0.28, 0.64, 0.19);

      float rollLight = 0.72 + abs(flip) * 0.42;
      float intensity = smoke * source * verticalBand * (0.18 + topSmokeLimit * 0.82);
      float edgeScratch = smoothstep(0.42, 0.76, scratch) * (1.0 - smoothstep(0.84, 1.0, scratch));
      vec3 color = mix(black, deepGreen, intensity * 1.16 * rollLight);
      color = mix(color, moss, intensity * (1.0 - fillBreath) * 0.48 * rollLight);
      color += acid * intensity * 0.065 * rollLight;
      color += acid * edgeScratch * intensity * 0.08;
      color *= 1.0 - leftShadow * 0.52;
      color = mix(color, black, topBlack * 0.92);
      color = mix(color, black, bottomBlack * 0.78);

      gl_FragColor = vec4(color, 1.0);
    }
  `
});

const projectsPlane = new THREE.Mesh(new THREE.PlaneGeometry(5.4, 3.6, 32, 32), projectsMaterial);
projectsPlane.renderOrder = 0;
projectsScene.add(projectsPlane);

const projectParticleCount = 440;
const projectParticlePositions = new Float32Array(projectParticleCount * 3);
const projectParticleVelocities = new Float32Array(projectParticleCount * 2);
let nextProjectParticleIndex = 0;

for (let index = 0; index < projectParticleCount; index += 1) {
  const positionIndex = index * 3;
  const velocityIndex = index * 2;

  projectParticlePositions[positionIndex] = (Math.random() * 2 - 1) * projectsParticleBounds.x;
  projectParticlePositions[positionIndex + 1] = (Math.random() * 2 - 1) * projectsParticleBounds.y;
  projectParticlePositions[positionIndex + 2] = 0;
  projectParticleVelocities[velocityIndex] = (Math.random() - 0.5) * 0.035;
  projectParticleVelocities[velocityIndex + 1] = (Math.random() - 0.5) * 0.025;
}

function resetProjectParticle(index: number, x: number, y: number) {
  const positionIndex = index * 3;
  const velocityIndex = index * 2;

  projectParticlePositions[positionIndex] = x;
  projectParticlePositions[positionIndex + 1] = y;
  projectParticlePositions[positionIndex + 2] = 0;
  projectParticleVelocities[velocityIndex] = (Math.random() - 0.5) * 0.12;
  projectParticleVelocities[velocityIndex + 1] = (Math.random() - 0.5) * 0.095;
}

function getProjectsCanvasPoint(event: MouseEvent) {
  const rect = projectsCanvasEl.getBoundingClientRect();
  const ndcX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  const ndcY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
  const rayPoint = new THREE.Vector3(ndcX, ndcY, 0.5).unproject(projectsCamera);
  const direction = rayPoint.sub(projectsCamera.position).normalize();
  const distance = -projectsCamera.position.z / direction.z;

  return projectsCamera.position.clone().add(direction.multiplyScalar(distance));
}

projectsCanvasEl.addEventListener("click", (event) => {
  const clickPoint = getProjectsCanvasPoint(event);

  for (let count = 0; count < 8; count += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 0.055;
    const index = nextProjectParticleIndex % projectParticleCount;

    resetProjectParticle(
      index,
      clickPoint.x + Math.cos(angle) * radius,
      clickPoint.y + Math.sin(angle) * radius
    );

    nextProjectParticleIndex += 1;
  }
});

const projectParticlesGeometry = new THREE.BufferGeometry();
projectParticlesGeometry.setAttribute("position", new THREE.BufferAttribute(projectParticlePositions, 3));

const projectParticlesMaterial = new THREE.PointsMaterial({
  color: "#f2fff4",
  size: 2.1,
  sizeAttenuation: false,
  transparent: true,
  opacity: 0,
  depthWrite: false,
  depthTest: false
});

const projectParticles = new THREE.Points(
  projectParticlesGeometry,
  projectParticlesMaterial
);
projectParticles.renderOrder = 2;
projectsScene.add(projectParticles);

const projectMaxConnections = 560;
const projectConnectionPositions = new Float32Array(projectMaxConnections * 2 * 3);
const projectConnectionsGeometry = new THREE.BufferGeometry();
projectConnectionsGeometry.setAttribute("position", new THREE.BufferAttribute(projectConnectionPositions, 3));
projectConnectionsGeometry.setDrawRange(0, 0);

const projectConnectionsMaterial = new THREE.LineBasicMaterial({
  color: "#e4ffd9",
  transparent: true,
  opacity: 0,
  depthWrite: false,
  depthTest: false
});

const projectConnections = new THREE.LineSegments(
  projectConnectionsGeometry,
  projectConnectionsMaterial
);
projectConnections.renderOrder = 1;
projectsScene.add(projectConnections);

let projectsLastFrame = 0;
let projectsScrollProgress = 0;
let projectsRotationEnabled = false;
let projectsRotationBaseProgress = 0;
let projectsRenderActive = false;

function resetProjectsBackgroundMotion() {
  projectsRotationEnabled = false;
  projectsRotationBaseProgress = projectsScrollProgress;
  gsap.to(projectsUniforms.uScroll, {
    value: 0,
    duration: 0.45,
    ease: "power2.out",
    overwrite: true
  });
  gsap.to(projectsUniforms.uFill, {
    value: 0,
    duration: 0.45,
    ease: "power2.out",
    overwrite: true
  });
}

function enableProjectsBackgroundMotion() {
  projectsRotationEnabled = true;
  projectsRotationBaseProgress = projectsScrollProgress;
  gsap.to(projectsUniforms.uScroll, {
    value: 0,
    duration: 0.35,
    ease: "power2.out",
    overwrite: true
  });
}

function resizeProjectsBackground() {
  const width = projectsCanvasEl.clientWidth;
  const height = projectsCanvasEl.clientHeight;

  projectsRenderer.setSize(width, height, false);
  projectsUniforms.uResolution.value.set(width, height);
  projectsCamera.aspect = width / Math.max(height, 1);
  projectsCamera.updateProjectionMatrix();

  const visibleHeight = 2 * Math.tan(THREE.MathUtils.degToRad(projectsCamera.fov * 0.5)) * projectsCamera.position.z;
  projectsParticleBounds.y = visibleHeight * 0.55;
  projectsParticleBounds.x = projectsParticleBounds.y * projectsCamera.aspect;
}

function renderProjectsBackground(time: number) {
  if (!projectsRenderActive) {
    projectsLastFrame = 0;
    requestAnimationFrame(renderProjectsBackground);
    return;
  }

  projectsUniforms.uTime.value = time * 0.001;
  const delta = Math.min(0.04, projectsLastFrame === 0 ? 0.016 : (time - projectsLastFrame) * 0.001);
  projectsLastFrame = time;

  const scrollDrift = projectsUniforms.uScroll.value;
  const horizontalTurn = Math.sin(scrollDrift * Math.PI * 1.15);
  projectsPlane.rotation.x = horizontalTurn * 0.58;
  projectsPlane.rotation.y = Math.sin(scrollDrift * Math.PI * 0.8) * 0.08;
  projectsPlane.position.y = horizontalTurn * -0.12;

  for (let index = 0; index < projectParticleCount; index += 1) {
    const positionIndex = index * 3;
    const velocityIndex = index * 2;

    projectParticlePositions[positionIndex] += (projectParticleVelocities[velocityIndex] - scrollDrift * 0.012) * delta;
    projectParticlePositions[positionIndex + 1] += (projectParticleVelocities[velocityIndex + 1] + Math.sin(time * 0.00035 + index) * 0.006) * delta;

    if (projectParticlePositions[positionIndex] < -projectsParticleBounds.x) projectParticlePositions[positionIndex] = projectsParticleBounds.x;
    if (projectParticlePositions[positionIndex] > projectsParticleBounds.x) projectParticlePositions[positionIndex] = -projectsParticleBounds.x;
    if (projectParticlePositions[positionIndex + 1] < -projectsParticleBounds.y) projectParticlePositions[positionIndex + 1] = projectsParticleBounds.y;
    if (projectParticlePositions[positionIndex + 1] > projectsParticleBounds.y) projectParticlePositions[positionIndex + 1] = -projectsParticleBounds.y;
  }

  let connectionVertexIndex = 0;

  for (let a = 0; a < projectParticleCount; a += 1) {
    const aIndex = a * 3;

    for (let b = a + 1; b < projectParticleCount; b += 1) {
      if (connectionVertexIndex >= projectMaxConnections * 2 * 3) break;

      const bIndex = b * 3;
      const dx = projectParticlePositions[aIndex] - projectParticlePositions[bIndex];
      const dy = projectParticlePositions[aIndex + 1] - projectParticlePositions[bIndex + 1];
      const distanceSquared = dx * dx + dy * dy;

      if (distanceSquared > 0.0072) continue;

      projectConnectionPositions[connectionVertexIndex] = projectParticlePositions[aIndex];
      projectConnectionPositions[connectionVertexIndex + 1] = projectParticlePositions[aIndex + 1];
      projectConnectionPositions[connectionVertexIndex + 2] = 0;
      projectConnectionPositions[connectionVertexIndex + 3] = projectParticlePositions[bIndex];
      projectConnectionPositions[connectionVertexIndex + 4] = projectParticlePositions[bIndex + 1];
      projectConnectionPositions[connectionVertexIndex + 5] = 0;
      connectionVertexIndex += 6;
    }
  }

  projectParticlesGeometry.attributes.position.needsUpdate = true;
  projectConnectionsGeometry.attributes.position.needsUpdate = true;
  projectConnectionsGeometry.setDrawRange(0, connectionVertexIndex / 3);
  projectsRenderer.render(projectsScene, projectsCamera);
  requestAnimationFrame(renderProjectsBackground);
}

resizeProjectsBackground();
window.addEventListener("resize", resizeProjectsBackground);
requestAnimationFrame(renderProjectsBackground);

gsap.registerPlugin(ScrollTrigger);

[
  { trigger: ".smoke-hero", start: "top center", end: "bottom center" },
  { trigger: ".portrait-section", start: "top center", end: "bottom center" },
  { trigger: ".projects", start: "top center", end: "bottom center" },
  { trigger: ".glow-section", start: "top center", end: "bottom top" },
  { trigger: ".black-section", start: "top 12%", end: "bottom center" }
].forEach(({ trigger, start, end }) => {
  ScrollTrigger.create({
    trigger,
    start,
    end,
    onEnter: () => setActiveSectionPreview(trigger),
    onEnterBack: () => setActiveSectionPreview(trigger)
  });
});

setActiveSectionPreview(".smoke-hero");

ScrollTrigger.create({
  trigger: ".smoke-hero",
  start: "top bottom",
  end: "bottom top",
  onEnter: () => {
    smokeRenderActive = true;
  },
  onEnterBack: () => {
    smokeRenderActive = true;
  },
  onLeave: () => {
    smokeRenderActive = false;
  },
  onLeaveBack: () => {
    smokeRenderActive = false;
  }
});

ScrollTrigger.create({
  trigger: ".projects",
  start: "top bottom",
  end: "bottom top",
  onEnter: () => {
    projectsRenderActive = true;
  },
  onEnterBack: () => {
    projectsRenderActive = true;
  },
  onLeave: () => {
    projectsRenderActive = false;
  },
  onLeaveBack: () => {
    projectsRenderActive = false;
  }
});

gsap.set(".reveal-text", { yPercent: 115 });
gsap.set(".nav-cluster a", { y: 0, opacity: 1, pointerEvents: "auto" });
gsap.set(".hero-corner", { scale: 0 });
gsap.set(".hero-cta", { xPercent: -110 });
gsap.set([".brand-mark", ".hero-status"], { opacity: 0 });
gsap.set(".nav-symbol", { scale: 0 });
gsap.set(".hero-footer", { "--footer-line-scale": 0 });
gsap.set(".hero-footer > *", { opacity: 0 });

const heroTimeline = gsap.timeline({
  paused: true,
  defaults: { ease: "power3.out" }
});

heroTimeline
  .to(".hero-title p .reveal-text", {
    yPercent: 0,
    duration: 0.82
  }, 0)
  .to(".hero-title h1 > span:nth-child(1) .reveal-text", {
    yPercent: 0,
    duration: 0.82
  }, 0.16)
  .to(".hero-title h1 > span:nth-child(2) .reveal-text", {
    yPercent: 0,
    duration: 0.82
  }, 0.3)
  .to(".hero-title h1 > span:nth-child(3) .reveal-text", {
    yPercent: 0,
    duration: 0.82
  }, 0.44)
  .to([
    ".nav-cluster strong .reveal-text",
    ".hero-era .reveal-text"
  ], {
    yPercent: 0,
    duration: 0.82,
    stagger: 0.03
  }, 0.34)
  .to(".nav-symbol", {
    scale: 1,
    duration: 0.45,
    stagger: 0.035
  }, 0.34)
  .to(".nav-cluster a:nth-of-type(1) .reveal-text", {
    yPercent: 0,
    duration: 0.78,
    stagger: 0.03
  }, 0.5)
  .to(".nav-cluster a:nth-of-type(2) .reveal-text", {
    yPercent: 0,
    duration: 0.78,
    stagger: 0.03
  }, 0.64)
  .to([".brand-mark", ".hero-status"], {
    opacity: 1,
    duration: 0.62,
    stagger: 0.06
  }, 0.58)
  .to(".hero-corner", {
    scale: 1,
    duration: 0.55,
    stagger: 0.025
  }, 0.42)
  .to(".hero-cta", {
    xPercent: 0,
    duration: 0.78
  }, 0.76)
  .to(".hero-footer", {
    "--footer-line-scale": 1,
    duration: 0.78
  }, 0.72)
  .to(".hero-footer > *", {
    opacity: 1,
    duration: 0.58,
    stagger: 0.08
  }, 1.2);

function replayHeroIntro() {
  heroTimeline.pause(0);
  gsap.set([
    ".hero-title",
    ".hero-footer",
    ".hero-cta"
  ], {
    opacity: 1,
    y: 0
  });
  gsap.set([
    ".hero-title .reveal-text",
    ".nav-cluster strong .reveal-text",
    ".nav-cluster a .reveal-text"
  ], {
    yPercent: 115
  });
  gsap.set(".hero-corner", { scale: 0 });
  gsap.set(".hero-cta", { xPercent: -110 });
  gsap.set([".brand-mark", ".hero-status"], { opacity: 0 });
  gsap.set(".nav-symbol", { scale: 0 });
  gsap.set(".hero-footer", { "--footer-line-scale": 0 });
  gsap.set(".hero-footer > *", { opacity: 0 });
  heroTimeline.restart();
}

ScrollTrigger.create({
  trigger: ".smoke-hero",
  start: "bottom 82%",
  end: "bottom top",
  onEnterBack: replayHeroIntro
});

gsap.timeline({ defaults: { ease: "power3.out" } })
  .set(".preloader-intro", { autoAlpha: 1 })
  .fromTo(".intro-word:nth-child(1) .intro-char", {
    yPercent: 230,
    rotation: 8
  }, {
    yPercent: 0,
    rotation: 0,
    duration: 0.68,
    stagger: {
      each: 0.045,
      from: "end"
    }
  })
  .fromTo(".intro-word:nth-child(2) .intro-char", {
    yPercent: 230,
    rotation: 8
  }, {
    yPercent: 0,
    rotation: 0,
    duration: 0.68,
    stagger: {
      each: 0.045,
      from: "start"
    }
  }, "<")
  .to(".intro-word:nth-child(1) .intro-char", {
    yPercent: -230,
    rotation: -8,
    duration: 0.62,
    ease: "power3.inOut",
    stagger: {
      each: 0.045,
      from: "start"
    }
  }, "+=0.36")
  .to(".intro-word:nth-child(2) .intro-char", {
    yPercent: -230,
    rotation: -8,
    duration: 0.62,
    ease: "power3.inOut",
    stagger: {
      each: 0.045,
      from: "end"
    }
  }, "<")
  .call(() => {
    startSmoke();
    gsap.delayedCall(2.7, () => {
      document.body.classList.remove("is-scroll-locked");
      lenis.start();
      heroTimeline.play();
    });
  }, undefined, "-=0.38")
  .to(".preloader-intro", {
    autoAlpha: 0,
    duration: 0.9,
    ease: "power2.out"
  }, "+=0.32");

gsap.to([".hero-footer", ".hero-title", ".hero-cta"], {
  opacity: 0,
  y: 24,
  ease: "none",
  scrollTrigger: {
    trigger: ".smoke-hero",
    start: "top top",
    end: "55% top",
    scrub: true
  }
});

/* ========================= */
/* LENIS SMOOTH SCROLL */
/* ========================= */

const lenis = new Lenis({
  duration: 1.45,
  smoothWheel: true,
  syncTouch: false,
  wheelMultiplier: 0.8,
  touchMultiplier: 1,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

lenis.stop();

sectionPreviewItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const hash = item.getAttribute("href");
    const target = hash ? document.querySelector<HTMLElement>(hash) : null;

    if (!target) return;

    event.preventDefault();
    const scrollTarget = hash === "#contact"
      ? target.offsetTop + window.innerHeight * 0.82
      : target;

    lenis.scrollTo(scrollTarget, {
      duration: 1.35,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  });
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

gsap.set(".portrait-image", {
  opacity: 0.48,
  filter: "brightness(0.24) blur(18px)",
  scale: 1.02,
  x: 0
});
gsap.set(".intro-copy span", {
  y: 90,
  autoAlpha: 0,
  filter: "blur(18px)"
});
gsap.set(".intro-copy .copy-glitch-badge", {
  y: 0,
  autoAlpha: 1
});
gsap.set(".about-block", {
  y: 70,
  opacity: 0,
  filter: "blur(16px)"
});
gsap.set(".info-copy", {
  y: 70,
  opacity: 0,
  filter: "blur(16px)"
});
gsap.set(".portrait-exit-shade", { opacity: 0 });

const portraitSectionTimeline = gsap.timeline({
  defaults: { ease: "none" },
  scrollTrigger: {
    trigger: ".portrait-section",
    start: "top 115%",
    end: "bottom top",
    scrub: 1.2
  }
});

portraitSectionTimeline
  .to(".portrait-image", {
    opacity: 1,
    filter: "brightness(1) blur(0px)",
    scale: 1,
    duration: 0.24
  }, 0)
  .to(".intro-copy span", {
    y: 0,
    autoAlpha: 1,
    filter: "blur(0px)",
    stagger: 0.035,
    duration: 0.18
  }, 0.08)
  .to(".about-block", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.18
  }, 0.28)
  .to(".info-copy", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.18
  }, 0.4)
  .to(".intro-copy, .about-block", {
    y: -34,
    opacity: 0,
    filter: "blur(12px)",
    duration: 0.24
  }, 0.7)
  .to(".info-copy", {
    y: -28,
    opacity: 0,
    filter: "blur(8px)",
    duration: 0.34
  }, 0.84)
  .to(".portrait-exit-shade", {
    opacity: 1,
    duration: 0.32
  }, 0.66)
  .to(".portrait-image", {
    opacity: 0.42,
    filter: "brightness(0.22) blur(16px)",
    scale: 1.02,
    duration: 0.3
  }, 0.7);

const portraitGlitchTimeline = gsap.timeline({
  paused: true,
  defaults: { ease: "power2.inOut" }
});
let portraitGlitchLoop: gsap.core.Tween | null = null;

function triggerPortraitGlitch() {
  if (portraitGlitchTimeline.isActive()) return;

  portraitGlitchTimeline.restart();
}

function startPortraitGlitchLoop() {
  if (portraitGlitchLoop) return;

  portraitGlitchLoop = gsap.delayedCall(gsap.utils.random(5, 7), function loop() {
    triggerPortraitGlitch();
    portraitGlitchLoop = gsap.delayedCall(gsap.utils.random(10, 12), loop);
  });
}

function stopPortraitGlitchLoop() {
  portraitGlitchLoop?.kill();
  portraitGlitchLoop = null;
}

function setCopyBadgeGlitch(state?: "red" | "green") {
  document.querySelectorAll(".copy-glitch-badge").forEach((badge) => {
    badge.classList.remove("has-red-glitch", "has-green-glitch");

    if (state) {
      badge.classList.add(state === "red" ? "has-red-glitch" : "has-green-glitch");
    }
  });
}

portraitGlitchTimeline
  .call(() => {
    document.querySelectorAll(".copy-glitch-badge").forEach((badge) => {
      badge.classList.remove("is-glitching");
      void (badge as HTMLElement).offsetWidth;
      badge.classList.add("is-glitching");
    });
    gsap.set(".copy-glitch-badge .glitch-layer", {
      x: 0,
      skewX: 0,
      scaleY: 1,
      opacity: 1
    });
    gsap.set(".copy-glitch-badge .glitch-stack", { scaleX: 1 });
    setCopyBadgeGlitch("red");
  })
  .to(".portrait-image", {
    x: -8,
    filter: "contrast(1.34) blur(3px)",
    duration: 0.055
  })
  .to(".copy-glitch-badge .glitch-layer", {
    skewX: 68,
    duration: 0.055
  }, "<")
  .to(".copy-glitch-badge", {
    x: -5,
    skewX: -14,
    filter: "contrast(1.25) blur(0.8px)",
    duration: 0.055
  }, "<")
  .to(".copy-glitch-badge .glitch-layer", {
    skewX: 0,
    duration: 0.035
  })
  .to(".copy-glitch-badge .glitch-layer", {
    opacity: 0,
    duration: 0.03
  })
  .to(".copy-glitch-badge .glitch-layer", {
    opacity: 1,
    duration: 0.03
  })
  .to(".portrait-image", {
    x: 7,
    filter: "contrast(1.5) blur(1px)",
    duration: 0.05
  })
  .call(() => {
    setCopyBadgeGlitch("green");
  }, undefined, "<")
  .to(".copy-glitch-badge", {
    x: 4,
    skewX: 11,
    filter: "blur(0.45px)",
    duration: 0.05
  }, "<")
  .to(".copy-glitch-badge .glitch-layer", {
    x: -8,
    duration: 0.035
  }, "<")
  .to(".copy-glitch-badge .glitch-layer", {
    x: 0,
    duration: 0.035
  })
  .add("copyBadgeSplit")
  .to(".portrait-image", {
    x: -3,
    opacity: 0.7,
    filter: "contrast(1.42) blur(2px)",
    duration: 0.06
  }, "copyBadgeSplit")
  .call(() => {
    setCopyBadgeGlitch("red");
  }, undefined, "copyBadgeSplit")
  .to(".copy-glitch-badge .glitch-top", {
    x: -10,
    duration: 0.2,
    ease: "power4.inOut"
  }, "copyBadgeSplit")
  .to(".copy-glitch-badge .glitch-bottom", {
    x: 10,
    duration: 0.2,
    ease: "power4.inOut"
  }, "copyBadgeSplit")
  .to(".copy-glitch-badge", {
    x: -2,
    scale: 1.06,
    skewX: -10,
    filter: "blur(1px)",
    duration: 0.02
  }, "copyBadgeSplit")
  .to(".copy-glitch-badge .glitch-stack", {
    scaleX: 1.04,
    duration: 0.02
  }, "copyBadgeSplit")
  .to(".copy-glitch-badge", {
    scale: 1,
    skewX: 8,
    duration: 0.02
  }, "copyBadgeSplit+=0.03")
  .to(".copy-glitch-badge .glitch-stack", {
    scaleX: 1,
    duration: 0.02
  }, "copyBadgeSplit+=0.03")
  .to(".portrait-image", {
    x: 0,
    opacity: 0.92,
    filter: "contrast(1.08) blur(0px)",
    duration: 0.18,
    ease: "power3.out"
  })
  .call(() => {
    setCopyBadgeGlitch();
  }, undefined, "<")
  .to(".copy-glitch-badge", {
    x: 0,
    scale: 1,
    skewX: 0,
    filter: "blur(0px)",
    textShadow: "none",
    boxShadow: "none",
    duration: 0.18,
    ease: "power3.out"
  }, "<")
  .to(".copy-glitch-badge .glitch-top, .copy-glitch-badge .glitch-bottom", {
    x: 0,
    duration: 0.18,
    ease: "power3.out"
  }, "<")
  .to(".portrait-image", {
    filter: "contrast(1.38) blur(0.5px)",
    duration: 0.08
  }, "+=0.08")
  .call(() => {
    setCopyBadgeGlitch("green");
  }, undefined, "<")
  .to(".intro-copy, .about-block, .info-copy", {
    filter: "blur(0px)",
    duration: 0.08
  }, "<")
  .to(".portrait-image", {
    opacity: 0.94,
    filter: "contrast(1.04) blur(0px)",
    duration: 0.22,
    ease: "power2.out"
  })
  .to(".intro-copy, .about-block, .info-copy", {
    x: 0,
    filter: "blur(0px)",
    opacity: 1,
    duration: 0.22,
    ease: "power2.out"
  }, "<")
  .call(() => {
    document.querySelectorAll(".copy-glitch-badge").forEach((badge) => {
      badge.classList.remove("is-glitching");
    });
    setCopyBadgeGlitch();
    gsap.set(".copy-glitch-badge", {
      clearProps: "x,scale,skewX,filter,textShadow,boxShadow"
    });
    gsap.set(".copy-glitch-badge .glitch-layer", {
      clearProps: "x,skewX,scaleY,opacity"
    });
    gsap.set(".copy-glitch-badge .glitch-stack", {
      clearProps: "scaleX"
    });
  });

ScrollTrigger.create({
  trigger: ".portrait-section",
  start: "top 55%",
  end: "bottom 15%",
  onEnter: () => {
    startPortraitGlitchLoop();
  },
  onEnterBack: () => {
    startPortraitGlitchLoop();
  },
  onLeave: stopPortraitGlitchLoop,
  onLeaveBack: stopPortraitGlitchLoop
});

const skillsTitleLetters = gsap.utils.toArray<HTMLElement>(".skills-section-title i");

gsap.timeline({
  scrollTrigger: {
    trigger: ".skills-section-title",
    start: "top 82%",
    end: "top 18%",
    scrub: 1.6
  }
})
  .fromTo(".skills-section-title span", {
    y: 48,
    opacity: 0,
    filter: "blur(28px) drop-shadow(0 0 30px rgba(95, 189, 70, 0.28))"
  }, {
    y: 0,
    opacity: 1,
    filter: "blur(0px) drop-shadow(0 0 30px rgba(95, 189, 70, 0.28))",
    duration: 0.72,
    ease: "power3.out"
  })
  .fromTo(skillsTitleLetters, {
    x: (index) => (index - (skillsTitleLetters.length - 1) / 2) * 44
  }, {
    x: 0,
    duration: 0.72,
    ease: "power3.out"
  }, "<")
  .to(".skills-section-title span", {
    y: -42,
    opacity: 0,
    filter: "blur(16px) drop-shadow(0 0 30px rgba(95, 189, 70, 0.18))",
    duration: 0.68,
    ease: "power3.inOut"
  }, "+=1.2")
  .to(skillsTitleLetters, {
    x: (index) => (index - (skillsTitleLetters.length - 1) / 2) * 34,
    duration: 0.68,
    ease: "power3.inOut"
  }, "<");

const caseTrack = document.querySelector<HTMLElement>(".case-track");

if (caseTrack) {
  const getCaseTrackOverflow = () => Math.max(0, caseTrack.scrollWidth - window.innerWidth + 28);
  const getCaseTrackLead = () => Math.min(170, getCaseTrackOverflow() * 0.1);

  gsap.fromTo(".case-card", {
    y: -120,
    opacity: 0,
    filter: "blur(9px)"
  }, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    ease: "none",
    stagger: 0.08,
    scrollTrigger: {
      trigger: ".glow-section",
      start: "top 56%",
      end: "top 24%",
      scrub: 1.2
    }
  });

  gsap.to(caseTrack, {
    x: () => -getCaseTrackLead(),
    ease: "none",
    overwrite: true,
    scrollTrigger: {
      trigger: ".glow-section",
      start: "top 92%",
      end: "top 6%",
      scrub: 1.35,
      invalidateOnRefresh: true
    }
  });

  gsap.fromTo(caseTrack, {
    x: () => -getCaseTrackLead()
  }, {
    x: () => -getCaseTrackOverflow(),
    ease: "none",
    overwrite: true,
    immediateRender: false,
    scrollTrigger: {
      trigger: ".glow-section",
      start: "top top",
      end: "+=260%",
      scrub: 1.45,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  });
}

gsap.timeline({
  scrollTrigger: {
    trigger: ".glow-section",
    start: "top 62%",
    end: "top 32%",
    scrub: 1.3
  }
})
  .fromTo([".projects-section-title", ".projects-section-note"], {
    y: 34,
    opacity: 0,
    filter: "blur(14px)"
  }, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.28,
    ease: "power2.out",
    stagger: 0.08
  });

gsap.fromTo(".contact-title", {
  x: "112vw",
  opacity: 0.28,
  filter: "blur(5px)"
}, {
  x: 0,
  opacity: 1,
  filter: "blur(0px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".black-section",
    start: "top 92%",
    end: "top 18%",
    scrub: 1.25
  }
});

ScrollTrigger.create({
  trigger: ".contact-title",
  start: "top 24px",
  endTrigger: ".black-section",
  end: "bottom top",
  pin: ".contact-title",
  pinSpacing: false
});

gsap.fromTo(".contact-portrait", {
  x: 90,
  y: 24,
  opacity: 0,
  filter: "blur(6px) grayscale(0.15) contrast(1.08)"
}, {
  x: 0,
  y: 0,
  opacity: 1,
  filter: "blur(0px) grayscale(0.15) contrast(1.08)",
  ease: "none",
  scrollTrigger: {
    trigger: ".black-section",
    start: "top 22%",
    end: "top -18%",
    scrub: 1.2
  }
});

gsap.to(".contact-portrait", {
  opacity: 0,
  filter: "blur(5px) grayscale(0.15) contrast(1.08)",
  ease: "none",
  scrollTrigger: {
    trigger: ".black-section",
    start: "bottom 72%",
    end: "bottom 30%",
    scrub: 1.1
  }
});

const contactDetailItems = gsap.utils.toArray<HTMLElement>(".contact-details > *");
const contactDetailRanges = [
  { start: "top 78%", end: "top 54%" },
  { start: "top 10%", end: "top -14%" },
  { start: "top -18%", end: "top -42%" }
];

gsap.set(contactDetailItems, {
  y: 420,
  opacity: 0,
  filter: "blur(5px)"
});

contactDetailItems.forEach((item, index) => {
  const range = contactDetailRanges[index] ?? contactDetailRanges[contactDetailRanges.length - 1];

  gsap.to(item, {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    ease: "none",
    scrollTrigger: {
      trigger: ".black-section",
      start: range.start,
      end: range.end,
      scrub: 1.15
    }
  });
});

gsap.fromTo(".contact-socials a", {
  y: 80,
  opacity: 0,
  filter: "blur(4px)",
  rotate: 0
}, {
  y: 0,
  opacity: 1,
  filter: "blur(0px)",
  rotate: 0,
  ease: "none",
  stagger: 0.08,
  scrollTrigger: {
    trigger: ".contact-socials",
    start: "top 120%",
    end: "top 92%",
    scrub: 0.75
  }
});

gsap.to(".glow-content", {
  opacity: 0.82,
  filter: "blur(1.5px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".black-section",
    start: "top 92%",
    end: "top 42%",
    scrub: 1.55
  }
});

gsap.to(".case-viewport", {
  y: -180,
  opacity: 0.18,
  filter: "blur(3px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".black-section",
    start: "top 96%",
    end: "top 34%",
    scrub: 1.35
  }
});

const infoGlitchTimeline = gsap.timeline({
  paused: true,
  repeat: -1,
  repeatDelay: 1.65,
  defaults: { ease: "power4.inOut" }
});

infoGlitchTimeline
  .to(".about-info-label .glitch-layer", {
    skewX: 68,
    duration: 0.1
  })
  .to(".about-info-label .glitch-layer", {
    skewX: 0,
    duration: 0.04
  })
  .to(".about-info-label .glitch-layer", {
    opacity: 0,
    duration: 0.035
  })
  .to(".about-info-label .glitch-layer", {
    opacity: 1,
    duration: 0.035
  })
  .to(".about-info-label .glitch-layer", {
    x: -14,
    duration: 0.035
  })
  .to(".about-info-label .glitch-layer", {
    x: 0,
    duration: 0.035
  })
  .add("split")
  .to(".about-info-label", {
    x: -5,
    skewX: -14,
    filter: "contrast(1.35) brightness(1.12)",
    duration: 0.05
  }, "split")
  .to(".about-info-label", {
    x: 4,
    skewX: 11,
    duration: 0.045
  }, "split+=0.05")
  .to(".about-info-label", {
    "--glitch-scan-x": "130%",
    duration: 0.22
  }, "split")
  .to(".about-info-label .glitch-top", {
    x: -10,
    duration: 0.34
  }, "split")
  .to(".about-info-label .glitch-bottom", {
    x: 10,
    duration: 0.34
  }, "split")
  .to(".about-info-label", {
    scale: 1.08,
    skewX: -10,
    duration: 0.02
  }, "split")
  .to(".about-info-label .glitch-stack", {
    scaleX: 1.04,
    duration: 0.02
  }, "split")
  .to(".about-info-label", {
    scale: 1,
    skewX: 8,
    duration: 0.02
  }, "split+=0.03")
  .to(".about-info-label .glitch-stack", {
    scaleX: 1,
    duration: 0.02
  }, "split+=0.03")
  .call(() => document.querySelector(".about-info-label")?.classList.add("has-red-glitch"), undefined, "split")
  .call(() => document.querySelector(".about-info-label")?.classList.remove("has-red-glitch"), undefined, "split+=0.12")
  .call(() => document.querySelector(".about-info-label")?.classList.add("has-green-glitch"), undefined, "split+=0.03")
  .call(() => document.querySelector(".about-info-label")?.classList.remove("has-green-glitch"), undefined, "split+=0.08")
  .to(".about-info-label .glitch-top", {
    x: 0,
    duration: 0.18
  })
  .to(".about-info-label .glitch-bottom", {
    x: 0,
    duration: 0.18
  }, "<")
  .to(".about-info-label", {
    x: 0,
    skewX: 0,
    filter: "contrast(1) brightness(1)",
    duration: 0.09
  }, "<")
  .set(".about-info-label", {
    "--glitch-scan-x": "-34%"
  })
  .to(".about-info-label .glitch-layer", {
    scaleY: 1.12,
    duration: 0.03
  })
  .to(".about-info-label .glitch-layer", {
    scaleY: 1,
    duration: 0.04
  });

const aboutInfoLabel = document.querySelector<HTMLElement>(".about-info-label");

if (aboutInfoLabel) {
  aboutInfoLabel.addEventListener("mouseenter", () => infoGlitchTimeline.play(0));
  aboutInfoLabel.addEventListener("mouseleave", () => infoGlitchTimeline.pause(0));
  aboutInfoLabel.addEventListener("focus", () => infoGlitchTimeline.play(0));
  aboutInfoLabel.addEventListener("blur", () => infoGlitchTimeline.pause(0));
}

/* ========================= */
/* PATH DRAW ON SCROLL */
/* ========================= */

const path = document.querySelector<SVGPathElement>("#scrollPath");
if (!path) {
  throw new Error("Scroll path element was not found.");
}
const length = path.getTotalLength();

gsap.set(path, {
  strokeDasharray: length,
  strokeDashoffset: length
});

gsap.to(path, {
  strokeDashoffset: 0,
  ease: "none",
  scrollTrigger: {
    trigger: ".projects",
    start: "top 82%",
    end: "bottom bottom",
    scrub: 1.4
  }
});

gsap.set(".project-item", {
  y: 120,
  opacity: 0,
  filter: "blur(18px)"
});

const projectsFillTimeline = gsap.timeline({ paused: true });


projectsFillTimeline
  .to(projectsUniforms.uFill, {
    value: 1,
    duration: 1,
    ease: "power3.inOut"
  })
  .to(".project-item", {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.8,
    stagger: 0.05,
    ease: "power4.out"
  }, "+=0.15")
  .to(projectParticlesMaterial, {
    opacity: 0.62,
    duration: 0.42,
    ease: "power2.out"
  }, 0.18)
  .to(projectConnectionsMaterial, {
    opacity: 0.18,
    duration: 0.42,
    ease: "power2.out"
  }, "<");

ScrollTrigger.create({
  trigger: ".projects",
  start: "top bottom",
  end: "bottom top",
  scrub: true,
  onUpdate: (self) => {
    projectsScrollProgress = self.progress;

    if (projectsRotationEnabled) {
      projectsUniforms.uScroll.value = Math.max(0, self.progress - projectsRotationBaseProgress);
    }
  }
});

ScrollTrigger.create({
  trigger: ".projects",
  start: "top 30%",
  onEnter: () => {
    enableProjectsBackgroundMotion();
    projectsFillTimeline.play();
  },
  onEnterBack: () => {
    enableProjectsBackgroundMotion();
    projectsFillTimeline.play();
  },
  onLeaveBack: () => {
    projectsFillTimeline.reverse();
    resetProjectsBackgroundMotion();
  }
});

ScrollTrigger.create({
  trigger: ".projects",
  start: "top bottom",
  end: "bottom top",
  onLeave: resetProjectsBackgroundMotion,
  onLeaveBack: resetProjectsBackgroundMotion
});

/* ========================= */
/* PROJECT ACTIVE CHANGE */
/* ========================= */

const items = gsap.utils.toArray<HTMLElement>(".project-item");
const skillsOrbitPanel = document.querySelector<HTMLElement>(".skills-orbit-panel");
const skillsOrbitCenterIcon = document.querySelector<HTMLImageElement>(".skills-orbit-center-icon");
const skillsOrbitName = document.querySelector<HTMLElement>(".skills-orbit-name");
const skillsOrbitNodes = gsap.utils.toArray<HTMLDivElement>(".skills-orbit-node");

let centerSkillIndex = 0;
let skillOrbitTimeline: gsap.core.Timeline | null = null;
let skillOrbitRevealTimeline: gsap.core.Timeline | null = null;
let pendingSkillIndex: number | null = null;
let isSkillOrbitVisible = false;

function syncOrbitNodes(activeCenterIndex: number) {
  const orbitSkillIndexes = skillIcons
    .map((_, index) => index)
    .filter((index) => index !== activeCenterIndex);

  skillsOrbitNodes.forEach((node, nodeIndex) => {
    const skillIndex = orbitSkillIndexes[nodeIndex];
    const skill = skillIcons[skillIndex];
    const image = node.querySelector<HTMLImageElement>("img");

    if (!skill || !image) return;

    node.dataset.skillIndex = String(skillIndex);
    image.src = skill.icon;
    image.alt = skill.label;
  });
}

if (items.length === 0) {
  throw new Error("Project items were not found.");
}

gsap.set(".skills-orbit-panel", {
  autoAlpha: 0,
  x: 24
});

function showSkillsOrbitPanel() {
  if (skillOrbitRevealTimeline?.isActive()) return;
  if (isSkillOrbitVisible) return;

  isSkillOrbitVisible = true;

  gsap.set(".skills-orbit-panel", {
    autoAlpha: 1,
    x: 0
  });
  gsap.set(".skills-orbit-center", {
    y: 14,
    scale: 0.9,
    opacity: 0,
    filter: "blur(8px) drop-shadow(0 0 22px rgba(202, 255, 38, 0.28))"
  });
  gsap.set(skillsOrbitNodes, {
    scale: 0.82,
    opacity: 0
  });

  skillOrbitRevealTimeline = gsap.timeline()
    .to(".skills-orbit-center", {
      y: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px) drop-shadow(0 0 18px rgba(202, 255, 38, 0.22))",
      duration: 0.42,
      ease: "power3.out",
      overwrite: true
    })
    .to(skillsOrbitNodes, {
      scale: 1,
      opacity: 1,
      duration: 0.28,
      ease: "power3.out",
      overwrite: true,
      stagger: {
        each: 0.045,
        from: "start"
      }
    }, "+=0.12")
    .eventCallback("onComplete", () => {
      skillOrbitRevealTimeline = null;
      if (pendingSkillIndex !== null && pendingSkillIndex !== centerSkillIndex) {
        const nextSkillIndex = pendingSkillIndex;
        pendingSkillIndex = null;
        updateSkillOrbit(nextSkillIndex);
        return;
      }

      pendingSkillIndex = null;
    });
}

function hideSkillsOrbitPanel() {
  skillOrbitRevealTimeline?.kill();
  skillOrbitRevealTimeline = null;
  isSkillOrbitVisible = false;

  gsap.to(".skills-orbit-panel", {
    autoAlpha: 0,
    y: -80,
    filter: "blur(12px)",
    duration: 0.46,
    ease: "power2.in",
    onComplete: () => {
      gsap.set(".skills-orbit-panel", {
        x: 24,
        y: 0,
        filter: "blur(0px)"
      });
    }
  });
}

ScrollTrigger.create({
  trigger: ".projects",
  start: "top -12%",
  end: "bottom 96%",
  onEnter: showSkillsOrbitPanel,
  onEnterBack: showSkillsOrbitPanel,
  onLeave: hideSkillsOrbitPanel,
  onLeaveBack: hideSkillsOrbitPanel
});


gsap.fromTo(".left", {
  x: 72
}, {
  x: -28,
  ease: "none",
  scrollTrigger: {
    trigger: ".projects",
    start: "top 76%",
    end: "bottom 35%",
    scrub: 1.25
  }
});

items.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top 62%",
    end: "bottom 62%",
    onEnter: () => activateFromScroll(item),
    onEnterBack: () => activateFromScroll(item)
  });
});

function activateFromScroll(item: HTMLElement) {
  if (window.scrollY < 24) {
    activate(items[0]);
    return;
  }

  activate(item);
}

function activate(activeItem: HTMLElement) {
  const activeIndex = items.indexOf(activeItem);

  items.forEach((item) => item.classList.remove("active"));
  activeItem.classList.add("active");
  applyWave(activeIndex);
  updateSkillOrbit(activeIndex);
}

function applyWave(activeIndex: number) {
  items.forEach((item, index) => {
    const distance = Math.abs(index - activeIndex);
    const direction = index < activeIndex ? -1 : 1;
    const belowDistance = Math.max(0, index - activeIndex);
    const waveOffset = Math.min(distance * 7, 28);
    const focusOffset = index === activeIndex ? -13 : waveOffset + direction * 2;
    const itemOpacity = index === activeIndex
      ? 1
      : Math.max(0.18, 0.8 - distance * 0.07 - belowDistance * 0.06);
    const itemBlur = index === activeIndex
      ? 0
      : Math.min(12, belowDistance * 2.1 + Math.max(0, activeIndex - index) * 0.45);

    gsap.to(item, {
      x: focusOffset,
      opacity: itemOpacity,
      filter: `blur(${itemBlur}px)`,
      duration: 0.95,
      ease: "power2.out",
      overwrite: true
    });
  });
}

function updateSkillOrbit(activeIndex: number) {
  const activeSkill = skillIcons[activeIndex] ?? skillIcons[0];

  if (!skillsOrbitPanel || !skillsOrbitCenterIcon || !skillsOrbitName) return;
  if (!isSkillOrbitVisible || skillOrbitRevealTimeline?.isActive()) {
    pendingSkillIndex = activeIndex;
    return;
  }
  if (activeIndex === centerSkillIndex) return;
  if (skillOrbitTimeline?.isActive()) {
    pendingSkillIndex = activeIndex;
    return;
  }

  gsap.set(".skills-orbit-center", {
    clearProps: "transform",
    rotation: 0,
    y: 0,
    scale: 1,
    transformOrigin: "center center",
    force3D: true,
    filter: "blur(0px) drop-shadow(0 0 18px rgba(202, 255, 38, 0.22))",
    opacity: 1
  });
  gsap.set(skillsOrbitNodes, { scale: 1, opacity: 1 });

  skillOrbitTimeline = gsap.timeline({ defaults: { ease: "power2.inOut" } })
    .to(".skills-orbit-center", {
      y: 14,
      scale: 0.9,
      opacity: 0,
      filter: "blur(8px) drop-shadow(0 0 22px rgba(202, 255, 38, 0.28))",
      duration: 0.28,
      transformOrigin: "center center",
      force3D: true,
      overwrite: true,
      ease: "power2.in"
    })
    .to(skillsOrbitNodes, {
      scale: 0.96,
      opacity: 0.55,
      duration: 0.22,
      overwrite: true,
      stagger: {
        each: 0.008,
        from: "center"
      }
    }, "<")
    .call(() => {
      skillsOrbitCenterIcon.src = activeSkill.icon;
      skillsOrbitCenterIcon.alt = activeSkill.label;
      skillsOrbitName.textContent = activeSkill.label;
      centerSkillIndex = activeIndex;
      syncOrbitNodes(centerSkillIndex);

      gsap.set(".skills-orbit-center", {
        y: -10,
        scale: 0.94,
        opacity: 0,
        filter: "blur(7px) drop-shadow(0 0 22px rgba(202, 255, 38, 0.28))"
      });
    })
    .to(".skills-orbit-center", {
      y: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px) drop-shadow(0 0 18px rgba(202, 255, 38, 0.22))",
      duration: 0.42,
      transformOrigin: "center center",
      force3D: true,
      overwrite: true,
      ease: "power3.out"
    })
    .to(skillsOrbitNodes, {
      scale: 1,
      opacity: 1,
      duration: 0.28,
      overwrite: true,
      ease: "power3.out",
      stagger: {
        each: 0.006,
        from: "center"
      }
    }, "<")
    .set(".skills-orbit-center", {
      clearProps: "transform"
    })
    .eventCallback("onComplete", () => {
      skillOrbitTimeline = null;
      if (pendingSkillIndex !== null && pendingSkillIndex !== centerSkillIndex) {
        const nextSkillIndex = pendingSkillIndex;
        pendingSkillIndex = null;
        updateSkillOrbit(nextSkillIndex);
        return;
      }

      pendingSkillIndex = null;
    });
}

syncOrbitNodes(centerSkillIndex);
activate(items[0]);

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
