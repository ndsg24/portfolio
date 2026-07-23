export type LanguageCode = 'es' | 'en' | 'pt'
export type ThemeCode = 'dark' | 'light'

export type LanguageOption = {
  code: LanguageCode
  flag: string
  label: string
  name: string
}

export type Highlight = {
  label: string
  value: string
}
