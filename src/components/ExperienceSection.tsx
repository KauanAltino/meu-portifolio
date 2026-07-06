import SectionTitle from './SectionTitle'
import { EXPERIENCE_TIMELINE } from '../utils/constants'

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="section-shell">
      <SectionTitle
        eyebrow="Experiência"
        title="Trajetória profissional em timeline vertical"
        description="Experiência corporativa e evolução técnica direcionada para a área de dados."
      />

      <div className="timeline timeline-experience">
        {EXPERIENCE_TIMELINE.map((item) => (
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
