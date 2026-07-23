import { memo } from 'react'
import { m } from 'framer-motion'
import { fadeUp } from '../../shared/motion/animation'
import type { Role } from './experience.types'
import CompanyMark from '../../shared/components/CompanyMark/CompanyMark'
import { companyMarks } from './companyMarks'

type ExperienceCardProps = {
  currentLabel: string
  role: Role
  variant?: 'company' | 'client'
}

function ExperienceCard({ currentLabel, role, variant = 'company' }: ExperienceCardProps) {
  const brand = companyMarks[role.companyId]

  return (
    <m.article
      aria-label={`${role.company}: ${role.title}, ${role.period}`}
      className={`${variant === 'client' ? 'client-node' : 'career-node'} ${role.isCurrent ? 'current' : ''}`}
      variants={fadeUp}
    >
      <CompanyMark brand={brand} />
      <div className="case-body">
        <div className="case-meta">
          <span>{role.company}</span>
          {role.isCurrent ? <em>{currentLabel}</em> : null}
        </div>
        <strong>{role.title}</strong>
        <p>{role.text}</p>
      </div>
    </m.article>
  )
}

export default memo(ExperienceCard)
