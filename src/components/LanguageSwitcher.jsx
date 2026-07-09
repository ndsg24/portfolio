import { languages } from '../lib/languages'

function LanguageSwitcher({ currentLanguage, onChange }) {
  return (
    <div className="language-switcher" aria-label="Language selector">
      {languages.map((language) => (
        <button
          className={currentLanguage === language.code ? 'active' : ''}
          key={language.code}
          onClick={() => onChange(language.code)}
          type="button"
          title={language.name}
        >
          <span aria-hidden="true">{language.flag}</span>
          <small>{language.label}</small>
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
