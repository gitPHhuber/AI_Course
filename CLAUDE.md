# AI Мастер — лендинг курса

Одностраничный лендинг курса по ИИ. Изначально был статический файл
`ai-course-landing-v2.html` — смигрирован на Vite + React по секциям.
Исходный HTML удалён, дальше живём только в React.

## Стек

- **Vite 5** + **React 18** (без TypeScript — проект небольшой)
- **lucide-react** — все иконки в проекте
- Никакого роутера, store, CSS-фреймворков, UI-китов
- Один файл `src/styles.css` — премиум dark-тема на CSS-переменных

## Структура

```
src/
  App.jsx              ← порядок секций (read this first)
  main.jsx             ← точка входа + import './styles.css'
  styles.css           ← ВЕСЬ CSS проекта (не модули, не Tailwind)
  components/
    Hero, StatsBar, Problems, Audience, FreeLesson,
    Program, Results, Cases, Pricing, Compare, Bonuses,
    Testimonials, Authors, Timer, Guarantee, FAQ,
    FinalCTA, Footer                ← по одному файлу на секцию
public/
  images/              ← все портреты и preview-картинки (отобранные Unsplash)
netlify.toml           ← деплой
```

Каждая секция — отдельный самодостаточный компонент. Контент захардкожен
внутри файлов как `const items = [...]` сверху. Не вытаскивается в общие
data-файлы намеренно — нет переиспользования и так удобнее редактировать.

## Палитра и стиль (важно)

CSS-переменные в `:root` — `src/styles.css:3`:
- `--accent: #6c5ce7` — основной пурпур
- `--accent2: #a29bfe` — лавандовый акцент
- `--green: #00cec9` — success / teal
- `--gold/--gold2` — премиум-тариф (Профи)
- `--pink` — используется только в декоративных градиентах
- `--red` — **определена, но НЕ используется**. Возвращать запрещено
  (см. ниже).

Шрифты: Playfair Display (заголовки) + DM Sans (body). Подключены через
`@import url(...)` в первой строке `styles.css`.

## Хуки в компонентах

- `Timer.jsx` — `useState` + `useEffect` с `setInterval(1000)`. Цель —
  `2026-06-15T10:00:00`. Cleanup `clearInterval` обязателен.
- `FAQ.jsx` — `useState` с индексом одного открытого item. Клик по
  открытому закрывает.
- `FreeLesson.jsx` — `useState` для `submitted`-флага формы.

## CTA-флоу

Бэкенда нет. Все кнопки тарифов и Hero "Бесплатный урок" ведут к одной
форме — `#free` (секция FreeLesson). Форма локальная, на submit просто
меняет state и показывает "✓ Проверьте почту". Когда появится реальный
чекаут — менять обработчик `submit` в `FreeLesson.jsx`.

## Что НЕ делать (исторические грабли)

- **Не вставлять эмодзи как иконки.** Все иконки — через `lucide-react`
  (`Briefcase`, `ShieldCheck`, `Clock` и т.д.). Эмодзи в контенте
  выглядят непремиум, было поправлено отдельным проходом.
- **Не использовать `--red`** в Problems/Cases. Если нужен alert-цвет —
  бери `rgba(162,155,254,.35)` (muted lavender). Красный ломает премиум-
  тон, было поправлено.
- **Не добавлять видео без реальных файлов.** Сэмплы Google CDN
  (`commondatastorage.googleapis.com`) блокируются из РФ и дают
  MIME-ошибки в браузере. Видео были удалены, заменены статичными
  preview-картинками.
- **Не добавлять фейковые ИП/ИНН/ОГРНИП/юр.адрес в футер.** Раньше там
  стояли placeholder-значения, владелец попросил убрать. Если потребуются
  реальные реквизиты — подставлять только настоящие.
- **Не использовать `randomuser.me`** или другие случайные генераторы
  портретов. Все портреты — отобранные вручную Unsplash, лежат в
  `public/images/` (см. `case-*.jpg`, `testimonial-*.jpg`, `author-*.jpg`).
- **Не делать кнопки `href="#"`.** Это пустая ссылка, скроллит вверх и
  ломает UX. Все CTA должны вести на `#pricing`, `#free`, `#program` или
  на реальную страницу.

## Иконки

Все иконки идут через `lucide-react`. Стандартные параметры:
- `size={14}` для inline-метрик (module-stats, video-meta)
- `size={22–28}` для card-icons (bonuses, audience)
- `size={44}` для крупных (guarantee shield)
- `strokeWidth={1.5}` или `1.6` — тонкая outline-эстетика

Иконки соцсетей в футере (`Footer.jsx`) — inline SVG-пути брендов
(Telegram, VK, YouTube, GitHub), не lucide. Бренд-логотипы lucide не
содержит.

## Сборка и деплой

```bash
npm install
npm run dev      # локалка на :5173
npm run build    # → dist/
npm run preview  # проверить прод-сборку
```

`netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Репо: `github.com:gitPHhuber/AI_Course`, ветка `main`. SSH push.
Netlify подключается к репо — авто-деплой при push в main.

## Сознательные дыры (нужно заменить перед запуском)

- **Авторы (Илья, Евгений)** — реальных фото нет, стоят отобранные
  Unsplash-портреты в `public/images/author-*.jpg`. Заменить на свои.
- **Кейсы выпускников** — все 4 истории и фото выдуманы. Заменить на
  реальные после первого потока.
- **Featured testimonials (Сергей, Марина)** — тоже placeholder.
- **Соцссылки авторов** в `Authors.jsx` ведут на корни (`https://t.me/`,
  `https://github.com/`). Подставить реальные профили.
- **Все ссылки в футере "Документы"** ведут на `#`. Подставить реальные
  страницы оферты, политики и т.д.
- **Цены** в `Pricing.jsx` и `Compare.jsx` — править там же, дублирования нет.

## Полезные точки входа

- Изменить порядок секций → `src/App.jsx`
- Добавить новую секцию → создать `src/components/X.jsx`, импортировать в
  `App.jsx`, добавить стили в `src/styles.css`
- Поменять цвета → `:root` в `src/styles.css:3`
- Поменять дату старта потока → `Timer.jsx:3` (`TARGET`)
- Поменять контент тарифов → `Pricing.jsx` + `Compare.jsx` (две точки правки)
