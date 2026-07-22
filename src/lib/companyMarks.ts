import type { CompanyBrand } from '../types'

const logoBasePath = `${import.meta.env.BASE_URL}logos/companies/`
const cleanLogoBasePath = `${logoBasePath}clean/`

export const featuredCompanies = [
  {
    key: 'amaris',
    label: 'Amaris Consulting',
    mark: 'amaris',
    tone: 'amaris',
    logoPath: `${cleanLogoBasePath}amaris.png`,
  },
  {
    key: 'esmax',
    label: 'Esmax',
    mark: 'esmax',
    tone: 'esmax',
    logoPath: `${cleanLogoBasePath}esmax.png`,
  },
  {
    key: 'cencosud-itx',
    label: 'Cencosud ITX',
    mark: 'ITX',
    prefix: 'cencosud',
    tone: 'cencosud',
    logoPath: `${cleanLogoBasePath}cencosud.png`,
  },
  {
    key: 'cencosud',
    label: 'Cencosud',
    mark: 'cencosud',
    tone: 'cencosud',
    logoPath: `${cleanLogoBasePath}cencosud.png`,
  },
  {
    key: 'ripley',
    label: 'Ripley Chile',
    mark: 'Ripley',
    tone: 'ripley',
    logoPath: `${cleanLogoBasePath}ripley.png`,
  },
  {
    key: 'logistica-falabella',
    label: 'Logistica Falabella',
    mark: 'logistica',
    tone: 'falabella',
    logoPath: `${cleanLogoBasePath}logistica.png`,
  },
  {
    key: 'kti',
    label: 'KTI',
    mark: 'KTI',
    tone: 'kti',
    logoPath: `${cleanLogoBasePath}kti.png`,
  },
] satisfies CompanyBrand[]

export const companyMarks: Record<string, CompanyBrand> = {
  'Amaris Consulting': featuredCompanies[0],
  Esmax: featuredCompanies[1],
  'Cencosud ITX': featuredCompanies[2],
  Cencosud: featuredCompanies[3],
  'Ripley Chile': featuredCompanies[4],
  'Logística Falabella': featuredCompanies[5],
  'Logistica Falabella': {
    ...featuredCompanies[5],
  },
  'KTI Ingeniería': featuredCompanies[6],
  'KTI Engenharia': featuredCompanies[6],
}
