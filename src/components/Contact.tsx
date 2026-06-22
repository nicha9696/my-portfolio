import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data'

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'See my code', href: profile.github, icon: Github },
]

export default function Contact() {
  return (
    <section id="contact" className="relative section-pad py-24 sm:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3 mb-4 text-balance">
            Let's build something
          </h2>
          <p className="text-muted dark:text-muted-dark max-w-md mx-auto mb-12">
            Open to junior roles, internships, and conversations with people who'll point out what I'm missing.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={i * 0.08}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center gap-3 bg-card dark:bg-card-dark rounded-2xl p-6 shadow-soft hover:shadow-lift hover:-translate-y-1 transition-all duration-300 border border-ink/5 dark:border-white/5"
              >
                <div className="w-11 h-11 rounded-full bg-accent-soft dark:bg-accent/15 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <link.icon size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium text-ink dark:text-ink-dark flex items-center gap-1 justify-center">
                    {link.label}
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-xs text-muted dark:text-muted-dark mt-0.5 truncate max-w-[180px]">
                    {link.value}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-accent-glow hover:scale-[1.03] active:scale-[0.98] duration-200"
          >
            <Mail size={16} />
            Say hello
          </a>
        </Reveal>
      </div>
    </section>
  )
}
