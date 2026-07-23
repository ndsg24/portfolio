import { createContext } from 'react'
import type { ThemeCode } from '../../shared/types'

export type ThemeContextValue = {
  theme: ThemeCode
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
