import { memo } from 'react'
import { m } from 'framer-motion'
import { Boxes, Compass, Rocket, UsersRound } from 'lucide-react'
import { fadeUp, stagger } from '../../shared/motion/animation'
import { usePortfolio } from '../../app/providers/usePortfolio'
import type { PrincipleId } from './principles.types'
import './Principles.css'

const principleIcons = {
  architecture: Compass,
  'full-stack': Boxes,
  team: UsersRound,
  delivery: Rocket,
} satisfies Record<PrincipleId, typeof Compass>

function Principles() {
  const { principles: items, t } = usePortfolio()
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
        {items.map((item) => {
          const Icon = principleIcons[item.id]

          return (
            <m.article className="principle-item" key={item.id} variants={fadeUp}>
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
