import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa6'
import profilePhoto from '../utils/imagem_perfil/perfil.jpg'

function DesktopHero() {
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
          src={profilePhoto}
          alt="Foto de perfil de Kauan Altino Gianesini"
          loading="eager"
        />
      </motion.div>

      <motion.p
        className="hero-tag"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Disponível para Oportunidades
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
        Profissional com formação em ADS, Pós-Graduação em Data Analytics (FIAP) e certificações.
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
        <a href="https://linkedin.com/in/kauanaltino" target="_blank" rel="noreferrer" className="btn btn-ghost">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/KauanAltino" target="_blank" rel="noreferrer" className="btn btn-ghost">
          <FaGithub /> GitHub
        </a>
        <a href="/KauanAltino_curriculo.pdf" className="btn btn-secondary" download>
          <FaDownload /> Meu Curriculo
        </a>
      </motion.div>
    </section>
  )
}

function MobileHero() {
  return (
    <section id="inicio" className="hero-section hero-section-mobile section-shell">
      <div className="hero-bg-grid" aria-hidden="true" />

      <motion.div
        className="hero-mobile-top"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <div className="hero-profile hero-profile-mobile">
          <img
            src={profilePhoto}
            alt="Foto de perfil de Kauan Altino Gianesini"
            loading="eager"
          />
        </div>
        <motion.p className="hero-tag hero-tag-mobile" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          Disponível para Oportunidades
        </motion.p>
      </motion.div>

      <motion.h1
        className="hero-title-mobile"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <span>Kauan Altino</span>
        <span>Gianesini</span>
      </motion.h1>

      <motion.h2
        className="hero-role hero-role-mobile"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span>Analista de Dados</span>
        <span>Engenharia de Dados</span>
        <span>Power BI | Python | SQL</span>
      </motion.h2>

      <motion.p
        className="hero-description hero-description-mobile"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        Profissional com formação em ADS, Pós-Graduação em Data Analytics (FIAP) e certificações.
      </motion.p>

      <motion.div
        className="hero-actions hero-actions-mobile"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a href="#projetos" className="btn btn-primary">
          Ver Projetos
        </a>
        <a href="https://linkedin.com/in/kauanaltino" target="_blank" rel="noreferrer" className="btn btn-ghost">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/KauanAltino" target="_blank" rel="noreferrer" className="btn btn-ghost">
          <FaGithub /> GitHub
        </a>
        <a href="/KauanAltino_curriculo.pdf" className="btn btn-secondary" download>
          <FaDownload /> Meu Curriculo
        </a>
      </motion.div>
    </section>
  )
}

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)')

    const handleChange = () => setIsMobile(mediaQuery.matches)

    handleChange()
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return isMobile ? <MobileHero /> : <DesktopHero />
}
