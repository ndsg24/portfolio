import type { LanguageCode } from "../shared/types";

type SeoContent = {
  description: string;
  locale: string;
  title: string;
};

export const seoContent: Record<LanguageCode, SeoContent> = {
  es: {
    title: "Nelson Daniel Silva Gutierrez | Senior Full Stack & Tech Lead",
    description:
      "Senior Full Stack Engineer y Tech Lead en Chile. Liderazgo técnico, arquitectura y delivery de software de negocio para equipos y productos LATAM.",
    locale: "es_CL",
  },
  en: {
    title: "Nelson Daniel Silva Gutierrez | Senior Full Stack & Tech Lead",
    description:
      "Senior Full Stack Engineer and Tech Lead based in Chile. Technical leadership, architecture, and sustainable software delivery for LATAM products and teams.",
    locale: "en_US",
  },
  pt: {
    title: "Nelson Daniel Silva Gutierrez | Senior Full Stack & Tech Lead",
    description:
      "Senior Full Stack Engineer e Tech Lead no Chile. Liderança técnica, arquitetura e delivery sustentável de software para produtos e equipes na LATAM.",
    locale: "pt_BR",
  },
};
