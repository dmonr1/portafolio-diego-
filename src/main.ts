import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import diegoImage from "./assets/Diego1.png";
import previewHero from "./assets/hero1.png";
import previewAbout from "./assets/hero2.png";
import previewProjects from "./assets/hero3.png";
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
  { label: "Vite", icon: viteIcon },
  { label: "Gsap", icon: gsapIcon },
  { label: "WebGL", icon: webglIcon },
  { label: "ThreeJs", icon: threeIcon },
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
          <h2>SQL</h2>
        </div>

        <div class="project-item" data-img="15">
          <h2>Oracle</h2>
        </div>
      </aside>

    </div>
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
  </aside>
`;

const peruTime = document.querySelector<HTMLElement>("#peru-time");
const sectionPreviewItems = gsap.utils.toArray<HTMLElement>(".section-preview-item");

function setActiveSectionPreview(trigger: string) {
  sectionPreviewItems.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.preview === trigger);
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

[".smoke-hero", ".portrait-section", ".projects"].forEach((trigger) => {
  ScrollTrigger.create({
    trigger,
    start: "top center",
    end: "bottom center",
    onEnter: () => setActiveSectionPreview(trigger),
    onEnterBack: () => setActiveSectionPreview(trigger)
  });
});

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
  duration: 2.25,
  smoothWheel: true,
  syncTouch: false,
  wheelMultiplier: 0.52,
  touchMultiplier: 0.86,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

lenis.stop();

sectionPreviewItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const hash = item.getAttribute("href");
    const target = hash ? document.querySelector<HTMLElement>(hash) : null;

    if (!target) return;

    event.preventDefault();
    lenis.scrollTo(target, {
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

  portraitGlitchLoop = gsap.delayedCall(gsap.utils.random(10, 12), function loop() {
    triggerPortraitGlitch();
    portraitGlitchLoop = gsap.delayedCall(gsap.utils.random(14, 17), loop);
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
    start: "18% top",
    end: "bottom bottom",
    scrub: 1.4
  }
});

gsap.set(".project-item", {
  y: 120,
  opacity: 0
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

const orbitNodeSkillIndexes = skillsOrbitNodes.map((node, nodeIndex) => (
  Number(node.dataset.skillIndex ?? nodeIndex + 1)
));
let centerSkillIndex = 0;
let skillOrbitTimeline: gsap.core.Timeline | null = null;
let pendingSkillIndex: number | null = null;

if (items.length === 0) {
  throw new Error("Project items were not found.");
}

gsap.set(".skills-orbit-panel", {
  autoAlpha: 0,
  x: 24
});

ScrollTrigger.create({
  trigger: ".projects",
  start: "top top",
  end: "bottom 10%",
  onEnter: () => gsap.to(".skills-orbit-panel", { autoAlpha: 1, x: 0, duration: 0.45, ease: "power3.out" }),
  onEnterBack: () => gsap.to(".skills-orbit-panel", { autoAlpha: 1, x: 0, duration: 0.45, ease: "power3.out" }),
  onLeave: () => gsap.to(".skills-orbit-panel", { autoAlpha: 0, x: 24, duration: 0.28, ease: "power2.in" }),
  onLeaveBack: () => gsap.to(".skills-orbit-panel", { autoAlpha: 0, x: 24, duration: 0.28, ease: "power2.in" })
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
    const waveOffset = Math.min(distance * 15, 60);
    const focusOffset = index === activeIndex ? -13 : waveOffset + direction * 4;

    gsap.to(item, {
      x: focusOffset,
      opacity: index === activeIndex ? 1 : Math.max(0.26, 0.72 - distance * 0.09),
      duration: 0.95,
      ease: "power2.out",
      overwrite: true
    });
  });
}

function updateSkillOrbit(activeIndex: number) {
  const activeSkill = skillIcons[activeIndex] ?? skillIcons[0];

  if (!skillsOrbitPanel || !skillsOrbitCenterIcon || !skillsOrbitName) return;
  if (activeIndex === centerSkillIndex) return;
  if (skillOrbitTimeline?.isActive()) {
    pendingSkillIndex = activeIndex;
    return;
  }

  const incomingNodeIndex = orbitNodeSkillIndexes.indexOf(activeIndex);
  const incomingNode = incomingNodeIndex >= 0 ? skillsOrbitNodes[incomingNodeIndex] : null;
  const outgoingSkill = skillIcons[centerSkillIndex] ?? skillIcons[0];
  const previousCenterIndex = centerSkillIndex;

  gsap.set(".skills-orbit-center", {
    clearProps: "transform",
    rotationY: 0,
    scaleX: 1,
    scaleY: 1,
    transformPerspective: 900,
    transformOrigin: "center center",
    force3D: true,
    filter: "blur(0px) drop-shadow(0 0 18px rgba(202, 255, 38, 0.22))",
    opacity: 1
  });
  gsap.set(incomingNode ?? [], { scale: 1, opacity: 1 });

  skillOrbitTimeline = gsap.timeline({ defaults: { ease: "power3.out" } })
    .to(".skills-orbit-center", {
      rotationY: 92,
      scaleX: 0.08,
      scaleY: 0.96,
      opacity: 0.45,
      filter: "blur(1px) drop-shadow(0 0 22px rgba(202, 255, 38, 0.35))",
      duration: 0.42,
      transformPerspective: 900,
      transformOrigin: "center center",
      force3D: true,
      overwrite: true,
      ease: "power3.in"
    })
    .to(incomingNode ?? [], {
      scale: 0.78,
      opacity: 0.35,
      duration: 0.18,
      overwrite: true
    }, "<")
    .call(() => {
      skillsOrbitCenterIcon.src = activeSkill.icon;
      skillsOrbitCenterIcon.alt = activeSkill.label;
      skillsOrbitName.textContent = activeSkill.label;

      if (incomingNode) {
        const image = incomingNode.querySelector<HTMLImageElement>("img");

        if (image) {
          image.src = outgoingSkill.icon;
          image.alt = outgoingSkill.label;
        }

        orbitNodeSkillIndexes[incomingNodeIndex] = previousCenterIndex;
        incomingNode.style.setProperty("--float-delay", `${gsap.utils.random(-6, -0.4)}s`);
      }

      centerSkillIndex = activeIndex;
    })
    .set(".skills-orbit-center", {
      rotationY: -92,
      scaleX: 0.08,
      scaleY: 0.96,
      transformPerspective: 900,
      transformOrigin: "center center",
      force3D: true
    })
    .to(".skills-orbit-center", {
      rotationY: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      filter: "blur(0px) drop-shadow(0 0 18px rgba(202, 255, 38, 0.22))",
      duration: 0.52,
      transformPerspective: 900,
      transformOrigin: "center center",
      force3D: true,
      overwrite: true,
      ease: "power3.out"
    })
    .to(incomingNode ?? [], {
      scale: 1,
      opacity: 1,
      duration: 0.34,
      overwrite: true,
      ease: "power3.out"
    }, "<")
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

activate(items[0]);

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
