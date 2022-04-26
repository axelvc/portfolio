import data from '/public/data.json'
import Icon, { Props as IconProps } from '/components/Icon/Icon'
import MagneticLink from '/components/MagneticLink'

const networksList: { name: string; url: string; icon: IconProps['name'] }[] = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: data.networks.linkedin,
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    url: data.networks.twitter,
  },
  {
    name: 'Github',
    icon: 'github',
    url: data.networks.github,
  },
]

export default function FastLinks({ className }: { className?: string }) {
  return (
    <ul className={`flex ${className}`}>
      {networksList.map(({ name, url, icon }, i) => (
        <li key={name}>
          <MagneticLink
            href={url}
            title={name}
            className="inline-grid place-items-center h-10 w-10 rounded transition-colors hover:bg-green-200 hover:text-green-600"
          >
            <Icon name={icon} />
          </MagneticLink>
        </li>
      ))}

      <li className="ml-auto">
        <MagneticLink
          href="/cv.pdf"
          download="Axel's_CV"
          className="relative group inline-block text-green-600 font-medium leading-10"
        >
          Get my CV
          <span className="absolute bottom-1 inset-x-0 bg-current transition-transform origin-bottom duration-300 ease-out h-0.5 group-hover:scale-y-[2]" />
        </MagneticLink>
      </li>
    </ul>
  )
}
