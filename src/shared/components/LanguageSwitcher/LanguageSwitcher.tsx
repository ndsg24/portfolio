import { memo, useEffect, useId, useMemo, useRef, useState } from 'react'
import { languages } from '../../../i18n/languages'
import type { LanguageCode } from '../../types'
import './LanguageSwitcher.css'

type LanguageSwitcherProps = {
  label: string
  currentLanguage: LanguageCode
  onChange: (language: LanguageCode) => void | Promise<void>
}

function LanguageSwitcher({ currentLanguage, label, onChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuId = useId()
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
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
        return
      }

      if (!menuRef.current || !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return

      const items = Array.from(menuRef.current.querySelectorAll<HTMLButtonElement>('button'))
      if (items.length === 0) return
      event.preventDefault()
      const currentIndex = items.indexOf(document.activeElement as HTMLButtonElement)
      const nextIndex =
        event.key === 'Home'
          ? 0
          : event.key === 'End'
            ? items.length - 1
            : event.key === 'ArrowDown'
              ? (currentIndex + 1) % items.length
              : (currentIndex - 1 + items.length) % items.length
      items[nextIndex]?.focus()
    }

    document.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const frame = window.requestAnimationFrame(() => {
      menuRef.current?.querySelector<HTMLButtonElement>('button')?.focus()
    })
    return () => window.cancelAnimationFrame(frame)
  }, [isOpen])

  const handleSelect = async (language: LanguageCode) => {
    await onChange(language)
    setIsOpen(false)
  }

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        className="language-current"
        aria-controls={menuId}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={label}
        onClick={() => setIsOpen((value) => !value)}
        ref={triggerRef}
      >
        <span aria-hidden="true">{activeLanguage.flag}</span>
        <small>{activeLanguage.label}</small>
      </button>
      <div
        aria-hidden={!isOpen}
        className={`language-menu ${isOpen ? 'open' : ''}`}
        id={menuId}
        ref={menuRef}
        role="menu"
      >
        {otherLanguages.map((language) => (
          <button
            key={language.code}
            onClick={() => void handleSelect(language.code)}
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
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
