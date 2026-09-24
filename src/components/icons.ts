// Mapa de nombres de ícono (usados en src/data) a los componentes reales de
// @tabler/icons-astro. Mantiene el bundle liviano porque cada ícono se
// importa individualmente y solo se listan los que realmente se usan.
import {
  IconGlassFull,
  IconToolsKitchen2,
  IconBowl,
  IconMeat,
  IconContainer,
  IconShoppingBag,
  IconStack2,
  IconChefHat,
  IconConfetti,
  IconDots,
  IconPencil,
  IconPrinter,
} from "@tabler/icons-astro";

export const iconMap = {
  IconGlassFull,
  IconToolsKitchen2,
  IconBowl,
  IconMeat,
  IconContainer,
  IconShoppingBag,
  IconStack2,
  IconChefHat,
  IconConfetti,
  IconDots,
  IconPencil,
  IconPrinter,
} as const;

export type IconName = keyof typeof iconMap;
