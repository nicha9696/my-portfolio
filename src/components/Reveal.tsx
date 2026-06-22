import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'span'
}) {
  const transition = { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const }

  if (as === 'span') {
    return (
      <motion.span
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={variants}
        transition={transition}
      >
        {children}
      </motion.span>
    )
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
