function Navbar() {
  const links = ["Home", "About", "Projects", "Journey", "Contact"]

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl">
      <div className="flex items-center justify-between bg-deep-navy/50 backdrop-blur-md border border-lavender/20 rounded-full px-6 py-3">
        <span className="font-display text-lavender font-semibold">ARPITA</span>
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a key={link} href={"#" + link.toLowerCase()} className="text-off-white/80 hover:text-lavender transition-colors text-sm">
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar