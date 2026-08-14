import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'
import { useTheme } from './ThemeContext'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const {theme,themeToggle} = useTheme();

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">

        <button
          className={`hamburger ${theme}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          ☰
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}

          <ThemeToggle />
        </div>

      </nav>
    </header>
  )
}