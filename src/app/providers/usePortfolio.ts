import { useContext } from 'react'
import { PortfolioContext, type PortfolioContextValue } from './PortfolioContext'

export function usePortfolio(): PortfolioContextValue {
  const context = useContext(PortfolioContext)

  if (!context) {
    throw new Error('usePortfolio must be used inside PortfolioProvider.')
  }

  return context
}
