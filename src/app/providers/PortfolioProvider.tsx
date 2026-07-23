import { type PropsWithChildren, useMemo } from 'react'
import { usePortfolioContent } from '../hooks/usePortfolioContent'
import { usePortfolioLanguage } from '../hooks/usePortfolioLanguage'
import { usePortfolioTheme } from '../hooks/usePortfolioTheme'
import { PortfolioContext } from './PortfolioContext'
import { ThemeContext } from './ThemeContext'

export function PortfolioProvider({ children }: PropsWithChildren) {
  const { changeLanguage, currentLanguage, t } = usePortfolioLanguage()
  const { theme, toggleTheme } = usePortfolioTheme()
  const content = usePortfolioContent(t, currentLanguage)

  const portfolioValue = useMemo(
    () => ({
      ...content,
      changeLanguage,
      currentLanguage,
      t,
    }),
    [changeLanguage, content, currentLanguage, t],
  )
  const themeValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={themeValue}>
      <PortfolioContext.Provider value={portfolioValue}>{children}</PortfolioContext.Provider>
    </ThemeContext.Provider>
  )
}
