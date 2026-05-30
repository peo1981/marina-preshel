import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('mp_lang') || 'ru')

  useEffect(() => {
    localStorage.setItem('mp_lang', lang)
    document.documentElement.lang = lang
    if (lang === 'he') {
      document.body.setAttribute('dir', 'rtl')
    } else {
      document.body.removeAttribute('dir')
    }
  }, [lang])

  const t = (path) => {
    const keys = path.split('.')
    let value = translations[lang]
    for (const key of keys) {
      if (value == null) break
      value = value[key]
    }
    if (value == null) {
      let fallback = translations.ru
      for (const key of keys) {
        if (fallback == null) break
        fallback = fallback[key]
      }
      return fallback ?? path
    }
    return value
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => useContext(LanguageContext)
