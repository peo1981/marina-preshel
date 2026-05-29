import harryBot from '../assets/harry-bot.png'

const features = [
  {
    icon: '🤖',
    title: 'AI-категоризация',
    desc: 'Просто напишите «Кофе 120» — Гарри сам определит категорию, запишет и добавит в статистику.',
  },
  {
    icon: '📊',
    title: 'Умные отчёты',
    desc: 'Ежемесячные сводки с анализом привычек, трендов и мягкими рекомендациями без осуждения.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Семейный бюджет',
    desc: 'Один бот для всей семьи — каждый вносит свои траты, общая картина всегда перед глазами.',
  },
  {
    icon: '🌍',
    title: 'Мультивалютность',
    desc: 'Шекели, рубли, евро, доллары — Гарри понимает любую валюту и ведёт учёт без конвертации.',
  },
]

const chat = [
  { from: 'user', text: 'Продукты 340' },
  { from: 'bot',  text: 'Записано в Продукты 🛒\nЗа месяц уже 2 840 ₽' },
  { from: 'user', text: 'Кофе 120' },
  { from: 'bot',  text: 'Добавлено в Кафе ☕\nЗабавно: кафе стоят как 3 домашних ужина 🙂' },
  { from: 'user', text: 'Зарплата 80000' },
  { from: 'bot',  text: 'Отлично! 💰 По методу 20% советую отложить 16 000 ₽ в накопления' },
]

export default function FinBot() {
  return (
    <section id="finbot" className="finbot">
      <div className="section-inner">

        {/* Шапка */}
        <div className="finbot-header">
          <div className="finbot-header-left">
            <div className="section-tag finbot-tag">AI Фин-бот</div>
            <div className="finbot-title-row">
              <div className="finbot-logo-wrap">
                <img src={harryBot} alt="Гарри — финансовый AI-бот" className="finbot-logo" />
                <div className="finbot-logo-glow" />
              </div>
              <h2 className="section-title finbot-title">
                Познакомьтесь<br />
                <em>с Гарри</em>
              </h2>
            </div>
            <p className="finbot-intro">
              Гарри — это ваш AI-Финансовый помощник в Telegram, который помогает вести бюджет
              без таблиц и стресса. Просто пишите расходы в чат — он сделает
              всё остальное сам.
            </p>
            <a
              href="https://t.me/Harry_AI_fin_bot"
              className="finbot-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть в Telegram →
            </a>
          </div>

          <div className="finbot-header-right">
            <div className="finbot-chat">
              <div className="finbot-chat-bar">
                <img src={harryBot} alt="Гарри" className="finbot-chat-avatar" />
                <div className="finbot-chat-info">
                  <span className="finbot-chat-name">Гарри | AI-Финансовый помощник</span>
                  <span className="finbot-chat-sub">бот</span>
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
          <div className="finbot-how-label">Как начать за 1 минуту</div>
          <div className="finbot-steps">
            {[
              'Найдите @Harry_AI_fin_bot в Telegram',
              'Напишите любую трату: «Такси 58»',
              'Гарри запишет, категоризирует и накопит статистику',
              'В конце месяца — отчёт и персональные рекомендации',
            ].map((text, i) => (
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
            Гарри — часть моей системы работы с клиентами.<br />
            <span>Используйте бот самостоятельно или вместе с персональным сопровождением.</span>
          </p>
          <div className="finbot-bottom-btns">
            <a
              href="https://t.me/Harry_AI_fin_bot"
              className="btn-primary finbot-btn-tg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Попробовать бесплатно
            </a>
            <a href="#contact" className="btn-outline finbot-btn-consult">
              Записаться к Марине
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
