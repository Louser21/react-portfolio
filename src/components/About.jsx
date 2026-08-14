import { about } from '../data/about'

export default function About() {
  return (
    <div className="about-grid">
      <article className="panel">
        {about.bio.map((para) => (
          <p key={para.slice(0, 14)}>{para}</p>
        ))}
      </article>

      <article className="panel">
        <h3>Quick facts</h3>
        <dl className="facts-list">
          {about.facts.map((fact) => (
            <div className="fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </article>
    </div>
  )
}