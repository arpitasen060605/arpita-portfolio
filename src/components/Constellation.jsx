import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const accents = [
  { x: 8, y: 20 }, { x: 92, y: 12 }, { x: 95, y: 70 }, { x: 5, y: 80 }, { x: 50, y: 5 },
]

function Constellation({ projects, onSelect }) {
  const [hovered, setHovered] = useState(null)

  const lines = []
  projects.forEach((p) => {
    if (p.tier === "mini") {
      const nearestMain = projects
        .filter((m) => m.tier === "main")
        .sort((a, b) => {
          const distA = Math.hypot(a.position.x - p.position.x, a.position.y - p.position.y)
          const distB = Math.hypot(b.position.x - p.position.x, b.position.y - p.position.y)
          return distA - distB
        })[0]
      if (nearestMain) lines.push([p, nearestMain])
    }
  })

  return (
    <div className="relative w-full h-[550px] md:h-[600px]">
      {/* ambient nebula glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-lavender/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-soft-pink/10 rounded-full blur-[120px] pointer-events-none" />

      {/* decorative accent sparkles */}
      {accents.map((a, i) => (
        <Sparkles
          key={i}
          size={14}
          className="absolute text-icy-blue/40 pointer-events-none"
          style={{ left: `${a.x}%`, top: `${a.y}%` }}
        />
      ))}

      {/* central hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-16 h-16 rounded-full border border-lavender/40 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-lavender/20 blur-md absolute" />
          <span className="font-display text-lavender text-lg relative">ME</span>
        </div>
        <div className="absolute inset-0 w-32 h-32 -left-8 -top-8 rounded-full border border-lavender/15" />
        <div className="absolute inset-0 w-48 h-48 -left-16 -top-16 rounded-full border border-lavender/10" />
      </div>

      {/* connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {lines.map(([a, b], i) => (
          <line
            key={i}
            x1={`${a.position.x}%`} y1={`${a.position.y}%`}
            x2={`${b.position.x}%`} y2={`${b.position.y}%`}
            stroke="var(--color-lavender)" strokeOpacity="0.2" strokeWidth="1"
          />
        ))}
        {projects.filter(p => p.tier === "main").map((p, i) => (
          <line
            key={`hub-${i}`}
            x1="50%" y1="50%"
            x2={`${p.position.x}%`} y2={`${p.position.y}%`}
            stroke="var(--color-lavender)" strokeOpacity="0.15" strokeWidth="1"
          />
        ))}
      </svg>

      {/* stars */}
      {projects.map((project) => {
        const isMain = project.tier === "main"
        const Icon = project.icon
        return (
          <div
            key={project.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex items-center gap-2"
            style={{ left: `${project.position.x}%`, top: `${project.position.y}%` }}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onSelect(project)}
          >
            {isMain ? (
              <>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-11 h-11 rounded-full border-2 border-lavender flex items-center justify-center bg-deep-navy"
                  style={{ boxShadow: "0 0 20px 4px rgba(157,124,255,0.5)" }}
                >
                  {Icon && <Icon size={18} className="text-lavender" />}
                </motion.div>
                <div className="whitespace-nowrap">
                  <p className="text-off-white text-sm font-medium">{project.name}</p>
                  <p className="text-muted text-xs">{project.description.slice(0, 24)}...</p>
                </div>
              </>
            ) : (
              <motion.div
                whileHover={{ scale: 1.4 }}
                className="rounded-full bg-lavender"
                style={{ width: 8, height: 8, boxShadow: "0 0 10px 2px rgba(157,124,255,0.4)" }}
              />
            )}

            {hovered === project.id && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 bg-deep-navy border border-lavender/30 rounded-xl p-3 z-20 pointer-events-none"
              >
                <p className="text-off-white font-medium text-sm mb-1">{project.name}</p>
                <p className="text-off-white/60 text-xs">{project.description.slice(0, 60)}...</p>
                <p className="text-lavender text-xs mt-2">Click to explore →</p>
              </motion.div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Constellation