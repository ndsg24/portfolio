import { MoveUpRight } from 'lucide-react'

function Footer({ text }) {
  return (
    <footer className="footer">
      <span>{text}</span>
      <MoveUpRight size={16} aria-hidden="true" />
    </footer>
  )
}

export default Footer
