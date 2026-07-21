import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { BLOG_PREVIEW } from '../utils/constants'

export default function BlogPage() {
  return (
    <div className="blog-page">
      <header className="blog-page-header">
        <p>Blog</p>
        <h1>Artigos e insights</h1>
        <p>
          Estrutura preparada para crescimento com novos conteúdos sobre engenharia, dados e
          automação.
        </p>
        <Link to="/" className="btn btn-secondary">
          Voltar para o portfólio
        </Link>
      </header>

      <section className="blog-page-grid">
        {BLOG_PREVIEW.map((post) => (
          <article key={post.title} className="glass-card">
            <p className="blog-meta">
              {post.date} • {post.readTime}
            </p>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <button type="button" className="btn btn-ghost" disabled>
              Em breve
            </button>
          </article>
        ))}
      </section>

      <Footer backHref="/#inicio" />
    </div>
  )
}
