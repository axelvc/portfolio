import data from '/public/data.json'
import Section from '/components/Section'
import Icon, { Props as IconProps } from '/components/Icon/Icon'
import MagneticLink from '/components/MagneticLink'

const contactList: { name: string; url: string; icon: IconProps['name'] }[] = [
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
    name: 'Email me',
    icon: 'email',
    url: `mailto:${data.networks.email}`,
  },
]

export default function Contact({ className }: { className?: string }) {
  return (
    <Section title="contact" className={className}>
      <ul className="grid gap-6">
        {contactList.map(({ name, url, icon }) => (
          <li key={name}>
            <MagneticLink
              href={url}
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
