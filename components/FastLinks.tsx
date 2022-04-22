import Icon, { Props as IconProps } from '/components/Icon/Icon'

const networks: { name: string; url: string; icon: IconProps['name'] }[] = [
  {
    name: 'Linkedin',
    icon: 'linkedin',
    url: 'http://linkedin.com/in/axelvc',
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    url: 'https://twitter.com/axel__vc',
  },
  {
    name: 'Github',
    icon: 'github',
    url: 'https://github.com/axelvc',
  },
]

export default function FastLinks({ className }: { className?: string }) {
  return (
    <ul className={`flex ${className}`}>
      {networks.map(({ name, url, icon }, i) => (
        <li key={name}>
          <a
            href={url}
            title={name}
            className="inline-grid place-items-center h-10 w-10 rounded transition animate-fadeIn hover:bg-green-200 hover:text-green-600"
            style={{ animationDelay: `${1 * i}s` }}
          >
            <Icon name={icon} />
          </a>
        </li>
      ))}

      <li className="ml-auto">
        <a
          href="/cv.pdf"
          download="Axel's_CV"
          className="relative group inline-block text-green-600 font-medium leading-10"
        >
          Get my CV
          <span className="absolute bottom-1 inset-x-0 bg-current transition-transform origin-bottom duration-300 ease-out h-0.5 group-hover:scale-y-[2]" />
        </a>
      </li>
    </ul>
  )
}
