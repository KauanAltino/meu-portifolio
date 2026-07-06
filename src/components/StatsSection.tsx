import { animate, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import { STATS } from '../utils/constants'

type StatNumberProps = {
  value: number
  suffix?: string
}

function StatNumber({ value, suffix = '' }: StatNumberProps) {
  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest).toLocaleString('pt-BR'))
      },
    })

    return () => controls.stop()
  }, [value])

  return (
    <motion.span>{`${displayValue}${suffix}`}</motion.span>
  )
}

export default function StatsSection() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Estatísticas"
        title="Números da minha jornada em dados"
        description="Indicadores de formação, experiência e projetos em evolução contínua na área de dados."
      />

      <div className="stats-grid">
        {STATS.map((stat, index) => (
          <motion.article
            key={stat.label}
            className="glass-card stat-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <strong>
              <StatNumber value={stat.value} suffix={stat.suffix} />
            </strong>
            <p>{stat.label}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
