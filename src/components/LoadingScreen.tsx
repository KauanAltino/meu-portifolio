import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type LoadingScreenProps = {
  isVisible?: boolean
}

export default function LoadingScreen({ isVisible = false }: LoadingScreenProps) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (isVisible) {
      return
    }

    const timer = window.setTimeout(() => {
      setShow(false)
    }, 1200)

    return () => window.clearTimeout(timer)
  }, [isVisible])

  return (
    <AnimatePresence>
      {(isVisible || show) && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          <motion.div
            className="loading-logo"
            initial={{ scale: 0.9, opacity: 0.6 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1.3, repeatType: 'reverse' }}
          >
            KAG
          </motion.div>
          <p>Construindo uma experiência premium...</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
