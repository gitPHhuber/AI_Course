import { Film, Clock } from 'lucide-react'

const modules = [
  {
    num: '01',
    title: 'Что такое ИИ и зачем он вам',
    text: 'Карта современных ИИ-сервисов: ChatGPT, Claude, Gemini, Midjourney. Какой инструмент для какой задачи и как не переплачивать.',
    lessons: 4,
    hours: '1ч 40м',
    tag: 'База',
    tagClass: 'tag-base',
    outcomes: [
      'Понимаете различия GPT-4, Claude, Gemini',
      'Выбираете подходящий ИИ под задачу',
      'Знаете лимиты бесплатных и платных тарифов',
    ],
  },
  {
    num: '02',
    title: 'Рабочая среда: настройка инструментов',
    text: 'Установка и базовая настройка ChatGPT, Claude, Midjourney. Создание проектов, организация контекста, работа с файлами.',
    lessons: 5,
    hours: '2ч 10м',
    tag: 'База',
    tagClass: 'tag-base',
    outcomes: [
      'Настроенный кабинет в Claude и ChatGPT',
      'Свой первый проект с базой знаний',
      'Понимание контекстного окна',
    ],
  },
  {
    num: '03',
    title: 'Промпт-инжиниринг: основы',
    text: 'Структура эффективных промптов. Шаблоны для текста, кода, изображений. Принципы roles, context, examples, constraints.',
    lessons: 6,
    hours: '2ч 50м',
    tag: 'База',
    tagClass: 'tag-base',
    outcomes: [
      'Пишете промпты, которые работают с первого раза',
      '50+ готовых шаблонов в библиотеке',
      'Понимаете разницу zero-shot / few-shot',
    ],
  },
  {
    num: '04',
    title: 'ИИ для контента и соцсетей',
    text: 'Генерация постов, рилсов, статей. Автоматизация SMM. Нейросети для дизайна: Canva AI, Midjourney, DALL-E. Голосовые ИИ для озвучки.',
    lessons: 7,
    hours: '3ч 20м',
    tag: 'База',
    tagClass: 'tag-base',
    outcomes: [
      'Контент-план на месяц за 1 час',
      'Визуалы для постов в едином стиле',
      'Свой пайплайн для рилсов и сторис',
    ],
  },
  {
    num: '05',
    title: 'ИИ в работе и бизнесе',
    text: 'Автоматизация рутины: письма, таблицы, отчёты, презентации. Claude для аналитики документов. ChatGPT для переговоров и питчей.',
    lessons: 6,
    hours: '3ч',
    tag: 'Про',
    tagClass: 'tag-pro',
    outcomes: [
      'ИИ-ассистент для ежедневной почты',
      'Анализ отчётов и контрактов за минуты',
      'Готовые презентации из тезисов',
    ],
  },
  {
    num: '06',
    title: 'Нейросети для заработка',
    text: '5 моделей монетизации ИИ: фриланс, контент-агентство, консалтинг, генерация лидов, автоматизация под ключ. Реальные ставки и кейсы.',
    lessons: 5,
    hours: '2ч 40м',
    tag: 'Про',
    tagClass: 'tag-pro',
    outcomes: [
      'Выбранная под вас модель заработка',
      'Прайс-лист и шаблоны коммерческих',
      'Первый клиент за 2 недели',
    ],
  },
  {
    num: '07',
    title: 'Продвинутый промптинг и агенты',
    text: 'Цепочки промптов, мульти-агентные системы, Claude Projects, Custom GPTs. RAG-подход. Автоматизация сложных задач без кода.',
    lessons: 7,
    hours: '3ч 50м',
    tag: 'Про',
    tagClass: 'tag-pro',
    outcomes: [
      'Свой Custom GPT под рабочую задачу',
      'Цепочка промптов из 5+ шагов',
      'Понимание RAG и работы с базой знаний',
    ],
  },
  {
    num: '08',
    title: 'API и интеграции',
    text: 'Подключаем ИИ к Telegram-ботам, CRM, Google Sheets. No-code: Make, Zapier, n8n. Автоматизация процессов без программирования.',
    lessons: 8,
    hours: '4ч 30м',
    tag: 'Профи',
    tagClass: 'tag-prof',
    outcomes: [
      'Работающий Telegram-бот с GPT/Claude',
      'Связка ИИ ↔ Google Sheets через Make',
      'Автоматизированный CRM-сценарий',
    ],
  },
  {
    num: '09',
    title: 'ИИ-продукты: от идеи до запуска',
    text: 'Создаём SaaS на базе ИИ. MVP за выходные. Валидация, монетизация, маркетинг. Реальные кейсы запусков.',
    lessons: 6,
    hours: '3ч 30м',
    tag: 'Профи',
    tagClass: 'tag-prof',
    outcomes: [
      'Готовый MVP ИИ-продукта',
      'Стратегия валидации и first sales',
      'Базовый план продвижения',
    ],
  },
  {
    num: '10',
    title: 'Персональная стратегия',
    text: 'Индивидуальный разбор вашего бизнеса/проекта. Дорожная карта внедрения ИИ. Менторская сессия 1-на-1 с автором курса.',
    lessons: 2,
    hours: '1ч 30м + сессия 60м',
    tag: 'Профи',
    tagClass: 'tag-prof',
    outcomes: [
      'Личная дорожная карта внедрения',
      'Список приоритетных задач для ИИ',
      'Прямая обратная связь от автора',
    ],
  },
]

export default function Program() {
  return (
    <section id="program">
      <div className="container">
        <div className="section-label">Программа</div>
        <div className="section-title">10 модулей — от нуля до автоматизации</div>
        <div className="section-desc">
          56 видеоуроков · 29+ часов контента · домашние задания после каждого модуля.
          Каждый модуль: видео + пошаговый мануал со скриншотами + практическое задание.
        </div>
        <div className="modules">
          {modules.map((m) => (
            <div className="module" key={m.num}>
              <div className="module-num">{m.num}</div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
              <ul className="module-outcomes">
                {m.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <div className="module-stats">
                <span><Film size={14} strokeWidth={1.6} /> {m.lessons} уроков</span>
                <span><Clock size={14} strokeWidth={1.6} /> {m.hours}</span>
              </div>
              <span className={`tag ${m.tagClass}`} style={{ marginTop: '.85rem' }}>{m.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
