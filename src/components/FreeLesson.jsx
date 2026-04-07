import { useState } from 'react'
import { Clock, Film, Eye } from 'lucide-react'

export default function FreeLesson() {
  const [submitted, setSubmitted] = useState(false)

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
          Первый блок курса — бесплатно. 4 урока из модуля «Промпт-инжиниринг», 50+ готовых
          промптов и чек-лист по формулировке запросов. Доступ остаётся навсегда.
        </div>

        <div className="free-lesson-grid">
          <div>
            <div className="preview-image">
              <img src="/images/free-lesson-preview.jpg" alt="Превью бесплатного блока курса" loading="lazy" />
            </div>
            <div className="video-meta">
              <span><Film size={14} strokeWidth={1.6} /> 4 урока</span>
              <span><Clock size={14} strokeWidth={1.6} /> ~50 минут</span>
              <span><Eye size={14} strokeWidth={1.6} /> Без оплаты</span>
            </div>
          </div>

          <div className="signup-card">
            <h3>Получить бесплатный блок</h3>
            <p className="lead">Введите имя и email — пришлём ссылку на доступ в течение минуты.</p>
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
