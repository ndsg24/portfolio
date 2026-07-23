import { type PropsWithChildren, useMemo } from "react";
import { NavigationContext } from "./NavigationContext";
import { useActiveSectionState } from "./useActiveSection";
import { useInitialHashNavigation } from "./useInitialHashNavigation";

export default function NavigationProvider({ children }: PropsWithChildren) {
  const [activeSection, setActiveSection] = useActiveSectionState();
  useInitialHashNavigation(setActiveSection);
  const value = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection, setActiveSection],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
