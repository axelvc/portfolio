import gsap from 'gsap'

interface MagneticData {
  pos: { x: number; y: number }
  center: { x: number; y: number }
  setX: Function
  setY: Function
}

interface Params {
  root: HTMLElement
  dot: HTMLElement
  text: HTMLElement
}

export default function customCursor({ root, dot, text }: Params) {
  const setX = gsap.quickSetter(root, 'x', 'px')
  const setY = gsap.quickSetter(root, 'y', 'px')
  const speed = 0.2
  const mouse = { x: 0, y: 0 }
  const pos = { x: 0, y: 0 }
  let magnetic: { current: MagneticData | null } = { current: null }

  function render() {
    if (magnetic.current) {
      const interpolation = 0.3
      const m = magnetic.current

      const px = (mouse.x - m.center.x) * interpolation
      const py = (mouse.y - m.center.y) * interpolation

      m.pos.x += (px - m.pos.x) * speed
      m.pos.y += (py - m.pos.y) * speed

      m.setX(m.pos.x)
      m.setY(m.pos.y)

      const posX = m.center.x + px * 1.3
      const posY = m.center.y + py * 1.3

      pos.x += (posX - pos.x) * speed
      pos.y += (posY - pos.y) * speed
    } else {
      pos.x += (mouse.x - pos.x) * speed
      pos.y += (mouse.y - pos.y) * speed
    }

    setX(pos.x)
    setY(pos.y)
  }

  const startRender = (() => gsap.ticker.add(render)) as () => void
  const stopRender = () => gsap.ticker.remove(render)
  const showHideTween = gsap.fromTo(
    root,
    { scale: 0 },
    {
      scale: 1,
      paused: true,
      duration: 0.3,
      onStart: startRender,
      onReverseComplete: stopRender,
    },
  )

  function showCursor(ev: MouseEvent) {
    pos.x = ev.x
    pos.y = ev.y
    showHideTween.play()
  }

  function hideCursor() {
    showHideTween.reverse()
  }

  function mouseMove(ev: MouseEvent) {
    mouse.x = ev.x
    mouse.y = ev.y
  }

  function getData(el: HTMLElement) {
    const prefix = 'data-cursor'

    return {
      text: el.getAttribute(`${prefix}-text`),
      rootClass: el.getAttribute(`${prefix}-root-class`),
      class: el.getAttribute(`${prefix}-class`),
      style: el.getAttribute(`${prefix}-style`),
      magnetic: el.hasAttribute(`${prefix}-magnetic`),
    }
  }

  function mouseOver(ev: MouseEvent) {
    const related = ev.relatedTarget as HTMLElement

    for (let el = ev.target as HTMLElement; el && el.parentElement; el = el.parentElement) {
      if (related && el.contains(related)) break

      const data = getData(el)

      if (data.class) {
        dot.classList.add(...data.class.split(' '))
      }
      if (data.rootClass) {
        root.classList.add(...data.rootClass.split(' '))
      }
      if (data.style) {
        gsap.set(dot, JSON.parse(data.style))
      }
      if (data.text) {
        text.textContent = data.text
        dot.classList.add('scale-[3]')
        text.classList.add('opacity-100', 'scale-100')
      }
      if (data.magnetic) {
        const rect = el.getBoundingClientRect()

        magnetic.current = {
          pos: { x: 0, y: 0 },
          center: {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
          },
          setX: gsap.quickSetter(el, 'x', 'px'),
          setY: gsap.quickSetter(el, 'y', 'px'),
        }
      }
    }
  }

  function mouseOut(ev: MouseEvent) {
    const related = ev.relatedTarget as HTMLElement

    for (let el = ev.target as HTMLElement; el && el.parentElement; el = el.parentElement) {
      if (related && el.contains(related)) break

      const data = getData(el)

      if (data.class) {
        dot.classList.remove(...data.class.split(' '))
      }
      if (data.rootClass) {
        root.classList.remove(...data.rootClass.split(' '))
      }
      if (data.style) {
        gsap.set(dot, { clearProps: Object.keys(JSON.parse(data.style)).join() })
      }
      if (data.text) {
        dot.classList.remove('scale-[3]')
        text.classList.remove('opacity-100', 'scale-100')
      }
      if (data.magnetic) {
        gsap.to(el, { x: 0, y: 0, duration: 0.2 })
        magnetic.current = null
      }
    }
  }

  document.addEventListener('mousemove', showCursor, { once: true })
  document.addEventListener('mouseenter', showCursor)
  document.addEventListener('mouseleave', hideCursor)
  document.addEventListener('mousemove', mouseMove)
  document.addEventListener('mouseover', mouseOver)
  document.addEventListener('mouseout', mouseOut)

  return () => {
    document.removeEventListener('mousemove', showCursor)
    document.removeEventListener('mouseenter', showCursor)
    document.removeEventListener('mouseleave', hideCursor)
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseover', mouseOver)
    document.removeEventListener('mouseout', mouseOut)
    showHideTween.kill()
    stopRender()
  }
}
