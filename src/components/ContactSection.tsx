import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import SectionTitle from './SectionTitle'

export default function ContactSection() {
  return (
    <section id="contato" className="section-shell">
      <SectionTitle
        eyebrow="Contato"
        title="Vamos conversar sobre oportunidades em dados"
        description="Disponível para posições e projetos em Análise de Dados e Engenharia de Dados."
      />

      <div className="contact-grid">
        <aside className="glass-card contact-links">
          <div className="contact-links-list">
            <a href="https://linkedin.com/in/kauanaltino" target="_blank" rel="noreferrer">
              <FaLinkedin aria-hidden="true" />
              <span>
                <strong>LinkedIn</strong>
                <small>Conecte-se profissionalmente</small>
              </span>
            </a>
            <a href="https://github.com/KauanAltino" target="_blank" rel="noreferrer">
              <FaGithub aria-hidden="true" />
              <span>
                <strong>GitHub</strong>
                <small>Veja meus repositórios</small>
              </span>
            </a>
            <a href="https://wa.me/5511991145917" target="_blank" rel="noreferrer">
              <FaWhatsapp aria-hidden="true" />
              <span>
                <strong>WhatsApp</strong>
                <small>Envie uma mensagem direta</small>
              </span>
            </a>
            <a href="mailto:kauanaltino@gmail.com">
              <FaEnvelope aria-hidden="true" />
              <span>
                <strong>E-mail</strong>
                <small>kauanaltino@gmail.com</small>
              </span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

