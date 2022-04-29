import Section from '/components/Section'
import Icon from '/components/Icon/Icon'
import MagneticLink from '/components/MagneticLink'

interface Props {
  data: PageData
  className?: string
}

export default function Contact({ data, className }: Props) {
  const contactList = [data.networks.linkedin, data.networks.twitter, data.networks.email]

  return (
    <Section title={data.contact.title} className={className}>
      <ul className="grid gap-6">
        {contactList.map(({ name, link, icon }) => (
          <li key={name}>
            <MagneticLink
              href={link}
              className="relative group inline-flex gap-3.5 items-center h-10 transition-colors hover:text-green-600 dark:hover:text-rose-300"
            >
              <Icon name={icon} />
              {name}
              <Icon name="external" size="sm" />
            </MagneticLink>
          </li>
        ))}
      </ul>
    </Section>
  )
}
