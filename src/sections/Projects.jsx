import { useState } from 'react'
import Constellation from '../components/Constellation'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/projects'
import FadeIn from '../components/FadeIn'

function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
        <p className="font-accent text-3xl text-soft-pink mb-1">My universe of</p>
        <h2 className="font-display text-5xl text-off-white mb-4">Projects</h2>
        <p className="text-off-white/60 mb-12 max-w-xl">
          Each star is a project. Bigger stars are the ones I've put the most into, hover to preview, click to explore.
        </p>
        </FadeIn>

        <Constellation projects={projects} onSelect={setSelected} />
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

export default Projects