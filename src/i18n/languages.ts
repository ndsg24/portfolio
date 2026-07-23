import type { LanguageCode, LanguageOption } from '../shared/types'

export const defaultLanguage: LanguageCode = 'es'

export const languages = [
  { code: 'es', label: 'ES', flag: '🇨🇱', name: 'Español' },
  { code: 'en', label: 'EN', flag: '🇺🇸', name: 'English' },
  { code: 'pt', label: 'PT', flag: '🇧🇷', name: 'Português' },
] satisfies LanguageOption[]

export function isLanguageCode(value: unknown): value is LanguageCode {
  return typeof value === 'string' && languages.some((language) => language.code === value)
}
