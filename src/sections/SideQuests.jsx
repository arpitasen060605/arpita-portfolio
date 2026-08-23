import { motion } from 'framer-motion'
import { sideQuests } from '../data/sideQuests'

function SideQuests() {
  return (
    <section id="experiments" className="relative py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <p className="font-accent text-3xl text-soft-pink mb-1">Things I'm</p>
        <h2 className="font-display text-5xl text-off-white mb-4">currently exploring..</h2>
        <p className="text-off-white/60 mb-12 max-w-xl">
          Not finished projects-just threads I'm pulling on right now.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {sideQuests.map((quest, i) => {
            const Icon = quest.icon
            return (
              <motion.div
                key={quest.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-deep-navy/40 backdrop-blur-md border border-dashed border-lavender/25 rounded-2xl p-6 hover:border-lavender/50 transition-colors"
              >
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wide text-muted border border-muted/30 rounded-full px-2 py-0.5">
                  in progress
                </span>
                <Icon className="text-lavender mb-3" size={26} />
                <h3 className="font-display text-lg text-off-white mb-2">{quest.title}</h3>
                <p className="text-off-white/60 text-sm leading-relaxed">{quest.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SideQuests