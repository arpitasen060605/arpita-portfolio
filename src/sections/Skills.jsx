import FadeIn from '../components/FadeIn'
import SkillsOrbit from '../components/SkillsOrbit'

function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <FadeIn>
        <p className="font-accent text-3xl text-soft-pink mb-1">Skills in my</p>
        <h2 className="font-display text-5xl text-off-white mb-4">orbit</h2>
        <p className="text-off-white/60 mb-4 max-w-xl mx-auto">
          Hover a planet to see where it's been used. Dashed rings are things I'm still learning.
        </p>
        </FadeIn>
      </div>

      <SkillsOrbit />
    </section>
  )
}

export default Skills