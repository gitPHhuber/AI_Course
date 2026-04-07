const stats = [
  { num: '10', label: 'модулей' },
  { num: '40+', label: 'видеоуроков' },
  { num: '100+', label: 'готовых промптов' },
  { num: '∞', label: 'пожизненный доступ' },
]

export default function StatsBar() {
  return (
    <div className="stats-bar">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
