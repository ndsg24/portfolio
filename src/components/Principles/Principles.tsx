import { memo } from 'react'
import { m } from 'framer-motion'
import { Boxes, Compass, Rocket, UsersRound } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/animation'
import type { PortfolioTranslator, Principle } from '../../types'
import './Principles.css'

type PrinciplesProps = {
  items: Principle[]
  t: PortfolioTranslator
}

const principleIcons = [Compass, Boxes, UsersRound, Rocket]

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
        {items.map((item, index) => {
          const Icon = principleIcons[index] || Compass

          return (
            <m.article className="principle-item" key={index} variants={fadeUp}>
              <div className="principle-copy">
                <div className="principle-heading">
                  <div className="principle-signal">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </div>
              <span className="principle-watermark" aria-hidden="true">
                {item.kicker || item.title}
              </span>
            </m.article>
          )
        })}
      </div>
    </m.section>
  )
}

export default memo(Principles)
