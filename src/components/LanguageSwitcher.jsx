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
        >
          {language.label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
