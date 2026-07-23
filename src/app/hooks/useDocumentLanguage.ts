import { useEffect } from 'react'
import type { LanguageCode } from '../../shared/types'

export function useDocumentLanguage(language: LanguageCode): void {
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])
}
