import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getStoredLanguagePreference } from '../shared/lib/storage'
import en from './locales/en'
import es from './locales/es'
import pt from './locales/pt'
import { defaultLanguage, isLanguageCode } from './languages'

function getInitialLanguage() {
  const urlLanguage = new URL(window.location.href).searchParams.get('lang')
  if (isLanguageCode(urlLanguage)) return urlLanguage

  const storedLanguage = getStoredLanguagePreference()
  if (storedLanguage) return storedLanguage

  const browserLanguage = navigator.languages
    ?.map((language) => language.split('-')[0])
    .find(isLanguageCode)

  return browserLanguage ?? defaultLanguage
}

export const resources = {
  en: { translation: en },
  es: { translation: es },
  pt: { translation: pt },
}

void i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  lng: getInitialLanguage(),
  resources,
})

export default i18n
