import { useState } from 'react'

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
  // Только латиница, цифры и email-символы — кириллица и другие алфавиты не пройдут
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(t)
}

const validatePhone = (v) => {
  if (!v.trim()) return true // необязательное поле
  const digits = v.replace(/\D/g, '')
  return /^\+?[\d\s\-().]{7,20}$/.test(v.trim()) && digits.length >= 7 && digits.length <= 15
}

export default function Contact() {
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
    if (!form.name.trim()) newErrors.name = 'Введите ваше имя'
    if (!form.email.trim()) {
      newErrors.email = 'Введите email'
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Некорректный email — только латинские буквы, формат: name@domain.com'
    }
    if (!validatePhone(form.phone)) {
      newErrors.phone = 'Некорректный номер (например: +7 999 123-45-67)'
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
        alert('Ошибка отправки. Попробуйте ещё раз.')
      }
    } catch {
      alert('Нет соединения. Проверьте интернет и попробуйте снова.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="section-inner">
        <div className="section-tag">Контакты</div>
        <h2 className="section-title contact-title">
          Начнём<br /><em>вместе</em>
        </h2>

        <div className="contact-grid">
          <div>
            <p className="contact-intro">
              Готовы сделать первый шаг к финансовому порядку? Напишите мне —
              первый звонок бесплатный. Мы с вами пообщаемся и определим
              стратегию лично для вас.
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
                <p>Спасибо! Ваша заявка получена.</p>
                <p>Скоро свяжусь с вами, и вместе начнём наводить порядок в финансах 🤎</p>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-field">
                    <label>Имя</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Ваше имя"
                      className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className="form-field">
                    <label>Телефон</label>
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
                    <label>Email</label>
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
                    <label>Сообщение (необязательно)</label>
                    <textarea
                      rows={2}
                      value={form.msg}
                      onChange={set('msg')}
                      placeholder="Расскажите о своей ситуации..."
                    />
                  </div>
                </div>

                <button className="form-submit" onClick={submit} disabled={loading}>
                  {loading ? 'Отправляем...' : 'Отправить запрос'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
