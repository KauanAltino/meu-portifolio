import { useEffect, useState } from 'react'
import { FaGithub, FaMagnifyingGlass } from 'react-icons/fa6'
import GlassCard from '../components/GlassCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import { PROJECTS } from '../utils/constants'

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = ['Todos', ...new Set(PROJECTS.map((project) => project.category))]
  const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase('pt-BR')
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'Todos' || project.category === selectedCategory
    const searchableContent = [
      project.title,
      project.description,
      project.category,
      project.status,
      ...project.technologies,
    ]
      .join(' ')
      .toLocaleLowerCase('pt-BR')

    return matchesCategory && searchableContent.includes(normalizedSearchTerm)
  })

  return (
    <div className="blog-page projects-page">
      <Navbar pageTitle="Projetos" />

      <section className="projects-page-section">
        <SectionTitle
          eyebrow="Acervo completo"
          title="Todos os projetos em um só lugar"
          description="Explore a lista completa e use este espaço para comentar sobre as soluções apresentadas."
        />

        <div className="projects-filters" aria-label="Filtros de projetos">
          <label className="projects-search">
            <FaMagnifyingGlass aria-hidden="true" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Buscar por projeto, tecnologia ou palavra-chave"
              aria-label="Buscar projetos"
            />
          </label>

          <div className="projects-category-filters" aria-label="Filtrar por categoria">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={selectedCategory === category ? 'is-active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid projects-grid--full">
          {filteredProjects.map((project, index) => (
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

        {filteredProjects.length === 0 && (
          <p className="projects-empty-state">Nenhum projeto encontrado com estes filtros.</p>
        )}

        <div className="projects-page-bottom">
          <Footer backHref="#" />
        </div>
      </section>
    </div>
  )
}
