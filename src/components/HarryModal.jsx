import { useEffect } from 'react'
import harryBot from '../assets/harry-bot.png'
import { useTranslation } from '../i18n/LanguageContext'

export default function HarryModal({ onClose }) {
  const { t } = useTranslation()
  const features = t('modal.features')

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="harry-overlay" onClick={onClose}>
      <div className="harry-modal" onClick={e => e.stopPropagation()}>

        <button className="harry-modal-close" onClick={onClose} aria-label="Close">✕</button>

        {/* Шапка */}
        <div className="harry-modal-header">
          <div className="harry-modal-avatar-wrap">
            <img src={harryBot} alt="Harry" className="harry-modal-avatar" />
            <div className="harry-modal-avatar-glow" />
          </div>
          <div className="harry-modal-badge">{t('modal.badge')}</div>
          <h2 className="harry-modal-title">{t('modal.title')}</h2>
          <p className="harry-modal-sub">{t('modal.sub')}</p>
        </div>

        {/* Разделитель */}
        <div className="harry-modal-divider" />

        {/* Описание */}
        <p className="harry-modal-desc">{t('modal.desc')}</p>

        {/* Фичи */}
        <div className="harry-modal-features">
          {features.map((text, i) => (
            <div className="harry-modal-feature" key={i}>
              <span className="harry-modal-feature-icon">
                {['🤖', '📊', '👨‍👩‍👧', '🌍'][i]}
              </span>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* Статус */}
        <div className="harry-modal-status">
          <div className="harry-modal-status-dot" />
          <span>{t('modal.statusText')}</span>
        </div>

        {/* CTA */}
        <div className="harry-modal-actions">
          <a href="#contact" className="harry-modal-btn-primary" onClick={onClose}>
            {t('modal.btnPrimary')}
          </a>
          <button className="harry-modal-btn-outline" onClick={onClose}>
            {t('modal.btnClose')}
          </button>
        </div>

      </div>
    </div>
  )
}
