import SectionTitle from './SectionTitle'
import GlassCard from './GlassCard'
import { ABOUT_TIMELINE } from '../utils/constants'

export default function AboutSection() {
  const keySkills = [
    'Power BI',
    'Python',
    'SQL',
    'Excel',
    'ETL / ELT',
    'Data Warehouse',
    'Pipelines',
    'Cloud',
    'Machine Learning',
    'Databricks',
    'Spark',
  ]

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
            Sou profissional da área de Dados, com foco em Data Analytics e Data Engineering. 
            Tenho experiência com Python, SQL, Power BI e automação de processos, atuando na análise, 
            tratamento e transformação de dados para gerar insights e soluções que apoiem decisões e resultados de negócio.
          </p>
        </GlassCard>
        <GlassCard>
          <h3>Formação e Objetivos</h3>
          <p>
            Meu objetivo é atuar como Engenheiro ou Analista de Dados, desenvolvendo pipelines, processos de ETL, modelagem, 
            tratamento e análise de dados, além de soluções analíticas com Python, SQL e Power BI que apoiem decisões estratégicas e escaláveis.
          </p>
        </GlassCard>
        <div>
          <GlassCard>
            <h3>Idiomas</h3>
            <p>
              -- Inglês Avançado (C1) - Capacidade de compreender textos complexos, participar de reuniões e apresentações, 
              além de produzir relatórios e documentação técnica em inglês.
            </p>
            <p>
              -- Espanhol Básico (A2) - Capacidade de compreender frases simples e expressões do dia a dia, além de se comunicar em situações básicas.
            </p>
            <p>
              -- Português Nativo - Capacidade de compreender e se comunicar fluentemente em português, com domínio da gramática, vocabulário e expressões idiomáticas.  
            </p>
            <p>
              -- Estudando Francês
            </p>
          </GlassCard>
        </div>
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
