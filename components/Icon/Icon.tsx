import dynamic from 'next/dynamic'
import { useRef } from 'react'

const icons = {
  code: dynamic(() => import('./code.svg')),
  email: dynamic(() => import('./email.svg')),
  external: dynamic(() => import('./external.svg')),
  github: dynamic(() => import('./github.svg')),
  linkedin: dynamic(() => import('./linkedin.svg')),
  twitter: dynamic(() => import('./twitter.svg')),
  lang: dynamic(() => import('./lang.svg')),
}

const sizes = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
}

export type IconName = keyof typeof icons

interface Props {
  name: IconName
  size?: keyof typeof sizes
  className?: string
}

export default function Icon({ name, size = 'md', className = '' }: Props) {
  const ref = useRef<HTMLElement>(null)
  const Icon = icons[name]

  return (
    <i ref={ref} className={`inline-grid place-items-center ${sizes[size]} ${className}`}>
      <Icon />
    </i>
  )
}
