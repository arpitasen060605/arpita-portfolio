import { useState, useEffect } from 'react'
import useTypewriter from '../hooks/useTypewriter'
import GlowButton from '../components/GlowButton'
import moon from '../assets/moon-transparent.png'

const titles = [
  "Developer",
  "Cybersecurity Enthusiast",
  "AI x Security Explorer",
  "Problem Solver",
  "Creative Technologist",
]

function Hero() {
  const typedText = useTypewriter(titles)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-16">
      {/* Moon with glow, parallaxes slower than scroll */}
      <div
  className="absolute right-[-90px] top-20 md:top-1/2 md:-translate-y-1/2 w-[180px] h-[180px] md:w-[650px] md:h-[650px] opacity-30 md:opacity-100"
  style={{ transform: window.innerWidth < 768 ? 'none' : `translateY(calc(-50% + ${scrollY * 0.15}px))` }}
>
        <div className="absolute inset-0 rounded-full bg-lavender/30 blur-[100px]" />
        <img
          src={moon}
          alt=""
          className="relative w-full h-full object-contain drop-shadow-[0_0_60px_rgba(157,124,255,0.4)]"
        />
      </div>

      {/* Hero text content */}
      <div className="relative z-10 max-w-2xl">
        <p className="text-lavender font-body mb-2">Hi, I'm Arpita.</p>
        <h1 className="font-display text-6xl md:text-7xl font-bold text-off-white mb-4">
          Arpita Sen
        </h1>
        <div className="font-display text-2xl md:text-3xl text-lavender h-10 mb-6">
          {typedText}
          <span className="animate-pulse">|</span>
        </div>
        <p className="text-off-white/70 text-lg mb-8 max-w-md">
          I build things at the intersection of technology and curiosity.
        </p>
        <div className="flex gap-4 flex-wrap">
  <a href="#about"><GlowButton variant="primary">Explore My Universe →</GlowButton></a>
  <a href="#projects"><GlowButton variant="secondary">View My Projects</GlowButton></a>
</div>
      </div>
    </section>
  )
}

export default Hero