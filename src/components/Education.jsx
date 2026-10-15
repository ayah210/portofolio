import { education } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education">
      <Reveal>
        <h2>
          Education <span className="grad">&amp; training</span>
        </h2>
      </Reveal>
      <div className="edu-list">
        {education.map((item, index) => (
          <Reveal key={item.title} delay={index * 100} className="edu-row">
            <span className="edu-period">{item.period}</span>
            <div className="edu-body">
              <h3>{item.title}</h3>
              <p className="edu-org">{item.org}</p>
              {item.note && <p className="edu-note">{item.note}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
