import { defaultLanguage, isLanguageCode } from './languages'
import type { LanguageCode } from '../types'

const LANGUAGE_STORAGE_KEY = 'language'

export function getStoredLanguage(fallbackLanguage: LanguageCode = defaultLanguage): LanguageCode {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)

    return isLanguageCode(storedLanguage) ? storedLanguage : fallbackLanguage
  } catch {
    return fallbackLanguage
  }
}

export function setStoredLanguage(language: LanguageCode): void {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }
}
