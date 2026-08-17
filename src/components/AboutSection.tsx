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

  const languages = [
    {
      name: 'Inglês',
      level: 'Avançado (C1)',
      description:
        'Capacidade de compreender textos complexos, participar de reuniões e apresentações, além de produzir relatórios e documentação técnica em inglês.',
    },
    {
      name: 'Espanhol',
      level: 'Básico (A2)',
      description:
        'Capacidade de compreender frases simples e expressões do dia a dia, além de se comunicar em situações básicas.',
    },
  ]
  const languages2 = [
      {
      name: 'Português',
      level: 'Nativo',
      description:
        'Capacidade de compreender e se comunicar fluentemente em português, com domínio da gramática, vocabulário e expressões idiomáticas.',
    },
    {
      name: 'Francês',
      level: 'Em estudo',
      description: 'Aprendizado em andamento, com foco em vocabulário e compreensão básica.',
    },
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
        <div className="about-languages">
          <GlassCard className="about-languages-card">
            <h3 style={{ textAlign: 'center' }}>Idiomas</h3>

            <div className="language-columns">
              <ul className="language-list">
                {languages.map((language) => (
                  <li key={language.name}>
                    <div className="language-item-head">
                      <strong>{language.name}</strong>
                      <span className="language-level">
                        {language.level}
                      </span>
                    </div>
                    <p>{language.description}</p>
                  </li>
                ))}
              </ul>

              <ul className="language-list">
                {languages2.map((language) => (
                  <li key={language.name}>
                    <div className="language-item-head">
                      <strong>{language.name}</strong>
                      <span className="language-level">
                        {language.level}
                      </span>
                    </div>
                    <p>{language.description}</p>
                  </li>
                ))}
              </ul>
            </div>
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
