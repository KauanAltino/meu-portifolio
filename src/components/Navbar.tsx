import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowLeft, HiMoon, HiSun } from 'react-icons/hi2'
import { NAV_LINKS } from '../utils/constants'
import { useTheme } from '../hooks/useTheme'

type NavbarProps = {
  pageTitle?: string
}

export default function Navbar({ pageTitle }: NavbarProps) {
  const { theme, toggleTheme, isLightMode, toggleLightMode } = useTheme()
  const isPageNavigation = Boolean(pageTitle)

  return (
    <motion.header
      className={`navbar${isPageNavigation ? ' navbar--page' : ''}`}
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a className="brand" href={isPageNavigation ? '/' : '#inicio'}>
        <span>KAG</span>
      </a>

      {isPageNavigation ? (
        <p className="navbar-page-title">{pageTitle}</p>
      ) : (
        <nav>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <div className="navbar-actions">
        {isPageNavigation && (
          <Link className="navbar-home-link" to="/">
            <HiArrowLeft aria-hidden="true" />
            Início
          </Link>
        )}
        <button
          className={`light-mode-toggle${isLightMode ? ' is-active' : ''}`}
          type="button"
          onClick={toggleLightMode}
          aria-pressed={isLightMode}
        >
          Modo LEVE
        </button>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label="Alternar tema"
        >
          {theme === 'dark' ? <HiSun /> : <HiMoon />}
        </button>
      </div>
    </motion.header>
  )
}
