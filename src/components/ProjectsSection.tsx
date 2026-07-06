import { useMemo, useState } from 'react'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import GlassCard from './GlassCard'
import SectionTitle from './SectionTitle'
import { PROJECTS } from '../utils/constants'

const FILTERS = ['Todos', 'Data', 'Automação'] as const

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>('Todos')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') {
      return PROJECTS
    }

    return PROJECTS.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="projetos" className="section-shell">
      <SectionTitle
        eyebrow="Projetos"
        title="Projetos direcionados para análise e engenharia de dados"
        description="Iniciativas práticas com Power BI, Python, SQL e automação de rotinas analíticas."
      />

      <div className="filter-row" role="tablist" aria-label="Filtros de projeto">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter}
            className={activeFilter === filter ? 'is-active' : ''}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <GlassCard key={project.title} delay={index * 0.03} className="project-card">
            <img src={project.image} alt={`Imagem do projeto ${project.title}`} loading="lazy" />
            <div className="project-content">
              <div className="project-head">
                <h3>{project.title}</h3>
                <span className="status-pill">{project.status}</span>
              </div>
              <p>{project.description}</p>

              <ul className="project-tech-list">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className="project-actions">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <FaArrowUpRightFromSquare /> Demo
                </a>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
