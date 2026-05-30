import { useState } from 'react'
import harryBot from '../assets/harry-bot.png'
import HarryModal from './HarryModal'
import { useTranslation } from '../i18n/LanguageContext'

export default function FinBot() {
  const [modalOpen, setModalOpen] = useState(false)
  const { t } = useTranslation()

  const features = t('finbot.features')
  const chat = t('finbot.chat')
  const steps = t('finbot.steps')

  return (
    <>
      <section id="finbot" className="finbot">
        <div className="section-inner">

          {/* Шапка */}
          <div className="finbot-header">
            <div className="finbot-header-left">
              <div className="section-tag finbot-tag">{t('finbot.tag')}</div>
              <div className="finbot-title-row">
                <div className="finbot-logo-wrap">
                  <img src={harryBot} alt="Harry — AI Financial Bot" className="finbot-logo" />
                  <div className="finbot-logo-glow" />
                </div>
                <h2 className="section-title finbot-title">
                  {t('finbot.titleMain')}<br />
                  <em>{t('finbot.titleItalic')}</em>
                </h2>
              </div>
              <p className="finbot-intro">
                {t('finbot.intro')}
              </p>
              <button className="finbot-cta" onClick={() => setModalOpen(true)}>
                {t('finbot.cta')}
              </button>
            </div>

            <div className="finbot-header-right">
              <div className="finbot-chat">
                <div className="finbot-chat-bar">
                  <img src={harryBot} alt="Harry" className="finbot-chat-avatar" />
                  <div className="finbot-chat-info">
                    <span className="finbot-chat-name">{t('finbot.chatName')}</span>
                    <span className="finbot-chat-sub">{t('finbot.chatSub')}</span>
                  </div>
                </div>
                <div className="finbot-chat-messages">
                  {chat.map((m, i) => (
                    <div key={i} className={`finbot-msg finbot-msg-${m.from}`}>
                      {m.text.split('\n').map((line, j) => (
                        <span key={j}>{line}{j < m.text.split('\n').length - 1 && <br />}</span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Фичи */}
          <div className="finbot-features">
            {features.map(({ icon, title, desc }) => (
              <div className="finbot-card" key={title}>
                <div className="finbot-card-icon">{icon}</div>
                <div className="finbot-card-title">{title}</div>
                <div className="finbot-card-desc">{desc}</div>
              </div>
            ))}
          </div>

          {/* Как это работает */}
          <div className="finbot-how">
            <div className="finbot-how-label">{t('finbot.howLabel')}</div>
            <div className="finbot-steps">
              {steps.map((text, i) => (
                <div className="finbot-step" key={i}>
                  <div className="finbot-step-num">0{i + 1}</div>
                  <div className="finbot-step-text">{text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Нижний CTA */}
          <div className="finbot-bottom">
            <p className="finbot-bottom-text">
              {t('finbot.bottomText')}<br />
              <span>{t('finbot.bottomSpan')}</span>
            </p>
            <div className="finbot-bottom-btns">
              <button
                className="btn-primary finbot-btn-tg"
                onClick={() => setModalOpen(true)}
              >
                {t('finbot.btnTg')}
              </button>
              <a href="#contact" className="btn-outline finbot-btn-consult">
                {t('finbot.btnConsult')}
              </a>
            </div>
          </div>

        </div>
      </section>

      {modalOpen && <HarryModal onClose={() => setModalOpen(false)} />}
    </>
  )
}
