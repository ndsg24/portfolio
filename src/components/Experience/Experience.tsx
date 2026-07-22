import { memo } from 'react'
import { m } from 'framer-motion'
import CompanyMark from '../CompanyMark'
import { fadeUp, stagger } from '../../lib/animation'
import type { PortfolioTranslator, Role } from '../../types'
import './Experience.css'

type ExperienceProps = {
  roles: Role[]
  t: PortfolioTranslator
}

const currentPeriodPattern = /actualidad|present|atual/i

type TimelineRowProps = {
  role: Role
}

type ClientRowProps = {
  role: Role
}

function isCurrentRole(role: Role): boolean {
  return currentPeriodPattern.test(role.period)
}

function TimelineRow({ role }: TimelineRowProps) {
  return (
    <m.article
      aria-label={`${role.company}: ${role.title}, ${role.period}`}
      className={`career-node ${isCurrentRole(role) ? 'current' : ''}`}
      key={`${role.company}-${role.period}`}
      variants={fadeUp}
    >
      <span className="timeline-period">{role.period}</span>
      <span className="timeline-pin" aria-hidden="true" />
      <CompanyMark company={role.company} />
      <div className="case-body">
        <span>{role.company}</span>
        <strong>{role.title}</strong>
      </div>
    </m.article>
  )
}

function ClientRow({ role }: ClientRowProps) {
  return (
    <m.article
      aria-label={`${role.company}: ${role.title}, ${role.period}`}
      className={`client-node ${isCurrentRole(role) ? 'current' : ''}`}
      key={`${role.company}-${role.period}`}
      variants={fadeUp}
    >
      <span className="timeline-period">{role.period}</span>
      <CompanyMark company={role.company} />
      <div className="case-body">
        <span>{role.company}</span>
        <strong>{role.title}</strong>
      </div>
    </m.article>
  )
}

function Experience({ roles, t }: ExperienceProps) {
  const consultancyRole = roles.find((role) => role.company === 'Amaris Consulting')
  const clientRoles = roles.filter((role) => role.parentCompany === 'Amaris Consulting')
  const directRoles = roles.filter(
    (role) => role.company !== 'Amaris Consulting' && role.parentCompany !== 'Amaris Consulting',
  )

  return (
    <section className="section experience-section" id="work">
      <m.div
        className="experience-heading"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={stagger}
      >
        <m.p className="eyebrow" variants={fadeUp}>
          {t('nav.work')}
        </m.p>
        <m.h2 variants={fadeUp}>{t('work.title')}</m.h2>
      </m.div>

      <m.div
        className="career-map"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
      >
        {consultancyRole ? (
          <m.div className="career-consultancy" variants={fadeUp}>
            <TimelineRow role={consultancyRole} />
            <div className="client-lane">
              {clientRoles.map((role) => (
                <ClientRow key={`${role.company}-${role.period}`} role={role} />
              ))}
            </div>
          </m.div>
        ) : null}

        {directRoles.map((role) => (
          <TimelineRow key={`${role.company}-${role.period}`} role={role} />
        ))}
      </m.div>
    </section>
  )
}

export default memo(Experience)
