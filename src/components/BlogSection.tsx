import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import GlassCard from './GlassCard'
import SectionTitle from './SectionTitle'
import { BLOG_PREVIEW } from '../utils/constants'

export default function BlogSection() {
  return (
    <section className="section-shell">
      <SectionTitle
        eyebrow="Blog"
        title="Estrutura pronta para publicar artigos"
        description="Conteúdo sobre engenharia, dados, design de interfaces e automação aplicada."
        action={
          <Link to="/blog" className="btn btn-secondary">
            Ver Blog <FaArrowRight />
          </Link>
        }
      />

      <div className="blog-grid">
        {BLOG_PREVIEW.map((post, index) => (
          <GlassCard key={post.title} delay={index * 0.08}>
            <p className="blog-meta">
              {post.date} • {post.readTime}
            </p>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
