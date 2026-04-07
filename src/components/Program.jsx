const modules = [
  {
    num: '01',
    title: 'Что такое ИИ и зачем он вам',
    text: 'Разбираемся в ChatGPT, Claude, Gemini, Midjourney. Какой ИИ для чего подходит и как не переплачивать.',
    tag: 'База',
    tagClass: 'tag-base',
  },
  {
    num: '02',
    title: 'Регистрация и оплата сервисов',
    text: 'Пошаговые мануалы: как оплатить ChatGPT, Claude, Midjourney из России. Виртуальные карты, eSIM, безопасное подключение.',
    tag: 'База',
    tagClass: 'tag-base',
  },
  {
    num: '03',
    title: 'Промпт-инжиниринг: основы',
    text: 'Как правильно формулировать запросы. Шаблоны промптов для текста, кода, изображений. 50+ готовых промптов.',
    tag: 'База',
    tagClass: 'tag-base',
  },
  {
    num: '04',
    title: 'ИИ для контента и соцсетей',
    text: 'Генерация постов, рилсов, статей. Автоматизация SMM. Нейросети для дизайна: Canva AI, Midjourney, DALL-E.',
    tag: 'База',
    tagClass: 'tag-base',
  },
  {
    num: '05',
    title: 'ИИ в работе и бизнесе',
    text: 'Автоматизация рутины: письма, таблицы, отчёты, презентации. Claude для аналитики. ChatGPT для переговоров.',
    tag: 'Про',
    tagClass: 'tag-pro',
  },
  {
    num: '06',
    title: 'Нейросети для заработка',
    text: '5 моделей монетизации ИИ: фриланс, контент-агентство, консалтинг, генерация лидов, автоматизация под ключ.',
    tag: 'Про',
    tagClass: 'tag-pro',
  },
  {
    num: '07',
    title: 'Продвинутый промптинг и агенты',
    text: 'Цепочки промптов, мульти-агентные системы, Claude Projects, Custom GPTs. Автоматизация сложных задач.',
    tag: 'Про',
    tagClass: 'tag-pro',
  },
  {
    num: '08',
    title: 'API и интеграции',
    text: 'Подключаем ИИ к Telegram-ботам, CRM, Google Sheets. No-code: Make, Zapier, n8n. Автоматизация без программирования.',
    tag: 'Профи',
    tagClass: 'tag-prof',
  },
  {
    num: '09',
    title: 'ИИ-продукты: от идеи до запуска',
    text: 'Создаём SaaS на базе ИИ. MVP за выходные. Валидация, монетизация, маркетинг. Реальные кейсы.',
    tag: 'Профи',
    tagClass: 'tag-prof',
  },
  {
    num: '10',
    title: 'Персональная стратегия',
    text: 'Индивидуальный разбор вашего бизнеса/проекта. Дорожная карта внедрения ИИ. Менторская сессия 1-на-1.',
    tag: 'Профи',
    tagClass: 'tag-prof',
  },
]

export default function Program() {
  return (
    <section id="program">
      <div className="container">
        <div className="section-label">Программа</div>
        <div className="section-title">10 модулей — от нуля до автоматизации</div>
        <div className="section-desc">Каждый модуль: видеоурок + пошаговый мануал со скриншотами + домашнее задание</div>
        <div className="modules">
          {modules.map((m) => (
            <div className="module" key={m.num}>
              <div className="module-num">{m.num}</div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
              <span className={`tag ${m.tagClass}`}>{m.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
