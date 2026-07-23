import { domAnimation, LazyMotion } from 'framer-motion'
import PortfolioLayout from './PortfolioLayout'
import { PortfolioProvider } from './providers/PortfolioProvider'

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <PortfolioProvider>
        <PortfolioLayout />
      </PortfolioProvider>
    </LazyMotion>
  )
}

export default App
