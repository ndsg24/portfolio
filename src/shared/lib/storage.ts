import { defaultLanguage, isLanguageCode } from '../../i18n/languages'
import type { LanguageCode, ThemeCode } from '../types'

const LANGUAGE_STORAGE_KEY = 'language'
const THEME_STORAGE_KEY = 'portfolio-theme-v2'

export function getStoredLanguage(fallbackLanguage: LanguageCode = defaultLanguage): LanguageCode {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)

    return isLanguageCode(storedLanguage) ? storedLanguage : fallbackLanguage
  } catch {
    return fallbackLanguage
  }
}

export function getStoredLanguagePreference(): LanguageCode | null {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return isLanguageCode(storedLanguage) ? storedLanguage : null
  } catch {
    return null
  }
}

export function setStoredLanguage(language: LanguageCode): void {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }
}

export function getStoredTheme(): ThemeCode {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY)
    if (storedTheme === 'dark' || storedTheme === 'light') return storedTheme
  } catch {
    // Fall through to the system preference.
  }

  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function setStoredTheme(theme: ThemeCode): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }
}
