import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { useTranslation } from '../i18n/LanguageContext'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const { lang, setLang, t } = useTranslation()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = t('nav.links')

  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#" className="logo">
            <img src={logo} alt="Marina Preshel" className="logo-img" />
          </a>

          <ul className="nav-links">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>
                  {label}
                  {id === 'finbot' && <span className="nav-badge-ai">AI</span>}
                </a>
              </li>
            ))}
          </ul>

          <div className="lang-switcher">
            {['ru', 'en', 'he'].map(l => (
              <button
                key={l}
                className={`lang-btn${lang === l ? ' active' : ''}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <a href="#contact" className="nav-cta">{t('nav.cta')}</a>

          <div className="hamburger" onClick={() => setOpen(true)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>

      <div className={`mob-menu${open ? ' open' : ''}`}>
        <button className="mob-close" onClick={close}>✕</button>
        {links.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={close}>
            {label}
            {id === 'finbot' && <span className="nav-badge-ai-mob">AI</span>}
          </a>
        ))}
        <a href="#contact" onClick={close} className="mob-cta">
          {t('nav.cta')}
        </a>
        <div className="mob-lang">
          {['ru', 'en', 'he'].map(l => (
            <button
              key={l}
              className={`mob-lang-btn${lang === l ? ' active' : ''}`}
              onClick={() => { setLang(l); close() }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
