import type { CompanyBrand } from './experience.types'

const logoBasePath = `${import.meta.env.BASE_URL}logos/companies/`
const cleanLogoBasePath = `${logoBasePath}clean/`

export const featuredCompanies = [
  {
    key: 'amaris',
    label: 'Amaris Consulting',
    mark: 'amaris',
    tone: 'amaris',
    logoPath: `${cleanLogoBasePath}amaris-300.webp`,
    logoWidth: 300,
    logoHeight: 115,
  },
  {
    key: 'esmax',
    label: 'Esmax',
    mark: 'esmax',
    tone: 'esmax',
    logoPath: `${cleanLogoBasePath}esmax-300.webp`,
    logoWidth: 300,
    logoHeight: 93,
  },
  {
    key: 'cencosud-itx',
    label: 'Cencosud ITX',
    mark: 'ITX',
    prefix: 'cencosud',
    tone: 'cencosud',
    logoPath: `${cleanLogoBasePath}cencosud-300.webp`,
    logoWidth: 300,
    logoHeight: 158,
  },
  {
    key: 'cencosud',
    label: 'Cencosud',
    mark: 'cencosud',
    tone: 'cencosud',
    logoPath: `${cleanLogoBasePath}cencosud-300.webp`,
    logoWidth: 300,
    logoHeight: 158,
  },
  {
    key: 'ripley',
    label: 'Ripley Chile',
    mark: 'Ripley',
    tone: 'ripley',
    logoPath: `${cleanLogoBasePath}ripley-160.webp`,
    logoWidth: 160,
    logoHeight: 231,
  },
  {
    key: 'falabella-logistics',
    label: 'Logistica Falabella',
    mark: 'logistica',
    tone: 'falabella',
    logoPath: `${cleanLogoBasePath}logistica-160.webp`,
    logoWidth: 160,
    logoHeight: 32,
  },
  {
    key: 'kti',
    label: 'KTI',
    mark: 'KTI',
    tone: 'kti',
    logoPath: `${cleanLogoBasePath}kti-160.webp`,
    logoWidth: 160,
    logoHeight: 129,
  },
] satisfies CompanyBrand[]

export const companyMarks = {
  amaris: featuredCompanies[0],
  esmax: featuredCompanies[1],
  'cencosud-itx': featuredCompanies[2],
  cencosud: featuredCompanies[3],
  ripley: featuredCompanies[4],
  'falabella-logistics': featuredCompanies[5],
  kti: featuredCompanies[6],
} satisfies Record<CompanyBrand['key'], CompanyBrand>
