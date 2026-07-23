export type StackGroupId = 'frontend' | 'backend' | 'data' | 'operations'

export type StackGroup = {
  id: StackGroupId
  items: string[]
  title: string
}
