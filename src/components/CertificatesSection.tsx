import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import GlassCard from './GlassCard'
import SectionTitle from './SectionTitle'
import { CERTIFICATES } from '../utils/constants'

export default function CertificatesSection() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Certificados"
        title="Formação contínua com foco em excelência"
        description="Certificações em desenvolvimento, analytics e tecnologias modernas de produto."
      />

      <div className="certificates-grid">
        {CERTIFICATES.map((certificate, index) => (
          <GlassCard key={certificate.title} delay={index * 0.08} className="certificate-card">
            <img src={certificate.image} alt={`Certificado ${certificate.title}`} loading="lazy" />
            <div>
              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              <a href={certificate.viewUrl} target="_blank" rel="noreferrer">
                <FaArrowUpRightFromSquare /> Visualizar
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
