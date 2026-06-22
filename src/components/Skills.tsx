import { motion } from 'framer-motion'
import { Compass } from 'lucide-react'
import Reveal from './Reveal'
import { skills, roadmap } from '../data'

const statusLabel: Record<string, string> = {
  core: 'Core',
  learning: 'Learning',
  exploring: 'Exploring',
}

export default function Skills() {
  return (
    <section id="skills" className="relative section-pad py-24 sm:py-32 bg-ink/[0.02] dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-balance">
            Tools I reach for
          </h2>
          <p className="text-muted dark:text-muted-dark max-w-xl mb-14">
            Levels here reflect working comfort, not mastery — an honest snapshot of where I am right now.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 0.05}>
              <div className="group bg-card dark:bg-card-dark rounded-2xl p-5 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 border border-ink/5 dark:border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-sm text-ink dark:text-ink-dark">
                    {skill.name}
                  </span>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                      skill.status === 'core'
                        ? 'bg-accent-soft text-accent dark:bg-accent/15'
                        : 'bg-ink/5 text-muted dark:bg-white/10 dark:text-muted-dark'
                    }`}
                  >
                    {statusLabel[skill.status]}
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-ink/5 dark:bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-blue-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-card dark:bg-card-dark rounded-2xl p-7 sm:p-8 shadow-soft border border-ink/5 dark:border-white/5">
            <div className="flex items-center gap-2.5 mb-5">
              <Compass size={18} className="text-accent" />
              <h3 className="font-display text-xl font-semibold">Future Learning Roadmap</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {roadmap.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="px-4 py-2 rounded-full text-sm border border-dashed border-accent/40 text-accent bg-accent-soft/50 dark:bg-accent/10"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
