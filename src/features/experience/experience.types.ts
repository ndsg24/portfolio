export type CompanyId =
  | 'amaris'
  | 'esmax'
  | 'cencosud-itx'
  | 'cencosud'
  | 'ripley'
  | 'falabella-logistics'
  | 'kti'

export type Role = {
  company: string
  companyId: CompanyId
  id: string
  isCurrent: boolean
  parentCompany?: string
  parentCompanyId?: CompanyId
  period: string
  scope?: 'company' | 'client'
  text: string
  title: string
}

export type CompanyBrand = {
  key: CompanyId
  label: string
  logoHeight?: number
  logoPath?: string
  logoWidth?: number
  mark: string
  prefix?: string
  tone: string
}
