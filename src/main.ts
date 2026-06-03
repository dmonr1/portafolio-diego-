import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import diegoImage from "./assets/Diego1.png";
import previewHero from "./assets/hero1.png";
import previewAbout from "./assets/hero2.png";
import previewProjects from "./assets/cap3.png";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root element was not found.");
}

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
            <span class="nav-symbol triangle"></span>
            <strong><span class="reveal-text">Repertorio</span></strong>
            <a href="#projects"><span class="reveal-text">Trabajos</span></a>
            <a href="#skills"><span class="reveal-text">Ideas</span></a>
          </nav>

          <nav class="nav-cluster" aria-label="Narrativa">
            <span class="nav-symbol circle"></span>
            <strong><span class="reveal-text">Narrativa</span></strong>
            <a href="#about"><span class="reveal-text">Sobre mi</span></a>
            <a href="#contact"><span class="reveal-text">Contacto</span></a>
          </nav>

          <nav class="nav-cluster" aria-label="Liaison">
            <span class="nav-symbol square"></span>
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
    <div class="intro-copy" aria-label="Creo experiencias digitales modernas que combinan diseño, rendimiento e innovación para transformar ideas en productos con impacto">
      <span><em>Creo</em> experiencias digitales modernas</span>
      <span>para <em>transformar</em> ideas en productos con impacto</span>
    </div>
    <p class="about-copy">
      Mi nombre es Diego me apasiona el diseño y desarrollo de interfaces modernas para crear espacios atractivos y memorables. Que generan valor y dejan una impresión duradera

    </p>
    <div class="info-copy" aria-label="Básicamente, hago sitios web.">
      <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      <span><em>Básicamente</em>, hago sitios web.</span>
    </div>
  </section>

  <section class="projects" id="projects">
    <svg class="path-svg" viewBox="0 0 1600 3000" preserveAspectRatio="xMidYMin meet">
      <path
        id="scrollPath"
        d="
          M -320 380

          C 160 130, 520 310, 610 600
          C 760 1050, 260 1180, 130 1500

          C -40 1920, 560 2020, 690 2290
          C 800 2500, 550 2550, 460 2800

          C 420 2990, 600 3040, 920 3020
          C 1250 3000, 1650 2900, 2100 2700
        "
      />
    </svg>

    <div class="layout">
      <aside class="left">
        <div class="project-item active" data-img="1">
          <h2>Frontend</h2>
        </div>

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
          <h2>HTML & CSS</h2>
        </div>

        <div class="project-item" data-img="7">
          <h2>Vite</h2>
        </div>

        <div class="project-item" data-img="8">
          <h2>Backend</h2>
        </div>

        <div class="project-item" data-img="9">
          <h2>Java</h2>
        </div>

        <div class="project-item" data-img="10">
          <h2>Spring Boot</h2>
        </div>

        <div class="project-item" data-img="11">
          <h2>Node.js</h2>
        </div>

        <div class="project-item" data-img="12">
          <h2>PHP</h2>
        </div>

        <div class="project-item" data-img="13">
          <h2>Databases</h2>
        </div>

        <div class="project-item" data-img="14">
          <h2>SQL</h2>
        </div>

        <div class="project-item" data-img="15">
          <h2>Oracle</h2>
        </div>
      </aside>

      <aside class="right">
        <div class="preview">
          <div class="preview-head">
            <span id="date">01 2025</span>
            <span>PREVIEW</span>
          </div>
          <div class="image-box"></div>
        </div>
      </aside>
    </div>
  </section>

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

const smokeCanvas = document.querySelector<HTMLCanvasElement>(".smoke-canvas");

if (!smokeCanvas) {
  throw new Error("Smoke canvas element was not found.");
}

const smokeCanvasEl = smokeCanvas;

const smokeScene = new THREE.Scene();
const smokeCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const smokeRenderer = new THREE.WebGLRenderer({
  canvas: smokeCanvasEl,
  antialias: true,
  alpha: true
});

smokeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

      for (int i = 0; i < 6; i++) {
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

function startSmoke() {
  smokeStartedAt = performance.now();
}

function renderSmoke(time: number) {
  smokeUniforms.uTime.value = smokeStartedAt === null ? 0 : (time - smokeStartedAt) * 0.001;
  smokeRenderer.render(smokeScene, smokeCamera);
  requestAnimationFrame(renderSmoke);
}

resizeSmoke();
window.addEventListener("resize", resizeSmoke);
requestAnimationFrame(renderSmoke);

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

gsap.set(".reveal-text", { yPercent: 115 });
gsap.set(".hero-corner", { scale: 0 });
gsap.set(".hero-cta", { xPercent: -110 });
gsap.set([".brand-mark", ".hero-status"], { opacity: 0 });
gsap.set(".nav-symbol", { scale: 0 });
gsap.set(".hero-footer", { "--footer-line-scale": 0 });
gsap.set(".hero-footer > *", { opacity: 0 });
gsap.set(".section-preview", { opacity: 0, scale: 0.96 });

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

heroTimeline.to(".section-preview", {
  opacity: 1,
  scale: 1,
  duration: 0.55
}, 1.65);

const introColorTween = gsap.to(".intro-char", {
  color: "random([#b8d9a8,#71a65c,#38bdf8,#60a5fa,#22d3ee,#a78bfa,#c084fc,#facc15,#fb923c,#fb7185,#f43f5e])",
  duration: 0.18,
  repeat: -1,
  repeatRefresh: true,
  stagger: {
    each: 0.035,
    from: "random"
  },
  ease: "none"
});

gsap.timeline({ defaults: { ease: "power3.out" } })
  .set(".preloader-intro", { autoAlpha: 1 })
  .fromTo(".intro-word:nth-child(1) .intro-char", {
    yPercent: 155,
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
    yPercent: 155,
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
  .to(".intro-name", {
    y: -92,
    autoAlpha: 0,
    duration: 0.78,
    ease: "power3.inOut"
  }, "+=0.36")
  .to(".preloader-intro", {
    autoAlpha: 0,
    duration: 0.42,
    onComplete: () => {
      introColorTween.kill();
      startSmoke();
      gsap.delayedCall(2.7, () => {
        document.body.classList.remove("is-scroll-locked");
        lenis.start();
        heroTimeline.play();
      });
    }
  }, "-=0.18");

gsap.to(".hero-footer", {
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
  duration: 1.35,
  smoothWheel: true,
  syncTouch: false,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

lenis.stop();

sectionPreviewItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const hash = item.getAttribute("href");
    const target = hash ? document.querySelector(hash) : null;

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

gsap.to(".portrait-image", {
  opacity: 1,
  filter: "brightness(1) blur(0px)",
  scale: 1,
  ease: "none",
  scrollTrigger: {
    trigger: ".portrait-section",
    start: "top 120%",
    end: "6% top",
    scrub: true
  }
});

gsap.fromTo(
  ".intro-copy span",
  {
    y: 90,
    opacity: 0,
    filter: "blur(18px)"
  },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    ease: "power3.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: ".portrait-section",
      start: "top 90%",
      end: "18% top",
      scrub: 1.2
    }
  }
);

gsap.fromTo(
  ".about-copy",
  {
    y: 70,
    opacity: 0,
    filter: "blur(16px)"
  },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".portrait-section",
      start: "top 24%",
      end: "top top",
      scrub: 1.15
    }
  }
);

gsap.fromTo(
  ".info-copy",
  {
    y: 70,
    opacity: 0,
    filter: "blur(16px)"
  },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".portrait-section",
      start: "top 58%",
      end: "18% top",
      scrub: 1.15
    }
  }
);

ScrollTrigger.create({
  trigger: ".portrait-section",
  start: "top top",
  onEnter: () => {
    gsap.to(".info-copy", {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.24,
      overwrite: true
    });
  },
  onLeaveBack: () => {
    gsap.to(".info-copy", {
      y: 58,
      opacity: 0,
      filter: "blur(14px)",
      duration: 0.28,
      ease: "power2.in",
      overwrite: true
    });
  }
});

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
    start: "top top",
    end: "bottom bottom",
    scrub: 1.4
  }
});

ScrollTrigger.create({
  trigger: ".projects",
  start: "top center",
  end: "bottom center",
  onEnter: () => document.querySelector(".preview")?.classList.add("is-visible"),
  onEnterBack: () => document.querySelector(".preview")?.classList.add("is-visible"),
  onLeave: () => document.querySelector(".preview")?.classList.remove("is-visible"),
  onLeaveBack: () => document.querySelector(".preview")?.classList.remove("is-visible")
});

/* ========================= */
/* PROJECT ACTIVE CHANGE */
/* ========================= */

const items = gsap.utils.toArray<HTMLElement>(".project-item");
const imageBox = document.querySelector<HTMLElement>(".image-box");
const date = document.querySelector<HTMLElement>("#date");

if (!imageBox || !date || items.length === 0) {
  throw new Error("Project preview elements were not found.");
}

const previewBox = imageBox;
const previewDate = date;

const data: Record<string, { date: string; image: string }> = {
  1: {
    date: "01 2025",
    image: "linear-gradient(135deg, #dbeafe, #ef4444)"
  },
  2: {
    date: "04 2025",
    image: "linear-gradient(135deg, #171717, #9333ea)"
  },
  3: {
    date: "09 2025",
    image: "linear-gradient(135deg, #111827, #06b6d4)"
  },
  4: {
    date: "11 2025",
    image: "linear-gradient(135deg, #020617, #7c3aed)"
  },
  5: {
    date: "12 2025",
    image: "linear-gradient(135deg, #1f2937, #22c55e)"
  },
  6: {
    date: "02 2026",
    image: "linear-gradient(135deg, #030712, #f97316)"
  },
  7: {
    date: "03 2026",
    image: "linear-gradient(135deg, #111827, #8b5cf6)"
  },
  8: {
    date: "03 2026",
    image: "linear-gradient(135deg, #1e293b, #38bdf8)"
  },
  9: {
    date: "04 2026",
    image: "linear-gradient(135deg, #111827, #ef4444)"
  },
  10: {
    date: "05 2026",
    image: "linear-gradient(135deg, #052e16, #22c55e)"
  },
  11: {
    date: "06 2026",
    image: "linear-gradient(135deg, #172554, #38bdf8)"
  },
  12: {
    date: "07 2026",
    image: "linear-gradient(135deg, #312e81, #f59e0b)"
  },
  13: {
    date: "08 2026",
    image: "linear-gradient(135deg, #0f172a, #14b8a6)"
  },
  14: {
    date: "09 2026",
    image: "linear-gradient(135deg, #18181b, #84cc16)"
  },
  15: {
    date: "10 2026",
    image: "linear-gradient(135deg, #1c1917, #f97316)"
  }
};

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
  items.forEach((item) => item.classList.remove("active"));
  activeItem.classList.add("active");

  const id = activeItem.dataset.img ?? "1";
  const preview = data[id] || data[1];

  previewBox.style.backgroundImage = preview.image;
  previewDate.textContent = preview.date;
  applyWave(items.indexOf(activeItem));
}

function applyWave(activeIndex: number) {
  items.forEach((item, index) => {
    const distance = Math.abs(index - activeIndex);
    const direction = index < activeIndex ? -1 : 1;
    const waveOffset = Math.min(distance * 36, 150);
    const focusOffset = index === activeIndex ? -22 : waveOffset + direction * 6;

    gsap.to(item, {
      x: focusOffset,
      opacity: index === activeIndex ? 1 : Math.max(0.26, 0.72 - distance * 0.09),
      duration: 0.65,
      ease: "power3.out",
      overwrite: true
    });
  });
}

activate(items[0]);

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  requestAnimationFrame(() => activate(items[0]));
});
