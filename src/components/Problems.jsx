const problems = [
  {
    icon: '⏰',
    title: 'Рутина съедает весь день',
    text: 'Письма, отчёты, посты, презентации — вы делаете руками то, что ИИ делает за минуты.',
  },
  {
    icon: '🚫',
    title: 'Не знаете, как оплатить сервисы',
    text: 'ChatGPT, Claude, Midjourney не принимают российские карты. Без инструкции — часы впустую на форумах.',
  },
  {
    icon: '😵',
    title: 'Промпты не работают',
    text: 'Пишете запросы — получаете мусор. Нет понимания, как формулировать, чтобы ИИ давал результат.',
  },
  {
    icon: '💸',
    title: 'Конкуренты уже используют ИИ',
    text: 'Пока вы разбираетесь — другие автоматизируют продажи, контент, аналитику и обгоняют вас.',
  },
]

export default function Problems() {
  return (
    <section className="problems">
      <div className="container">
        <div className="section-label">Знакомо?</div>
        <div className="section-title">Без ИИ вы теряете деньги и время</div>
        <div className="problems-grid">
          {problems.map((p) => (
            <div className="problem" key={p.title}>
              <div className="problem-icon">{p.icon}</div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
