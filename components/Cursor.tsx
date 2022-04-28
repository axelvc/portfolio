import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import useCursor from '/hooks/useCursor'

export default function Cursor() {
  const rootRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const { setCursor } = useCursor()

  useEffect(() => {
    if (window.matchMedia('(any-hover: none)').matches) return

    const root = rootRef.current!
    const setX = gsap.quickSetter(root, 'x', 'px')
    const setY = gsap.quickSetter(root, 'y', 'px')
    const mouse = { x: 0, y: 0 }
    const pos = { x: 0, y: 0 }
    const speed = 0.2
    let customPos: typeof pos | null = null

    function render() {
      if (customPos) {
        pos.x += (customPos.x - pos.x) * speed
        pos.y += (customPos.y - pos.y) * speed
      } else {
        pos.x += (mouse.x - pos.x) * speed
        pos.y += (mouse.y - pos.y) * speed
      }

      setX(pos.x)
      setY(pos.y)
    }

    const initRender = () => gsap.ticker.add(render)
    const stopRender = () => gsap.ticker.remove(render)

    const enterLeaveTween = gsap.fromTo(
      root,
      { scale: 0 },
      {
        scale: 1,
        paused: true,
        duration: 0.3,
        onStart: initRender as () => void,
        onReverseComplete: stopRender,
      },
    )

    function updateMouse(ev: MouseEvent) {
      mouse.x = ev.x
      mouse.y = ev.y
    }

    function showCursor(ev: MouseEvent) {
      pos.x = ev.x
      pos.y = ev.y
      enterLeaveTween.play()
    }

    function hideCursor() {
      enterLeaveTween.reverse()
    }

    document.addEventListener('mousemove', updateMouse)
    document.addEventListener('mouseleave', hideCursor)
    document.addEventListener('mouseenter', showCursor)
    document.addEventListener('mousemove', showCursor, { once: true })

    setCursor({
      root,
      dot: dotRef.current!,
      text: textRef.current!,
      setCustomPos(pos) {
        customPos = pos
      },
      removeCustomPos() {
        customPos = null
      },
    })

    return () => {
      document.removeEventListener('mousemove', updateMouse)
      document.removeEventListener('mouseleave', hideCursor)
      document.removeEventListener('mouseenter', showCursor)
      document.removeEventListener('mousemove', showCursor)
      enterLeaveTween.kill()
      stopRender()
      setCursor(null)
    }
  }, [setCursor])

  return (
    <div ref={rootRef} className="fixed top-0 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 scale-0">
      <div
        ref={dotRef}
        className="w-[24px] h-[24px] rounded-[24px] bg-green-600 dark:bg-rose-200 opacity-30 transition-all duration-300"
      />
      <div
        ref={textRef}
        className="absolute top-1/2 left-1/2 grid place-items-center w-16 h-16 text-gray-50 dark:text-brown-800 font-medium capitalize -translate-x-1/2 -translate-y-1/2 opacity-0 scale-0 transition-all duration-300"
      />
    </div>
  )
}
