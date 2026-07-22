import { memo, useMemo, useState } from 'react'
import { languages } from '../../lib/languages'
import type { LanguageCode } from '../../types'
import './LanguageSwitcher.css'

type LanguageSwitcherProps = {
  currentLanguage: LanguageCode
  onChange: (language: LanguageCode) => void
}

function LanguageSwitcher({ currentLanguage, onChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const activeLanguage = useMemo(
    () => languages.find((language) => language.code === currentLanguage) || languages[0],
    [currentLanguage],
  )
  const otherLanguages = useMemo(
    () => languages.filter((language) => language.code !== activeLanguage.code),
    [activeLanguage.code],
  )

  const handleSelect = (language: LanguageCode) => {
    onChange(language)
    setIsOpen(false)
  }

  return (
    <div className="language-switcher">
      <button
        className="language-current"
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Language selector"
        onClick={() => setIsOpen((value) => !value)}
      >
        <span aria-hidden="true">{activeLanguage.flag}</span>
        <small>{activeLanguage.label}</small>
      </button>
      <div className={`language-menu ${isOpen ? 'open' : ''}`} role="menu">
        {otherLanguages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleSelect(language.code)}
            role="menuitem"
            type="button"
            title={language.name}
          >
            <span aria-hidden="true">{language.flag}</span>
            <small>{language.label}</small>
          </button>
        ))}
      </div>
    </div>
  )
}

export default memo(LanguageSwitcher)
