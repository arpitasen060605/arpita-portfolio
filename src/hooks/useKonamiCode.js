import { useEffect, useState } from 'react'

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]

function useKonamiCode() {
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    let progress = 0

    function handleKey(e) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      if (key === KONAMI[progress]) {
        progress++
        if (progress === KONAMI.length) {
          setActivated(true)
          progress = 0
          setTimeout(() => setActivated(false), 4000)
        }
      } else {
        progress = key === KONAMI[0] ? 1 : 0
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return activated
}

export default useKonamiCode