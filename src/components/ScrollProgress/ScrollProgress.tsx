import { memo } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'
import './ScrollProgress.css'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const progressScale = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return <m.div className="scroll-progress" style={{ width: progressScale }} />
}

export default memo(ScrollProgress)
