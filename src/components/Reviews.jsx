import { useTranslation } from '../i18n/LanguageContext'

export default function Reviews() {
  const { t } = useTranslation()
  const items = t('reviews.items')

  return (
    <section id="reviews">
      <div className="section-inner">
        <div className="section-tag">{t('reviews.tag')}</div>
        <h2 className="section-title">
          {t('reviews.titleMain')}<br /><em>{t('reviews.titleItalic')}</em>
        </h2>

        <div className="reviews-grid">
          {items.map(({ initials, name, role, text }) => (
            <div className="review-card" key={name}>
              <div className="stars">★★★★★</div>
              <p className="review-text">{text}</p>
              <div className="review-author">
                <div className="review-avatar">{initials}</div>
                <div>
                  <div className="review-name">{name}</div>
                  <div className="review-role">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
