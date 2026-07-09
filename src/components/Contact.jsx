import { motion } from 'framer-motion'
import { Code2, ExternalLink, Mail } from 'lucide-react'
import { fadeUp, stagger } from '../lib/animation'

function Contact({ t }) {
  return (
    <motion.section
      className="contact-band"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={stagger}
    >
      <motion.div variants={fadeUp}>
        <p className="eyebrow">{t('nav.contact')}</p>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.text')}</p>
      </motion.div>
      <motion.div className="contact-actions" variants={fadeUp}>
        <a className="button primary" href={`mailto:${t('contact.email')}`}>
          <Mail size={18} aria-hidden="true" />
          {t('contact.email')}
        </a>
        <a className="icon-link" href="https://www.linkedin.com/in/nelson-daniel-dev/" target="_blank" rel="noreferrer">
          <ExternalLink size={18} aria-hidden="true" />
          LinkedIn
        </a>
        <a className="icon-link" href="https://github.com/" target="_blank" rel="noreferrer">
          <Code2 size={18} aria-hidden="true" />
          GitHub
        </a>
      </motion.div>
    </motion.section>
  )
}

export default Contact
