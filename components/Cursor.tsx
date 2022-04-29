import { useEffect, useRef } from 'react'

export default function Cursor() {
  const rootRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hasMouse = window.matchMedia('(any-hover: hover)')
    let destroyCursor = () => {}
    let load = true

    async function checkMouse() {
      if (!hasMouse.matches) {
        return destroyCursor()
        // return destroyCursor.current()
      }

      const { default: customCursor } = await import('/lib/customCursor')

      if (!load) return

      destroyCursor = customCursor({
        root: rootRef.current!,
        dot: dotRef.current!,
        text: textRef.current!,
      })
    }

    hasMouse.addEventListener('change', checkMouse)
    checkMouse()

    return () => {
      hasMouse.removeEventListener('change', checkMouse)
      destroyCursor()
      load = false
    }
  }, [])

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
