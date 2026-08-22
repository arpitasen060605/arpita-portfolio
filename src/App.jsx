import StarField from './components/StarField'
import Navbar from './components/Navbar'
import MoonIndicator from './components/MoonIndicator'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <Navbar />
      <MoonIndicator />
      <Hero />
      <About />
      <Projects />
      <Skills />

      <div className="h-[100vh] flex items-center justify-center">
        <p className="text-muted">More sections coming...</p>
      </div>
    </div>
  )
}

export default App