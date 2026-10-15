import { projects } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'

export default function Projects() {
  return (
    <section id="work">
      <Reveal>
        <h2>
          My <span className="grad">work</span>
        </h2>
      </Reveal>
      <div className="grid">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 110}
            className={`card-cell ${project.featured ? 'card-featured' : ''}`}
          >
            <Tilt className="card">
              {project.featured && <span className="badge-flag">Featured</span>}
              {project.image && (
                <img
                  className="card-media"
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              )}
              <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="grad">{project.title}</h3>
              {project.subtitle && <p className="card-subtitle">{project.subtitle}</p>}
              <p>{project.description}</p>
              <div className="chips">
                {project.tech.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a className="card-link" href={project.link} target="_blank" rel="noreferrer">
                  View project →
                </a>
              )}
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
