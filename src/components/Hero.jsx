import { Link } from 'react-router-dom'
import pfp from '../assets/pfp.png'

export default function Hero() {
  return (
    <section className="hero section-shell" id="intro">
      <div className="hero-copy">
        <p className="eyebrow">Full Stack Developer</p>
        <h1>Nitin Bhandari</h1>
        <p className="hero-text">
          Computer Science undergraduate at NIT Warangal focused on semantic
          HTML, simple CSS layouts, and practical full stack systems. I like
          building clean, accessible pages that work well on any screen size.
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" to="/projects">
            View Projects
          </Link>
          <Link className="button button-secondary" to="/contact">
            Contact Me
          </Link>
        </div>
      </div>

      <figure className="hero-card">
        <img src={pfp} alt="Portrait of Nitin Bhandari" className="hero-image" />
      </figure>
    </section>
  )
}