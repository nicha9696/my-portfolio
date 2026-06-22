import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { about } from '../data'

export default function About() {
  return (
    <section id="about" className="relative section-pad py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            About
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-14 text-balance">
            From business strategy to building software
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3 space-y-5">
            {about.story.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-muted dark:text-muted-dark leading-relaxed text-[15px] sm:text-base">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Signature element: the pivot path — a single line that draws
              itself on scroll, with the career pivot marked as a visible bend.
              This stands in for a generic numbered timeline because the story
              IS a literal redirection, not a flat sequence. */}
          <div className="lg:col-span-2 relative pl-2">
            <div className="relative">
              <div
                className="absolute left-[7px] top-0 w-[2px] h-full bg-ink/10 dark:bg-white/10"
                aria-hidden="true"
              />
              <motion.div
                className="absolute left-[7px] top-0 w-[2px] h-full bg-accent origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden="true"
              />

              <ul className="space-y-10">
                {about.milestones.map((m, i) => (
                  <Reveal key={m.year} delay={i * 0.12}>
                    <li className="relative pl-9">
                      <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-bg dark:bg-bg-dark border-2 border-accent flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </span>
                      <div className="font-mono text-xs text-accent mb-1">{m.year}</div>
                      <div className="font-medium text-ink dark:text-ink-dark mb-0.5">
                        {m.label}
                      </div>
                      <div className="text-sm text-muted dark:text-muted-dark">
                        {m.detail}
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
