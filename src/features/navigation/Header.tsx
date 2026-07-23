import { memo, useRef } from "react";
import { Menu, X } from "lucide-react";
import { usePortfolio } from "../../app/providers/usePortfolio";
import { useTheme } from "../../app/providers/useTheme";
import { useHeaderCompact } from "./useHeaderCompact";
import DesktopNavigation from "./DesktopNavigation";
import HeaderActions from "./HeaderActions";
import MobileNavigation from "./MobileNavigation";
import { useActiveSection } from "./useActiveSection";
import { useMobileMenu } from "./useMobileMenu";
import "./Header.css";

const darkLogoSrc = `${import.meta.env.BASE_URL}logo-mark.svg`;
const lightLogoSrc = `${import.meta.env.BASE_URL}logo-mark-light.svg`;

function Header() {
  const { t } = usePortfolio();
  const { theme } = useTheme();
  const isCompact = useHeaderCompact();
  const { activeSection, setActiveSection } = useActiveSection();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menu = useMobileMenu({ menuRef: mobileMenuRef, triggerRef: menuButtonRef });

  return (
    <>
      <header
        className={`topbar ${isCompact ? "compact" : "full"} ${menu.isOpen ? "menu-open" : ""}`}
      >
        <a
          className="brand"
          href="#home"
          aria-label="Nelson Daniel Silva Gutierrez"
        >
          <span>
            <img
              alt=""
              src={theme === "light" ? lightLogoSrc : darkLogoSrc}
              width={42}
              height={42}
            />
          </span>
        </a>
        <DesktopNavigation
          activeSection={activeSection}
          onNavigate={setActiveSection}
        />
        <HeaderActions />
        <button
          aria-controls="mobile-navigation"
          aria-expanded={menu.isOpen}
          aria-label={t(menu.isOpen ? "nav.menuClose" : "nav.menuOpen")}
          className="menu-toggle"
          onClick={menu.toggle}
          ref={menuButtonRef}
          type="button"
        >
          {menu.isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>
      <MobileNavigation
        activeSection={activeSection}
        isOpen={menu.isOpen}
        menuRef={mobileMenuRef}
        onClose={menu.close}
        onNavigate={setActiveSection}
      />
    </>
  );
}

export default memo(Header);
