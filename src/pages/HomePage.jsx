import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import SectionHeading from '../components/SectionHeading'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loading-state" role="status" aria-live="polite">
        <span className="spinner" aria-hidden="true"></span>
        <p>Loading…</p>
      </div>
    )
  }

  return (
    <>
      <Hero />
      <section className="section-shell" id="about">
        <SectionHeading eyebrow="About" />
        <About />
      </section>
      <section className="section-shell" id="skills">
        <SectionHeading eyebrow="Skills" />
        <Skills />
        <p className="inline-link">
          <Link to="/projects">Browse all projects →</Link>
        </p>
      </section>
    </>
  )
}