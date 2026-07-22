import { memo } from 'react'
import { m } from 'framer-motion'
import { Mail } from 'lucide-react'
import { GitHubLogo, LinkedInLogo } from '../BrandIcons'
import { fadeUp, stagger } from '../../lib/animation'
import type { PortfolioTranslator } from '../../types'
import './Contact.css'

type ContactProps = {
  t: PortfolioTranslator
}

function Contact({ t }: ContactProps) {
  const emailHref = `mailto:${t('contact.email')}`

  return (
    <m.section
      className="contact-band"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={stagger}
    >
      <m.div variants={fadeUp}>
        <p className="eyebrow">{t('nav.contact')}</p>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.text')}</p>
      </m.div>
      <m.div className="contact-actions" variants={fadeUp}>
        <a className="button primary" href={emailHref}>
          <Mail size={18} aria-hidden="true" />
          {t('contact.cta')}
        </a>
        <a className="icon-link" href="https://www.linkedin.com/in/nelson-daniel-dev/" target="_blank" rel="noreferrer">
          <LinkedInLogo />
          LinkedIn
        </a>
        <a className="icon-link" href="https://github.com/" target="_blank" rel="noreferrer">
          <GitHubLogo />
          GitHub
        </a>
      </m.div>
    </m.section>
  )
}

export default memo(Contact)
