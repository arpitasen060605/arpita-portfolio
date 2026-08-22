import useScrollProgress from '../hooks/useScrollProgress'

const phases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"]

function MoonIndicator() {
  const progress = useScrollProgress()
  const phaseIndex = Math.min(
    phases.length - 1,
    Math.floor(progress * phases.length)
  )

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
      <div className="text-4xl transition-all duration-500">
        {phases[phaseIndex]}
      </div>
      <span className="text-xs text-muted font-body">
        {Math.round(progress * 100)}%
      </span>
    </div>
  )
}

export default MoonIndicator