import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    mass: 0.3,
  })

  useEffect(() => {
    const updateViewport = () => {
      const coarsePointer = window.matchMedia('(pointer: coarse)').matches
      const smallScreen = window.innerWidth < 980
      setIsMobile(coarsePointer || smallScreen)
    }

    updateViewport()
    window.addEventListener('resize', updateViewport)

    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  if (!isMobile) {
    return null
  }

  return <motion.div className="scroll-progress" style={{ scaleX }} />
}
