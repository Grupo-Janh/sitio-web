/**
 * Información global del sitio JANH.
 *
 * RESPONSABILIDAD:
 * Mantener datos compartidos entre múltiples
 * componentes.
 *
 * IMPORTANTE:
 * Aquí no va HTML ni clases de Tailwind.
 */

export const navigation = [
  {
    label: "Soluciones",
    href: "/soluciones",
    submenu: true,
  },

  {
    label: "Nosotros",
    href: "/nosotros",
    submenu: true,
  },

  {
    label: "Casos de éxito",
    href: "/casos",
    submenu: false,
  },

  {
    label: "Recursos",
    href: "/recursos",
    submenu: true,
  },

  {
    label: "Contacto",
    href: "/contacto",
    submenu: false,
  },
];