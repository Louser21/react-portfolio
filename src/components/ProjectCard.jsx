import { useState } from 'react'
import { Link } from 'react-router-dom'
import TagList from './TagList'

export default function ProjectCard({ project, index }) {
  const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    <article className="project-card">
      <span className="project-index">
        {index != null ? String(index + 1).padStart(2, '0') : ''}
      </span>

      <img src={project.image} alt={`${project.title} preview`} className="project-image" />

      <h3>{project.title}</h3>
      <p>{detailsOpen ? project.description : project.summary}</p>

      <TagList tags={project.tech} label={`Tech stack for ${project.title}`} />

      <div className="card-actions">
        <button
          type="button"
          className="button button-secondary"
          onClick={() => setDetailsOpen((open) => !open)}
          aria-expanded={detailsOpen}
        >
          {detailsOpen ? 'Hide details' : 'View details'}
        </button>
        <Link className="button button-primary" to={`/projects/${project.id}`}>
          Open
        </Link>
      </div>
    </article>
  )
}