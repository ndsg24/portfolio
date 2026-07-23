export const navigationItems = [
  { href: "#home", labelKey: "nav.home" },
  { href: "#work", labelKey: "nav.work" },
  { href: "#principles", labelKey: "nav.principles" },
  { href: "#stack", labelKey: "nav.stack" },
  { href: "#contact", labelKey: "nav.contact" },
] as const;

export type NavigationTarget = (typeof navigationItems)[number]["href"];

export function isNavigationTarget(value: string): value is NavigationTarget {
  return navigationItems.some((item) => item.href === value);
}
