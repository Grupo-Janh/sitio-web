/**
 * HOME DATA — JANH
 *
 * RESPONSABILIDAD:
 * Centralizar el contenido editable utilizado exclusivamente
 * por la página principal del sitio.
 *
 * OBJETIVO:
 * Separar el contenido de la presentación visual.
 *
 * Esto permite modificar:
 * - Textos
 * - CTAs
 * - Beneficios
 * - Soluciones destacadas
 *
 * sin modificar directamente los componentes Astro.
 *
 * NO DEBE CONTENER:
 * - HTML
 * - Componentes Astro
 * - Clases de Tailwind
 * - Lógica de animaciones
 *
 * CONSUMIDO PRINCIPALMENTE POR:
 * - components/home/Hero.astro
 *
 * FUTURO:
 * Este archivo también podrá contener información para:
 * - Solutions
 * - Managed services
 * - Trust
 * - CTA final
 */


/* ==========================================================
   HERO PRINCIPAL
========================================================== */

export const hero = {
  eyebrow:
    "Infraestructura · Videovigilancia · Redes · Ciberseguridad · Cloud",

  title:
    "Tecnología que impulsa tu operación.",

  description:
    "Diseñamos, implementamos y operamos soluciones tecnológicas que fortalecen tu empresa y la preparan para el futuro.",

  primaryCta: {
    label: "Agendar reunión →",
    href: "/contacto",
  },

  secondaryCta: {
    label: "Explorar soluciones →",
    href: "/soluciones",
  },
};


/* ==========================================================
   BENEFICIOS DEL HERO

   Estos elementos aparecen debajo de los CTAs principales.
========================================================== */

export const heroBenefits = [
  {
    title: "Confianza",
    description: "Operación segura y continua.",
    icon: "◇",
  },

  {
    title: "Escalabilidad",
    description:
      "Infraestructura lista para crecer contigo.",
    icon: "▥",
  },

  {
    title: "Acompañamiento",
    description:
      "Soporte experto en cada etapa.",
    icon: "○",
  },
];


/* ==========================================================
   SOLUCIONES FLOTANTES DEL HERO

   Estas tarjetas aparecen actualmente encima de la imagen.

   IMPORTANTE:
   Este archivo únicamente define su contenido.

   Su posición visual es responsabilidad de Hero.astro.
========================================================== */

export const heroFeatures = [
  {
    icon: "☁",
    title: "Cloud",
    description:
      "Soluciones flexibles, escalables y seguras.",
    href: "/soluciones/cloud",
  },

  {
    icon: "▣",
    title: "Infraestructura",
    description:
      "Entornos robustos preparados para tu operación.",
    href: "/soluciones/infraestructura",
  },

  {
    icon: "◇",
    title: "Ciberseguridad",
    description:
      "Protección para sistemas, usuarios y datos.",
    href: "/soluciones/ciberseguridad",
  },
];

/* ==========================================================
   SECCIÓN DE SOLUCIONES

   Contenido mostrado en la sección principal de soluciones
   de la página Home.

   La presentación visual de estos datos pertenece a:
   - components/home/Solutions.astro
   - components/home/SolutionCard.astro
========================================================== */

export const solutionsSection = {
  eyebrow: "Soluciones",

  title:
    "Tecnología integral para cada parte de tu operación.",

  description:
    "Integramos infraestructura, conectividad, seguridad y servicios digitales dentro de una estrategia tecnológica diseñada para tu negocio.",
};


export const homeSolutions = [
  {
    number: "01",
    title: "Infraestructura",
    description:
      "Diseño e implementación de infraestructura tecnológica robusta, organizada y preparada para crecer.",
    href: "/soluciones/infraestructura",
  },

  {
    number: "02",
    title: "Cloud",
    description:
      "Servicios en la nube, respaldos y plataformas escalables para mantener tu operación disponible.",
    href: "/soluciones/cloud",
  },

  {
    number: "03",
    title: "Redes",
    description:
      "Conectividad empresarial estable, segura y diseñada alrededor de las necesidades reales de tu operación.",
    href: "/soluciones/redes",
  },

  {
    number: "04",
    title: "Ciberseguridad",
    description:
      "Protección de sistemas, usuarios, dispositivos y datos mediante una estrategia integral de seguridad.",
    href: "/soluciones/ciberseguridad",
  },

  {
    number: "05",
    title: "Videovigilancia",
    description:
      "Soluciones de monitoreo y videovigilancia diseñadas para proteger espacios, activos y operaciones.",
    href: "/soluciones/videovigilancia",
  },
];