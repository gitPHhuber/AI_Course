const bonuses = [
  {
    icon: '💳',
    bg: 'rgba(0,206,201,.1)',
    title: 'Гайд: зарубежные карты из РФ',
    text: 'Как выпустить виртуальную Visa/Mastercard за 5 минут и оплачивать любые сервисы: ChatGPT, Claude, Midjourney, App Store, Google Play.',
  },
  {
    icon: '📱',
    bg: 'rgba(108,92,231,.1)',
    title: 'Гайд: иностранные номера и eSIM',
    text: 'Как получить зарубежный номер для регистрации в сервисах. eSIM для путешествий и верификаций — без похода в салон связи.',
  },
  {
    icon: '🔐',
    bg: 'rgba(253,121,168,.1)',
    title: 'Защита данных и стабильный доступ',
    text: 'Настройка безопасного подключения к зарубежным ИИ-платформам. Шифрование трафика, приватность и бесперебойная работа с сервисами.',
  },
  {
    icon: '📋',
    bg: 'rgba(255,215,0,.1)',
    title: 'Библиотека промптов',
    text: 'Постоянно обновляемая база промптов для работы, контента, кода, дизайна, маркетинга и аналитики. Копируй и используй.',
  },
  {
    icon: '🔄',
    bg: 'rgba(0,206,201,.1)',
    title: 'Подписки дешевле через App Store',
    text: 'Как купить ChatGPT Plus, Claude Pro и другие подписки в 2–3 раза дешевле через аккаунты в Аргентине, Нигерии, Турции.',
  },
  {
    icon: '🤖',
    bg: 'rgba(108,92,231,.1)',
    title: 'Telegram-бот помощник',
    text: 'Доступ к нашему боту: покупка виртуальных карт, eSIM и оформление подписок — прямо в Telegram, без мучений.',
  },
]

export default function Bonuses() {
  return (
    <section className="bonuses">
      <div className="container">
        <div className="section-label">Бонусы для всех тарифов</div>
        <div className="section-title">Что вы получите дополнительно</div>
        <div className="bonus-grid">
          {bonuses.map((b) => (
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
  )
}
