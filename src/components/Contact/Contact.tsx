import { m } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { GitHubLogo } from '../BrandIcons'
import { fadeUp, stagger } from '../../lib/animation'
import type { PortfolioTranslator } from '../../types'
import './Contact.css'

type ContactProps = {
  t: PortfolioTranslator
}

function Contact({ t }: ContactProps) {
  return (
    <m.section
      className="contact-band"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={stagger}
    >
      <div aria-hidden="true" className="contact-index">{t('contact.backdrop')}</div>
      <m.div className="contact-copy" variants={fadeUp}>
        <p className="eyebrow">{t('nav.contact')}</p>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.text')}</p>
      </m.div>
      <m.div className="contact-connect" variants={fadeUp}>
        <a
          className="contact-primary"
          href="https://www.linkedin.com/in/nelson-daniel-dev/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-primary-icon"><MessageCircle size={22} aria-hidden="true" /></span>
          <span>
            <small>{t('contact.cta')}</small>
            <strong>LinkedIn</strong>
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="contact-socials">
          <a className="icon-link" href="https://github.com/ndsg24" target="_blank" rel="noreferrer">
            <GitHubLogo />
            GitHub
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <span className="contact-availability">
            <span aria-hidden="true" />
            {t('nav.available')}
          </span>
        </div>
      </m.div>
    </m.section>
  )
}

export default Contact
