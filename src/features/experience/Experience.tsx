import { memo } from 'react'
import { m } from 'framer-motion'
import { usePortfolio } from '../../app/providers/usePortfolio'
import { fadeUp, stagger } from '../../shared/motion/animation'
import ExperienceCard from './ExperienceCard'
import './Experience.css'

function Experience() {
  const { roles, t } = usePortfolio()
  const consultancyRole = roles.find((role) => role.companyId === 'amaris')
  const clientRoles = roles.filter((role) => role.parentCompanyId === 'amaris')
  const directRoles = roles.filter(
    (role) => role.companyId !== 'amaris' && role.parentCompanyId !== 'amaris',
  )
  const currentLabel = t('work.current')

  return (
    <section className="section experience-section" id="work">
      <m.div
        className="experience-heading"
        initial="hidden"
        variants={stagger}
        viewport={{ once: true, amount: 0.4 }}
        whileInView="show"
      >
        <m.p className="eyebrow" variants={fadeUp}>{t('nav.work')}</m.p>
        <m.h2 variants={fadeUp}>{t('work.title')}</m.h2>
      </m.div>

      <m.div
        className="career-map"
        initial="hidden"
        variants={stagger}
        viewport={{ once: true, amount: 0.18 }}
        whileInView="show"
      >
        <div className="career-map-head" aria-hidden="true">
          <span><i /> {t('work.logLabel')}</span>
          <span>2019 — {t('work.rangeEnd')}</span>
        </div>
        {consultancyRole ? (
          <m.div className="career-consultancy" variants={fadeUp}>
            <ExperienceCard currentLabel={currentLabel} role={consultancyRole} />
            <div className="client-lane">
              {clientRoles.map((role) => (
                <ExperienceCard currentLabel={currentLabel} key={role.id} role={role} variant="client" />
              ))}
            </div>
          </m.div>
        ) : null}

        {directRoles.map((role) => (
          <ExperienceCard currentLabel={currentLabel} key={role.id} role={role} />
        ))}
      </m.div>
    </section>
  )
}

export default memo(Experience)
