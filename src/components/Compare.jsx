const rows = [
  ['Модули 1–4 (основы)', 'check', 'check', 'check'],
  ['Мануалы со скриншотами', 'check', 'check', 'check'],
  ['Готовые промпты', '50+', '50+', '100+'],
  ['Гайд: оплата зарубежных сервисов', 'check', 'check', 'check'],
  ['Гайд: eSIM и номера', 'check', 'check', 'check'],
  ['Закрытый чат', 'check', 'check', 'VIP-чат'],
  ['Модули 5–7 (монетизация)', 'cross', 'check', 'check'],
  ['Шаблоны для фриланса', 'cross', 'check', 'check'],
  ['Модули 8–10 (API, продукты)', 'cross', 'cross', 'check'],
  ['Шаблоны автоматизаций (n8n, Make)', 'cross', 'cross', 'check'],
  ['Менторская сессия 1-на-1', 'cross', 'cross', '60 мин'],
  ['Обновления курса', 'check', 'check', 'check'],
]

function Cell({ value }) {
  if (value === 'check') return <td className="check">✓</td>
  if (value === 'cross') return <td className="cross">—</td>
  return <td>{value}</td>
}

export default function Compare() {
  return (
    <section className="compare">
      <div className="container">
        <div className="section-label" style={{ textAlign: 'center' }}>Сравнение</div>
        <div className="section-title" style={{ textAlign: 'center' }}>Что входит в каждый тариф</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className="h-base">База</th>
              <th className="h-pro">Про</th>
              <th className="h-prof">Профи</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                <td>{row[0]}</td>
                <Cell value={row[1]} />
                <Cell value={row[2]} />
                <Cell value={row[3]} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
