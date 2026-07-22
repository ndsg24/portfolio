import { lazy, Suspense } from 'react'
import { domAnimation, LazyMotion } from 'framer-motion'
import { Header, Hero, ScrollProgress } from './components'
import { LazySectionFallback } from './components/common'
import { useHeaderCompact, usePortfolioContent, usePortfolioLanguage, usePortfolioTheme } from './hooks'

const Experience = lazy(() => import('./components/Experience'))
const Principles = lazy(() => import('./components/Principles'))
const StackSection = lazy(() => import('./components/StackSection'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const { changeLanguage, currentLanguage, t } = usePortfolioLanguage()
  const isHeaderCompact = useHeaderCompact()
  const { theme, toggleTheme } = usePortfolioTheme()
  const { principles, roles, stackGroups } = usePortfolioContent(t, currentLanguage)

  return (
    <LazyMotion features={domAnimation}>
      <main className={`site-shell theme-${theme}`}>
        <div aria-hidden="true" className="ambient-background">
          <span className="ambient-orbit ambient-orbit-one" />
          <span className="ambient-orbit ambient-orbit-two" />
          <span className="ambient-scan" />
        </div>
        <ScrollProgress />
        <Header
          currentLanguage={currentLanguage}
          isCompact={isHeaderCompact}
          onLanguageChange={changeLanguage}
          onThemeToggle={toggleTheme}
          t={t}
          theme={theme}
        />
        <Hero t={t} />
        <Suspense fallback={<LazySectionFallback />}>
          <Experience roles={roles} t={t} />
          <Principles items={principles} t={t} />
          <StackSection groups={stackGroups} t={t} />
          <Contact t={t} />
          <Footer />
        </Suspense>
      </main>
    </LazyMotion>
  )
}

export default App
