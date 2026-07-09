import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin, Mail, Sparkle } from 'lucide-react'
import { fadeUp, stagger } from '../lib/animation'

function Hero({ t }) {
  const traits = t('hero.traits', { returnObjects: true })

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
        <motion.div className="hero-meta" variants={fadeUp}>
          <span>
            <MapPin size={15} aria-hidden="true" />
            Concepcion, Chile
          </span>
          <span>Senior Consultant</span>
          <span>Tech Lead</span>
        </motion.div>
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
        className="operator-card"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        aria-label="Professional signal"
      >
        <div className="operator-glow" />
        <div className="operator-head">
          <span>{t('hero.signalKicker')}</span>
          <strong>NDSG</strong>
        </div>
        <div className="operator-face">
          <div className="operator-initials">ND</div>
          <div className="orbit-line orbit-one" />
          <div className="orbit-line orbit-two" />
        </div>
        <div className="operator-copy">
          <strong>{t('hero.signalMain')}</strong>
          <p>{t('hero.signalNote')}</p>
        </div>
        <div className="trait-list">
          {traits.map((trait) => (
            <span key={trait}>
              <Sparkle size={13} aria-hidden="true" />
              {trait}
            </span>
          ))}
        </div>
      </motion.aside>
    </section>
  )
}

export default Hero
