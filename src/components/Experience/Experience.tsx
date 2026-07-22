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
  currentLabel: string
  role: Role
}

type ClientRowProps = {
  currentLabel: string
  role: Role
}

function isCurrentRole(role: Role): boolean {
  return currentPeriodPattern.test(role.period)
}

function TimelineRow({ currentLabel, role }: TimelineRowProps) {
  const isCurrent = isCurrentRole(role)

  return (
    <m.article
      aria-label={`${role.company}: ${role.title}, ${role.period}`}
      className={`career-node ${isCurrent ? 'current' : ''}`}
      variants={fadeUp}
    >
      <CompanyMark company={role.company} />
      <div className="case-body">
        <div className="case-meta">
          <span>{role.company}</span>
          {isCurrent ? <em>{currentLabel}</em> : null}
        </div>
        <strong>{role.title}</strong>
        <p>{role.text}</p>
      </div>
    </m.article>
  )
}

function ClientRow({ currentLabel, role }: ClientRowProps) {
  const isCurrent = isCurrentRole(role)

  return (
    <m.article
      aria-label={`${role.company}: ${role.title}, ${role.period}`}
      className={`client-node ${isCurrent ? 'current' : ''}`}
      variants={fadeUp}
    >
      <CompanyMark company={role.company} />
      <div className="case-body">
        <div className="case-meta">
          <span>{role.company}</span>
          {isCurrent ? <em>{currentLabel}</em> : null}
        </div>
        <strong>{role.title}</strong>
        <p>{role.text}</p>
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
        <div className="career-map-head" aria-hidden="true">
          <span><i /> {t('work.logLabel')}</span>
          <span>2019 — {t('work.rangeEnd')}</span>
        </div>
        {consultancyRole ? (
          <m.div className="career-consultancy" variants={fadeUp}>
            <TimelineRow currentLabel={t('work.current')} role={consultancyRole} />
            <div className="client-lane">
              {clientRoles.map((role, index) => (
                <ClientRow currentLabel={t('work.current')} key={index} role={role} />
              ))}
            </div>
          </m.div>
        ) : null}

        {directRoles.map((role, index) => (
          <TimelineRow currentLabel={t('work.current')} key={index} role={role} />
        ))}
      </m.div>
    </section>
  )
}

export default memo(Experience)
