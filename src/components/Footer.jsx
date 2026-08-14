import { Link } from 'react-router-dom'
import { useTheme } from './ThemeContext'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>{/**Delibreatley left empty*/}</p>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="footer-theme">Theme: {theme}</p>
      </div>
    </footer>
  )
}