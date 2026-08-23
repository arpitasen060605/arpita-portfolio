import { Shield, Palette, Hammer, Bot, Compass, Orbit } from 'lucide-react'
import GlassCard from '../components/GlassCard'
import profile from '../assets/ArpitaSen.jpg'

const cards = [
  {
    icon: Shield,
    label: "What keeps me curious",
    title: "Cybersecurity",
    description: "Understanding how systems work, finding vulnerabilities, and thinking about how technology can be made more secure.",
  },
  {
    icon: Palette,
    label: "How I think",
    title: "Creatively",
    description: "I don't see creativity and technology as separate things. I enjoy turning ideas into experiences and finding unconventional ways to solve problems.",
  },
  {
    icon: Hammer,
    label: "What I love doing",
    title: "Building things",
    description: "From small experiments to full-stack applications, I learn best when I can turn an idea into something real.",
  },
  {
    icon: Bot,
    label: "What's next",
    title: "AI × Cybersecurity",
    description: "Exploring the intersection of artificial intelligence and cybersecurity, from intelligent threat detection to smarter security tools.",
  },
  {
    icon: Compass,
    label: "Where I am right now",
    title: "Learning & Exploring",
    description: "Still figuring out exactly where technology will take me, there's always another concept to understand, another rabbit hole to explore.",
  },
  {
    icon: Orbit,
    label: "My natural habitat",
    title: "Curiosity + Code + Creativity",
    description: "Probably somewhere between experimenting with a new idea, learning something unrelated, and wondering 'what if I built this?'",
  },
]

function About() {
  return (
    <section id="about" className="relative min-h-screen py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading + intro + photo */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="font-accent text-3xl text-soft-pink mb-1">A little bit</p>
            <h2 className="font-display text-5xl text-off-white mb-6">About me</h2>

            <p className="text-off-white/70 mb-4 leading-relaxed">
              I'm a Computer Science student with a strong curiosity for cybersecurity and a genuine love for building things. What started as an interest in understanding how networks and systems work has grown into one of the areas I'm most passionate about.
            </p>
            <p className="text-off-white/70 mb-4 leading-relaxed">
              Technology is only one side of me, I'm a creative person too, and I like bringing that creativity into how I approach problems, whether it's designing an interface or finding an unconventional way to build something.
            </p>
            <p className="text-off-white/70 leading-relaxed">
              I'm particularly excited about where AI and cybersecurity intersect. For now, I'm learning, building, and following the questions that make me curious.
            </p>
          </div>

          {/* Photo frame */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-70 md:w-80 md:h-85">
              <div className="absolute inset-0 rounded-full border border-lavender/30 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-lavender/20 scale-125" />
              <div className="absolute inset-0 rounded-full bg-lavender/20 blur-3xl" />
              <img
                src={profile}
                alt="Arpita Sen"
                className="relative w-full h-full object-cover rounded-full border-2 border-lavender/40"
              />
            </div>
          </div>
        </div>

        {/* Personality cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <GlassCard key={card.title}>
                <Icon className="text-lavender mb-3" size={28} />
                <p className="text-muted text-xs uppercase tracking-wide mb-2">{card.label}</p>
                <h3 className="font-display text-xl text-off-white mb-2">{card.title}</h3>
                <p className="text-off-white/60 text-sm leading-relaxed">{card.description}</p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About