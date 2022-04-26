import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function MagneticLink(props: JSX.IntrinsicElements['a']) {
  const ref = useRef<HTMLAnchorElement>(null)
  const dataRef = useRef({
    center: { x: 0, y: 0 },
    setX(x: number) {},
    setY(y: number) {},
  })

  function getRect() {
    const rect = ref.current!.getBoundingClientRect()
    const { center } = dataRef.current

    center.x = rect.x + rect.width / 2
    center.y = rect.y + rect.height / 2
  }

  useEffect(() => {
    const el = ref.current!
    const data = dataRef.current
    data.setX = gsap.quickTo(el, 'x', { duration: 0.2 }) as () => {}
    data.setY = gsap.quickTo(el, 'y', { duration: 0.2 }) as () => {}

    document.addEventListener('scroll', getRect, { passive: true })
    document.addEventListener('resize', getRect)

    return () => {
      document.removeEventListener('scroll', getRect)
      document.removeEventListener('resize', getRect)
      gsap.killTweensOf(el)
    }
  }, [])

  function move(ev: React.MouseEvent<HTMLAnchorElement>) {
    const interpolation = 0.3
    const { setX, setY, center } = dataRef.current

    setX((ev.clientX - center.x) * interpolation)
    setY((ev.clientY - center.y) * interpolation)
  }

  function leave() {
    const { setX, setY } = dataRef.current

    setX(0)
    setY(0)
  }

  return <a {...props} onMouseLeave={leave} onMouseEnter={getRect} onMouseMove={move} ref={ref} />
}
