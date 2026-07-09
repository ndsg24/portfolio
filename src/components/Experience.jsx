import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/animation'

function Experience({ roles, t }) {
  return (
    <section className="section work-section" id="work">
      <motion.div
        className="section-heading pinned"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={stagger}
      >
        <motion.p className="eyebrow" variants={fadeUp}>
          {t('nav.work')}
        </motion.p>
        <motion.h2 variants={fadeUp}>{t('work.title')}</motion.h2>
        <motion.p variants={fadeUp}>{t('work.text')}</motion.p>
      </motion.div>

      <motion.div
        className="role-list"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={stagger}
      >
        {roles.map((role) => (
          <motion.article className="role-item" key={`${role.company}-${role.period}`} variants={fadeUp}>
            <div>
              <span>{role.period}</span>
              <h3>{role.company}</h3>
            </div>
            <div>
              <strong>{role.title}</strong>
              <p>{role.text}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Experience
