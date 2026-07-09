import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Principles from './components/Principles'
import StackSection from './components/StackSection'

function App() {
  const { t, i18n } = useTranslation()
  const { scrollY, scrollYProgress } = useScroll()
  const [isHeaderCompact, setIsHeaderCompact] = useState(false)
  const progressScale = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const highlights = t('highlights', { returnObjects: true })
  const roles = t('roles', { returnObjects: true })
  const principles = t('principles.items', { returnObjects: true })
  const stackGroups = t('stack.groups', { returnObjects: true })

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsHeaderCompact(latest > 90)
  })

  return (
    <main className="site-shell">
      <motion.div className="scroll-progress" style={{ width: progressScale }} />
      <Header
        currentLanguage={i18n.language}
        isCompact={isHeaderCompact}
        onLanguageChange={changeLanguage}
        t={t}
      />
      <Hero t={t} />
      <Highlights items={highlights} />
      <Experience roles={roles} t={t} />
      <Principles items={principles} t={t} />
      <StackSection groups={stackGroups} t={t} />
      <Contact t={t} />
      <Footer text={t('footer')} />
    </main>
  )
}

export default App
