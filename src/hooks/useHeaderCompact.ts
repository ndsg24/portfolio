import { useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

const COMPACT_SCROLL_THRESHOLD = 132
const EXPANDED_SCROLL_THRESHOLD = 72

export function useHeaderCompact(): boolean {
  const { scrollY } = useScroll()
  const [isCompact, setIsCompact] = useState(false)
  const isCompactRef = useRef(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const nextIsCompact = isCompactRef.current
      ? latest > EXPANDED_SCROLL_THRESHOLD
      : latest > COMPACT_SCROLL_THRESHOLD

    if (nextIsCompact !== isCompactRef.current) {
      isCompactRef.current = nextIsCompact
      setIsCompact(nextIsCompact)
    }
  })

  return isCompact
}
