import { createContext } from "react";
import type { NavigationTarget } from "./navigation";

export type NavigationContextValue = {
  activeSection: NavigationTarget;
  setActiveSection: (target: NavigationTarget) => void;
};

export const NavigationContext = createContext<NavigationContextValue | null>(null);
