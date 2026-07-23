export type PrincipleId = 'architecture' | 'full-stack' | 'team' | 'delivery'

export type Principle = {
  id: PrincipleId
  kicker?: string
  text: string
  title: string
}
