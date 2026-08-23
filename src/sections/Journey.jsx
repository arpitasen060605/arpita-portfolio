import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { milestones } from '../data/journey'

gsap.registerPlugin(ScrollTrigger)

function Journey() {
  const lineRef = useRef(null)
  const itemRefs = useRef([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      )

      itemRefs.current.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="journey" ref={sectionRef} className="relative min-h-screen py-24 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        <p className="font-accent text-3xl text-soft-pink mb-1">My journey</p>
        <h2 className="font-display text-5xl text-off-white mb-16">so far..</h2>

        <div className="relative pl-12">
          {/* static track line (faint, full height) */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-lavender/15" />

          {/* animated draw-in line */}
          <div
            ref={lineRef}
            className="absolute left-4 top-0 bottom-0 w-px bg-lavender origin-top"
            style={{ boxShadow: "0 0 8px rgba(157,124,255,0.6)" }}
          />

          <div className="flex flex-col gap-16">
            {milestones.map((milestone, i) => (
              <div
                key={milestone.year}
                ref={(el) => (itemRefs.current[i] = el)}
                className="relative"
              >
                {/* dot on the line */}
                <div
                  className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-midnight border-2 border-lavender"
                  style={{ boxShadow: "0 0 12px rgba(157,124,255,0.6)" }}
                />

                <p className="font-display text-2xl text-lavender mb-1">{milestone.year}</p>
                <h3 className="text-off-white text-lg font-medium mb-2">{milestone.title}</h3>
                <p className="text-off-white/60 leading-relaxed max-w-lg">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey