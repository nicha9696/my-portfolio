import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { careerGoals } from '../data'

export default function CareerGoals() {
  return (
    <section id="goals" className="relative section-pad py-24 sm:py-32 bg-ink/[0.02] dark:bg-white/[0.02] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Where this goes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-14 text-balance">
            The road ahead
          </h2>
        </Reveal>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden md:block absolute top-[22px] left-0 right-0 h-[2px] bg-ink/10 dark:bg-white/10" />
          <motion.div
            className="hidden md:block absolute top-[22px] left-0 h-[2px] bg-accent origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%' }}
          />

          <div className="grid md:grid-cols-4 gap-10 md:gap-6 relative">
            {careerGoals.map((g, i) => (
              <Reveal key={g.year} delay={i * 0.12}>
                <div className="relative pl-9 md:pl-0">
                  <div className="md:flex md:flex-col md:items-start">
                    <span className="md:relative absolute left-0 top-1 md:top-0 w-[18px] h-[18px] rounded-full bg-bg dark:bg-bg-dark border-2 border-accent flex items-center justify-center mb-0 md:mb-4 z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </span>
                    <span className="font-mono text-xs text-accent">{g.year}</span>
                    <h3 className="font-display text-base font-semibold mt-1.5 mb-2 text-ink dark:text-ink-dark text-balance">
                      {g.goal}
                    </h3>
                    <p className="text-sm text-muted dark:text-muted-dark leading-relaxed">
                      {g.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
