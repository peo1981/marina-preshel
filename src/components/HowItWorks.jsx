import { useTranslation } from '../i18n/LanguageContext'

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('howItWorks.steps')

  return (
    <section className="how" id="how">
      <div className="section-inner">
        <div className="how-header">
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            {t('howItWorks.tag')}
          </div>
          <h2 className="section-title">
            {t('howItWorks.titleMain')}<br /><em>{t('howItWorks.titleItalic')}</em>
          </h2>
        </div>

        <div className="steps">
          {steps.map(({ num, title, desc }) => (
            <div className="step" key={num}>
              <div className="step-num">{num}</div>
              <div className="step-title">{title}</div>
              <div className="step-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
