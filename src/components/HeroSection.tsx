import { motion } from 'framer-motion'
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa6'

export default function HeroSection() {
  return (
    <section id="inicio" className="hero-section section-shell">
      <div className="hero-bg-grid" aria-hidden="true" />
      <motion.div
        className="hero-profile"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <img
          src="/profile-placeholder.svg"
          alt="Foto de perfil placeholder de Kauan Altino Gianesini"
          loading="eager"
        />
      </motion.div>

      <motion.p
        className="hero-tag"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Disponível para oportunidades em Dados
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Kauan Altino Gianesini
      </motion.h1>

      <motion.h2
        className="hero-role"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Analista de Dados | Engenharia de Dados | Power BI | Python | SQL
      </motion.h2>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        Profissional com formação em ADS (FIAP) e Pós em Data Analytics, com experiência
        corporativa em arquitetura de sistemas e foco em análise de dados para apoiar decisões de
        negócio.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a href="#projetos" className="btn btn-primary">
          Ver Projetos
        </a>
        <a href="/cv-kauan-altino.pdf" className="btn btn-secondary" download>
          <FaDownload /> Download CV
        </a>
        <a href="https://linkedin.com/in/kauanaltino" target="_blank" rel="noreferrer" className="btn btn-ghost">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/KauanAltino" target="_blank" rel="noreferrer" className="btn btn-ghost">
          <FaGithub /> GitHub
        </a>
      </motion.div>
    </section>
  )
}
