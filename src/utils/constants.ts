import type {
  BlogPostPreview,
  Certificate,
  Project,
  SkillCategory,
  Stat,
  Testimonial,
  TimelineItem,
} from './types'

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Data Analytics',
    items: [
      { name: 'Power BI', level: 90, icon: 'FaChartLine' },
      { name: 'Visualização de Dados', level: 87, icon: 'FaChartLine' },
      { name: 'Excel Avançado', level: 86, icon: 'FaTable' },
      { name: 'Data Analytics', level: 88, icon: 'FaBrain' },
    ],
  },
  {
    title: 'Linguagens e Dados',
    items: [
      { name: 'Python', level: 85, icon: 'FaPython' },
      { name: 'SQL', level: 88, icon: 'FaDatabase' },
      { name: 'Java', level: 72, icon: 'FaCode' },
      { name: 'Lógica de Programação', level: 90, icon: 'FaCubes' },
    ],
  },
  {
    title: 'Engenharia de Dados',
    items: [
      { name: 'Pandas', level: 84, icon: 'FaTable' },
      { name: 'ETL com Python', level: 80, icon: 'FaNetworkWired' },
      { name: 'Modelagem de Dados', level: 82, icon: 'FaDatabase' },
      { name: 'Análise Exploratória', level: 86, icon: 'FaWandMagicSparkles' },
    ],
  },
  {
    title: 'Ambiente Corporativo',
    items: [
      { name: 'Análise de Processos', level: 84, icon: 'FaLayerGroup' },
      { name: 'Documentação Técnica', level: 86, icon: 'FaCodeBranch' },
      { name: 'Arquitetura de Sistemas', level: 80, icon: 'FaServer' },
      { name: 'Requisitos Técnicos', level: 82, icon: 'FaToolbox' },
    ],
  },
  {
    title: 'Ferramentas',
    items: [
      { name: 'GitHub', level: 83, icon: 'FaGitAlt' },
      { name: 'Excel', level: 86, icon: 'FaTable' },
      { name: 'Power BI Desktop', level: 89, icon: 'FaChartLine' },
      { name: 'Python (Pandas)', level: 84, icon: 'FaPython' },
    ],
  },
  {
    title: 'Soft Skills',
    items: [
      { name: 'Perfil Analítico', level: 92, icon: 'FaBrain' },
      { name: 'Proatividade', level: 90, icon: 'FaBolt' },
      { name: 'Comunicação Técnica', level: 85, icon: 'FaCode' },
      { name: 'Aprendizado Contínuo', level: 94, icon: 'FaRobot' },
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    title: 'Dashboard de Indicadores de Vendas',
    description: 'Painel em Power BI com KPIs de vendas, evolução mensal e análise de performance.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Power BI', 'Excel', 'Data Visualization'],
    status: 'Em Evolução',
    category: 'Data',
    githubUrl: 'https://github.com/KauanAltino',
    demoUrl: 'https://app.powerbi.com/',
  },
  {
    title: 'Análise Exploratória de Dados com Python',
    description: 'Projeto de EDA com limpeza, transformação e geração de insights com Pandas.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'Pandas', 'Jupyter Notebook'],
    status: 'Em Evolução',
    category: 'Data',
    githubUrl: 'https://github.com/KauanAltino',
    demoUrl: 'https://github.com/KauanAltino',
  },
  {
    title: 'Consultas e Modelagem de Dados com SQL',
    description: 'Criação de consultas analíticas e modelagem para apoiar decisões de negócio.',
    image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80',
    technologies: ['SQL', 'Modelagem de Dados', 'Data Analytics'],
    status: 'Em Evolução',
    category: 'Data',
    githubUrl: 'https://github.com/KauanAltino',
    demoUrl: 'https://github.com/KauanAltino',
  },
  {
    title: 'Pipeline de Preparação de Dados',
    description: 'Rotina em Python para padronização e preparo de bases para visualização no Power BI.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'Pandas', 'Excel'],
    status: 'Em Evolução',
    category: 'Data',
    githubUrl: 'https://github.com/KauanAltino',
    demoUrl: 'https://github.com/KauanAltino',
  },
  {
    title: 'Automação de Relatórios',
    description: 'Scripts para automatizar consolidação de dados e geração de relatórios operacionais.',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'Excel', 'Data Analytics'],
    status: 'Em Evolução',
    category: 'Automação',
    githubUrl: 'https://github.com/KauanAltino',
    demoUrl: 'https://github.com/KauanAltino',
  },
  {
    title: 'Análise de Processos Sistêmicos',
    description: 'Mapeamento de fluxos e pontos críticos para melhorar eficiência operacional.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Arquitetura de Sistemas', 'Documentação Técnica'],
    status: 'Em Evolução',
    category: 'Data',
    githubUrl: 'https://github.com/KauanAltino',
    demoUrl: 'https://linkedin.com/in/kauanaltino',
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
    year: '2026',
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

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mariana Lopes',
    role: 'Product Manager',
    content:
      'A entrega foi impecável. Além de código de alta qualidade, tivemos melhorias reais de UX e performance.',
  },
  {
    name: 'Rafael Mendes',
    role: 'CEO, Startup SaaS',
    content:
      'Conseguiu transformar uma ideia complexa em um produto elegante e escalável em poucas semanas.',
  },
  {
    name: 'Camila Souza',
    role: 'Head de Dados',
    content:
      'A combinação de desenvolvimento e análise de dados acelerou decisões estratégicas da nossa equipe.',
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
  { label: 'Experiência Corporativa', value: 1, suffix: ' ano' },
  { label: 'Formações FIAP', value: 2, suffix: '' },
  { label: 'Anos estudando', value: 4, suffix: '+' },
]
