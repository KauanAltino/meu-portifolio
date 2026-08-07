import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa6'
import GlassCard from '../components/GlassCard'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import { PROJECTS } from '../utils/constants'

export default function ProjectsPage() {
  return (
    <div className="blog-page">
      <header className="blog-page-header">
        <p>Projetos</p>
        <h1>Portfólio completo de dados e automação</h1>
        <p>
          Reunião dos projetos para análise, engenharia de dados, automação e estudos técnicos.
        </p>
      </header>

      <section className="projects-page-section">
        <SectionTitle
          eyebrow="Acervo completo"
          title="Todos os projetos em um só lugar"
          description="Explore a lista completa e use este espaço para comentar sobre as soluções apresentadas."
        />

        <div className="projects-grid projects-grid--full">
          {PROJECTS.map((project, index) => (
            <GlassCard key={project.title} delay={index * 0.02} className="project-card">
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
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="projects-page-bottom">
          <Link to="/" className="btn btn-secondary projects-return-button">
            Voltar para o portfólio
          </Link>
          <Footer backHref="/#inicio" />
        </div>
      </section>
    </div>
  )
}
