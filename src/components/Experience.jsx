import { experience } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience">
      <Reveal>
        <h2>
          Experience<span className="grad">.</span>
        </h2>
      </Reveal>
      <div className="timeline">
        {experience.map((job, index) => (
          <Reveal key={`${job.role}-${job.company}`} delay={index * 120} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-head">
                <h3>{job.role}</h3>
                <span className="timeline-period">{job.period}</span>
              </div>
              <p className="timeline-company">{job.company}</p>
              <p>{job.description}</p>
              <div className="chips">
                {job.highlights.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
