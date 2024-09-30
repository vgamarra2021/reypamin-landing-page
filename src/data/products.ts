import type { IProduct } from '@/model/product.interface';
const products: IProduct[] = [
  {
    title: "Especialistas en Transmisión y Control de Potencia",
    description:
      "Ofrecemos una gama completa de servicios para simplificar sus procesos y optimizar su producción",
    features: [
      "Mantenimiento en frío",
      "Arrancador Suave",
      "Limitador de Par",
      "Motores Eléctricos Monofásicos",
      "Motores Eléctricos Trifásicos",
      "Reductores",
      "Variadores de Velocidad",
      "Anillos de Fijación",
      "Acoplamiento de Garras",
      "Poleas Tambor",
      "Back Stop",
    ],
    href: "/product-1",
    images: ["product-01-1", "product-01-2"],
    position: "left",
  },
  {
    title: "Fabricación de Tableros Eléctricos",
    description:
      "Diseñamos y fabricamos tableros eléctricos a medida, adaptados a las necesidades específicas de cada proyecto industrial.",
    features: [],
    href: "/product-2",
    images: ["product-02-1", "product-02-2"],
    position: "right",
  },
  {
    title: "Repuestos Eléctricos",
    description:
      "Ofrecemos un amplio catálogo de repuestos eléctricos para asegurar la continuidad operativa de tus equipos, con piezas de alta calidad y disponibilidad inmediata.",
    features: [],
    href: "/product-3",
    images: ["product-03-1", "product-03-2"],
    position: "left",
  },
  {
    title: "Alternadores y Arrancadores",
    description:
      "Alternadores y arrancadores para equipos de maquinaria movil, diseñados para garantizar un funcionamiento confiable y continuo.",
    features: [],
    href: "/product-4",
    images: ["product-04-1", "product-04-2"],
    position: "right",
  },
  {
    title: "Bombas y Motores Hidráulicos",
    description:
      "Bombas y Motores hidráulicas diseñadas para cumplir con las más exigentes procesos de calidad. Aplicada a maquinarias pesadas industriales.",
    features: [],
    href: "/product-5",
    images: ["product-05-1", "product-05-2"],
    position: "left",
  },
  {
    title: "Asientos para Maquinaria Pesada y Liviana",
    description:
      "Proveemos asientos ergonómicos y duraderos para maquinaria pesada y liviana, brindando comodidad y seguridad a los operadores.",
    features: [],
    href: "/product-6",
    images: ["product-06"],
    position: "right",
  },
  {
    title: "Consumibles de Torno",
    description:
      "Contamos con consumibles de torno de alta precisión y durabilidad, esenciales para el buen funcionamiento de tus maquinarias de torneado.",
    features: [],
    href: "/product-7",
    images: ["product-07-1", "product-07-2"],
    position: "left",
  },
  {
    title: "O-Ring, Sellos Hidráulicos y Neumáticos",
    description:
      "Proveemos sellos hidráulicos y neumáticos de alta resistencia para garantizar la estanqueidad en sistemas de alta presión.",
    features: [],
    href: "/product-8",
    images: ["product-08-1", "product-08-2"],
    position: "right",
  },
];

export default products;
