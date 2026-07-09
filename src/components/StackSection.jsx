import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/animation'
import { techLogos } from '../lib/techLogos'

const fallbackLabels = {
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

function TechLogo({ name }) {
  const logo = techLogos[name]

  if (!logo) {
    return <span className="tech-fallback">{fallbackLabels[name] || name.slice(0, 2).toUpperCase()}</span>
  }

  return (
    <svg aria-hidden="true" className="tech-logo" viewBox="0 0 24 24">
      <path d={logo.path} />
    </svg>
  )
}

function StackSection({ groups, t }) {
  const skills = groups.flatMap((group) => group.items)
  const marqueeSkills = [...skills, ...skills]

  return (
    <motion.section
      className="section stack-section"
      id="stack"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
    >
      <div className="section-heading">
        <motion.p className="eyebrow" variants={fadeUp}>
          {t('nav.stack')}
        </motion.p>
        <motion.h2 variants={fadeUp}>{t('stack.title')}</motion.h2>
      </div>
      <div className="stack-lines">
        {groups.map((group) => (
          <motion.article className="stack-line" key={group.title} variants={fadeUp}>
            <h3>{group.title}</h3>
            <p>{group.items.join(' / ')}</p>
          </motion.article>
        ))}
      </div>
      <motion.div className="skill-rail" variants={fadeUp}>
        <div>
          {marqueeSkills.map((skill, index) => (
            <span key={`${skill}-${index}`}>
              <TechLogo name={skill} />
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default StackSection
