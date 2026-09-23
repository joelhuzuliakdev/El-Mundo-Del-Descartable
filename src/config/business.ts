// -----------------------------------------------------------------------------
// Configuración central del negocio.
// Modificá estos valores para actualizar la información en todo el sitio.
// -----------------------------------------------------------------------------

export const business = {
  BUSINESS_NAME: "El Mundo Del Descartable",
  LEGAL_NAME: "El Mundo Del Descartable",
  SHORT_DESCRIPTION:
    "Productos descartables para comercios, gastronomía, eventos y hogares en Córdoba.",

  // Dirección (dato real provisto)
  ADDRESS: "Sobremonte 818",
  CITY: "Río Segundo",
  PROVINCE: "Córdoba",
  COUNTRY: "Argentina",
  POSTAL_CODE: "", // TODO: completar código postal si se dispone

  // Contacto (dato real provisto)
  PHONE: "3572549909",
  PHONE_DISPLAY: "3572 54-9909",
  WHATSAPP: "5493572549909", // formato internacional sin espacios ni signos, usado para wa.me
  EMAIL: "", // TODO: completar email de contacto si existe

  // Redes y mapa — completar cuando estén disponibles
  INSTAGRAM_URL: "https://www.instagram.com/elmundodeldescartable",
  GOOGLE_MAPS_URL:
    "https://www.google.com/maps/search/?api=1&query=Sobremonte+818+Rio+Segundo+Cordoba",
  GOOGLE_MAPS_EMBED_SRC:
    "https://www.google.com/maps?q=Sobremonte+818,+R%C3%ADo+Segundo,+C%C3%B3rdoba&output=embed",
  GEO: {
    // TODO: reemplazar por coordenadas exactas del local cuando se confirmen
    latitude: -31.6547,
    longitude: -63.9445,
  },

  // Horarios — TODO: confirmar horarios reales de atención
  OPENING_HOURS_DISPLAY: [
    { days: "Lunes a Viernes", hours: "8:30 – 12:30 y 16:30 – 20:30" },
    { days: "Sábados", hours: "9:00 – 13:00 y 16:30 – 20:30" },
  ],
  // Formato para Schema.org (día en inglés abreviado + rango 24hs)
  OPENING_HOURS_SCHEMA: [
  "Mo-Fr 08:30-13:00",
  "Mo-Fr 16:30-20:30",
  "Sa 09:00-13:00",
  "Sa 16:30-20:30",
],

  SITE_URL: import.meta.env.PUBLIC_SITE_URL || "https://elmundodeldescartable.com.ar",
  GA_ID: import.meta.env.PUBLIC_GA_ID || "",

  DEFAULT_WHATSAPP_MESSAGE: "Hola, quería consultar por productos descartables.",
};

/** Genera un link de WhatsApp con mensaje prellenado y opcionalmente personalizado. */
export function buildWhatsAppLink(message?: string): string {
  const text = message || business.DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${business.WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export function buildProductWhatsAppLink(productName: string): string {
  return buildWhatsAppLink(`Hola, quería consultar por ${productName}.`);
}
