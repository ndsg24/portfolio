import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/animation'

function Principles({ items, t }) {
  return (
    <motion.section
      className="section principles-section"
      id="principles"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      variants={stagger}
    >
      <div className="section-heading">
        <motion.p className="eyebrow" variants={fadeUp}>
          {t('nav.principles')}
        </motion.p>
        <motion.h2 variants={fadeUp}>{t('principles.title')}</motion.h2>
      </div>
      <div className="principle-grid">
        {items.map((item, index) => (
          <motion.article className="principle-item" key={item.title} variants={fadeUp}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Principles
