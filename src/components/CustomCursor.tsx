import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) {
      return undefined
    }

    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setActive(true)
    }

    const onLeave = () => setActive(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        opacity: active ? 1 : 0,
        x: position.x - 12,
        y: position.y - 12,
      }}
      transition={{ type: 'spring', damping: 26, stiffness: 310, mass: 0.2 }}
    />
  )
}
