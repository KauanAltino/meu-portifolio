import { Link } from 'react-router-dom'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import GlassCard from './GlassCard'
import SectionTitle from './SectionTitle'
import { PROJECTS } from '../utils/constants'

export default function ProjectsSection() {
  const featuredProjects = PROJECTS.slice(0, 2)

  return (
    <section id="projetos" className="section-shell">
      <SectionTitle
        eyebrow="Projetos"
        title="Projetos em destaque"
        description="Dois projetos principais na home para manter o site leve; a página completa reúne todo o portfólio."
      />

      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
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

      <div className="projects-footer-cta">
        <p>Quer ver todos os projetos?</p>
        <Link to="/projetos" className="btn btn-secondary">
          Ver todos os projetos
        </Link>
      </div>
    </section>
  )
}
