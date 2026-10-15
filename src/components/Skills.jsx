import { skills } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills">
      <Reveal>
        <h2>Skills</h2>
      </Reveal>
      <div className="chips">
        {skills.map((skill, index) => (
          <Reveal as="span" key={skill} delay={index * 60} className="chip">
            {skill}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
