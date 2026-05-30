import photo1 from '../assets/photo1.jpeg'
import { useTranslation } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className="about" id="about">
      <div className="section-inner">
        <div className="about-grid">

          <div className="about-image">
            <img src={photo1} alt="Marina Preshel" className="about-img" />
          </div>

          <div className="about-right">
            <div className="about-text">
              <div className="section-tag">{t('about.tag')}</div>
              <h2 className="section-title">
                {t('about.titleMain')}<br /><em>{t('about.titleItalic')}</em>
              </h2>
              <div className="divider" />

              <p>{t('about.p1')}</p>
              <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
              <p>{t('about.p3')}</p>
              <ul className="about-list">
                {t('about.list').map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p>{t('about.p4')}</p>
            </div>

            <div className="about-stats">
              {t('about.stats').map(({ num, label }) => (
                <div className="stat-item" key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
