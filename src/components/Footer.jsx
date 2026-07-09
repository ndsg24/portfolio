import { MoveUpRight } from 'lucide-react'

function Footer({ text }) {
  const parts = text.split(' / ')

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

export default Footer
