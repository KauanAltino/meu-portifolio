import { motion } from 'framer-motion'
import { HiMoon, HiSun } from 'react-icons/hi2'
import { NAV_LINKS } from '../utils/constants'
import { useTheme } from '../hooks/useTheme'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.header
      className="navbar"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a className="brand" href="#inicio">
        <span>KAG</span>
      </a>

      <nav>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label="Alternar tema"
      >
        {theme === 'dark' ? <HiSun /> : <HiMoon />}
      </button>
    </motion.header>
  )
}
