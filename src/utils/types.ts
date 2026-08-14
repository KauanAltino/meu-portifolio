export type Theme = 'dark' | 'light'

export type Skill = {
  name: string
  level: number
  icon: string
}

export type SkillCategory = {
  title: string
  items: Skill[]
}

export type ProjectCategory = 'Web' | 'Data' | 'Automação' | 'FiveM' | 'Mobile' | 'Java' | 'Python' | 'Em andamento' | 'Outros'

export type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  status: 'Em Produção' | 'Concluído' | 'Em Andamento' | 'Em evolução'
  category: ProjectCategory
  githubUrl: string
}

export type TimelineItem = {
  year: string
  title: string
  subtitle: string
  description: string
}

export type Certificate = {
  title: string
  issuer: string
  image: string
  viewUrl: string
}

export type Testimonial = {
  name: string
  role: string
  content: string
}

export type BlogPostPreview = {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: BlogCategory
  topic: string
  slug?: string
}

export type BlogCategory = 'Data Analytics' | 'Data Engineering' | 'Data Science' | 'Tecnologias'

export type Stat = {
  label: string
  value: number
  suffix?: string
}
