import { useTranslation } from '../i18n/LanguageContext'

export default function Services() {
  const { t } = useTranslation()
  const card1 = t('services.card1')
  const cards = t('services.cards')

  return (
    <section id="services">
      <div className="section-inner">
        <div className="services-intro">
          <div>
            <div className="section-tag">{t('services.tag')}</div>
            <h2 className="section-title">
              {t('services.titleMain')}<br /><em>{t('services.titleItalic')}</em>
            </h2>
          </div>
          <p className="services-desc">
            {t('services.desc')}
          </p>
        </div>

        <div className="services-grid">
          {/* Special first card: mini-course */}
          <div className="service-card">
            <div className="service-header">
              <div className="service-icon">📈</div>
              <div className="service-name">{card1.name}</div>
            </div>
            <div className="service-badge">{card1.badge}</div>
            <div className="service-desc">{card1.desc}</div>
            <div className="service-meta">
              <div className="service-label">{t('services.labelIdeal')}</div>
              <div className="service-value">{card1.ideal}</div>
              <div className="service-label">{t('services.labelResult')}</div>
              <div className="service-value">{card1.result}</div>
              <div className="service-price-row">
                <a href="#contact" className="service-cta">{t('services.ctaBuy')}</a>
                {false && (
                  <div className="service-price">
                    <span className="service-price-old">{card1.priceOld}</span>
                    <span className="service-price-new">{card1.priceNew}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {cards.map(({ icon, name, desc, ideal, result }) => (
            <div className="service-card" key={name}>
              <div className="service-header">
                <div className="service-icon">{icon}</div>
                <div className="service-name">{name}</div>
              </div>
              <div className="service-desc">{desc}</div>
              <div className="service-meta">
                <div className="service-label">{t('services.labelIdeal')}</div>
                <div className="service-value">{ideal}</div>
                <div className="service-label">{t('services.labelResult')}</div>
                <div className="service-value">{result}</div>
                <a href="#contact" className="service-cta">{t('services.ctaBook')}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
