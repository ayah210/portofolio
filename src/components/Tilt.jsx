import { useRef } from 'react'

export default function Tilt({ children, className = '', max = 8 }) {
  const ref = useRef(null)

  const handleMove = (event) => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = node.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5

    node.style.setProperty('--tilt-x', `${py * -max}deg`)
    node.style.setProperty('--tilt-y', `${px * max}deg`)
    node.style.setProperty('--glare-x', `${(px + 0.5) * 100}%`)
    node.style.setProperty('--glare-y', `${(py + 0.5) * 100}%`)
  }

  const handleLeave = () => {
    const node = ref.current
    if (!node) return
    node.style.setProperty('--tilt-x', '0deg')
    node.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <div
      ref={ref}
      className={`tilt ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}
