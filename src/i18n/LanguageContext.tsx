import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Language = 'en' | 'zh'

export type LanguageDict<T> = Record<Language, T>

const LANGUAGE_STORAGE_KEY = 'site-language'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  if (saved === 'en' || saved === 'zh') {
    return saved
  }

  return 'en'
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage())

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

/**
 * Resolves a module-local translation dictionary against the current language.
 * Each consumer (component / view) owns its own copy of `dict`, so this hook
 * deliberately knows nothing about the actual translation strings.
 */
export function useTranslations<T>(dict: LanguageDict<T>): T {
  const { language } = useLanguage()
  return dict[language]
}
