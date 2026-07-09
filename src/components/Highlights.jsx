import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/animation'

function Highlights({ items }) {
  const repeatedItems = [...items, ...items]

  return (
    <motion.section
      className="metric-marquee"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={stagger}
    >
      <motion.div className="marquee-track" variants={fadeUp}>
        {repeatedItems.map((item, index) => (
          <article key={`${item.value}-${index}`}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Highlights
