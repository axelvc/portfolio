import dynamic from 'next/dynamic'

const icons = {
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
}

export default function Icon({ name, size = 'md', className = '' }: Props) {
  const Icon = icons[name]

  return (
    <i className={`inline-grid place-items-center ${sizes[size]} ${className}`}>
      <Icon />
    </i>
  )
}
