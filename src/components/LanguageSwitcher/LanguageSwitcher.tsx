import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { languages } from '../../lib/languages'
import type { LanguageCode } from '../../types'
import './LanguageSwitcher.css'

type LanguageSwitcherProps = {
  currentLanguage: LanguageCode
  onChange: (language: LanguageCode) => void | Promise<void>
}

function LanguageSwitcher({ currentLanguage, onChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const activeLanguage = useMemo(
    () => languages.find((language) => language.code === currentLanguage) || languages[0],
    [currentLanguage],
  )
  const otherLanguages = useMemo(
    () => languages.filter((language) => language.code !== activeLanguage.code),
    [activeLanguage.code],
  )

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleSelect = async (language: LanguageCode) => {
    await onChange(language)
    setIsOpen(false)
  }

  return (
    <div className="language-switcher" ref={rootRef}>
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
            onClick={() => void handleSelect(language.code)}
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
