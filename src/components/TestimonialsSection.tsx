import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import { TESTIMONIALS } from '../utils/constants'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Depoimentos"
        title="Percepção de quem trabalhou comigo"
        description="Feedbacks reais sobre execução, comunicação e resultado de negócio."
      />

      <div className="testimonial-shell glass-card">
        <AnimatePresence mode="wait">
          <motion.article
            key={TESTIMONIALS[active].name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="testimonial-card"
          >
            <p>“{TESTIMONIALS[active].content}”</p>
            <footer>
              <strong>{TESTIMONIALS[active].name}</strong>
              <span>{TESTIMONIALS[active].role}</span>
            </footer>
          </motion.article>
        </AnimatePresence>

        <div className="carousel-dots" role="tablist" aria-label="Navegação de depoimentos">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              role="tab"
              aria-selected={active === index}
              className={active === index ? 'is-active' : ''}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
