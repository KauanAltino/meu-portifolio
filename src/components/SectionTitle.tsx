import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionTitleProps = {
  eyebrow: string
  title: string
  description: string
  action?: ReactNode
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  action,
}: SectionTitleProps) {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="section-headline-row">
        <div>
          <h2>{title}</h2>
          <p className="section-description">{description}</p>
        </div>
        {action}
      </div>
    </motion.div>
  )
}
