import { languages } from '../lib/languages'

function LanguageSwitcher({ currentLanguage, onChange }) {
  const activeLanguage =
    languages.find((language) => language.code === currentLanguage) || languages[0]
  const otherLanguages = languages.filter((language) => language.code !== activeLanguage.code)

  return (
    <div className="language-switcher">
      <button className="language-current" type="button" aria-label="Language selector">
        <span aria-hidden="true">{activeLanguage.flag}</span>
        <small>{activeLanguage.label}</small>
      </button>
      <div className="language-menu">
        {otherLanguages.map((language) => (
          <button
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
    </div>
  )
}

export default LanguageSwitcher
