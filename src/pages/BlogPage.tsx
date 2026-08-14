import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import { BLOG_PREVIEW, BLOG_TOPICS } from '../utils/constants'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedTopic, setSelectedTopic] = useState('Todos')
  const categories = Object.keys(BLOG_TOPICS) as Array<keyof typeof BLOG_TOPICS>
  const topics =
    selectedCategory === 'Todos'
      ? Object.values(BLOG_TOPICS).flat()
      : BLOG_TOPICS[selectedCategory as keyof typeof BLOG_TOPICS]
  const filteredPosts = BLOG_PREVIEW.filter(
    (post) =>
      (selectedCategory === 'Todos' || post.category === selectedCategory) &&
      (selectedTopic === 'Todos' || post.topic === selectedTopic),
  )

  function handleCategoryChange(category: string) {
    setSelectedCategory(category)
    setSelectedTopic('Todos')
  }

  return (
    <div className="blog-page blog-page--full">
      <Navbar pageTitle="Blog" />

      <section className="blog-page-section">
        <SectionTitle
          eyebrow=""
          title="Artigos e insights"
          description="Conteúdos sobre engenharia, dados e automação, preparados para acompanhar minha evolução profissional."
        />

        <div className="blog-filters" aria-label="Filtros de temas do blog">
          <div className="blog-category-filters" aria-label="Categorias">
            <button
              type="button"
              className={selectedCategory === 'Todos' ? 'is-active' : ''}
              onClick={() => handleCategoryChange('Todos')}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={selectedCategory === category ? 'is-active' : ''}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="blog-topic-list" aria-label="Tópicos">
            <button
              type="button"
              className={selectedTopic === 'Todos' ? 'is-active' : ''}
              onClick={() => setSelectedTopic('Todos')}
            >
              Todos os tópicos
            </button>
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                className={selectedTopic === topic ? 'is-active' : ''}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-page-grid">
          {filteredPosts.map((post) => (
            <article key={post.title} className="glass-card blog-preview-card">
              <p className="blog-topic">{post.topic}</p>
              <p className="blog-meta">
                {post.date} • {post.readTime}
              </p>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              {post.slug ? (
                <Link to={`/blog/${post.slug}`} className="btn btn-ghost">
                  Ler artigo
                </Link>
              ) : (
                <button type="button" className="btn btn-ghost" disabled>
                  Em breve
                </button>
              )}
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="blog-empty-state">Ainda não há artigos publicados neste tópico.</p>
        )}

        <Footer backHref="#" />
      </section>
    </div>
  )
}
