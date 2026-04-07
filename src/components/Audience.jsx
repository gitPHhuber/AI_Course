import { Briefcase, PenTool, GraduationCap, Rocket } from 'lucide-react'

const cards = [
  {
    Icon: Briefcase,
    role: 'Предприниматель',
    title: 'Хочу автоматизировать бизнес',
    text: 'Вам нужны не теории про «AGI через 5 лет», а конкретные инструменты: как подключить ИИ к CRM, ботам, аналитике.',
    result: '→ Сэкономите 10–20 часов в неделю',
  },
  {
    Icon: PenTool,
    role: 'Фрилансер / SMM',
    title: 'Хочу зарабатывать больше',
    text: 'ИИ — ваш мультипликатор. Один человек с нейросетями заменяет команду из 3–5 специалистов.',
    result: '→ x3 к выработке, те же часы',
  },
  {
    Icon: GraduationCap,
    role: 'Студент / Новичок',
    title: 'Хочу войти в тему ИИ с нуля',
    text: 'Не программист и не учёный. Просто хотите понять, как использовать ChatGPT и другие сервисы по-умному.',
    result: '→ Уверенное владение ИИ за 2 недели',
  },
  {
    Icon: Rocket,
    role: 'Маркетолог / Продакт',
    title: 'Хочу внедрить ИИ в процессы',
    text: 'Нужно быстро генерировать контент, анализировать данные, автоматизировать воронки и тестировать гипотезы.',
    result: '→ Запуск кампаний за часы, не недели',
  },
]

export default function Audience() {
  return (
    <section className="audience">
      <div className="container">
        <div className="section-label">Для кого курс</div>
        <div className="section-title">Найдите себя</div>
        <div className="audience-grid">
          {cards.map((c) => (
            <div className="avatar-card" key={c.title}>
              <div className="avatar-icon">
                <c.Icon size={28} strokeWidth={1.5} />
              </div>
              <div className="role">{c.role}</div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
              <div className="result">{c.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
