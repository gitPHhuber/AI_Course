const authors = [
  {
    photo: '🧠',
    name: 'Илья Костюков',
    role: 'CEO AI Мастер / Full-stack разработчик / ИИ-архитектор',
    bio: [
      'Разработчик с опытом в Python, React, Telegram-ботах и ИИ-интеграциях. Строит продукты на базе GPT и Claude — от автоматизированных ассистентов до SaaS-платформ. Живёт внутри нейросетей 24/7 и знает их возможности до байта.',
      'Создаёт системы, которые экономят компаниям сотни часов в месяц. Автор инструментов для оплаты зарубежных сервисов из России.',
    ],
    stats: [
      { value: '50+', label: 'проектов на ИИ' },
      { value: '7 лет', label: 'в разработке' },
      { value: '3 000+', label: 'часов с ИИ' },
    ],
  },
  {
    photo: '🚀',
    name: 'Евгений Яровой',
    role: 'Предприниматель / Коммерческий директор',
    bio: [
      'Строит бизнесы и управляет продажами. Активно внедряет ИИ в коммерческие процессы: от генерации лидов и автоматизации переписок до аналитики клиентской базы. Превращает нейросети в деньги — не в теории, а на практике.',
      'Знает, как продать, упаковать и масштабировать любой цифровой продукт. Отвечает за бизнес-модули курса и стратегии монетизации.',
    ],
    stats: [
      { value: '10+ лет', label: 'в продажах' },
      { value: '30+', label: 'запущенных продуктов' },
      { value: 'x5', label: 'рост выручки с ИИ' },
    ],
  },
]

export default function Authors() {
  return (
    <section className="author-section">
      <div className="container">
        <div className="section-label" style={{ textAlign: 'center' }}>Авторы курса</div>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Кто вас будет учить</div>
        {authors.map((a, i) => (
          <div className="author-box" key={a.name} style={i > 0 ? { marginTop: '1.5rem' } : undefined}>
            <div className="author-photo">{a.photo}</div>
            <div className="author-info">
              <h3>{a.name}</h3>
              <div className="author-role">{a.role}</div>
              {a.bio.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
              <div className="author-stats">
                {a.stats.map((s) => (
                  <div className="author-stat" key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
