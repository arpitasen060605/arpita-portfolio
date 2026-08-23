import { useState } from 'react'
import useScrollProgress from '../hooks/useScrollProgress'

const phases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"]

function MoonIndicator() {
  const progress = useScrollProgress()
  const [clicks, setClicks] = useState(0)
  const [showSecret, setShowSecret] = useState(false)
  const phaseIndex = Math.min(phases.length - 1, Math.floor(progress * phases.length))

  function handleClick() {
    const next = clicks + 1
    setClicks(next)
    if (next === 7) {
      setShowSecret(true)
      setTimeout(() => {
        setShowSecret(false)
        setClicks(0)
      }, 3000)
    }
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
      <div
        className="text-4xl transition-all duration-500 cursor-pointer select-none"
        onClick={handleClick}
      >
        {showSecret ? "🌕" : phases[phaseIndex]}
      </div>
      <span className="text-xs text-muted font-body">
        {Math.round(progress * 100)}%
      </span>

      {showSecret && (
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 w-48 bg-deep-navy border border-lavender/30 rounded-xl p-3 whitespace-nowrap">
          <p className="text-off-white text-xs">You weren't supposed to find this. 👀</p>
        </div>
      )}
    </div>
  )
}

export default MoonIndicator