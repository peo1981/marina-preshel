import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const links = [
  { id: 'about-me', label: 'Обо мне'    },
  { id: 'about',    label: 'Мой метод' },
  { id: 'services', label: 'Услуги'     },
  { id: 'how',      label: 'Как работаю'},
  { id: 'reviews',  label: 'Отзывы'    },
  { id: 'finbot',   label: 'Гарри',     badge: true },
  { id: 'contact',  label: 'Контакты'  },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav>
        <div className="nav-inner">
          <a href="#" className="logo">
            <img src={logo} alt="Marina Preshel" className="logo-img" />
          </a>

          <ul className="nav-links">
            {links.map(({ id, label, badge }) => (
              <li key={id}>
                <a href={`#${id}`}>
                  {label}
                  {badge && <span className="nav-badge-ai">AI</span>}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta">Записаться</a>

          <div className="hamburger" onClick={() => setOpen(true)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>

      <div className={`mob-menu${open ? ' open' : ''}`}>
        <button className="mob-close" onClick={close}>✕</button>
        {links.map(({ id, label, badge }) => (
          <a key={id} href={`#${id}`} onClick={close}>
            {label}
            {badge && <span className="nav-badge-ai-mob">AI</span>}
          </a>
        ))}
        <a href="#contact" onClick={close} className="mob-cta">
          Записаться
        </a>
      </div>
    </>
  )
}
