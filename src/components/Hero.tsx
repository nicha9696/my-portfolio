import { motion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import ParticleField from './ParticleField'
import { profile } from '../data'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-pad pt-28 pb-20"
    >
      <ParticleField />

      {/* soft accent glow, single use */}
      <div
        aria-hidden="true"
      className="h-[600px] rounded-full bg-accent/10 dark:bg-accent/15 blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl scale-110 animate-float" />
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-accent to-blue-400 p-[3px] shadow-accent-glow">
                <div className="w-full h-full rounded-full bg-card dark:bg-card-dark flex items-center justify-center overflow-hidden">      
              <img
  src="/portrait.jpg"
  alt="Natnicha"
  className="w-full h-full object-cover rounded-full"
/>
              
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted dark:text-muted-dark mb-5 px-3 py-1 rounded-full border border-ink/10 dark:border-white/10"
        >
          <MapPin size={12} />
          {profile.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance mb-4"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm sm:text-base text-accent mb-6"
        >
          {profile.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-muted dark:text-muted-dark max-w-xl mx-auto leading-relaxed mb-10 text-balance"
        >
          {profile.heroIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-7 py-3 rounded-full bg-ink dark:bg-white text-bg dark:text-bg-dark text-sm font-medium overflow-hidden transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-lift"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
              View My Work
            </span>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3 rounded-full border border-ink/15 dark:border-white/20 text-sm font-medium text-ink dark:text-ink-dark hover:bg-ink/5 dark:hover:bg-white/5 transition-colors"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted dark:text-muted-dark hover:text-accent transition-colors animate-float"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  )
}
