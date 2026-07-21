import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function NotFoundPage() {
  return (
    <div className="not-found-page">
      <p>404</p>
      <h1>Página não encontrada</h1>
      <p>O conteúdo que você procurou não está disponível neste endereço.</p>
      <Link to="/" className="btn btn-primary">
        Voltar ao início
      </Link>

      <Footer backHref="/#inicio" />
    </div>
  )
}
