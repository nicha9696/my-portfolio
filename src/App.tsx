import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CareerGoals from './components/CareerGoals'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useDarkMode } from './hooks/useDarkMode'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const { isDark, toggle } = useDarkMode()

  return (
    <>
      <LoadingScreen onDone={() => setLoaded(true)} />
      <div
        className={`min-h-screen bg-bg dark:bg-bg-dark text-ink dark:text-ink-dark transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar isDark={isDark} toggleDark={toggle} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CareerGoals />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
