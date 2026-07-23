import { usePortfolio } from '../../app/providers/usePortfolio'
import { navigationItems, type NavigationTarget } from './navigation'

type DesktopNavigationProps = {
  activeSection: NavigationTarget
  onNavigate: (target: NavigationTarget) => void
}

export default function DesktopNavigation({ activeSection, onNavigate }: DesktopNavigationProps) {
  const { t } = usePortfolio()

  return (
    <nav className="nav-links" aria-label={t('nav.primaryNavigation')}>
      {navigationItems.map((item) => (
        <a
          aria-current={activeSection === item.href ? 'location' : undefined}
          className={activeSection === item.href ? 'active' : undefined}
          href={item.href}
          key={item.href}
          onClick={() => onNavigate(item.href)}
        >
          {t(item.labelKey)}
        </a>
      ))}
    </nav>
  )
}
