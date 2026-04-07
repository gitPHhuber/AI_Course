const cases = [
  {
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Анна Лебедева',
    role: 'Копирайтер · Москва',
    before: 'Делала 12–15 текстов в неделю вручную, выгорала к четвергу. Доход уперся в 80 000 ₽.',
    action: 'На курсе настроила связку Claude + база своих шаблонов, автоматизировала ресерч и редактуру через цепочки промптов.',
    result: 'Выпускает 30+ текстов в неделю. За 2 месяца после курса дошла до 180 000 ₽ с теми же часами работы.',
    metrics: [
      { num: 'x2.4', label: 'к доходу' },
      { num: '–8ч', label: 'в неделю' },
    ],
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Михаил Соколов',
    role: 'Маркетинговое агентство · Екатеринбург',
    before: 'Команда 6 человек, маржа 20%, постоянные дедлайны. Контент-команда не справлялась с потоком клиентов.',
    action: 'Внедрил ИИ-пайплайн для генерации идей, текстов, креативов и ежедневной аналитики РК. Прошёл модули по API и интеграциям.',
    result: 'Команда выросла до 12 человек, маржа поднялась до 38%, агентство ведёт в 2 раза больше проектов без перегруза.',
    metrics: [
      { num: '+18%', label: 'маржа' },
      { num: 'x2', label: 'проектов' },
    ],
  },
  {
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Ольга Никитина',
    role: 'Product Manager · SaaS, СПб',
    before: 'Тратила 20 часов в неделю на сбор обратной связи, ресерч конкурентов и отчёты для стейкхолдеров.',
    action: 'Подключила Claude к Notion и Google Sheets через Make. Настроила еженедельный авто-дайджест из support-тикетов.',
    result: 'Освободила 15 часов в неделю. Roadmap-решения принимаются в 3 раза быстрее, команда видит данные сразу.',
    metrics: [
      { num: '–15ч', label: 'в неделю' },
      { num: 'x3', label: 'скорость' },
    ],
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/85.jpg',
    name: 'Дмитрий Орлов',
    role: 'Интернет-магазин · Новосибирск',
    before: '4 000 товарных карточек без описаний, обновление вручную растянулось бы на 3 месяца. SEO просело.',
    action: 'Написал ИИ-пайплайн для генерации описаний и SEO-метатегов на базе исходных характеристик. Загрузил всё пачкой.',
    result: 'Обновил весь каталог за 12 дней. Через месяц органический трафик вырос на 47%, средний чек — на 12%.',
    metrics: [
      { num: '+47%', label: 'трафик' },
      { num: '12 дней', label: 'на каталог' },
    ],
  },
]

export default function Cases() {
  return (
    <section className="cases">
      <div className="container">
        <div className="section-label">Кейсы выпускников</div>
        <div className="section-title">Что сделали реальные ученики</div>
        <div className="section-desc">
          Не «маркетинговые обещания», а конкретные истории: что было до, что человек сделал на курсе и какой получил результат.
        </div>
        <div className="cases-grid">
          {cases.map((c) => (
            <div className="case-card" key={c.name}>
              <div className="case-photo">
                <img src={c.photo} alt={c.name} loading="lazy" />
              </div>
              <div className="case-body">
                <h4>{c.name}</h4>
                <div className="case-role">{c.role}</div>
                <div className="case-row">
                  <div className="case-step before">
                    <strong>Было</strong>
                    <p>{c.before}</p>
                  </div>
                  <div className="case-step action">
                    <strong>Что сделал</strong>
                    <p>{c.action}</p>
                  </div>
                  <div className="case-step result">
                    <strong>Результат</strong>
                    <p>{c.result}</p>
                  </div>
                </div>
              </div>
              <div className="case-metrics">
                {c.metrics.map((m) => (
                  <div className="metric" key={m.label}>
                    <span className="metric-num">{m.num}</span>
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
