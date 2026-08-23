import { useState, useEffect, useRef } from 'react'
import { skills, categoryColors } from '../data/skills'

function useOrbitAngle(speedDegPerSec, paused) {
  const [angle, setAngle] = useState(0)
  const rafRef = useRef()
  const lastRef = useRef(null)

  useEffect(() => {
    function loop(now) {
      if (lastRef.current == null) lastRef.current = now
      const dt = (now - lastRef.current) / 1000
      lastRef.current = now
      if (!paused) {
        setAngle((a) => (a + speedDegPerSec * dt) % 360)
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [speedDegPerSec, paused])

  return angle
}

function OrbitRing({ ringSkills, rx, ry, speed, reverse, hovered, setHovered }) {
  const count = ringSkills.length
  const paused = !!hovered
  const rotation = useOrbitAngle(reverse ? -speed : speed, paused)

  return (
    <>
      {/* static visual ellipse outline — never rotates */}
      <div
  className="absolute left-1/2 top-1/2 border border-lavender/25 pointer-events-none"
  style={{
    width: rx * 2, height: ry * 2, marginLeft: -rx, marginTop: -ry, borderRadius: '50%',
    boxShadow: '0 0 20px rgba(157,124,255,0.15) inset'
  }}
/>

      {ringSkills.map((skill, i) => {
        const baseAngle = (360 / count) * i
        const angle = baseAngle + rotation
        const rad = (angle * Math.PI) / 180
        const x = rx * Math.cos(rad)
        const y = ry * Math.sin(rad)
        const color = categoryColors[skill.category]
        const isHovered = hovered === skill.name
        const Icon = skill.icon

        return (
          <div
            key={skill.name}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              zIndex: isHovered ? 50 : 5,
            }}
            onMouseEnter={() => setHovered(skill.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ${
                skill.learning ? 'border border-dashed' : 'border'
              }`}
              style={{
                borderColor: color,
                backgroundColor: 'rgba(17,22,43,0.9)',
                boxShadow: isHovered ? `0 0 20px 5px ${color}` : `0 0 12px 2px ${color}80`,
                transform: isHovered ? 'scale(1.3)' : 'scale(1)',
              }}
            >
              <Icon size={14} style={{ color }} />
            </div>

            {isHovered && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-44 bg-deep-navy border border-lavender/30 rounded-lg p-2 z-50 pointer-events-none">
                <p className="text-off-white text-xs font-medium mb-1">{skill.name}</p>
                {skill.learning ? (
                  <p className="text-muted text-[10px]">Currently learning</p>
                ) : (
                  <p className="text-off-white/60 text-[10px]">Used in: {skill.usedIn.join(", ")}</p>
                )}
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

function SkillsOrbit() {
  const [hovered, setHovered] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  function checkWidth() {
    setIsMobile(window.innerWidth < 640)
  }
  checkWidth()
  window.addEventListener('resize', checkWidth)
  return () => window.removeEventListener('resize', checkWidth)
}, [])
  const ring1 = skills.filter((s) => s.ring === 1)
  const ring2 = skills.filter((s) => s.ring === 2)

 return (
  <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
  <div className="absolute w-[500px] h-80 bg-lavender/20 rounded-full blur-[130px] pointer-events-none" />
 
  <div className="absolute w-64 h-64 bg-soft-pink/10 rounded-full blur-[100px] pointer-events-none" />
 
    <div
  className="absolute z-10 w-16 h-16 rounded-full border border-lavender/50 flex items-center justify-center bg-deep-navy"
  style={{ boxShadow: '0 0 30px 6px rgba(157,124,255,0.4)' }}
>
  <div className="w-12 h-12 rounded-full bg-lavender/30 blur-lg absolute" />
  <span className="font-display text-lavender text-lg relative">ME</span>
</div>

    <div className="absolute inset-0" style={{ transform: 'rotate(-12deg)' }}>
  <OrbitRing ringSkills={ring1} rx={isMobile ? 130 : 220} ry={isMobile ? 60 : 100} speed={9} reverse={false} hovered={hovered} setHovered={setHovered} />
  <OrbitRing ringSkills={ring2} rx={isMobile ? 165 : 380} ry={isMobile ? 90 : 165} speed={6} reverse={true} hovered={hovered} setHovered={setHovered} />
</div>
  </div>
)
}

export default SkillsOrbit