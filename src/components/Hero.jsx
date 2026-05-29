import photo2 from '../assets/photo2.jpeg'

export default function Hero() {
  return (
    <section className="hero-section" id="about-me">
      <div className="hero">

        <div className="hero-text">
          <div className="hero-eyebrow fade-up d1">Обо мне</div>
          <h1 className="hero-title fade-up d2">
            Марина Прешель
          </h1>
          <p className="hero-subtitle fade-up d3">
            Финансовый консультант для семей и частных клиентов
          </p>
          <div className="hero-creds fade-up d3">
            <p className="hero-cred">Квалифицированный инвестор с высшим финансовым образованием.</p>
            <p className="hero-cred">Опыт 15+ лет в финансах: банки, страхование, трейдинг, финтех и IT.</p>
            <p className="hero-cred">Работа с 2мя финансовыми системами: РФ и Израиля.</p>
            <p className="hero-cred">Практикующий инвестор в недвижимость и фондовый рынок с капиталом более $1 млн.</p>
            <p className="hero-cred">Автор метода «Просто про Деньги».</p>
          </div>

          <p className="hero-desc fade-up d3">
            Создаю понятную систему управления личными финансами: от семейного
            бюджета и снижения финансового стресса до инвестиций и формирования
            пассивного дохода.
          </p>
          <div className="hero-btns fade-up d4">
            <a href="#contact" className="btn-primary">
              Записаться на консультацию
            </a>
            <a href="#services" className="btn-outline">
              Мои услуги
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
