import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getStoredLanguage } from '../shared/lib/storage'
import en from './locales/en'
import es from './locales/es'
import pt from './locales/pt'

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
  lng: getStoredLanguage(),
  resources,
})

export default i18n
