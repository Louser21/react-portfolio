import { useState } from 'react'
import { Link } from 'react-router-dom'
import TagList from './TagList'

export default function ProjectCard({ project, index }) {
  const [detailsOpen, setDetailsOpen] = useState(false)

  const cardIndex = index != null ? String(index + 1).padStart(2, '0') : ''
  const cardImage = project.image
  const cardTitle = project.title
  const cardDescription = detailsOpen ? project.description : project.summary
  const cardTech = project.techStack

  return (
    <article className="project-card">
      <span className="project-index">{cardIndex}</span>

      <img src={cardImage} alt={`${cardTitle} preview`} className="project-image" />

      <h3>{cardTitle}</h3>
      <p>{cardDescription}</p>

      <TagList tags={cardTech} label={`Tech stack for ${cardTitle}`} />

      <div className="card-actions">
        <button
          type="button"
          className="button button-secondary"
          onClick={() => setDetailsOpen((open) => !open)}
          aria-expanded={detailsOpen}
        >
          {detailsOpen ? 'Hide details' : 'View details'}
        </button>
        <Link className="button button-primary" to={project.link}>
          Open
        </Link>
      </div>
    </article>
  )
}
