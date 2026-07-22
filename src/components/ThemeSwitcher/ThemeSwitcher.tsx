import { memo } from 'react'
import { Moon, Sun } from 'lucide-react'
import type { ThemeCode } from '../../types'
import './ThemeSwitcher.css'

type ThemeSwitcherProps = {
  label: string
  onToggle: () => void
  theme: ThemeCode
}

function ThemeSwitcher({ label, onToggle, theme }: ThemeSwitcherProps) {
  return (
    <button className="theme-switcher" type="button" aria-label={label} title={label} onClick={onToggle}>
      {theme === 'dark' ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
    </button>
  )
}

export default memo(ThemeSwitcher)
