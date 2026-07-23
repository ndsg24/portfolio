import { useCallback, useEffect } from 'react'
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

  useEffect(() => {
    const url = new URL(window.location.href)
    if (url.searchParams.get('lang') !== currentLanguage) {
      url.searchParams.set('lang', currentLanguage)
      window.history.replaceState(null, '', url)
    }

    const handlePopState = () => {
      const language = new URL(window.location.href).searchParams.get('lang')
      if (isLanguageCode(language) && language !== i18n.resolvedLanguage) {
        void i18n.changeLanguage(language)
        setStoredLanguage(language)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [currentLanguage, i18n])

  const changeLanguage = useCallback(
    async (language: LanguageCode) => {
      if (language === currentLanguage) {
        return
      }

      await i18n.changeLanguage(language)
      setStoredLanguage(language)
      const url = new URL(window.location.href)
      url.searchParams.set('lang', language)
      window.history.pushState(null, '', url)
    },
    [currentLanguage, i18n],
  )

  return {
    changeLanguage,
    currentLanguage,
    t: t as PortfolioTranslator,
  }
}
