import { useEffect } from "react";
import { isNavigationTarget, type NavigationTarget } from "./navigation";

export function useInitialHashNavigation(
  setActiveSection: (target: NavigationTarget) => void,
) {
  useEffect(() => {
    const target = window.location.hash;
    if (!isNavigationTarget(target) || target === "#home") return;

    const scrollToTarget = () => {
      const section = document.querySelector<HTMLElement>(target);
      if (!section) return false;

      setActiveSection(target);
      window.requestAnimationFrame(() => {
        section.scrollIntoView({ behavior: "auto", block: "start" });
      });
      return true;
    };

    if (scrollToTarget()) return;

    const observer = new MutationObserver(() => {
      if (scrollToTarget()) observer.disconnect();
    });
    observer.observe(document.getElementById("main-content") ?? document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [setActiveSection]);
}
