const steps = [
  {
    num: '01',
    title: 'Знакомство',
    desc: 'Бесплатный вводный звонок. Знакомимся, обсуждаем вашу ситуацию и цели.',
  },
  {
    num: '02',
    title: 'Финансовый анализ',
    desc: 'Вместе смотрим на доходы, расходы, долги и текущее положение дел.',
  },
  {
    num: '03',
    title: 'Создание системы',
    desc: 'Разрабатываем персональную структуру бюджета под вашу жизнь.',
  },
  {
    num: '04',
    title: 'Поддержка',
    desc: 'Регулярные встречи, вопросы и корректировки на каждом шагу.',
  },
  {
    num: '05',
    title: 'Прогресс и рост',
    desc: 'Отслеживаем результаты. Вы растёте в уверенности и финансовой силе.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="section-inner">
        <div className="how-header">
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            Как я работаю
          </div>
          <h2 className="section-title">
            Простой путь к<br /><em>финансовому порядку</em>
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
