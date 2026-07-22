export type LanguageCode = 'es' | 'en' | 'pt'
export type ThemeCode = 'dark' | 'light'

export type LanguageOption = {
  code: LanguageCode
  flag: string
  label: string
  name: string
}

export type PortfolioTranslator = {
  (key: string): string
  <T>(key: string, options: { returnObjects: true }): T
}

export type Role = {
  company: string
  parentCompany?: string
  period: string
  scope?: 'company' | 'client'
  text: string
  title: string
}

export type Principle = {
  kicker?: string
  text: string
  title: string
}

export type StackGroup = {
  items: string[]
  title: string
}

export type PortfolioContent = {
  principles: Principle[]
  roles: Role[]
  stackGroups: StackGroup[]
}

export type CompanyBrand = {
  key?: string
  label: string
  logoPath?: string
  mark: string
  prefix?: string
  tone: string
}

export type Highlight = {
  label: string
  value: string
}

export type TranslationResource = {
  contact: {
    backdrop: string
    cta: string
    text: string
    title: string
  }
  footer: string
  hero: {
    ctaPrimary: string
    ctaSecondary: string
    eyebrow: string
    focusEyebrow: string
    focusTitle: string
    locationLabel: string
    roleLabel: string
    signalKicker: string
    signalMain: string
    signalNote: string
    statement: string
    traits: string[]
  }
  highlights: Highlight[]
  nav: {
    available: string
    contact: string
    menuClose: string
    menuOpen: string
    themeDark: string
    themeLight: string
    principles: string
    stack: string
    work: string
  }
  principles: {
    items: Principle[]
    title: string
  }
  roles: Role[]
  stack: {
    groups: StackGroup[]
    status: string
    title: string
  }
  work: {
    current: string
    logLabel: string
    rangeEnd: string
    title: string
  }
}
