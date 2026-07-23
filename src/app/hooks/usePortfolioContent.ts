import { useMemo } from 'react'
import type { Role } from '../../features/experience/experience.types'
import type { Principle } from '../../features/principles/principles.types'
import type { StackGroup } from '../../features/stack/stack.types'
import type { LanguageCode } from '../../shared/types'
import type { PortfolioContent, PortfolioTranslator } from '../portfolio.types'

export function usePortfolioContent(t: PortfolioTranslator, language: LanguageCode): PortfolioContent {
  return useMemo(
    () => ({
        roles: t<Role[]>('roles', { lng: language, returnObjects: true }),
        principles: t<Principle[]>('principles.items', { lng: language, returnObjects: true }),
        stackGroups: t<StackGroup[]>('stack.groups', { lng: language, returnObjects: true }),
      }),
    [language, t],
  )
}
