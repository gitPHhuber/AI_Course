import { useState, useRef } from 'react'

const POSTER = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop'
const VIDEO_SRC = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'

export default function FreeLesson() {
  const [playing, setPlaying] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const videoRef = useRef(null)

  const play = () => {
    setPlaying(true)
    setTimeout(() => videoRef.current?.play(), 0)
  }

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="free-lesson" id="free">
      <div className="container">
        <div className="section-label">Бесплатно</div>
        <div className="section-title">Попробуйте перед покупкой</div>
        <div className="section-desc">
          15-минутный пробный урок из модуля «Промпт-инжиниринг». Покажем, как один правильно
          сформулированный запрос экономит часы работы — на конкретном примере.
        </div>

        <div className="free-lesson-grid">
          <div>
            <div className={`video-player${playing ? ' playing' : ''}`}>
              {!playing && (
                <>
                  <div className="poster" style={{ backgroundImage: `url(${POSTER})` }}></div>
                  <button className="play-btn" onClick={play} aria-label="Запустить пробный урок"></button>
                </>
              )}
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                controls={playing}
                preload="none"
                playsInline
              />
            </div>
            <div className="video-meta">
              <span>⏱ 14:32</span>
              <span>🎬 Урок 3 из модуля 03</span>
              <span>👁 Без регистрации</span>
            </div>
          </div>

          <div className="signup-card">
            <h3>Получить доступ ко всем 4 пробным урокам</h3>
            <p className="lead">Первый блок курса — бесплатно. Мы пришлём ссылку на почту в течение минуты.</p>
            <ul>
              <li>4 видеоурока (~50 минут)</li>
              <li>20 готовых промптов в формате PDF</li>
              <li>Чек-лист «как формулировать запросы к ИИ»</li>
              <li>Доступ остаётся навсегда</li>
            </ul>
            {submitted ? (
              <div className="form-status">✓ Отлично! Проверьте почту через минуту.</div>
            ) : (
              <form className="signup-form" onSubmit={submit}>
                <input type="text" placeholder="Как вас зовут" required />
                <input type="email" placeholder="Email для доступа" required />
                <button type="submit">Получить бесплатный доступ →</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
