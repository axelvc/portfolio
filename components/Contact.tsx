import Section from '/components/Section'
import Icon, { Props as IconProps } from '/components/Icon/Icon'

const contactList: { name: string; url: string; icon: IconProps['name'] }[] = [
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
    name: 'Email me',
    icon: 'email',
    url: 'mailto:a.axelvc@gmail.com',
  },
]

export default function Contact({ className }: { className?: string }) {
  return (
    <Section title="contact" className={className}>
      <ul className="grid gap-6">
        {contactList.map(({ name, url, icon }) => (
          <li key={name}>
            <a href={url} className="relative group inline-flex gap-3.5 items-center h-10">
              <Icon name={icon} />
              {name}
              <Icon name="external" size="sm" />
              <span className="absolute bottom-1 inset-x-0 h-0.5 bg-current transition-transform origin-left duration-300 ease-out scale-x-0 group-hover:scale-x-100" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
