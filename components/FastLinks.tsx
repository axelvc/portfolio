import Icon, { Props as IconProps } from './Icon/Icon'

const networks: { name: string; url: string; icon: IconProps['name'] }[] = [
  { name: 'linkedin', url: '#linkedin', icon: 'linkedin' },
  { name: 'twitter', url: '#twitter', icon: 'twitter' },
  { name: 'github', url: '#github', icon: 'github' },
]

export default function FastLinks({ className }: { className?: string }) {
  return (
    <ul className={`flex ${className}`}>
      {networks.map(({ name, url, icon }, i) => (
        <li key={name}>
          <a
            href={url}
            className="inline-grid place-items-center h-10 w-10 rounded transition animate-fadeIn hover:bg-green-200 hover:text-green-600"
            style={{ animationDelay: `${1 * i}s` }}
          >
            <Icon name={icon} />
          </a>
        </li>
      ))}

      <li className="ml-auto">
        <a href="#cv" className="relative group inline-block text-green-600 font-medium leading-10">
          Download CV
          <span className="absolute bottom-1 inset-x-0 bg-current transition-transform origin-bottom duration-300 ease-out h-0.5 group-hover:scale-y-[2]" />
        </a>
      </li>
    </ul>
  )
}
