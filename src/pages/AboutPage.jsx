import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import About from '../components/About'
import Skills from '../components/Skills'
import { about } from '../data/about'

function Journey() {
  return (
    <section className="section-shell">
      <SectionHeading eyebrow="Journey" title="Education & experience" />
      <ol className="timeline">
        {about.journey.map((item) => (
          <li className="timeline-item" key={item.title}>
            <div className="timeline-dot" aria-hidden="true"></div>
            <div className="timeline-card">
              <p className="timeline-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="timeline-place">{item.place}</p>
              <p className="timeline-body">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Focus() {
  return (
    <section className="section-shell">
      <SectionHeading eyebrow="Focus" title="What I care about" />
      <div className="focus-grid">
        {about.focus.map((area) => (
          <article className="panel" key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <section className="section-shell about-hero">
        <p className="eyebrow">About</p>
        <h1 className="about-title">Nice to meet you</h1>
        <p className="about-lede">{about.lede}</p>
        <About />
        <p className="inline-link">
          <Link to="/projects">See what I have built →</Link>
        </p>
      </section>

      <Journey />
      <Focus />

      <section className="section-shell" id="skills">
        <SectionHeading eyebrow="Skills" title="Technical skills" />
        <Skills />
      </section>
    </>
  )
}