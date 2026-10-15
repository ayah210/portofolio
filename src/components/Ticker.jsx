import { skills } from '../data/portfolio.js'

export default function Ticker() {
  const loop = [...skills, ...skills]

  return (
    <div className="ticker" aria-label="Skills">
      <div className="ticker-track">
        {loop.map((skill, index) => (
          <span className="ticker-item" key={`${skill}-${index}`}>
            {skill}
            <span className="ticker-dot" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
