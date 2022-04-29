import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const icons = {
  code: dynamic(() => import('./code.svg')),
  email: dynamic(() => import('./email.svg')),
  external: dynamic(() => import('./external.svg')),
  github: dynamic(() => import('./github.svg')),
  linkedin: dynamic(() => import('./linkedin.svg')),
  twitter: dynamic(() => import('./twitter.svg')),
}

const sizes = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
}

export interface Props {
  name: keyof typeof icons
  size?: keyof typeof sizes
  className?: string
  lazy?: boolean
}

export default function Icon({ name, size = 'md', className = '', lazy = true }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [Icon, setIcon] = useState<any>(lazy ? null : icons[name])

  useEffect(() => {
    if (!lazy && Icon === icons[name]) return

    const observer = new IntersectionObserver(([data]) => {
      if (data.isIntersecting) {
        setIcon(icons[name])
        observer.disconnect()
      }
    })

    observer.observe(ref.current!)

    return () => observer.disconnect()
  }, [lazy, name, Icon])

  return (
    <i ref={ref} className={`inline-grid place-items-center ${sizes[size]} ${className}`}>
      {Icon && <Icon />}
    </i>
  )
}
