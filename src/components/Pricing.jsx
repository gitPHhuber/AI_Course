export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-label">Тарифы</div>
        <div className="section-title">Выберите свой уровень</div>
        <div className="section-desc">Все тарифы включают пожизненный доступ к материалам и обновлениям курса</div>
        <div className="plans">

          <div className="plan plan-base">
            <div className="plan-name">Тариф</div>
            <div className="plan-title">База</div>
            <div className="plan-price">4 990 ₽ <span>/ единоразово</span></div>
            <div className="plan-old">7 990 ₽</div>
            <ul className="plan-features">
              <li>Модули 1–4: основы ИИ</li>
              <li>Мануалы со скриншотами</li>
              <li>50+ готовых промптов</li>
              <li>Доступ в закрытый чат</li>
              <li>Гайд: оплата зарубежных сервисов из РФ</li>
              <li className="locked">Модули 5–7: монетизация</li>
              <li className="locked">Модули 8–10: автоматизация и продукты</li>
              <li className="locked">Менторская сессия</li>
            </ul>
            <a href="#" className="btn btn-outline">Начать обучение</a>
          </div>

          <div className="plan plan-pro featured">
            <div className="plan-name">Тариф</div>
            <div className="plan-title">Про</div>
            <div className="plan-price">9 990 ₽ <span>/ единоразово</span></div>
            <div className="plan-old">14 990 ₽</div>
            <ul className="plan-features">
              <li>Все модули 1–7</li>
              <li>Мануалы со скриншотами</li>
              <li>50+ готовых промптов</li>
              <li>Доступ в закрытый чат</li>
              <li>Гайд: оплата зарубежных сервисов из РФ</li>
              <li>5 моделей монетизации ИИ</li>
              <li>Шаблоны для фриланса и агентств</li>
              <li className="locked">Модули 8–10: автоматизация и продукты</li>
              <li className="locked">Менторская сессия</li>
            </ul>
            <a href="#" className="btn btn-primary">Выбрать Про</a>
          </div>

          <div className="plan plan-prof">
            <div className="plan-name">Тариф</div>
            <div className="plan-title">Профессионал</div>
            <div className="plan-price">19 990 ₽ <span>/ единоразово</span></div>
            <div className="plan-old">29 990 ₽</div>
            <ul className="plan-features">
              <li>Все 10 модулей</li>
              <li>Мануалы со скриншотами</li>
              <li>100+ готовых промптов</li>
              <li>Доступ в VIP-чат</li>
              <li>Гайд: оплата зарубежных сервисов из РФ</li>
              <li>Готовые шаблоны автоматизаций</li>
              <li>Подключение API: боты, CRM, таблицы</li>
              <li>Запуск ИИ-продукта: пошаговый фреймворк</li>
              <li>Менторская сессия 1-на-1 (60 мин)</li>
            </ul>
            <a
              href="#"
              className="btn btn-primary"
              style={{ background: 'linear-gradient(135deg,var(--gold2),var(--gold))', color: '#000' }}
            >
              Выбрать Профи
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
