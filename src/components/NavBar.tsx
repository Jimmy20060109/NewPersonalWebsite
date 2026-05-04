import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { allNavItems } from '../routes'
import { useLanguage, type Language } from '../i18n/LanguageContext'
import './NavBar.css'

type ThemeMode = 'light' | 'dark'

const THEME_STORAGE_KEY = 'theme-mode'

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const saved = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') {
    return saved
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme())
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const selectLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
    setMenuOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <NavLink to="/" className="nav-brand">
          Jimmy Zheng
        </NavLink>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {allNavItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                end={item.path === '/'}
              >
                {t(item.labelKey)}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <div className="language-toggle" aria-label={t('nav.language')}>
            <button
              type="button"
              className={`language-option ${language === 'en' ? 'active' : ''}`}
              onClick={() => selectLanguage('en')}
              aria-label={t('nav.selectEnglish')}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={`language-option ${language === 'zh' ? 'active' : ''}`}
              onClick={() => selectLanguage('zh')}
              aria-label={t('nav.selectChinese')}
              aria-pressed={language === 'zh'}
            >
              中
            </button>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
          >
            {theme === 'dark' ? (
              <svg
                className="theme-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2.5v2.25M12 19.25v2.25M21.5 12h-2.25M4.75 12H2.5M18.72 5.28l-1.59 1.59M6.87 17.13l-1.59 1.59M18.72 18.72l-1.59-1.59M6.87 6.87 5.28 5.28" />
              </svg>
            ) : (
              <svg
                className="theme-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.2 14.4A8.5 8.5 0 1 1 9.6 3.8a7 7 0 0 0 10.6 10.6Z" />
              </svg>
            )}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
