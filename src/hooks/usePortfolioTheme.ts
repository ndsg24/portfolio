import { useCallback, useLayoutEffect, useState } from 'react'
import { getStoredTheme, setStoredTheme } from '../lib/storage'
import type { ThemeCode } from '../types'

function applyTheme(theme: ThemeCode) {
  const root = document.documentElement

  root.dataset.theme = theme
  root.style.colorScheme = theme
  root.classList.toggle('theme-light', theme === 'light')
  root.classList.toggle('theme-dark', theme === 'dark')
  document.body.classList.toggle('theme-light', theme === 'light')
  document.body.classList.toggle('theme-dark', theme === 'dark')
}

export function usePortfolioTheme() {
  const [theme, setTheme] = useState<ThemeCode>(() => {
    const initialTheme = getStoredTheme()
    applyTheme(initialTheme)
    return initialTheme
  })

  useLayoutEffect(() => {
    applyTheme(theme)
    setStoredTheme(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
      applyTheme(nextTheme)
      return nextTheme
    })
  }, [])

  return { theme, toggleTheme }
}
