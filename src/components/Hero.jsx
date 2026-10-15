import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio.js'

function useTyping(text, speed = 65) {
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setOutput(text)
      return
    }

    let index = 0
    setOutput('')
    const timer = setInterval(() => {
      index += 1
      setOutput(text.slice(0, index))
      if (index >= text.length) clearInterval(timer)
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return output
}

export default function Hero() {
  const words = [
    { label: 'DEVELOPER', className: 'w1' },
    { label: 'BUILDER', className: 'w2' },
    { label: 'CREATOR', className: 'w3' },
    { label: 'LEARNER', className: 'w4' },
  ]

  const tagline = useTyping(profile.tagline)

  return (
    <header className="hero" id="top">
      <div className="hero-words" aria-hidden="true">
        {words.map((word, index) => (
          <span
            key={word.label}
            className={`word ${word.className}`}
            style={{ animationDelay: `${index * 0.8}s` }}
          >
            {word.label}
          </span>
        ))}
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{profile.location}</p>
          <h1 className="hero-title">{profile.shortName}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tag">
            {tagline}
            <span className="caret" aria-hidden="true" />
          </p>
        </div>

        <div className="lanyard-wrap">
          <div className="lanyard">
            <div className="strap" />
            <div className="badge">
              <div className="slot" />
              <div className="inner">
                <div className="photo">
                  {profile.image ? (
                    <img src={profile.image} alt={profile.name} className="photo-img" />
                  ) : (
                    profile.initial
                  )}
                </div>
                <h1>{profile.name.toUpperCase()}</h1>
                <p>{profile.role}</p>
                <div className="bar" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll">Scroll ↓</div>
    </header>
  )
}
