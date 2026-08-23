import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { milestones } from '../data/milestones'

function Milestones() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="milestones" className="relative py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <p className="font-accent text-3xl text-soft-pink mb-1">Along the</p>
        <h2 className="font-display text-5xl text-off-white mb-4">way</h2>
        <p className="text-off-white/60 mb-12 max-w-xl">
          A few certifications and job simulations from the journey so far.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="cursor-pointer bg-deep-navy/40 border border-lavender/20 rounded-2xl overflow-hidden hover:border-lavender/40 transition-colors"
              onClick={() => setSelected(m)}
            >
              <img src={m.image} alt={m.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-off-white text-sm font-medium mb-1">{m.title}</h3>
                <p className="text-muted text-xs">{m.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-midnight/85 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-10 right-0 text-off-white/70 hover:text-off-white"
              >
                <X size={24} />
              </button>
              <img src={selected.image} alt={selected.title} className="w-full rounded-xl border border-lavender/30" />
              <p className="text-off-white text-center mt-4 font-medium">{selected.title}</p>
              <p className="text-muted text-center text-sm">{selected.issuer}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Milestones