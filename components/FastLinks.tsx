import Icon from '/components/Icon/Icon'
import MagneticLink from '/components/MagneticLink'

interface Props {
  data: PageData
  className?: string
}

export default function FastLinks({ data, className }: Props) {
  const networksList = [data.networks.linkedin, data.networks.twitter, data.networks.github]

  return (
    <ul className={`flex ${className}`}>
      {networksList.map(({ name, link, icon }) => (
        <li key={name}>
          <MagneticLink
            href={link}
            title={name}
            target="_blank"
            className="inline-grid place-items-center h-10 w-10 rounded transition-colors hover:text-green-600 dark:hover:text-rose-300"
          >
            <Icon name={icon} />
          </MagneticLink>
        </li>
      ))}

      <li className="ml-auto">
        <MagneticLink
          href={data.cv.link}
          download={data.cv.saveName}
          target="_blank"
          className="relative group inline-block text-green-600 dark:text-rose-200 dark:hover:text-rose-300 font-medium leading-10"
        >
          {data.cv.title}
          <span className="absolute bottom-1 inset-x-0 bg-current transition-transform origin-bottom duration-300 ease-out h-0.5 group-hover:scale-y-[2]" />
        </MagneticLink>
      </li>
    </ul>
  )
}
