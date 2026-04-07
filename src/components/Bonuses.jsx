const mainBonuses = [
  {
    icon: '📋',
    bg: 'rgba(255,215,0,.1)',
    title: 'Библиотека из 100+ промптов',
    text: 'Постоянно обновляемая база промптов для работы, контента, кода, дизайна, маркетинга и аналитики. Скопировал — использовал.',
  },
  {
    icon: '🤖',
    bg: 'rgba(108,92,231,.1)',
    title: 'Telegram-бот «AI Помощник»',
    text: 'Доступ к нашему боту с готовыми сценариями: ресерч, генерация креативов, анализ документов — всё прямо в Telegram.',
  },
  {
    icon: '📚',
    bg: 'rgba(0,206,201,.1)',
    title: 'База знаний по обновлениям',
    text: 'Регулярные апдейты курса при выходе новых моделей и фич. GPT-5, Claude 4, новые возможности — разбираем сразу.',
  },
  {
    icon: '💬',
    bg: 'rgba(253,121,168,.1)',
    title: 'Закрытое коммьюнити',
    text: 'Чат выпускников: помощь с задачами, обмен находками, нетворкинг, совместные проекты. Активная поддержка авторов.',
  },
]

const helperPack = [
  {
    icon: '💳',
    title: 'Зарубежные карты из РФ',
    text: 'Как выпустить виртуальную Visa/Mastercard и оплачивать ChatGPT, Claude, Midjourney без хлопот.',
  },
  {
    icon: '📱',
    title: 'Иностранные номера и eSIM',
    text: 'Подбор зарубежного номера для регистрации в сервисах. eSIM-варианты для путешественников.',
  },
  {
    icon: '🔐',
    title: 'Стабильный доступ к сервисам',
    text: 'Настройка надёжного подключения к зарубежным ИИ-платформам. Шифрование и приватность.',
  },
]

export default function Bonuses() {
  return (
    <>
      <section className="bonuses">
        <div className="container">
          <div className="section-label">Что входит дополнительно</div>
          <div className="section-title">Бонусы для всех тарифов</div>
          <div className="bonus-grid">
            {mainBonuses.map((b) => (
              <div className="bonus" key={b.title}>
                <div className="bonus-icon" style={{ background: b.bg }}>{b.icon}</div>
                <div>
                  <h4>{b.title}</h4>
                  <p>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="helper-pack">
        <div className="container">
          <div className="section-label">Технический пак</div>
          <div className="section-title" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)' }}>
            Вспомогательные гайды
          </div>
          <p className="helper-disclaimer">
            Это не основная ценность курса — основная ценность это навыки работы с ИИ.
            Но мы понимаем, что без доступа к сервисам обучение не начнётся, поэтому
            прикладываем актуальные технические инструкции отдельным паком.
          </p>
          <div className="helper-grid">
            {helperPack.map((h) => (
              <div className="helper-card" key={h.title}>
                <div className="helper-icon">{h.icon}</div>
                <div>
                  <h5>{h.title}</h5>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
