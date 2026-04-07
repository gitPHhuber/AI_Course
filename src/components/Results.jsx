const results = [
  {
    num: '10–20ч',
    title: 'Экономия в неделю',
    text: 'Автоматизация рутинных задач, которые раньше делали вручную',
  },
  {
    num: 'x3',
    title: 'Рост продуктивности',
    text: 'Тексты, дизайн, аналитика, код — быстрее в 3 раза',
  },
  {
    num: '5+',
    title: 'Моделей заработка',
    text: 'Фриланс, агентство, SaaS, консалтинг, лидогенерация',
  },
  {
    num: '100%',
    title: 'Доступ к сервисам',
    text: 'ChatGPT, Claude, Midjourney — оплата и работа без ограничений',
  },
]

export default function Results() {
  return (
    <section className="results">
      <div className="container">
        <div className="section-label" style={{ textAlign: 'center' }}>Результаты</div>
        <div className="section-title" style={{ textAlign: 'center' }}>Что вы получите после курса</div>
        <div className="results-grid">
          {results.map((r) => (
            <div className="result-card" key={r.title}>
              <div className="result-num">{r.num}</div>
              <h4>{r.title}</h4>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
