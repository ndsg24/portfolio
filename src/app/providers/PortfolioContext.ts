import { createContext } from 'react'
import type { LanguageCode } from '../../shared/types'
import type { PortfolioContent, PortfolioTranslator } from '../portfolio.types'

export type PortfolioContextValue = PortfolioContent & {
  changeLanguage: (language: LanguageCode) => Promise<void>
  currentLanguage: LanguageCode
  t: PortfolioTranslator
}

export const PortfolioContext = createContext<PortfolioContextValue | null>(null)
