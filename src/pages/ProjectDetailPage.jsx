import { useParams, Link } from 'react-router-dom'
import TagList from '../components/TagList'
import { projects } from '../data/projects'

export default function ProjectDetailPage() {
  const { projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <section className="section-shell">
        <p className="eyebrow">404</p>
        <h1>Project not found</h1>
        <p>No project matches “{projectId}”.</p>
        <p className="inline-link">
          <Link className="button button-primary" to="/projects">
            Back to projects
          </Link>
        </p>
      </section>
    )
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id)
  const prev = projects[(currentIndex - 1 + projects.length) % projects.length]
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <section className="section-shell article-shell">
      <Link className="back-link button button-secondary" to="/projects">
        ← All projects
      </Link>

      <article className="blog-post">
        <header className="blog-header">
          <p className="eyebrow">
            {project.index} · {project.role}
          </p>
          <h1>{project.title}</h1>
          <p className="blog-lede">{project.summary}</p>
        </header>

        <figure className="blog-cover">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="detail-image"
          />
        </figure>

        <div className="blog-body">
          <div className="blog-main">
            {project.sections.map((section) => (
              <section className="blog-section" key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>

          <aside className="blog-aside">
            <div className="aside-block">
              <h3>Highlights</h3>
              <ul className="highlights-list">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="aside-block">
              <h3>Tech stack</h3>
              <TagList
                tags={project.tech}
                label={`Tech stack for ${project.title}`}
              />
            </div>

            <div className="aside-block">
              <Link className="button button-primary" to="/contact">
                Discuss this project
              </Link>
            </div>
          </aside>
        </div>

        <nav className="blog-pager" aria-label="Project navigation">
          <Link className="pager-item" to={`/projects/${prev.id}`}>
            <span className="pager-label">← Previous</span>
            <span className="pager-title">{prev.title}</span>
          </Link>
          <Link className="pager-item pager-next" to={`/projects/${next.id}`}>
            <span className="pager-label">Next →</span>
            <span className="pager-title">{next.title}</span>
          </Link>
        </nav>
      </article>
    </section>
  )
}