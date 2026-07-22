import { useMemo } from 'react'
import type { LanguageCode, PortfolioContent, PortfolioTranslator, Principle, Role, StackGroup } from '../types'

export function usePortfolioContent(t: PortfolioTranslator, language: LanguageCode): PortfolioContent {
  return useMemo(
    () => {
      void language

      return {
        roles: t<Role[]>('roles', { returnObjects: true }),
        principles: t<Principle[]>('principles.items', { returnObjects: true }),
        stackGroups: t<StackGroup[]>('stack.groups', { returnObjects: true }),
      }
    },
    [language, t],
  )
}
