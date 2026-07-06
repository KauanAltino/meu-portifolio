import GlassCard from './GlassCard'
import SectionTitle from './SectionTitle'
import SkillIcon from './SkillIcon'
import { SKILL_CATEGORIES } from '../utils/constants'

export default function TechnologiesSection() {
  return (
    <section id="tecnologias" className="section-shell">
      <SectionTitle
        eyebrow="Tecnologias"
        title="Competências técnicas para análise e engenharia de dados"
        description="Ferramentas e habilidades aplicadas em visualização, modelagem e preparação de dados."
      />

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((category, categoryIndex) => (
          <GlassCard key={category.title} delay={categoryIndex * 0.05}>
            <h3>{category.title}</h3>
            <ul className="skills-list">
              {category.items.map((skill) => (
                <li key={skill.name}>
                  <div className="skill-head">
                    <span className="skill-name">
                      <SkillIcon icon={skill.icon} />
                      {skill.name}
                    </span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
