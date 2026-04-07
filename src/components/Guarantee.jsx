import { ShieldCheck } from 'lucide-react'

export default function Guarantee() {
  return (
    <section className="guarantee">
      <div className="guarantee-box">
        <div className="guarantee-icon">
          <ShieldCheck size={44} strokeWidth={1.4} />
        </div>
        <h3>Гарантия возврата — 14 дней</h3>
        <p>Если в течение 14 дней после покупки вы поймёте, что курс вам не подходит — вернём 100% суммы без вопросов и без объяснений. Мы уверены в качестве материалов, поэтому берём весь риск на себя.</p>
      </div>
    </section>
  )
}
