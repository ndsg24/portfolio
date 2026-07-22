import { memo } from 'react'
import { m } from 'framer-motion'
import { fadeUp, stagger } from '../../lib/animation'
import type { PortfolioTranslator, Principle } from '../../types'
import './Principles.css'

type PrinciplesProps = {
  items: Principle[]
  t: PortfolioTranslator
}

function Principles({ items, t }: PrinciplesProps) {
  return (
    <m.section
      className="section principles-section"
      id="principles"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      variants={stagger}
    >
      <div className="section-heading">
        <m.p className="eyebrow" variants={fadeUp}>
          {t('nav.principles')}
        </m.p>
        <m.h2 variants={fadeUp}>{t('principles.title')}</m.h2>
      </div>
      <div className="principle-grid">
        {items.map((item, index) => (
          <m.article className="principle-item" key={item.title} variants={fadeUp}>
            <span>{item.kicker || String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </m.article>
        ))}
      </div>
    </m.section>
  )
}

export default memo(Principles)
