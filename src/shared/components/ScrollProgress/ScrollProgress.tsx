import { memo } from "react";
import { usePortfolio } from "../../../app/providers/usePortfolio";
import { navigationItems } from "../../../features/navigation/navigation";
import { useActiveSection } from "../../../features/navigation/useActiveSection";
import "./ScrollProgress.css";

function ScrollProgress() {
  const { t } = usePortfolio();
  const { activeSection, setActiveSection } = useActiveSection();
  const sections = navigationItems.map((item) => ({
    href: item.href,
    label: t(item.labelKey),
  }));

  return (
    <nav className="section-rail" aria-label={t("nav.sectionNavigation")}>
      <span className="section-rail-line" aria-hidden="true" />
      {sections.map((section) => {
        const isActive = activeSection === section.href;

        return (
          <a
            aria-current={isActive ? "location" : undefined}
            aria-label={section.label}
            className={`section-rail-link${isActive ? " active" : ""}`}
            href={section.href}
            key={section.href}
            onClick={() => setActiveSection(section.href)}
          >
            <span className="section-rail-label">{section.label}</span>
            <span className="section-rail-marker" aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
}

export default memo(ScrollProgress);
