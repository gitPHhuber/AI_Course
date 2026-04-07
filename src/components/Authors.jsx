const authors = [
  {
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'Илья Костюков',
    role: 'CEO AI Мастер · Full-stack разработчик · ИИ-архитектор',
    bio: [
      'Разработчик с 7-летним опытом в Python, React, Telegram-ботах и ИИ-интеграциях. Строит продукты на базе GPT и Claude — от автоматизированных ассистентов до SaaS-платформ. Живёт внутри нейросетей 24/7 и знает их возможности до байта.',
      'Создаёт системы, которые экономят компаниям сотни часов в месяц. Спикер на конференциях по AI-инжинирингу.',
    ],
    stats: [
      { value: '50+', label: 'проектов на ИИ' },
      { value: '7 лет', label: 'в разработке' },
      { value: '3 000+', label: 'часов с ИИ' },
    ],
    socials: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'Telegram', href: 'https://t.me/' },
      { label: 'LinkedIn', href: 'https://linkedin.com/' },
    ],
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/52.jpg',
    name: 'Евгений Яровой',
    role: 'Предприниматель · Коммерческий директор',
    bio: [
      'Строит бизнесы и управляет продажами уже 10+ лет. Активно внедряет ИИ в коммерческие процессы: от генерации лидов и автоматизации переписок до аналитики клиентской базы. Превращает нейросети в деньги — не в теории, а на практике.',
      'Знает, как продать, упаковать и масштабировать любой цифровой продукт. Отвечает за бизнес-модули курса и стратегии монетизации.',
    ],
    stats: [
      { value: '10+ лет', label: 'в продажах' },
      { value: '30+', label: 'запущенных продуктов' },
      { value: 'x5', label: 'рост выручки с ИИ' },
    ],
    socials: [
      { label: 'Telegram', href: 'https://t.me/' },
      { label: 'LinkedIn', href: 'https://linkedin.com/' },
      { label: 'VK', href: 'https://vk.com/' },
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
            <div className="author-photo">
              <img src={a.photo} alt={a.name} loading="lazy" />
            </div>
            <div className="author-info">
              <h3>{a.name}</h3>
              <div className="author-role">{a.role}</div>
              {a.bio.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
              <div className="author-socials">
                {a.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label} ↗
                  </a>
                ))}
              </div>
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
