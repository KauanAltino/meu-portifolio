import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'
import type { Theme } from '../utils/types'

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
  isLightMode: boolean
  toggleLightMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'portfolio-theme'
const LIGHT_MODE_STORAGE_KEY = 'portfolio-light-mode'

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') {
      return stored
    }

    return 'dark'
  })
  const [isLightMode, setIsLightMode] = useState(() => {
    const stored = localStorage.getItem(LIGHT_MODE_STORAGE_KEY)
    return stored ? stored === 'enabled' : true
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.toggleAttribute('data-light-mode', isLightMode)
    localStorage.setItem(LIGHT_MODE_STORAGE_KEY, isLightMode ? 'enabled' : 'disabled')
  }, [isLightMode])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const toggleLightMode = useCallback(() => {
    setIsLightMode((current) => !current)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      isLightMode,
      toggleLightMode,
    }),
    [theme, toggleTheme, isLightMode, toggleLightMode],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeProvider')
  }

  return context
}
