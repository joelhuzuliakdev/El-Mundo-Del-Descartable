export interface Product {
  slug: string;
  name: string;
  description: string;
  category: string; // debe coincidir con Category.slug
  image: string;
  price?: number; // en ARS. Dejar sin definir si no hay precio confirmado.
}

// -----------------------------------------------------------------------------
// Productos destacados de ejemplo. Reemplazar por el catálogo real del negocio.
// No se inventaron precios: quedaron sin definir hasta confirmarlos.
// -----------------------------------------------------------------------------
export const products: Product[] = [
  {
    slug: "vasos-descartables-9oz",
    name: "Vasos descartables 9 oz",
    description: "Pack de vasos descartables para agua o gaseosa, ideales para eventos y comercios.",
    category: "vasos",
    image: "/images/products/vasos-9oz.webp",
  },
  {
    slug: "platos-hondos-descartables",
    name: "Platos hondos descartables",
    description: "Platos resistentes aptos para comidas calientes y frías.",
    category: "platos",
    image: "/images/products/platos-hondos.webp",
  },
  {
    slug: "cubiertos-descartables-combo",
    name: "Combo de cubiertos descartables",
    description: "Set de cuchara, tenedor y cuchillo, ideal para delivery y eventos.",
    category: "cubiertos",
    image: "/images/products/cubiertos-combo.webp",
  },
  {
    slug: "bandejas-telgopor",
    name: "Bandejas de telgopor",
    description: "Bandejas para carnes, viandas y uso gastronómico en distintos tamaños.",
    category: "bandejas",
    image: "/images/products/bandejas-telgopor.webp",
  },
  {
    slug: "envases-con-tapa",
    name: "Envases con tapa",
    description: "Envases herméticos para delivery y conservación de alimentos.",
    category: "envases",
    image: "/images/products/envases-con-tapa.webp",
  },
  {
    slug: "bolsas-camiseta",
    name: "Bolsas camiseta",
    description: "Bolsas resistentes para comercios, disponibles en varios tamaños.",
    category: "bolsas",
    image: "/images/products/bolsas-camiseta.webp",
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}
