import { useEffect, useRef, useState } from 'react'

function CursorGlow() {
  const dotRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    function handleMove(e) {
      pos.current = { x: e.clientX, y: e.clientY }

      const target = e.target
      const isInteractive = target.closest('a, button, [role="button"], .cursor-pointer')
      setIsHovering(!!isInteractive)
    }
    window.addEventListener('mousemove', handleMove)

    let raf
    function animate() {
      current.current.x += (pos.current.x - current.current.x) * 0.15
      current.current.y += (pos.current.y - current.current.y) * 0.15
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
  ref={dotRef}
  className="fixed top-0 left-0 rounded-full bg-lavender pointer-events-none z-[200] hidden md:block transition-[width,height,margin,opacity] duration-200"
  style={{
  transform: 'translate(-50%, -50%)',
  width: isHovering ? 38 : 22,
  height: isHovering ? 38 : 22,
  marginLeft: isHovering ? -19 : -11,
  marginTop: isHovering ? -19 : -11,
  opacity: isHovering ? 0.75 : 0.55,
  boxShadow: isHovering
    ? '0 0 22px 6px rgba(157,124,255,0.45)'
    : '0 0 12px 4px rgba(157,124,255,0.3)',
}}
/>
  )
}

export default CursorGlow