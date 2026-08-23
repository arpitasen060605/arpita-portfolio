import StarField from './components/StarField'
import Navbar from './components/Navbar'
import MoonIndicator from './components/MoonIndicator'
import CursorGlow from './components/CursorGlow'
import KonamiEasterEgg from './components/KonamiEasterEgg'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Journey from './sections/Journey'
import SideQuests from './sections/SideQuests'
import Milestones from './sections/Milestones'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen relative">
      <StarField />
      <CursorGlow />
      <KonamiEasterEgg />
      <Navbar />
      <MoonIndicator />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Journey />
      <SideQuests />
      <Milestones />
      <Contact />
      <Footer />
    </div>
  )
}

export default App