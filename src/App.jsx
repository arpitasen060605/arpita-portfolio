import StarField from './components/StarField'
import Navbar from './components/Navbar'
import GlassCard from './components/GlassCard'
import GlowButton from './components/GlowButton'

function App() {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">
        <h1 className="font-display text-5xl text-lavender">
          Arpita's Digital Universe
        </h1>

        <GlassCard className="max-w-md text-center">
          <p className="text-off-white/80">
            Testing the star field and floating nav bar.
          </p>
        </GlassCard>

        <div className="flex gap-4">
          <GlowButton variant="primary">Explore My Universe →</GlowButton>
          <GlowButton variant="secondary">View My Projects</GlowButton>
        </div>
      </div>
    </div>
  )
}

export default App