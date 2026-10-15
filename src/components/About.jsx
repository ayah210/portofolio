import { profile } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about">
      <Reveal>
        <h2>
          About <span className="grad">me</span>
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="about-lede">{profile.summary}</p>
      </Reveal>
      <Reveal delay={200}>
        <ul className="about-facts">
          <li>
            <strong>Based in</strong>
            {profile.location}
          </li>
          <li>
            <strong>Focus</strong>
            Frontend · React · UI/UX
          </li>
          <li>
            <strong>Status</strong>
            {profile.availability}
          </li>
        </ul>
      </Reveal>
    </section>
  )
}
