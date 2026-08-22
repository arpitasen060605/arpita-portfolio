function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`
        bg-deep-navy/40 backdrop-blur-md
        border border-lavender/20
        rounded-2xl p-6
        transition-all duration-300
        hover:border-lavender/40 hover:-translate-y-1.5
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default GlassCard