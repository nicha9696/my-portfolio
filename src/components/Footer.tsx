import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="section-pad py-8 border-t border-ink/5 dark:border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted dark:text-muted-dark">
        <span className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono">Built with React, TypeScript & Tailwind</span>
      </div>
    </footer>
  )
}
