import { memo, useMemo } from 'react'
import { MoveUpRight } from 'lucide-react'
import './Footer.css'

type FooterProps = {
  text: string
}

function Footer({ text }: FooterProps) {
  const parts = useMemo(() => text.split(' / '), [text])

  return (
    <footer className="footer">
      <div className="footer-tags">
        {parts.map((part) => (
          <span key={part}>{part}</span>
        ))}
      </div>
      <MoveUpRight size={16} aria-hidden="true" />
    </footer>
  )
}

export default memo(Footer)
