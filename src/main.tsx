import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext'
import './styles/globals.css'

const params = new URLSearchParams(window.location.search)
const redirectPath = params.get('p')
const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || ''

if (redirectPath) {
  const query = params.get('q')
  const hash = window.location.hash || ''
  const nextUrl = `${basename ? `${basename}/` : '/'}${redirectPath}${query ? `?${query}` : ''}${hash}`
  window.history.replaceState(null, '', nextUrl)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename || undefined}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
