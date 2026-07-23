import { usePortfolio } from '../../app/providers/usePortfolio'
import { useTheme } from '../../app/providers/useTheme'
import type { LanguageCode } from '../../shared/types'
import LanguageSwitcher from '../../shared/components/LanguageSwitcher/LanguageSwitcher'
import ThemeSwitcher from '../../shared/components/ThemeSwitcher/ThemeSwitcher'

type HeaderActionsProps = {
  className?: string
  onLanguageChanged?: () => void
}

export default function HeaderActions({ className = 'topbar-actions', onLanguageChanged }: HeaderActionsProps) {
  const { changeLanguage, currentLanguage, t } = usePortfolio()
  const { theme, toggleTheme } = useTheme()

  const handleLanguageChange = async (language: LanguageCode) => {
    await changeLanguage(language)
    onLanguageChanged?.()
  }

  return (
    <div className={className}>
      <ThemeSwitcher
        label={t(theme === 'dark' ? 'nav.themeLight' : 'nav.themeDark')}
        onToggle={toggleTheme}
        theme={theme}
      />
      <LanguageSwitcher
        currentLanguage={currentLanguage}
        label={t('nav.languageSelector')}
        onChange={handleLanguageChange}
      />
    </div>
  )
}
