import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/animation'

function Highlights({ items }) {
  return (
    <motion.section
      className="highlight-strip"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={stagger}
    >
      {items.map((item) => (
        <motion.article key={item.value} variants={fadeUp}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </motion.article>
      ))}
    </motion.section>
  )
}

export default Highlights
