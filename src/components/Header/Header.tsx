import { memo, useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import LanguageSwitcher from '../LanguageSwitcher'
import ThemeSwitcher from '../ThemeSwitcher'
import type { LanguageCode, PortfolioTranslator, ThemeCode } from '../../types'
import './Header.css'

const navItems = [
  { href: '#work', labelKey: 'nav.work' },
  { href: '#principles', labelKey: 'nav.principles' },
  { href: '#stack', labelKey: 'nav.stack' },
  { href: '#contact', labelKey: 'nav.contact' },
]

const logoSrc = `${import.meta.env.BASE_URL}favicon.svg`

type HeaderProps = {
  currentLanguage: LanguageCode
  isCompact: boolean
  onLanguageChange: (language: LanguageCode) => void | Promise<void>
  onThemeToggle: () => void
  t: PortfolioTranslator
  theme: ThemeCode
}

function Header({ currentLanguage, isCompact, onLanguageChange, onThemeToggle, t, theme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    let frameId = 0

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.34
      const isAtPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 12
      let currentSection = ''

      for (const item of navItems) {
        const section = document.querySelector<HTMLElement>(item.href)
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentSection = item.href
        }
      }

      setActiveSection(isAtPageEnd ? '#contact' : currentSection)
    }

    const handleScroll = () => {
      window.cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const handleLanguageChange = (language: LanguageCode) => {
    onLanguageChange(language)
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className={`topbar ${isCompact ? 'compact' : 'full'} ${isMenuOpen ? 'menu-open' : ''}`}>
        <a className="brand" href="#home" aria-label="Nelson Daniel Silva Gutierrez">
          <span><img alt="" src={logoSrc} width={42} height={42} /></span>
          <strong>NDSG</strong>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className={activeSection === item.href ? 'active' : undefined}
              href={item.href}
              key={item.href}
              aria-current={activeSection === item.href ? 'location' : undefined}
              onClick={() => setActiveSection(item.href)}
            >
              {t(item.labelKey)}
            </a>
          ))}
        </nav>
        <div className="topbar-actions">
          <ThemeSwitcher
            label={t(theme === 'dark' ? 'nav.themeLight' : 'nav.themeDark')}
            onToggle={onThemeToggle}
            theme={theme}
          />
          <LanguageSwitcher currentLanguage={currentLanguage} onChange={onLanguageChange} />
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={t(isMenuOpen ? 'nav.menuClose' : 'nav.menuOpen')}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>
      <div
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
      >
        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              className={activeSection === item.href ? 'active' : undefined}
              href={item.href}
              key={item.href}
              aria-current={activeSection === item.href ? 'location' : undefined}
              onClick={() => {
                setActiveSection(item.href)
                setIsMenuOpen(false)
              }}
            >
              <span>{t(item.labelKey)}</span>
              <ArrowUpRight aria-hidden="true" size={24} />
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <span>NDSG / 2026</span>
          <div className="mobile-menu-controls">
            <ThemeSwitcher
              label={t(theme === 'dark' ? 'nav.themeLight' : 'nav.themeDark')}
              onToggle={onThemeToggle}
              theme={theme}
            />
            <LanguageSwitcher currentLanguage={currentLanguage} onChange={handleLanguageChange} />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Header)
