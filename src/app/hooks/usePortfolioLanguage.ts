import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { defaultLanguage, isLanguageCode } from '../../i18n/languages'
import { setStoredLanguage } from '../../shared/lib/storage'
import type { PortfolioTranslator } from '../portfolio.types'
import type { LanguageCode } from '../../shared/types'
import { useDocumentLanguage } from './useDocumentLanguage'

type PortfolioLanguageState = {
  changeLanguage: (language: LanguageCode) => Promise<void>
  currentLanguage: LanguageCode
  t: PortfolioTranslator
}

export function usePortfolioLanguage(): PortfolioLanguageState {
  const { t, i18n } = useTranslation()
  const currentLanguage = isLanguageCode(i18n.resolvedLanguage)
    ? i18n.resolvedLanguage
    : isLanguageCode(i18n.language)
      ? i18n.language
      : defaultLanguage

  useDocumentLanguage(currentLanguage)

  const changeLanguage = useCallback(
    async (language: LanguageCode) => {
      if (language === currentLanguage) {
        return
      }

      await i18n.changeLanguage(language)
      setStoredLanguage(language)
    },
    [currentLanguage, i18n],
  )

  return {
    changeLanguage,
    currentLanguage,
    t: t as PortfolioTranslator,
  }
}
