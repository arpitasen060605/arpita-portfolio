import StarField from './components/StarField'
import Navbar from './components/Navbar'
import MoonIndicator from './components/MoonIndicator'
import GlassCard from './components/GlassCard'
import GlowButton from './components/GlowButton'

function App() {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navbar />
      <MoonIndicator />

      <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">
        <h1 className="font-display text-5xl text-lavender">
          Arpita's Digital Universe
        </h1>

        <GlassCard className="max-w-md text-center">
          <p className="text-off-white/80">
            Testing the star field, navbar, and moon scroll indicator.
          </p>
        </GlassCard>

        <div className="flex gap-4">
          <GlowButton variant="primary">Explore My Universe →</GlowButton>
          <GlowButton variant="secondary">View My Projects</GlowButton>
        </div>
      </div>

      {/* temporary tall section just to test scrolling */}
      <div className="h-[200vh] flex items-center justify-center">
        <p className="text-muted">Scroll test area — will be replaced by real sections</p>
      </div>
    </div>
  )
}

export default App