import { useState } from 'react'

const videoItems = [
  {
    name: 'Сергей Воронцов',
    role: 'Основатель студии дизайна',
    poster: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop',
    text: '«За месяц после курса автоматизировал генерацию мудбордов и брифов. Освободил два дня в неделю — занимаюсь стратегией, а не операционкой.»',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    name: 'Марина Зайцева',
    role: 'HR-директор · ИТ-компания',
    poster: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80&auto=format&fit=crop',
    text: '«Подключили Claude к процессу скрининга резюме. Команда HR разгрузилась на 60%, мы успеваем закрывать вдвое больше вакансий.»',
    video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
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
  const [modalVideo, setModalVideo] = useState(null)

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-label">Отзывы</div>
        <div className="section-title">Что говорят ученики</div>
        <div className="section-desc">Видеоотзывы и тексты от выпускников курса</div>
        <div className="testimonials-grid">
          {videoItems.map((v) => (
            <div className="testimonial video-testimonial" key={v.name}>
              <div className="video-thumb" onClick={() => setModalVideo(v.video)}>
                <img src={v.poster} alt={v.name} loading="lazy" />
                <div className="play-overlay"></div>
              </div>
              <div className="video-testimonial-body">
                <div className="testimonial-stars">★★★★★</div>
                <div className="testimonial-text">{v.text}</div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{v.name[0]}</div>
                  <div>
                    <div className="testimonial-name">{v.name}</div>
                    <div className="testimonial-role">{v.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

      {modalVideo && (
        <div className="video-modal" onClick={() => setModalVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setModalVideo(null)} aria-label="Закрыть">×</button>
            <video src={modalVideo} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </section>
  )
}
