import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "./NavigationContext";
import { navigationItems, type NavigationTarget } from "./navigation";

export function useActiveSectionState(): [
  NavigationTarget,
  (target: NavigationTarget) => void,
] {
  const [activeSection, setActiveSection] = useState<NavigationTarget>("#home");

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.34;
      const isAtPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 12;
      let currentSection: NavigationTarget = "#home";

      for (const item of navigationItems) {
        const section = document.querySelector<HTMLElement>(item.href);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentSection = item.href;
        }
      }

      setActiveSection(isAtPageEnd ? "#contact" : currentSection);
    };

    const handleViewportChange = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  return [activeSection, setActiveSection];
}

export function useActiveSection() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useActiveSection must be used inside NavigationProvider.");
  }

  return context;
}
