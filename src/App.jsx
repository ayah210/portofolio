import Hero from './components/Hero.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Ticker from './components/Ticker.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import BackToTop from './components/BackToTop.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <Ticker />
      <main>
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}
