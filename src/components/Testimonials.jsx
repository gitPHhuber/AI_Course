const featured = [
  {
    photo: '/images/testimonial-sergey.jpg',
    name: 'Сергей Воронцов',
    role: 'Основатель студии дизайна',
    text: 'За месяц после курса автоматизировал генерацию мудбордов и брифов для клиентов. Освободил два дня в неделю — занимаюсь стратегией, а не операционкой. Команда сначала боялась ИИ, теперь без него не работают.',
  },
  {
    photo: '/images/testimonial-marina.jpg',
    name: 'Марина Зайцева',
    role: 'HR-директор · ИТ-компания',
    text: 'Подключили Claude к процессу скрининга резюме. Команда HR разгрузилась на 60%, мы успеваем закрывать вдвое больше вакансий без расширения штата. Авторы курса лично помогли довести интеграцию до прода.',
  },
]

const textItems = [
  {
    initial: 'А',
    name: 'Алексей М.',
    role: 'Копирайтер, Москва',
    text: 'За первый месяц на курсе освоил промпт-цепочки и шаблоны. Промпты из библиотеки использую каждый день для клиентских текстов — экономлю минимум 3 часа в день.',
  },
  {
    initial: 'Д',
    name: 'Дмитрий К.',
    role: 'Владелец кофейни, Казань',
    text: 'Я далёк от технологий, но после первых 4 модулей делаю визуал через Midjourney и тексты через Claude. Клиенты уверены, что я нанял дизайнера и SMM-щика. Курс окупился за первую неделю.',
  },
  {
    initial: 'Е',
    name: 'Екатерина В.',
    role: 'Product Manager, СПб',
    text: 'Модуль по API — именно то, что искала. Подключила Claude к Google Sheets для аналитики отдела. Команда экономит 15 часов в неделю. На менторской сессии разобрали архитектуру — всё заработало с первого раза.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-label">Отзывы</div>
        <div className="section-title">Что говорят ученики</div>
        <div className="section-desc">Реальные истории выпускников курса</div>

        <div className="featured-testimonials">
          {featured.map((f) => (
            <div className="featured-testimonial" key={f.name}>
              <div className="featured-photo">
                <img src={f.photo} alt={f.name} loading="lazy" />
              </div>
              <div className="featured-body">
                <div className="testimonial-stars">★★★★★</div>
                <p className="featured-text">{f.text}</p>
                <div className="featured-author">
                  <div className="testimonial-name">{f.name}</div>
                  <div className="testimonial-role">{f.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-grid">
          {textItems.map((t) => (
            <div className="testimonial" key={t.name}>
              <div className="testimonial-stars">★★★★★</div>
              <div className="testimonial-text">{t.text}</div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initial}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
