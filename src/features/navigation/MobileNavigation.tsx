import { ArrowUpRight } from 'lucide-react'
import { usePortfolio } from '../../app/providers/usePortfolio'
import HeaderActions from './HeaderActions'
import { navigationItems, type NavigationTarget } from './navigation'

type MobileNavigationProps = {
  activeSection: NavigationTarget
  isOpen: boolean
  onClose: () => void
  onNavigate: (target: NavigationTarget) => void
}

export default function MobileNavigation({ activeSection, isOpen, onClose, onNavigate }: MobileNavigationProps) {
  const { t } = usePortfolio()

  return (
    <div
      aria-hidden={!isOpen}
      className={`mobile-menu ${isOpen ? 'open' : ''}`}
      id="mobile-navigation"
    >
      <nav className="mobile-menu-nav" aria-label="Mobile navigation">
        {navigationItems.map((item) => (
          <a
            aria-current={activeSection === item.href ? 'location' : undefined}
            className={activeSection === item.href ? 'active' : undefined}
            href={item.href}
            key={item.href}
            onClick={() => {
              onNavigate(item.href)
              onClose()
            }}
          >
            <span>{t(item.labelKey)}</span>
            <ArrowUpRight aria-hidden="true" size={24} />
          </a>
        ))}
      </nav>
      <div className="mobile-menu-footer">
        <span>NDSG / 2026</span>
        <HeaderActions className="mobile-menu-controls" onLanguageChanged={onClose} />
      </div>
    </div>
  )
}
