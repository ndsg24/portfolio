import type { Role } from "../features/experience/experience.types";
import type { Principle } from "../features/principles/principles.types";
import type { StackGroup } from "../features/stack/stack.types";
import type { Highlight } from "../shared/types";

export type TranslationResource = {
  contact: {
    backdrop: string;
    cta: string;
    languages: string;
    languagesLabel: string;
    text: string;
    title: string;
  };
  footer: {
    backToTop: string;
    copyright: string;
    meta: string;
  };
  hero: {
    ctaPrimary: string;
    ctaSecondary: string;
    eyebrow: string;
    focusEyebrow: string;
    focusTitle: string;
    locationLabel: string;
    roleLabel: string;
    signalKicker: string;
    signalMain: string;
    signalNote: string;
    statement: string;
    traits: string[];
  };
  highlights: Highlight[];
  nav: {
    available: string;
    contact: string;
    home: string;
    menuClose: string;
    menuOpen: string;
    languageSelector: string;
    mobileNavigation: string;
    primaryNavigation: string;
    skipContent: string;
    themeDark: string;
    themeLight: string;
    principles: string;
    sectionNavigation: string;
    stack: string;
    work: string;
  };
  principles: {
    items: Principle[];
    title: string;
  };
  roles: Role[];
  stack: {
    groups: StackGroup[];
    status: string;
    title: string;
  };
  work: {
    current: string;
    logLabel: string;
    rangeEnd: string;
    title: string;
  };
};
