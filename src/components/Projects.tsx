import { ExternalLink, Clock, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import { projects } from '../data'

const statusConfig = {
  live: { label: 'Live', icon: CheckCircle2, className: 'text-emerald-600 dark:text-emerald-400' },
  'in-progress': { label: 'In Progress', icon: Clock, className: 'text-amber-600 dark:text-amber-400' },
  archive: { label: 'Archive', icon: Clock, className: 'text-muted dark:text-muted-dark' },
}

export default function Projects() {
  return (
    <section id="projects" className="relative section-pad py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Projects
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-balance">
            Things I've built so far
          </h2>
          <p className="text-muted dark:text-muted-dark max-w-xl mb-14">
            Early work, shown plainly. Each one taught me something the tutorials didn't.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const status = statusConfig[project.status]
            const StatusIcon = status.icon
            return (
              <Reveal key={project.title} delay={i * 0.1}>
                <article className="group h-full flex flex-col bg-card dark:bg-card-dark rounded-2xl p-6 shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300 border border-ink/5 dark:border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`flex items-center gap-1.5 text-xs font-mono ${status.className}`}>
                      <StatusIcon size={13} />
                      {status.label}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted dark:text-muted-dark hover:text-accent transition-colors"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>

                  <h3 className="font-display text-lg font-semibold mb-1 text-ink dark:text-ink-dark">
                    {project.title}
                  </h3>
                  <p className="text-xs text-accent font-mono mb-3">{project.subtitle}</p>
                  <p className="text-sm text-muted dark:text-muted-dark leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-ink/5 dark:border-white/10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-ink/5 dark:bg-white/10 text-muted dark:text-muted-dark font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
