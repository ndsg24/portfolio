import { memo, type CSSProperties } from 'react'
import { m } from 'framer-motion'
import { Activity, Code2, DatabaseZap, ServerCog } from 'lucide-react'
import { fadeUp, stagger } from '../../lib/animation'
import { techLogos } from '../../lib/techLogos'
import type { PortfolioTranslator, StackGroup } from '../../types'
import './StackSection.css'

const fallbackLabels: Record<string, string> = {
  'SQL Server': 'SQL',
  'Azure Service Bus': 'ASB',
  'AWS': 'AWS',
  'Azure': 'AZ',
  'Microservices': 'MS',
  'Microservicios': 'MS',
  'Microserviços': 'MS',
  'TDD': 'TDD',
  'CQRS': 'CQ',
  'DDD': 'DDD',
  'Arquitectura Hexagonal': 'HX',
  'Hexagonal Architecture': 'HX',
  'Arquitetura Hexagonal': 'HX',
  'Testing unitario/integración/e2e': 'TST',
  'Unit/integration/e2e testing': 'TST',
  'Testing unitário/integração/e2e': 'TST',
}

const getFallbackLabel = (name: string): string => fallbackLabels[name] || name.slice(0, 2).toUpperCase()

const featuredSkills = [
  'React',
  'TypeScript',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'Kafka',
  'Docker',
  'Kubernetes',
]

const groupIcons = [Code2, ServerCog, DatabaseZap, Activity]

type TechLogoProps = {
  name: string
}

const TechLogo = memo(function TechLogo({ name }: TechLogoProps) {
  const logo = techLogos[name]

  if (!logo) {
    return <span className="tech-fallback">{getFallbackLabel(name)}</span>
  }

  return (
    <svg aria-hidden="true" className="tech-logo" viewBox="0 0 24 24">
      <path d={logo.path} />
    </svg>
  )
})

type StackSectionProps = {
  groups: StackGroup[]
  t: PortfolioTranslator
}

function StackSection({ groups, t }: StackSectionProps) {
  return (
    <m.section
      className="section stack-section"
      id="stack"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
    >
      <div className="section-heading">
        <m.p className="eyebrow" variants={fadeUp}>
          {t('nav.stack')}
        </m.p>
        <m.h2 variants={fadeUp}>{t('stack.title')}</m.h2>
      </div>
      <m.div className="stack-board" variants={fadeUp}>
        <div className="stack-live" aria-hidden="true">
          <span /> {t('stack.status')}
        </div>
        <div className="stack-core">
          {featuredSkills.map((skill, index) => (
            <span
              className="stack-core-item"
              key={skill}
              style={{ '--skill-index': index } as CSSProperties}
            >
              <TechLogo name={skill} />
              {skill}
            </span>
          ))}
        </div>
        <div className="stack-clusters">
          {groups.map((group, index) => {
            const GroupIcon = groupIcons[index] || Code2

            return (
              <m.article className="stack-cluster" key={index} variants={fadeUp}>
                <span className="stack-cluster-mark" aria-hidden="true">
                  <GroupIcon size={18} />
                </span>
                <h3>{group.title}</h3>
                <div className="stack-chip-grid">
                  {group.items.map((skill, skillIndex) => (
                    <span className="stack-chip" key={skillIndex}>
                      <TechLogo name={skill} />
                      {skill}
                    </span>
                  ))}
                </div>
              </m.article>
            )
          })}
        </div>
      </m.div>
    </m.section>
  )
}

export default memo(StackSection)
