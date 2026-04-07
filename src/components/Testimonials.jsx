const items = [
  {
    initial: 'А',
    name: 'Алексей М.',
    role: 'Копирайтер, Москва',
    text: 'За 10 минут по гайду оформил карту и оплатил ChatGPT Plus. До этого два вечера гуглил и ничего не работало. А промпты из библиотеки теперь использую каждый день для клиентских текстов — экономлю часа 3 минимум.',
  },
  {
    initial: 'Д',
    name: 'Дмитрий К.',
    role: 'Владелец кофейни, Казань',
    text: 'Я далёк от технологий, но после первых 4 модулей делаю визуал через Midjourney и тексты через Claude. Клиенты уверены, что я нанял дизайнера и SMM-щика. Курс окупился за первую неделю — без шуток.',
  },
  {
    initial: 'Е',
    name: 'Екатерина В.',
    role: 'Product Manager, Санкт-Петербург',
    text: 'Модуль по API — именно то, что искала. Подключила Claude к Google Sheets для еженедельной аналитики отдела. Команда экономит 15 часов в неделю. На менторской сессии с Ильёй разобрали архитектуру — всё заработало с первого раза.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-label">Отзывы</div>
        <div className="section-title">Что говорят ученики</div>
        <div className="section-desc">Бета-тестеры курса уже применяют знания на практике</div>
        <div className="testimonials-grid">
          {items.map((t) => (
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
