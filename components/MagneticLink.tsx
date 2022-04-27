import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import useCursor from '/hooks/useCursor'

export default function MagneticLink(props: JSX.IntrinsicElements['a']) {
  const { cursor } = useCursor()
  const ref = useRef<HTMLAnchorElement>(null)
  const dataRef = useRef({
    center: { x: 0, y: 0 },
    pos: { x: 0, y: 0 },
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

  function enter() {
    getRect()

    if (cursor) {
      const el = ref.current!

      cursor.setCustomPos(dataRef.current.pos)
      gsap.set(cursor.dot, {
        width: el.offsetWidth,
        height: el.offsetHeight,
        borderRadius: 4,
      })
    }
  }

  function move(ev: React.MouseEvent<HTMLAnchorElement>) {
    const interpolation = 0.3
    const { setX, setY, center, pos } = dataRef.current

    const px = (ev.clientX - center.x) * interpolation
    const py = (ev.clientY - center.y) * interpolation

    pos.x = center.x + px * 1.3
    pos.y = center.y + py * 1.3

    setX(px)
    setY(py)
  }

  function leave() {
    const { setX, setY } = dataRef.current

    setX(0)
    setY(0)

    if (cursor) {
      cursor.removeCustomPos()
      gsap.set(cursor.dot, { clearProps: 'height,width,borderRadius' })
    }
  }

  return <a {...props} onMouseLeave={leave} onMouseEnter={enter} onMouseMove={move} ref={ref} />
}
