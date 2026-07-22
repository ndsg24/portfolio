import { memo } from 'react'
import LanguageSwitcher from '../LanguageSwitcher'
import type { LanguageCode, PortfolioTranslator } from '../../types'
import './Header.css'

const navItems = [
  { href: '#work', labelKey: 'nav.work' },
  { href: '#principles', labelKey: 'nav.principles' },
  { href: '#stack', labelKey: 'nav.stack' },
  { href: '#contact', labelKey: 'nav.contact' },
]

type HeaderProps = {
  currentLanguage: LanguageCode
  isCompact: boolean
  onLanguageChange: (language: LanguageCode) => void
  t: PortfolioTranslator
}

function Header({ currentLanguage, isCompact, onLanguageChange, t }: HeaderProps) {
  return (
    <header className={`topbar ${isCompact ? 'compact' : 'full'}`}>
      <a className="brand" href="#home" aria-label="Nelson Daniel Silva Gutierrez">
        <span>NDSG</span>
        <strong>Nelson Daniel</strong>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {t(item.labelKey)}
          </a>
        ))}
      </nav>
      <div className="topbar-actions">
        <LanguageSwitcher currentLanguage={currentLanguage} onChange={onLanguageChange} />
      </div>
    </header>
  )
}

export default memo(Header)
