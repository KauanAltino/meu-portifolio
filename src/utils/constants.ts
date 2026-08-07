import type {
  BlogPostPreview,
  Certificate,
  Project,
  Stat,
  TimelineItem,
} from './types'

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export const PROJECTS: Project[] = [
  {
    title: 'DayToday API',
    description: 'API REST desenvolvida para gerenciar rotinas e hábitos pessoais, permitindo o cadastro e acompanhamento de metas de forma organizada.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Java', 'REST API', 'Spring Boot', 'Maven'],
    status: 'Concluído',
    category: 'Java',
    githubUrl: 'https://github.com/KauanAltino',
  },
  {
    title: 'Análise Exploratória de Dados com Python',
    description: 'Projeto de EDA com limpeza, transformação e geração de insights com Pandas.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'Pandas', 'Jupyter Notebook'],
    status: 'Em Evolução',
    category: 'Data',
    githubUrl: 'https://github.com/KauanAltino',
  },
  {
    title: 'Consultas e Modelagem de Dados com SQL',
    description: 'Criação de consultas analíticas e modelagem para apoiar decisões de negócio.',
    image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80',
    technologies: ['SQL', 'Modelagem de Dados', 'Data Analytics'],
    status: 'Em Evolução',
    category: 'Data',
    githubUrl: 'https://github.com/KauanAltino',
  },
  {
    title: 'Pipeline de Preparação de Dados',
    description: 'Rotina em Python para padronização e preparo de bases para visualização no Power BI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'Pandas', 'Excel'],
    status: 'Em Evolução',
    category: 'Data',
    githubUrl: 'https://github.com/KauanAltino',
  },
  {
    title: 'Automação de Relatórios',
    description: 'Scripts para automatizar consolidação de dados e geração de relatórios operacionais.',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'Excel', 'Data Analytics'],
    status: 'Em Evolução',
    category: 'Automação',
    githubUrl: 'https://github.com/KauanAltino',
  },
  {
    title: 'Análise de Processos Sistêmicos',
    description: 'Mapeamento de fluxos e pontos críticos para melhorar eficiência operacional.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Arquitetura de Sistemas', 'Documentação Técnica'],
    status: 'Em Evolução',
    category: 'Data',
    githubUrl: 'https://github.com/KauanAltino',
  },
]

export const ABOUT_TIMELINE: TimelineItem[] = [
  {
    year: '2022',
    title: 'Início da Graduação em ADS (FIAP)',
    subtitle: 'Base em desenvolvimento e dados',
    description: 'Desenvolvimento de fundamentos em lógica, programação, bancos de dados e análise de sistemas.',
  },
  {
    year: '2022 - 2023',
    title: 'Bradesco Seguros - Estágio em Arquitetura de Sistemas',
    subtitle: 'Vivência corporativa em fluxos sistêmicos',
    description: 'Apoio na análise de processos, documentação técnica e interpretação de requisitos junto a times multidisciplinares.',
  },
  {
    year: '2024',
    title: 'Conclusão da Graduação em ADS',
    subtitle: 'Consolidação técnica',
    description: 'Conclusão do curso de Análise e Desenvolvimento de Sistemas com foco em evolução para a área de dados.',
  },
  {
    year: '2025 - 2026',
    title: 'Pós-graduação em Data Analytics (FIAP Pós-Tech)',
    subtitle: 'Especialização em análise de dados',
    description: 'Aprofundamento em Power BI, Python, SQL e visualização de dados para tomada de decisão.',
  },
]

export const EXPERIENCE_TIMELINE: TimelineItem[] = [
  {
    year: 'Dez/2022 - Dez/2023',
    title: 'Estágio em Arquitetura de Sistemas | Bradesco Seguros',
    subtitle: 'São Paulo/SP',
    description: 'Atuação em análise de processos, organização de fluxos sistêmicos, documentação técnica e apoio à interpretação de requisitos.',
  },
  {
    year: '2024 - Atual',
    title: 'Projetos de Dados em Desenvolvimento',
    subtitle: 'Power BI, Python e SQL',
    description: 'Desenvolvimento de dashboards de KPIs, análises exploratórias e modelagem de dados para evolução profissional contínua.',
  },
  {
    year: 'Foco Atual',
    title: 'Analista de Dados | Engenharia de Dados Júnior',
    subtitle: 'Objetivo de carreira',
    description: 'Atuar com dados em contexto corporativo, apoiando decisões por meio de análises, automações e boas práticas de dados.',
  },
]

export const CERTIFICATES: Certificate[] = [
  {
    title: 'Power BI Desktop',
    issuer: 'ALURA (2025)',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80',
    viewUrl: 'https://www.alura.com.br/',
  },
  {
    title: 'Praticando Python',
    issuer: 'ALURA (2024)',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80',
    viewUrl: 'https://www.alura.com.br/',
  },
  {
    title: 'Java OO e Fundamentos',
    issuer: 'ALURA / FIAP (2024)',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
    viewUrl: 'https://www.fiap.com.br/',
  },
]

export const BLOG_PREVIEW: BlogPostPreview[] = [
  {
    title: 'Boas práticas para dashboards de KPIs no Power BI',
    excerpt: 'Como organizar métricas para facilitar leitura e tomada de decisão.',
    date: '15 Jun 2026',
    readTime: '6 min',
  },
  {
    title: 'Análise exploratória de dados com Python e Pandas',
    excerpt: 'Um fluxo prático de limpeza, entendimento e geração de insights.',
    date: '03 Mai 2026',
    readTime: '8 min',
  },
  {
    title: 'Consultas SQL para análises de negócio',
    excerpt: 'Estratégias para transformar dados relacionais em respostas acionáveis.',
    date: '29 Abr 2026',
    readTime: '5 min',
  },
]

export const STATS: Stat[] = [
  { label: 'Projetos de Dados', value: 6, suffix: '+' },
  { label: 'Certificações', value: 6, suffix: '+' },
  { label: 'Formações FIAP', value: 2, suffix: '' },
  { label: 'Anos estudando', value: 4, suffix: '+' },
]
