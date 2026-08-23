import { AnimatePresence, motion } from 'framer-motion'
import useKonamiCode from '../hooks/useKonamiCode'

function KonamiEasterEgg() {
  const activated = useKonamiCode()

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-midnight/90 backdrop-blur-sm pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="text-center px-6"
          >
            <p className="text-6xl mb-4">🌌✨🌙</p>
            <p className="font-display text-2xl text-lavender">You found a secret passage through the universe.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default KonamiEasterEgg