import photo2 from '../assets/photo2.jpeg'
import { useTranslation } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero-section" id="about-me">
      <div className="hero">

        <div className="hero-text">
          <div className="hero-eyebrow fade-up d1">{t('hero.eyebrow')}</div>
          <h1 className="hero-title fade-up d2">
            {t('hero.title')}
          </h1>
          <p className="hero-subtitle fade-up d3">
            {t('hero.subtitle')}
          </p>
          <div className="hero-creds fade-up d3">
            {t('hero.creds').map((cred, i) => (
              <p className="hero-cred" key={i}>{cred}</p>
            ))}
          </div>

          <p className="hero-desc fade-up d3">
            {t('hero.desc')}
          </p>
          <div className="hero-btns fade-up d4">
            <a href="#contact" className="btn-primary">
              {t('hero.btnPrimary')}
            </a>
            <a href="#services" className="btn-outline">
              {t('hero.btnOutline')}
            </a>
          </div>
        </div>

        <div className="hero-image-wrap fade-up d2">
          <img src={photo2} alt="Marina Preshel" className="hero-img" />
        </div>

      </div>
    </section>
  )
}
