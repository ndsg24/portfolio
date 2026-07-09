import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { fadeUp, stagger } from '../lib/animation'

function Hero({ t }) {
  return (
    <section className="hero" id="home">
      <motion.div className="hero-copy" initial="hidden" animate="show" variants={stagger}>
        <motion.p className="eyebrow" variants={fadeUp}>
          {t('hero.eyebrow')}
        </motion.p>
        <motion.h1 variants={fadeUp}>
          Nelson Daniel
          <span>Silva Gutierrez</span>
        </motion.h1>
        <motion.p className="hero-statement" variants={fadeUp}>
          {t('hero.statement')}
        </motion.p>
        <motion.div className="hero-actions" variants={fadeUp}>
          <a className="button primary" href={`mailto:${t('contact.email')}`}>
            <Mail size={18} aria-hidden="true" />
            {t('hero.ctaPrimary')}
          </a>
          <a className="button secondary" href="#work">
            {t('hero.ctaSecondary')}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>

      <motion.aside
        className="signature-panel"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        aria-label="Professional signal"
      >
        <div className="signal-orbit" />
        <div className="signal-core">
          <span>{t('hero.signalKicker')}</span>
          <strong>{t('hero.signalMain')}</strong>
        </div>
        <div className="signal-note">{t('hero.signalNote')}</div>
      </motion.aside>
    </section>
  )
}

export default Hero
