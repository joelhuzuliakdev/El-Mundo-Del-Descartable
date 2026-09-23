export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string; // nombre del ícono de @tabler/icons-astro
}

export const categories: Category[] = [
  {
    slug: "vasos",
    name: "Vasos descartables",
    description: "Vasos para agua, gaseosa, cerveza y bebidas calientes en distintos tamaños.",
    icon: "IconGlassFull",
  },
  {
    slug: "platos",
    name: "Platos descartables",
    description: "Platos hondos, playos y para postre, de distintos materiales.",
    icon: "IconToolsKitchen2",
  },
  {
    slug: "cubiertos",
    name: "Cubiertos",
    description: "Cucharas, tenedores y cuchillos descartables para todo tipo de evento.",
    icon: "IconRulerMeasure",
  },
  {
    slug: "bandejas",
    name: "Bandejas",
    description: "Bandejas de telgopor, aluminio y cartón para gastronomía y delivery.",
    icon: "IconLayoutGrid",
  },
  {
    slug: "envases",
    name: "Envases",
    description: "Envases con tapa para viandas, delivery y conservación de alimentos.",
    icon: "IconBox",
  },
  {
    slug: "bolsas",
    name: "Bolsas",
    description: "Bolsas camiseta, para residuos y para comercio en distintos tamaños.",
    icon: "IconShoppingBag",
  },
  {
    slug: "papel-servilletas",
    name: "Papel y servilletas",
    description: "Servilletas, rollos de cocina y papel para uso comercial y hogareño.",
    icon: "IconStack2",
  },
  {
    slug: "gastronomia",
    name: "Productos para gastronomía",
    description: "Insumos descartables pensados para bares, restaurantes y rotiserías.",
    icon: "IconChefHat",
  },
  {
    slug: "eventos",
    name: "Productos para eventos",
    description: "Todo lo necesario para cumpleaños, fiestas y celebraciones.",
    icon: "IconConfetti",
  },
  {
    slug: "otros",
    name: "Otros descartables",
    description: "Más productos descartables para tu negocio, evento o casa.",
    icon: "IconDots",
  },
];
