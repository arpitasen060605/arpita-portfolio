import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ["Home", "About", "Projects", "Journey", "Contact"]

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl">
      <div className="flex items-center justify-between bg-deep-navy/50 backdrop-blur-md border border-lavender/20 rounded-full px-6 py-3">
        <span className="font-display text-lavender font-semibold">ARPITA</span>

        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a key={link} href={"#" + link.toLowerCase()} className="text-off-white/80 hover:text-lavender transition-colors text-sm">{link}</a>
          ))}
        </div>

        <button className="md:hidden text-off-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 bg-deep-navy/90 backdrop-blur-md border border-lavender/20 rounded-2xl px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link} href={"#" + link.toLowerCase()} onClick={() => setOpen(false)} className="text-off-white/80 hover:text-lavender transition-colors text-sm">{link}</a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar