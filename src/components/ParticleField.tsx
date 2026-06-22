import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const isDark = () => document.documentElement.classList.contains('dark')

    const COUNT = Math.min(46, Math.floor((width * height) / 26000))
    const nodes: Node[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
    }))

    let raf: number

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const dotColor = isDark() ? 'rgba(245,245,245,0.45)' : 'rgba(17,17,17,0.35)'
      const lineColorBase = isDark() ? '37,99,235' : '37,99,235'

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (!prefersReducedMotion) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j]
          const dx = n.x - m.x
          const dy = n.y - m.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.strokeStyle = `rgba(${lineColorBase},${0.12 * (1 - dist / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(m.x, m.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = dotColor
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
