import { profile } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact">
      <Reveal>
        <h2>
          Let&apos;s <span className="grad">work together</span>
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <a className="btn" href={`mailto:${profile.email}`}>
          Email me
        </a>
        <a className="btn" href={`tel:${profile.phone}`}>
          Call me
        </a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </Reveal>
      <Reveal delay={180}>
        <ul className="contact-meta">
          <li>
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span>Phone</span>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </li>
          <li>
            <span>Location</span>
            {profile.location}
          </li>
          <li>
            <span>Status</span>
            {profile.availability}
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              ayah-abdelhasieb
            </a>
          </li>
        </ul>
      </Reveal>
      <footer className="site-footer">
        © {new Date().getFullYear()} {profile.name} — {profile.role}
      </footer>
    </section>
  )
}
