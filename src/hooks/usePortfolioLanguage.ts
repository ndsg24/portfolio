import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { defaultLanguage, isLanguageCode } from '../lib/languages'
import { setStoredLanguage } from '../lib/storage'
import type { LanguageCode, PortfolioTranslator } from '../types'
import { useDocumentLanguage } from './useDocumentLanguage'

type PortfolioLanguageState = {
  changeLanguage: (language: LanguageCode) => void
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
    (language: LanguageCode) => {
      if (language === currentLanguage) {
        return
      }

      void i18n.changeLanguage(language)
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
