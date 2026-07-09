import LanguageSwitcher from './LanguageSwitcher'

function Header({ currentLanguage, onLanguageChange, t }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Nelson Daniel Silva Gutierrez">
        <span>NDSG</span>
        <strong>Nelson Silva</strong>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#work">{t('nav.work')}</a>
        <a href="#principles">{t('nav.principles')}</a>
        <a href="#stack">{t('nav.stack')}</a>
        <a href="#contact">{t('nav.contact')}</a>
      </nav>
      <LanguageSwitcher currentLanguage={currentLanguage} onChange={onLanguageChange} />
    </header>
  )
}

export default Header
