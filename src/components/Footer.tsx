import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa6'

type FooterProps = {
  backHref?: string
}

export default function Footer({ backHref = '#inicio' }: FooterProps) {
  return (
    <footer className="footer">
      <div>
        <p>© {new Date().getFullYear()} Kauan Altino Gianesini. Todos os direitos reservados.</p>
      </div>
      <div className="footer-social">
        <a href="https://linkedin.com/in/kauanaltino" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/KauanAltino" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
      <a href={backHref} className="back-to-top" aria-label="Voltar ao topo">
        <FaArrowUp />
      </a>
    </footer>
  )
}
