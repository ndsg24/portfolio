import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/animation'

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
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default StackSection
