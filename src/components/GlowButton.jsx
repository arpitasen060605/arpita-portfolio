function GlowButton({ children, onClick, variant = "primary" }) {
  const base = "px-6 py-3 rounded-full font-medium transition-all duration-300"
  const variants = {
    primary: "bg-lavender text-midnight hover:shadow-[0_0_20px_theme(colors.lavender)] hover:scale-105",
    secondary: "border border-lavender/40 text-off-white hover:border-lavender hover:bg-lavender/10"
  }

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  )
}

export default GlowButton