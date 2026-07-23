import { lazy, Suspense } from 'react'
import Header from '../features/navigation/Header'
import Hero from '../features/hero/Hero'
import ScrollProgress from '../shared/components/ScrollProgress/ScrollProgress'
import LazySectionFallback from '../shared/components/LazySectionFallback/LazySectionFallback'
import NavigationProvider from '../features/navigation/NavigationProvider'
import { usePortfolio } from './providers/usePortfolio'

const Experience = lazy(() => import('../features/experience/Experience'))
const Principles = lazy(() => import('../features/principles/Principles'))
const StackSection = lazy(() => import('../features/stack/StackSection'))
const Contact = lazy(() => import('../features/contact/Contact'))
const Footer = lazy(() => import('../shared/components/Footer/Footer'))

function SectionFallback() {
  return <LazySectionFallback />
}

export default function PortfolioLayout() {
  const { t } = usePortfolio()

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{t('nav.skipContent')}</a>
      <div aria-hidden="true" className="ambient-background">
        <span className="ambient-orbit ambient-orbit-one" />
        <span className="ambient-orbit ambient-orbit-two" />
        <span className="ambient-scan" />
      </div>
      <NavigationProvider>
        <ScrollProgress />
        <Header />
        <main id="main-content">
          <Hero />
          <Suspense fallback={<SectionFallback />}><Experience /></Suspense>
          <Suspense fallback={<SectionFallback />}><Principles /></Suspense>
          <Suspense fallback={<SectionFallback />}><StackSection /></Suspense>
          <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
        </main>
        <Suspense fallback={null}><Footer /></Suspense>
      </NavigationProvider>
    </div>
  )
}
