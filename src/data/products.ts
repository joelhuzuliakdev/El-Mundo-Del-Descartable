export interface Product {
  slug: string;
  name: string;
  description: string;
  category: string; // debe coincidir con Category.slug
  image: string;
  price?: number; // en ARS. Dejar sin definir si no hay precio confirmado.
}

// -----------------------------------------------------------------------------
// Productos destacados. No se inventaron precios: quedan sin definir hasta confirmarlos.
// -----------------------------------------------------------------------------
export const products: Product[] = [
  {
    slug: "bandeja-plastica-105-pp",
    name: "Bandeja plástica 105 PP",
    description: "Bandeja plástica para viandas, disponible también en otras medidas.",
    category: "bandejas",
    image: "/images/products/bandejaPlastica.webp",
  },
  {
    slug: "bolsa-en-rollo",
    name: "Bolsas en rollo",
    description: "Bolsas en rollo para guardar mercadería, muy usadas en panaderías, carnicerías y kioscos.",
    category: "bolsas",
    image: "/images/products/bolsaRollo.webp",
  },
  {
    slug: "caja-de-regalo",
    name: "Caja de regalo",
    description: "Caja para armar regalos, disponible en distintos tipos y tamaños.",
    category: "otros",
    image: "/images/products/cajaRegalo.webp",
  },
  {
    slug: "rollo-de-aluminio",
    name: "Rollo de aluminio",
    description: "Rollo de aluminio para envolver y conservar alimentos.",
    category: "papel-servilletas",
    image: "/images/products/rolloAluminio.webp",
  },
  {
    slug: "cucharas-plasticas",
    name: "Cucharas plásticas",
    description: "Cucharas plásticas ideales para postres, tortas y otros usos.",
    category: "cubiertos",
    image: "/images/products/cucharasPlasticas.webp",
  },
  {
    slug: "bolsa-friselina",
    name: "Bolsas de friselina",
    description: "Bolsas de friselina resistentes, disponibles en varias medidas, usadas por tiendas de ropa y otros comercios.",
    category: "bolsas",
    image: "/images/products/bolsaFriselina.webp",
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}