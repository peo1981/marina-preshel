import { useState } from 'react'
import { useTranslation } from '../i18n/LanguageContext'

const WEB3FORMS_KEY = '7a622343-6b0d-4c4c-88a1-f928d85dbd36'

const contactLinks = [
  {
    icon: '✈️',
    label: 'Telegram',
    value: '@marina_preshel',
    href: 'https://t.me/marina_preshel',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@marina_preshel',
    href: 'https://instagram.com/marina_preshel',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'hello@marinapreshel.com',
    href: 'mailto:hello@marinapreshel.com',
  },
]

const validateEmail = (v) => {
  const t = v.trim()
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(t)
}

const validatePhone = (v) => {
  if (!v.trim()) return true
  const digits = v.replace(/\D/g, '')
  return /^\+?[\d\s\-().]{7,20}$/.test(v.trim()) && digits.length >= 7 && digits.length <= 15
}

export default function Contact() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', msg: '' })
  const [errors, setErrors] = useState({})

  const set = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value })
    if (errors[key]) setErrors({ ...errors, [key]: '' })
  }

  const submit = async () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = t('contact.errName')
    if (!form.email.trim()) {
      newErrors.email = t('contact.errEmail')
    } else if (!validateEmail(form.email)) {
      newErrors.email = t('contact.errEmailInvalid')
    }
    if (!validatePhone(form.phone)) {
      newErrors.phone = t('contact.errPhone')
    }
    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      return
    }
    setLoading(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'Новая заявка с сайта marinapreshel.com',
          from_name: 'Сайт Marina Preshel',
          name: form.name,
          email: form.email,
          phone: form.phone || '—',
          message: form.msg || '—',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        alert(t('contact.alertError'))
      }
    } catch {
      alert(t('contact.alertNetwork'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="section-inner">
        <div className="section-tag">{t('contact.tag')}</div>
        <h2 className="section-title contact-title">
          {t('contact.titleMain')}<br /><em>{t('contact.titleItalic')}</em>
        </h2>

        <div className="contact-grid">
          <div>
            <p className="contact-intro">
              {t('contact.intro')}
            </p>

            <div className="contact-links">
              {contactLinks.map(({ icon, label, value, href }) => (
                <a href={href} className="contact-link" key={label}>
                  <div className="contact-link-icon">{icon}</div>
                  <div>
                    <div className="contact-link-label">{label}</div>
                    <div>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form">
            {sent ? (
              <div className="success-msg">
                <p>{t('contact.successP1')}</p>
                <p>{t('contact.successP2')}</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-field">
                    <label>{t('contact.nameLbl')}</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={set('name')}
                      placeholder={t('contact.namePlaceholder')}
                      className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className="form-field">
                    <label>{t('contact.phoneLbl')}</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={set('phone')}
                      placeholder="+972..."
                      className={errors.phone ? 'input-error' : ''}
                    />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-row form-row-stretch">
                  <div className="form-field">
                    <label>{t('contact.emailLbl')}</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="email@example.com"
                      className={`input-stretch${errors.email ? ' input-error' : ''}`}
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                  <div className="form-field">
                    <label>{t('contact.msgLbl')}</label>
                    <textarea
                      rows={2}
                      value={form.msg}
                      onChange={set('msg')}
                      placeholder={t('contact.msgPlaceholder')}
                    />
                  </div>
                </div>

                <button className="form-submit" onClick={submit} disabled={loading}>
                  {loading ? t('contact.loading') : t('contact.submit')}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
