import { useState, useEffect } from 'react'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch projects')
        }
        return res.json()
      })
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="section-shell" id="projects">
        <SectionHeading eyebrow="My Work" title="Projects" />
        <div className="loading-state" role="status" aria-live="polite">
          <span className="spinner" aria-hidden="true"></span>
          <p>Loading…</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section-shell" id="projects">
        <SectionHeading eyebrow="My Work" title="Projects" />
        <div className="loading-state" role="alert" aria-live="assertive">
          <p>Error: {error}</p>
          <p>Please check that the backend server is running.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="section-shell" id="projects">
      <SectionHeading eyebrow="My Work" title="Projects" />
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
