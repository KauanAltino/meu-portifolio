import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'
import { ABOUT_TIMELINE } from '../utils/constants'

export default function AboutSection() {
  const keySkills = ['Power BI', 'Python', 'SQL', 'Excel', 'ETL', 'Pandas']

  return (
    <section id="sobre" className="section-shell">
      <SectionTitle
        eyebrow="Sobre mim"
        title="Profissional orientado por dados, processos e tomada de decisão"
        description="Atuação com Power BI, Python e SQL para transformar dados em análises claras e acionáveis."
      />

      <div className="about-grid about-grid--two">
        <GlassCard>
          <h3>Apresentação</h3>
          <p>
            Sou Analista de Dados em transição para Engenharia de Dados, apaixonado por transformar dados brutos em informações 
            estratégicas. Tenho experiência com Python, SQL, Power BI e automação de processos, buscando sempre desenvolver 
            soluções que gerem eficiência e apoiem a tomada de decisão.
          </p>
        </GlassCard>
        <GlassCard>
          <h3>Formação e Objetivos</h3>
          <p>
            Meu objetivo é atuar como Engenheiro de Dados ou Analista de Dados, desenvolvendo pipelines, 
            processos de ETL, modelagem de dados e soluções analíticas que apoiem decisões estratégicas e escaláveis.
          </p>
        </GlassCard>
      </div>

      <div className="about-skills-strip" aria-label="Competências principais">
        {keySkills.map((skill) => (
          <span key={skill} className="about-skill-pill">
            {skill}
          </span>
        ))}
      </div>

      <div className="timeline">
        {ABOUT_TIMELINE.map((item) => (
          <article key={item.year} className="timeline-item">
            <span className="timeline-year">{item.year}</span>
            <div>
              <h4>{item.title}</h4>
              <p className="timeline-subtitle">{item.subtitle}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
