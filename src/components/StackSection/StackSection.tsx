import { memo, useMemo } from 'react'
import { m } from 'framer-motion'
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

function getPreviewItems(items: string[]): string[] {
  const logoItems = items.filter((item) => techLogos[item])
  const sourceItems = logoItems.length >= 4 ? logoItems : items

  return sourceItems.slice(0, 5)
}

type StackGroupView = StackGroup & {
  previewItems: string[]
  remainingItems: number
}

type StackSectionProps = {
  groups: StackGroup[]
  t: PortfolioTranslator
}

function StackSection({ groups, t }: StackSectionProps) {
  const stackGroups = useMemo(
    (): StackGroupView[] =>
      groups.map((group) => {
        const previewItems = getPreviewItems(group.items)

        return {
          ...group,
          previewItems,
          remainingItems: Math.max(group.items.length - previewItems.length, 0),
        }
      }),
    [groups],
  )

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
        <div className="stack-core">
          {featuredSkills.map((skill) => (
            <span className="stack-core-item" key={skill}>
              <TechLogo name={skill} />
              {skill}
            </span>
          ))}
        </div>
        <div className="stack-clusters">
          {stackGroups.map((group) => (
            <m.article className="stack-cluster" key={group.title} variants={fadeUp}>
              <h3>{group.title}</h3>
              <div className="stack-chip-grid">
                {group.previewItems.map((skill) => (
                  <span className="stack-chip" key={skill}>
                    <TechLogo name={skill} />
                    {skill}
                  </span>
                ))}
                {group.remainingItems > 0 ? (
                  <span className="stack-chip stack-chip-more">+{group.remainingItems}</span>
                ) : null}
              </div>
            </m.article>
          ))}
        </div>
      </m.div>
    </m.section>
  )
}

export default memo(StackSection)
