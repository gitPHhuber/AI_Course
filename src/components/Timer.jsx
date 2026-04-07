import { useEffect, useState } from 'react'

const TARGET = new Date('2026-06-15T10:00:00').getTime()

function calc() {
  const diff = Math.max(0, TARGET - Date.now())
  return {
    days: String(Math.floor(diff / 864e5)).padStart(2, '0'),
    hours: String(Math.floor((diff % 864e5) / 36e5)).padStart(2, '0'),
    mins: String(Math.floor((diff % 36e5) / 6e4)).padStart(2, '0'),
    secs: String(Math.floor((diff % 6e4) / 1e3)).padStart(2, '0'),
  }
}

export default function Timer() {
  const [time, setTime] = useState(calc)

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="timer-section">
      <div className="section-label" style={{ textAlign: 'center', marginBottom: '.5rem' }}>До старта потока</div>
      <div className="timer-box">
        <div className="timer-unit">
          <span className="timer-num">{time.days}</span>
          <span className="timer-label">дней</span>
        </div>
        <div className="timer-sep">:</div>
        <div className="timer-unit">
          <span className="timer-num">{time.hours}</span>
          <span className="timer-label">часов</span>
        </div>
        <div className="timer-sep">:</div>
        <div className="timer-unit">
          <span className="timer-num">{time.mins}</span>
          <span className="timer-label">минут</span>
        </div>
        <div className="timer-sep">:</div>
        <div className="timer-unit">
          <span className="timer-num">{time.secs}</span>
          <span className="timer-label">секунд</span>
        </div>
      </div>
    </div>
  )
}
