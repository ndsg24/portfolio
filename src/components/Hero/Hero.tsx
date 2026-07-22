import { m } from 'framer-motion'
import { ArrowUpRight, Asterisk } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/animation'
import type { PortfolioTranslator } from '../../types'
import './Hero.css'

type HeroProps = {
  t: PortfolioTranslator
}

const heroPortraitSrc = `${import.meta.env.BASE_URL}hero-portrait-hq.webp`

function Hero({ t }: HeroProps) {
  return (
    <section className="hero" id="home">
      <div className="hero-watermark" aria-hidden="true">NELSON</div>

      <m.div className="hero-intro" initial="hidden" animate="show" variants={stagger}>
        <m.p className="eyebrow" variants={fadeUp}>{t('hero.eyebrow')}</m.p>
        <m.p variants={fadeUp}>{t('hero.statement')}</m.p>
        <m.a href="#work" variants={fadeUp}>
          {t('hero.ctaSecondary')}
          <ArrowUpRight size={15} aria-hidden="true" />
        </m.a>
      </m.div>

      <m.div
        className="hero-portrait"
        initial={{ opacity: 0, y: 38, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <img
          alt=""
          decoding="async"
          fetchPriority="high"
          height={3161}
          src={heroPortraitSrc}
          width={1784}
        />
      </m.div>

      <m.div className="hero-title-wrap" initial="hidden" animate="show" variants={stagger}>
        <m.span className="hero-year" variants={fadeUp}>©2026</m.span>
        <m.h1 className="hero-title" variants={fadeUp}>
          <span className="title-given">Nelson Daniel</span>
          <span className="title-outline">Silva Gutierrez</span>
        </m.h1>
      </m.div>

      <m.a
        className="hero-contact-card"
        href="#contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.64 }}
      >
        <span className="hero-contact-thumb">
          <img alt="" src={heroPortraitSrc} width={1784} height={3161} />
        </span>
        <span className="hero-contact-copy">
          <small>{t('hero.ctaPrimary')}</small>
          <strong>Nelson Daniel</strong>
          <span>Full Stack / Tech Lead</span>
        </span>
        <span className="hero-contact-arrow">
          <ArrowUpRight size={18} aria-hidden="true" />
        </span>
      </m.a>

      <span className="hero-corner hero-corner-nw" aria-hidden="true">+</span>
      <span className="hero-corner hero-corner-ne" aria-hidden="true">+</span>
      <span className="hero-corner hero-corner-sw" aria-hidden="true">+</span>
      <span className="hero-corner hero-corner-se" aria-hidden="true">+</span>
      <Asterisk className="hero-spark" size={15} aria-hidden="true" />
    </section>
  )
}

export default Hero
