import photo1 from '../assets/photo1.jpeg'

const stats = [
  { num: '15+', label: 'лет опыта'   },
  { num: '100+', label: 'клиентов'    },
  { num: '97%', label: 'рекомендуют' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-inner">
        <div className="about-grid">

          <div className="about-image">
            <img src={photo1} alt="Marina Preshel" className="about-img" />
          </div>

          <div className="about-right">
            <div className="about-text">
              <div className="section-tag">метод «Просто про Деньги»</div>
              <h2 className="section-title">
                Мой метод<br /><em>работы</em>
              </h2>
              <div className="divider" />

              <p>
                Финансовая система должна быть не сложной, а понятной, устойчивой
                и применимой в реальной жизни — без жёстких ограничений, сложных
                терминов и постоянного стресса из-за денег.
              </p>
              <p>
                Мой метод объединяет две составляющие: <strong>твёрдую</strong> —
                финансовую систему и порядок в деньгах, и <strong>мягкую</strong> —
                финансовое поведение, привычки и мышление.
              </p>
              <p>В работе я помогаю шаг за шагом:</p>
              <ul className="about-list">
                <li>навести порядок в личных финансах;</li>
                <li>выстроить систему семейного бюджета;</li>
                <li>создать подушку безопасности;</li>
                <li>начать инвестировать и формировать капитал.</li>
              </ul>
              <p>
                Моя цель — помочь вам выстроить спокойные отношения с деньгами
                и систему, которая будет работать на вас долгие годы.
              </p>
            </div>

            <div className="about-stats">
              {stats.map(({ num, label }) => (
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
