import Icon, { Props as IconProps } from './Icon/Icon'

const networks: { name: string; url: string; icon: IconProps['name'] }[] = [
  { name: 'linkedin', url: '#linkedin', icon: 'linkedin' },
  { name: 'twitter', url: '#twitter', icon: 'twitter' },
  { name: 'github', url: '#github', icon: 'github' },
]

export default function FastLinks({ className }: { className?: string }) {
  return (
    <ul className={`flex ${className}`}>
      {networks.map(({ name, url, icon }) => (
        <li key={name}>
          <a href={url} className="inline-grid place-items-center h-10 w-10">
            <Icon name={icon} />
          </a>
        </li>
      ))}

      <li className="ml-auto">
        <a
          href="#cv"
          className="inline-block text-green-600 font-medium leading-10 underline underline-offset-2 decoration-2"
        >
          Download CV
        </a>
      </li>
    </ul>
  )
}
