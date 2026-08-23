import { Mail } from 'lucide-react'

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

const links = [
  { icon: Mail, label: "Email", value: "senarpita06062005@gmail.com", href: "mailto:senarpita06062005@gmail.com" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "arpita-sen", href: "https://www.linkedin.com/in/arpita-sen-00065a32b/" },
  { icon: GithubIcon, label: "GitHub", value: "arpitasen060605", href: "https://github.com/arpitasen060605" },
]

function Contact() {
  return (
    <section id="contact" className="relative min-h-[80vh] flex items-center py-24 px-6 md:px-16">
      <div className="absolute inset-0 bg-gradient-to-t from-lavender/10 to-transparent pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center w-full">
        <h2 className="font-display text-4xl md:text-5xl text-off-white mb-4">Let's build something together.</h2>
        <p className="text-off-white/60 mb-12 max-w-lg mx-auto">I'm always open to interesting projects, collaborations, and opportunities.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {links.map((link) => {
            const Icon = link.icon
            const isEmail = link.label === "Email"
            return (
              <a key={link.label} href={link.href} target={isEmail ? undefined : "_blank"} rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-lavender/30 text-off-white/90 hover:border-lavender hover:bg-lavender/10 transition-all">
                <Icon size={18} />
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact