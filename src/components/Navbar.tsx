import { useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { useActiveSection } from '../hooks/useActiveSection'
import { profile } from '../data'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'goals', label: 'Goals' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({
  isDark,
  toggleDark,
}: {
  isDark: boolean
  toggleDark: () => void
}) {
  const progress = useScrollProgress()
  const active = useActiveSection(LINKS.map((l) => l.id))
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="fixed top-3 left-0 right-0 z-40 flex justify-center px-4">
        <nav className="glass w-full max-w-3xl rounded-full border border-ink/5 dark:border-white/10 shadow-soft px-5 py-2.5 flex items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="font-display font-semibold text-base tracking-tight text-ink dark:text-ink-dark"
          >
            {profile.initials}
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3 py-1.5 text-sm rounded-full transition-colors ${
                    active === link.id
                      ? 'text-accent'
                      : 'text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark'
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-accent-soft dark:bg-accent/10 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark hover:bg-ink/5 dark:hover:bg-white/10 transition-colors"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-full text-muted dark:text-muted-dark hover:text-ink dark:hover:text-ink-dark hover:bg-ink/5 dark:hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-[60px] left-4 right-4 z-40 glass rounded-2xl border border-ink/5 dark:border-white/10 shadow-lift p-2 md:hidden"
        >
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`block w-full text-left px-4 py-3 text-sm rounded-xl transition-colors ${
                active === link.id
                  ? 'text-accent bg-accent-soft dark:bg-accent/10'
                  : 'text-ink dark:text-ink-dark hover:bg-ink/5 dark:hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </>
  )
}
