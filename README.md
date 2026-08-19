# 🎯 Meu Portfólio

Um portfólio pessoal moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS. Apresenta meus projetos, experiência profissional e artigos sobre Data Analytics, Data Engineering e Tecnologias em Nuvem.

**🌐 [Visite meu portfólio](https://kauanaltino.github.io/meu-portifolio/)**

---

## ✨ Recursos

- 📱 **Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- 🎨 **Design Moderno** - Interface limpa com Tailwind CSS e animações Framer Motion
- 🌙 **Tema Escuro/Claro** - Suporte a múltiplos temas com React Context
- ⚡ **Performance Otimizada** - Desenvolvido com Vite para builds rápidos
- 📝 **Blog Integrado** - Artigos sobre Data Analytics, Engineering e Ciência de Dados
- 🎯 **Seções Completas** - Sobre, Projetos, Experiência, Contato e muito mais

---

## 📋 Seções

- **Início** - Hero section com apresentação pessoal
- **Sobre** - Informações sobre você
- **Projetos** - Portfólio de projetos com links para GitHub
- **Experiência** - Timeline de experiência profissional
- **Blog** - Artigos sobre tecnologias e análise de dados
- **Contato** - Formulário e redes sociais
- **Estatísticas** - Destaques e métricas

---

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/KauanAltino/meu-portifolio.git

# Acesse a pasta
cd meu-portifolio

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse em http://localhost:5173
```

### Build

```bash
# Crie a build otimizada
npm run build

# Visualize a build localmente
npm run preview
```

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19** - Framework JavaScript
- **TypeScript** - Type safety
- **React Router v7** - Roteamento
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animações
- **React Icons** - Ícones

### Build & Development
- **Vite** - Build tool rápido
- **ESLint** - Linting de código

### Deploy
- **GitHub Pages** - Hospedagem

---

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── AboutSection.tsx
│   ├── BlogSection.tsx
│   ├── ContactSection.tsx
│   ├── ExperienceSection.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   └── ...
├── pages/               # Páginas da aplicação
│   ├── HomePage.tsx
│   ├── BlogPage.tsx
│   ├── ProjectsPage.tsx
│   └── ...
├── context/             # React Context
│   └── ThemeContext.tsx  # Gerenciamento de tema
├── hooks/               # Custom hooks
│   └── useTheme.ts
├── utils/               # Utilitários
│   ├── constants.ts     # Dados do portfólio
│   └── types.ts         # Tipos TypeScript
├── styles/              # Estilos globais
│   └── globals.css
└── App.tsx              # Componente raiz
```

---

## 📝 Customização

### Editar Informações Pessoais

Abra `src/utils/constants.ts` e atualize:
- `NAV_LINKS` - Links da navegação
- `PROJECTS` - Seus projetos
- `BLOG_TOPICS` - Tópicos do blog

---


## 🎨 Variáveis de Ambiente

Crie um arquivo `.env.production` para o deploy:

```env
VITE_BASE_PATH=/meu-portifolio/
```

---

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build otimizada |
| `npm run preview` | Visualiza a build localmente |
| `npm run lint` | Executa ESLint |

---

## 📦 Dependências Principais

```json
{
  "react": "^19.2.7",
  "react-dom": "^19.2.7",
  "react-router-dom": "^7.18.1",
  "tailwindcss": "^4.3.2",
  "framer-motion": "^12.42.1",
  "react-icons": "^5.7.0"
}
```

---

## 🔧 Troubleshooting

### Página em branco após deploy
- Verifique se o GitHub Pages está configurado para usar apenas uma estratégia de deploy
- Evite publicar manualmente para a branch `gh-pages` quando já existir um deploy automático configurado
- Limpe o cache do navegador (Ctrl + Shift + Delete)

### Rotas não funcionam
- Certifique-se que `base` em `vite.config.ts` está configurado corretamente
- Verifique se a URL em `package.json` → `homepage` está correta

### Build falhando
```bash
# Limpe dependências e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📧 Contato

- **Email**: kauanaltino@gmail.com
- **GitHub**: [KauanAltino](https://github.com/KauanAltino)
- **LinkedIn**: [seu-perfil](https://www.linkedin.com/in/kauanaltino/)

---

## 📄 Licença

Este projeto está disponível sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---


**Desenvolvido por Kauan Altino**
