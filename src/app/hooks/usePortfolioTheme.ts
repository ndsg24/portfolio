import { useCallback, useLayoutEffect, useState } from 'react'
import { getStoredTheme, setStoredTheme } from '../../shared/lib/storage'
import type { ThemeCode } from '../../shared/types'

function applyTheme(theme: ThemeCode) {
  const root = document.documentElement
  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')

  root.dataset.theme = theme
  root.style.colorScheme = theme
  themeColor?.setAttribute('content', theme === 'light' ? '#ffffff' : '#020305')
  if (favicon) {
    favicon.href = `${import.meta.env.BASE_URL}${theme === 'light' ? 'favicon-light.svg' : 'favicon.svg'}`
  }
}

export function usePortfolioTheme() {
  const [theme, setTheme] = useState<ThemeCode>(getStoredTheme)

  useLayoutEffect(() => {
    applyTheme(theme)
    setStoredTheme(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')
  }, [])

  return { theme, toggleTheme }
}
