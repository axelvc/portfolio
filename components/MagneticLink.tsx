import { useEffect, useRef } from 'react'

export default function MagneticLink(props: JSX.IntrinsicElements['a']) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const el = ref.current!
    const styles = {
      width: el.offsetWidth,
      height: el.offsetHeight,
      borderRadius: 4,
    }

    el.setAttribute('data-cursor-style', JSON.stringify(styles))
  }, [])

  return <a {...props} ref={ref} data-cursor-magnetic />
}
