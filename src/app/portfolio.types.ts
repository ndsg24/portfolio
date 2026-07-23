import type { Role } from '../features/experience/experience.types'
import type { Principle } from '../features/principles/principles.types'
import type { StackGroup } from '../features/stack/stack.types'
import type { LanguageCode } from '../shared/types'

export type PortfolioTranslator = {
  (key: string): string
  <T>(key: string, options: { lng?: LanguageCode; returnObjects: true }): T
}

export type PortfolioContent = {
  principles: Principle[]
  roles: Role[]
  stackGroups: StackGroup[]
}
