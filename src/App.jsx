import StarField from './components/StarField'
import Navbar from './components/Navbar'
import MoonIndicator from './components/MoonIndicator'
import Hero from './sections/Hero'

function App() {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navbar />
      <MoonIndicator />
      <Hero />

      {/* temporary tall section just to test scrolling/parallax */}
      <div className="h-[150vh] flex items-center justify-center">
        <p className="text-muted">Scroll test area — will be replaced by real sections</p>
      </div>
    </div>
  )
}

export default App