import { memo } from 'react'
import { MoveUpRight } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <span>NDSG / Portfolio 2026</span>
      <MoveUpRight size={16} aria-hidden="true" />
    </footer>
  )
}

export default memo(Footer)
