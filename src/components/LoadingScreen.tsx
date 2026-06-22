import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINES = ['$ whoami', 'natnicha', '$ status --career', 'compiling future...']

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true)
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (lineIndex < LINES.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 280)
      return () => clearTimeout(t)
    }
    const exitTimer = setTimeout(() => setVisible(false), 350)
    return () => clearTimeout(exitTimer)
  }, [lineIndex])

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(onDone, 500)
      return () => clearTimeout(t)
    }
  }, [visible, onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg dark:bg-bg-dark"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="font-mono text-sm sm:text-base text-ink dark:text-ink-dark min-w-[260px]">
            {LINES.slice(0, lineIndex).map((line, i) => (
              <div key={i} className={i % 2 === 0 ? 'text-accent' : 'text-ink dark:text-ink-dark mb-2'}>
                {line}
              </div>
            ))}
            <span className="inline-block w-2 h-4 bg-accent animate-blink align-middle" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
