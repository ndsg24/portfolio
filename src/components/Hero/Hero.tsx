import { memo, useMemo } from 'react'
import { m } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, MapPin, Mail } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/animation'
import type { PortfolioTranslator } from '../../types'
import './Hero.css'

type HeroProps = {
  t: PortfolioTranslator
}

function Hero({ t }: HeroProps) {
  const traits = useMemo(() => t<string[]>('hero.traits', { returnObjects: true }), [t])
  const emailHref = `mailto:${t('contact.email')}`

  return (
    <section className="hero" id="home">
      <m.div className="hero-copy" initial="hidden" animate="show" variants={stagger}>
        <m.p className="eyebrow" variants={fadeUp}>
          {t('hero.eyebrow')}
        </m.p>
        <m.h1 className="hero-title" variants={fadeUp}>
          <span className="title-given">Nelson Daniel</span>
          <span className="title-outline">Silva</span>
          <span className="title-outline">Gutierrez</span>
        </m.h1>
        <m.div className="hero-meta" variants={fadeUp}>
          <span>
            <MapPin size={15} aria-hidden="true" />
            Concepcion, Chile
          </span>
          <span>Senior Consultant</span>
          <span>Tech Lead</span>
        </m.div>
        <m.p className="hero-statement" variants={fadeUp}>
          {t('hero.statement')}
        </m.p>
        <m.div className="hero-actions" variants={fadeUp}>
          <a className="button primary" href={emailHref}>
            <Mail size={18} aria-hidden="true" />
            {t('hero.ctaPrimary')}
          </a>
          <a className="button secondary" href="#work">
            {t('hero.ctaSecondary')}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </m.div>
      </m.div>

      <m.aside
        className="operator-card"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        aria-label="Professional signal"
      >
        <div className="operator-head">
          <span>{t('hero.signalKicker')}</span>
          <strong>NDSG</strong>
        </div>
        <div className="operator-face">
          <div className="operator-initials">ND</div>
          <div className="operator-status">
            <span />
            Architecture / Delivery / Team
          </div>
        </div>
        <div className="operator-copy">
          <strong>{t('hero.signalMain')}</strong>
          <p>{t('hero.signalNote')}</p>
        </div>
        <div className="trait-list">
          {traits.map((trait) => (
            <span key={trait}>
              <CheckCircle2 size={13} aria-hidden="true" />
              {trait}
            </span>
          ))}
        </div>
      </m.aside>
    </section>
  )
}

export default memo(Hero)
