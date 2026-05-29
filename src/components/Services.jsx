const cards = [
  {
    icon: '💎',
    name: 'Личная финансовая консультация',
    desc: 'Разовая консультация: анализ вашей текущей финансовой ситуации, чёткие рекомендации и персональный план действий.',
    ideal: 'Тех, кто хочет понять, с чего начать',
    result: 'Ясность и конкретный план',
  },
  {
    icon: '🏡',
    name: 'Семейный бюджет — сопровождение',
    desc: 'Ежемесячная поддержка: помощь с бюджетом, анализ расходов, отчётность и мотивация на каждом шагу.',
    ideal: 'Семей и пар',
    result: 'Финансовая дисциплина и спокойствие',
  },
  {
    icon: '📊',
    name: 'Составление бюджета с нуля',
    desc: 'Помогаю создать первый структурированный бюджет: категории, система планирования, финансовые привычки.',
    ideal: 'Новичков в финансовом планировании',
    result: 'Работающая система бюджета',
  },
  {
    icon: '🔍',
    name: 'Мини-аудит финансов',
    desc: 'Быстрый обзор подписок, долгов и лишних расходов. Конкретные предложения по оптимизации на первой встрече.',
    ideal: 'Тех, кто чувствует «денег не хватает»',
    result: 'Высвобождение скрытого бюджета',
  },
  {
    icon: '🎯',
    name: 'Сессия финансового планирования',
    desc: 'Цели накоплений, создание подушки безопасности, среднесрочное планирование и финансовый образ жизни.',
    ideal: 'Тех, кто думает о будущем',
    result: 'Чёткая дорожная карта',
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="section-inner">
        <div className="services-intro">
          <div>
            <div className="section-tag">Услуги</div>
            <h2 className="section-title">
              Варианты<br /><em>взаимодействия со мной</em>
            </h2>
          </div>
          <p className="services-desc">
            Каждая услуга разработана с учётом реальных потребностей семей и
            частных клиентов. Выберите формат, который подходит именно вам —
            и начнём вместе.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-header">
              <div className="service-icon">📈</div>
              <div className="service-name">5 шагов к финансовому порядку</div>
            </div>
            <div className="service-badge">мини-практикум</div>
            <div className="service-desc">
              5 видеоуроков + готовые таблицы + домашние задания.
            </div>
            <div className="service-meta">
              <div className="service-label">Идеально для</div>
              <div className="service-value">Тех, кто не понимает, куда уходят деньги</div>
              <div className="service-label">Результат</div>
              <div className="service-value">Найдёте утечки, начнёте откладывать и сделаете первую инвестицию</div>
              <div className="service-price-row">
                <a href="#contact" className="service-cta">Купить →</a>
                <div className="service-price">
                  <span className="service-price-old">1 290 ₽</span>
                  <span className="service-price-new">990 ₽</span>
                </div>
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
                <div className="service-label">Идеально для</div>
                <div className="service-value">{ideal}</div>
                <div className="service-label">Результат</div>
                <div className="service-value">{result}</div>
                <a href="#contact" className="service-cta">Записаться →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
