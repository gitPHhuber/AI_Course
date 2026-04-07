export default function FinalCTA() {
  return (
    <section className="final-cta">
      <h2>
        Начни использовать ИИ<br />
        уже{' '}
        <span
          style={{
            background: 'linear-gradient(135deg,var(--accent2),var(--pink))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          сегодня
        </span>
      </h2>
      <p>Первый поток стартует в июне. Скидка раннего доступа действует до заполнения мест.</p>
      <div className="cta-row" style={{ justifyContent: 'center' }}>
        <a href="#pricing" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>
          Выбрать тариф →
        </a>
      </div>
    </section>
  )
}
