export type Slide = {
  title: string;
  desc: string;
  image?: string; // /images/...
  tag?: string;
};

export const biofiliaSlides: Slide[] = [
  {
    tag: "Hogar",
    title: "Huerta vertical en casa",
    desc: "Una pared que produce verdes frescos. Limpio, ordenado y lindo.",
    image: "/images/slide-hogar.jpg",
  },
  {
    tag: "Negocios",
    title: "Verdulerías con pared viva",
    desc: "El cliente retira la bandeja (tipo maple). Reposición rápida.",
    image: "/images/slide-verduleria.jpg",
  },
  {
    tag: "Servicio",
    title: "Instalación + soporte",
    desc: "Te dejamos el sistema andando y te acompañamos con el mantenimiento.",
    image: "/images/slide-servicio.jpg",
  },
  {
    tag: "Modular",
    title: "Escalable por módulos",
    desc: "Arrancás chico y sumás paneles cuando quieras.",
    image: "/images/slide-modular.jpg",
  },
];
