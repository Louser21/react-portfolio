import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsPage({ projectsList }) {
  const list = projectsList || projects

  return (
    <section className="section-shell" id="projects">
      <SectionHeading eyebrow="Projects" title="Selected work" />
      <div className="project-grid">
        {list.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}